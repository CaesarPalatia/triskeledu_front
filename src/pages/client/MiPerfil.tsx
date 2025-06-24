import React, { useState } from 'react';
import { UserCircle, Mail, Phone, CreditCard, Lock, Bell } from 'lucide-react';

export function MiPerfil() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <UserCircle className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Mi Perfil</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <UserCircle className="w-20 h-20 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Laura Pérez</h2>
              <p className="text-sm text-gray-500">Estudiante</p>
            </div>

            <div className="mt-6 space-y-2">
              <button
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'personal' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('personal')}
              >
                <UserCircle className="w-5 h-5 mr-2" />
                Información Personal
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'pago' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('pago')}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Métodos de Pago
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'seguridad' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('seguridad')}
              >
                <Lock className="w-5 h-5 mr-2" />
                Seguridad
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'notificaciones' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('notificaciones')}
              >
                <Bell className="w-5 h-5 mr-2" />
                Notificaciones
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === 'personal' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="Laura"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Apellido</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="Pérez"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        className="flex-1 block w-full border border-gray-300 rounded-none rounded-r-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="laura.perez@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        className="flex-1 block w-full border border-gray-300 rounded-none rounded-r-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Biografía</label>
                    <textarea
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="Estudiante apasionada por la tecnología y el desarrollo web."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'pago' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Métodos de Pago</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCard className="h-8 w-8 text-gray-400" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-500">Expira 12/24</p>
                        </div>
                      </div>
                      <button className="text-sm text-indigo-600 hover:text-indigo-500">
                        Editar
                      </button>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Agregar nuevo método de pago
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'seguridad' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Seguridad</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contraseña Actual</label>
                    <input
                      type="password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                    <input
                      type="password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
                    <input
                      type="password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'notificaciones' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Preferencias de Notificación</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Actualizaciones de Cursos</p>
                      <p className="text-sm text-gray-500">Recibe notificaciones cuando hay nuevo contenido</p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" defaultChecked />
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Recordatorios</p>
                      <p className="text-sm text-gray-500">Recibe recordatorios de tareas pendientes</p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" defaultChecked />
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Promociones</p>
                      <p className="text-sm text-gray-500">Recibe ofertas y descuentos especiales</p>
                    </div>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Guardar Preferencias
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}