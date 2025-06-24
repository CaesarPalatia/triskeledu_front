export type UserRole = 'Administrador' | 'Gerente de Cursos' | 'Instructor' | 'Soporte Técnico' | 'Cliente';

export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: UserRole;
  estado: 'activo' | 'inactivo';
  permisos: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}