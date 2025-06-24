import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.rol)) {
    // Redirect to the appropriate dashboard based on user role
    switch (user.rol) {
      case 'Administrador':
        return <Navigate to="/admin/usuarios" replace />;
      case 'Gerente de Cursos':
        return <Navigate to="/gerente/cursos" replace />;
      case 'Instructor':
        return <Navigate to="/instructor/cursos" replace />;
      case 'Soporte Técnico':
        return <Navigate to="/soporte/incidencias" replace />;
      case 'Cliente':
        return <Navigate to="/cliente/cursos" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return <>{children}</>;
}