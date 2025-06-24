import { getDB } from './db';
import { User } from '../types/auth';

export const authenticateUser = async (email: string, password: string): Promise<User> => {
  try {
    // Initialize database connection
    const db = await getDB();
    
    // Get all users
    const users = await db.getAll('users');
    
    // Find matching user with case-insensitive email comparison
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && 
             u.password === password && 
             u.estado === 'activo'
    );

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error instanceof Error ? error : new Error('Error de autenticación');
  }
};