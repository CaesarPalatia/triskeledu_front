import React, { useState } from 'react';
import { AlertCircle, Search, Plus, CheckCircle, XCircle, MessageSquare } from 'lucide-react';

const mockIncidencias = [
  {
    id: 1,
    titulo: 'Error en la carga de videos',
    usuario: 'Laura Pérez',
    tipo: 'Técnico',
    prioridad: 'Alta',
    estado: 'Pendiente',
    fechaCreacion: '2024-03-15 10:30'
  },
  {
    id: 2,
    titulo: 'Problemas con el inicio de sesión',
    usuario: 'Carlos Rodríguez',
    tipo: 'Acceso',
    prioridad: 'Media',
    estado: 'En Proceso',
    fechaCreacion: '2024-03-15 09:15'
  },
  {
    id: 3,
    titulo: 'No se pueden descargar recursos',
    usuario: 'María González',
    tipo: 'Técnico',
    prioridad: 'Baja',
    estado: 'Resuelto',
    fechaCreacion: '2024-03-14 15:45'
  }
];

export function GestionIncidencias() {
  const [searchTerm, setSearchTerm] = useState('');
  const [incidencias] = useState(mockIncidencias);
  const [selectedIncidencia, setSelectedIncidencia] = useState(mockIncidencias[0]);

  const filteredIncidencias = incidencias.filter(incidencia => 
    incidencia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incidencia.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incidencia.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Incidencias</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Nueva Incidencia
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Incidencias */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar incidencias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Incidencia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prioridad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredIncidencias.map((incidencia) => (
                  <tr 
                    key={incidencia.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedIncidencia(incidencia)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{incidencia.titulo}</div>
                      <div className="text-sm text-gray-500">{incidencia.usuario}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${incidencia.prioridad === 'Alta' ? 'bg-red-100 text-red-800' : 
                          incidencia.prioridad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'}`}>
                        {incidencia.prioridad}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${incidencia.estado === 'Resuelto' ? 'bg-green-100 text-green-800' : 
                          incidencia.estado === 'En Proceso' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'}`}>
                        {incidencia.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {incidencia.fechaCreacion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel de Detalles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedIncidencia ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{selectedIncidencia.titulo}</h2>
                <p className="text-sm text-gray-500">Reportado por {selectedIncidencia.usuario}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Tipo</p>
                  <p className="font-medium">{selectedIncidencia.tipo}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Prioridad</p>
                  <p className="font-medium">{selectedIncidencia.prioridad}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Estado</p>
                  <p className="font-medium">{selectedIncidencia.estado}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Fecha</p>
                  <p className="font-medium">{selectedIncidencia.fechaCreacion}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Actualizar Estado
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Pendiente</option>
                  <option>En Proceso</option>
                  <option>Resuelto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agregar Comentario
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Escribe un comentario..."
                />
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comentar
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Resolver
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Selecciona una incidencia para ver los detalles
            </div>
          )}
        </div>
      </div>
    </div>
  );
}