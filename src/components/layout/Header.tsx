import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">EduTech Innovators</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <span className="text-white">
                  Bienvenido, {user.nombre}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <a href="/courses" className="text-base font-medium text-white hover:text-indigo-50">
                  Cursos
                </a>
                <a href="/about" className="text-base font-medium text-white hover:text-indigo-50">
                  Nosotros
                </a>
                <a href="/contact" className="text-base font-medium text-white hover:text-indigo-50">
                  Contacto
                </a>
                <a
                  href="/login"
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Iniciar Sesión
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {user ? (
                <>
                  <span className="text-white">
                    Bienvenido, {user.nombre}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <a href="/courses" className="text-base font-medium text-white hover:text-indigo-50">
                    Cursos
                  </a>
                  <a href="/about" className="text-base font-medium text-white hover:text-indigo-50">
                    Nosotros
                  </a>
                  <a href="/contact" className="text-base font-medium text-white hover:text-indigo-50">
                    Contacto
                  </a>
                  <a
                    href="/login"
                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 text-center"
                  >
                    Iniciar Sesión
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}