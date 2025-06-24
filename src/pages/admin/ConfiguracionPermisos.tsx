import React, { useState, useEffect } from 'react';
import { Shield, Check, X } from 'lucide-react';
import { getUsers } from '../../services/users';
import { User } from '../../types/auth';

const allPermisos = [
  { id: 'gestionar_usuarios', nombre: 'Gestionar Usuarios' },
  { id: 'configurar_permisos', nombre: 'Configurar Permisos' },
  { id: 'monitorizar_sistema', nombre: 'Monitorizar Sistema' },
  { id: 'respaldar_datos', nombre: 'Respaldar Datos' },
  { id: 'gestionar_cursos', nombre: 'Gestionar Cursos' },
  { id: 'generar_reportes', nombre: 'Generar Reportes' },
  { id: 'gestionar_instructores', nombre: 'Gestionar Instructores' },
  { id: 'evaluar_contenido', nombre: 'Evaluar Contenido' },
  { id: 'crear_contenido', nombre: 'Crear Contenido' },
  { id: 'gestionar_evaluaciones', nombre: 'Gestionar Evaluaciones' },
  { id: 'interactuar_estudiantes', nombre: 'Interactuar con Estudiantes' },
  { id: 'monitorear_progreso', nombre: 'Monitorear Progreso' }
];

const roles = [
  'Administrador',
  'Gerente de Cursos',
  'Instructor',
  'Soporte Técnico',
  'Cliente'
];

export function ConfiguracionPermisos() {
  const [selectedRole, setSelectedRole] = React.useState(roles[0]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

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
    const user = users.find(u => u.rol === role);
    return user ? user.permisos : [];
  };

  const currentPermisos = getPermisosForRole(selectedRole);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <Shield className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Configuración de Permisos</h1>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seleccionar Rol
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Permiso
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {allPermisos.map((permiso) => (
                <tr key={permiso.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {permiso.nombre}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {currentPermisos.includes(permiso.id) ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-4 h-4 mr-1" />
                        Habilitado
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <X className="w-4 h-4 mr-1" />
                        Deshabilitado
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}