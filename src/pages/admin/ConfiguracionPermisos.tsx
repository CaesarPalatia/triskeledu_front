import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Save, User, Users as UsersIcon, Edit2 } from 'lucide-react';
import { getUsers, updateUser } from '../../services/users';
import { User } from '../../types/auth';

const allPermisos = [
  { id: 'gestionar_usuarios', nombre: 'Gestionar Usuarios', categoria: 'Administración' },
  { id: 'configurar_permisos', nombre: 'Configurar Permisos', categoria: 'Administración' },
  { id: 'monitorizar_sistema', nombre: 'Monitorizar Sistema', categoria: 'Administración' },
  { id: 'respaldar_datos', nombre: 'Respaldar Datos', categoria: 'Administración' },
  { id: 'gestionar_cursos', nombre: 'Gestionar Cursos', categoria: 'Gestión' },
  { id: 'generar_reportes', nombre: 'Generar Reportes', categoria: 'Gestión' },
  { id: 'gestionar_instructores', nombre: 'Gestionar Instructores', categoria: 'Gestión' },
  { id: 'evaluar_contenido', nombre: 'Evaluar Contenido', categoria: 'Gestión' },
  { id: 'crear_contenido', nombre: 'Crear Contenido', categoria: 'Instrucción' },
  { id: 'gestionar_evaluaciones', nombre: 'Gestionar Evaluaciones', categoria: 'Instrucción' },
  { id: 'interactuar_estudiantes', nombre: 'Interactuar con Estudiantes', categoria: 'Instrucción' },
  { id: 'monitorear_progreso', nombre: 'Monitorear Progreso', categoria: 'Instrucción' },
  { id: 'gestionar_incidencias', nombre: 'Gestionar Incidencias', categoria: 'Soporte' },
  { id: 'optimizar_recursos', nombre: 'Optimizar Recursos', categoria: 'Soporte' },
  { id: 'actualizar_estado_incidencias', nombre: 'Actualizar Estado Incidencias', categoria: 'Soporte' },
  { id: 'gestionar_proveedores', nombre: 'Gestionar Proveedores', categoria: 'Soporte' },
  { id: 'crear_cuenta', nombre: 'Crear Cuenta', categoria: 'Cliente' },
  { id: 'iniciar_sesion', nombre: 'Iniciar Sesión', categoria: 'Cliente' },
  { id: 'buscar_cursos', nombre: 'Buscar Cursos', categoria: 'Cliente' },
  { id: 'inscribirse', nombre: 'Inscribirse en Cursos', categoria: 'Cliente' },
  { id: 'consultar_progreso', nombre: 'Consultar Progreso', categoria: 'Cliente' },
  { id: 'gestionar_perfil', nombre: 'Gestionar Perfil', categoria: 'Cliente' },
  { id: 'solicitar_soporte', nombre: 'Solicitar Soporte', categoria: 'Cliente' },
  { id: 'dejar_reseñas', nombre: 'Dejar Reseñas', categoria: 'Cliente' }
];

const roles = [
  'Administrador',
  'Gerente de Cursos',
  'Instructor',
  'Soporte Técnico',
  'Cliente'
];

const categorias = ['Administración', 'Gestión', 'Instrucción', 'Soporte', 'Cliente'];

export function ConfiguracionPermisos() {
  const [viewMode, setViewMode] = useState<'roles' | 'usuarios'>('roles');
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [editingPermissions, setEditingPermissions] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const loadedUsers = await getUsers();
      setUsers(loadedUsers);
      setError(null);
    } catch (err) {
      setError('Error al cargar los usuarios');
      console.error('Error loading users:', err);
    }
  };

  const getPermisosForRole = (role: string) => {
    const usersWithRole = users.filter(u => u.rol === role);
    if (usersWithRole.length === 0) return [];
    
    // Get common permissions across all users with this role
    const allPermissions = usersWithRole.map(u => u.permisos);
    return allPermissions.reduce((common, current) => 
      common.filter(permission => current.includes(permission))
    );
  };

  const startEditing = () => {
    if (viewMode === 'roles') {
      setEditingPermissions(getPermisosForRole(selectedRole));
    } else if (selectedUser) {
      setEditingPermissions([...selectedUser.permisos]);
    }
    setIsEditing(true);
    setError(null);
    setSuccess(null);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditingPermissions([]);
  };

  const togglePermission = (permisoId: string) => {
    if (!isEditing) return;
    
    setEditingPermissions(prev => 
      prev.includes(permisoId)
        ? prev.filter(p => p !== permisoId)
        : [...prev, permisoId]
    );
  };

  const savePermissions = async () => {
    try {
      if (viewMode === 'roles') {
        // Update all users with the selected role
        const usersWithRole = users.filter(u => u.rol === selectedRole);
        for (const user of usersWithRole) {
          await updateUser(user.id, { permisos: editingPermissions });
        }
        setSuccess(`Permisos actualizados para todos los usuarios con rol ${selectedRole}`);
      } else if (selectedUser) {
        // Update specific user
        await updateUser(selectedUser.id, { permisos: editingPermissions });
        setSuccess(`Permisos actualizados para ${selectedUser.nombre}`);
      }
      
      await loadUsers();
      setIsEditing(false);
      setEditingPermissions([]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar los permisos');
      console.error('Error saving permissions:', err);
    }
  };

  const currentPermisos = isEditing 
    ? editingPermissions 
    : viewMode === 'roles' 
      ? getPermisosForRole(selectedRole)
      : selectedUser?.permisos || [];

  const groupedPermisos = categorias.map(categoria => ({
    categoria,
    permisos: allPermisos.filter(p => p.categoria === categoria)
  }));

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Shield className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Configuración de Permisos</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'roles'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setViewMode('roles');
                setIsEditing(false);
                setEditingPermissions([]);
              }}
            >
              <UsersIcon className="w-4 h-4 mr-2 inline" />
              Por Roles
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'usuarios'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => {
                setViewMode('usuarios');
                setIsEditing(false);
                setEditingPermissions([]);
              }}
            >
              <User className="w-4 h-4 mr-2 inline" />
              Por Usuarios
            </button>
          </div>
          
          {!isEditing ? (
            <button
              onClick={startEditing}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              disabled={viewMode === 'usuarios' && !selectedUser}
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Editar Permisos
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={cancelEditing}
                className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </button>
              <button
                onClick={savePermissions}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </button>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative">
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Selector */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {viewMode === 'roles' ? 'Seleccionar Rol' : 'Seleccionar Usuario'}
          </h2>
          
          {viewMode === 'roles' ? (
            <div className="space-y-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role);
                    setIsEditing(false);
                    setEditingPermissions([]);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedRole === role
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center">
                    <UsersIcon className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-medium">{role}</div>
                      <div className="text-sm text-gray-500">
                        {users.filter(u => u.rol === role).length} usuarios
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {users.map((user) => (
                <button
                  key={user.id}
                  onClick={() => {
                    setSelectedUser(user);
                    setIsEditing(false);
                    setEditingPermissions([]);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedUser?.id === user.id
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-indigo-600">
                        {user.nombre.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{user.nombre}</div>
                      <div className="text-sm text-gray-500">{user.rol}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Permissions Grid */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Permisos {viewMode === 'roles' ? `para ${selectedRole}` : selectedUser ? `para ${selectedUser.nombre}` : ''}
            </h2>
            {isEditing && (
              <div className="text-sm text-gray-500">
                Modo de edición activo - Haz clic en los permisos para modificarlos
              </div>
            )}
          </div>

          {viewMode === 'usuarios' && !selectedUser ? (
            <div className="text-center text-gray-500 py-12">
              Selecciona un usuario para ver sus permisos
            </div>
          ) : (
            <div className="space-y-8">
              {groupedPermisos.map(({ categoria, permisos }) => (
                <div key={categoria}>
                  <h3 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {categoria}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {permisos.map((permiso) => {
                      const hasPermission = currentPermisos.includes(permiso.id);
                      return (
                        <div
                          key={permiso.id}
                          className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                            isEditing
                              ? 'cursor-pointer hover:shadow-md'
                              : 'cursor-default'
                          } ${
                            hasPermission
                              ? 'bg-green-50 border-green-200'
                              : 'bg-gray-50 border-gray-200'
                          }`}
                          onClick={() => isEditing && togglePermission(permiso.id)}
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{permiso.nombre}</div>
                            <div className="text-sm text-gray-500">ID: {permiso.id}</div>
                          </div>
                          <div className="ml-4">
                            {hasPermission ? (
                              <div className="flex items-center text-green-600">
                                <Check className="w-5 h-5" />
                                <span className="ml-1 text-sm font-medium">Habilitado</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-red-600">
                                <X className="w-5 h-5" />
                                <span className="ml-1 text-sm font-medium">Deshabilitado</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}