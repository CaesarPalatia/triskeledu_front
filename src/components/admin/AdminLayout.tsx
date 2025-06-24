import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  Activity, 
  Database,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  const menuItems = [
    {
      path: '/admin/usuarios',
      icon: <Users className="w-5 h-5" />,
      label: 'Gestionar Usuarios'
    },
    {
      path: '/admin/permisos',
      icon: <Shield className="w-5 h-5" />,
      label: 'Configurar Permisos'
    },
    {
      path: '/admin/monitorizacion',
      icon: <Activity className="w-5 h-5" />,
      label: 'Monitorización'
    },
    {
      path: '/admin/respaldo',
      icon: <Database className="w-5 h-5" />,
      label: 'Respaldo de Datos'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <div className="flex-grow flex">
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="fixed top-20 left-4 z-50 md:hidden bg-indigo-600 text-white p-2 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <aside className={`
          fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}>
          <div className="h-full px-3 py-4 overflow-y-auto bg-indigo-700">
            <div className="flex items-center mb-8 px-2">
              <span className="text-xl font-bold text-white">Panel Administrativo</span>
            </div>
            
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-2 py-3 rounded-lg
                    ${isActive 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-600'}
                  `}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              ))}

              <button
                onClick={handleLogout}
                className="flex items-center w-full px-2 py-3 mt-8 text-indigo-100 hover:bg-indigo-600 rounded-lg"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-3">Cerrar Sesión</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className={`flex-1 p-4 md:ml-64 ${isSidebarOpen ? 'ml-64' : ''}`}>
          <div className="p-4 rounded-lg">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}