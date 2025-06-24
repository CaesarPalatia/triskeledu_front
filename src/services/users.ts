import { User } from '../types/auth';
import { getDB } from './db';

export const getUsers = async (): Promise<User[]> => {
  const db = await getDB();
  return db.getAll('users');
};

export const getUserById = async (id: number): Promise<User | undefined> => {
  const db = await getDB();
  return db.get('users', id);
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const db = await getDB();
    const users = await db.getAll('users');
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error instanceof Error ? error : new Error('Error al buscar usuario por email');
  }
};

export const saveUser = async (userData: Omit<User, 'id' | 'permisos'>): Promise<User> => {
  try {
    const db = await getDB();
    
    // Check if email already exists using the modified getUserByEmail function
    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('El correo electrónico ya está registrado');
    }

    // Get all users to determine the next ID
    const allUsers = await getUsers();
    const lastId = allUsers.length > 0 ? Math.max(...allUsers.map(user => user.id)) : 0;
    const nextId = lastId + 1;

    // Create new user with ID and permissions
    const newUser: User = {
      id: nextId,
      ...userData,
      permisos: getDefaultPermisos(userData.rol)
    };

    // Add user to database
    await db.add('users', newUser);
    
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error instanceof Error ? error : new Error('Error al crear el usuario');
  }
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
  try {
    const db = await getDB();
    const existingUser = await getUserById(id);
    
    if (!existingUser) {
      throw new Error('Usuario no encontrado');
    }

    // If email is being updated, check if it's already in use by another user
    if (userData.email && userData.email !== existingUser.email) {
      const userWithEmail = await getUserByEmail(userData.email);
      if (userWithEmail && userWithEmail.id !== id) {
        throw new Error('El correo electrónico ya está registrado');
      }
    }

    const updatedUser = { ...existingUser, ...userData };
    await db.put('users', updatedUser);
    
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error instanceof Error ? error : new Error('Error al actualizar el usuario');
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    const db = await getDB();
    await db.delete('users', id);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error instanceof Error ? error : new Error('Error al eliminar el usuario');
  }
};

const getDefaultPermisos = (rol: string): string[] => {
  switch (rol) {
    case 'Administrador':
      return ['gestionar_usuarios', 'configurar_permisos', 'monitorizar_sistema', 'respaldar_datos'];
    case 'Gerente de Cursos':
      return ['gestionar_cursos', 'generar_reportes', 'gestionar_instructores', 'evaluar_contenido'];
    case 'Instructor':
      return ['crear_contenido', 'gestionar_evaluaciones', 'interactuar_estudiantes', 'monitorear_progreso'];
    case 'Soporte Técnico':
      return ['gestionar_incidencias', 'optimizar_recursos', 'actualizar_estado_incidencias', 'gestionar_proveedores'];
    case 'Cliente':
      return ['crear_cuenta', 'iniciar_sesion', 'buscar_cursos', 'inscribirse', 'consultar_progreso', 'gestionar_perfil', 'solicitar_soporte', 'dejar_reseñas'];
    default:
      return [];
  }
};