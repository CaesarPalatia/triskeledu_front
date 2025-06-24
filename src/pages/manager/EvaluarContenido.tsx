import React, { useState } from 'react';
import { CheckSquare, Search, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const mockContenidos = [
  {
    id: 1,
    titulo: 'Introducción a React Hooks',
    curso: 'Desarrollo Web con React',
    instructor: 'Marcela Díaz',
    tipo: 'Video',
    duracion: '15:30',
    estado: 'Pendiente',
    fechaEnvio: '2024-03-15'
  },
  {
    id: 2,
    titulo: 'Análisis de Datos con Pandas',
    curso: 'Python para Data Science',
    instructor: 'Gonzalo Herrera',
    tipo: 'Documento',
    duracion: '45 min',
    estado: 'Aprobado',
    fechaEnvio: '2024-03-14'
  },
  {
    id: 3,
    titulo: 'Principios de Diseño UI',
    curso: 'Diseño UX/UI Avanzado',
    instructor: 'Sofía Leiva',
    tipo: 'Presentación',
    duracion: '25 min',
    estado: 'Rechazado',
    fechaEnvio: '2024-03-13'
  }
];

export function EvaluarContenido() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contenidos] = useState(mockContenidos);
  const [selectedContenido, setSelectedContenido] = useState(mockContenidos[0]);

  const filteredContenidos = contenidos.filter(contenido => 
    contenido.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contenido.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contenido.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <CheckSquare className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Evaluación de Contenido</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Contenidos */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar contenido..."
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
                    Contenido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
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
                {filteredContenidos.map((contenido) => (
                  <tr 
                    key={contenido.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedContenido(contenido)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{contenido.titulo}</div>
                      <div className="text-sm text-gray-500">{contenido.curso}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {contenido.instructor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {contenido.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${contenido.estado === 'Aprobado' 
                          ? 'bg-green-100 text-green-800' 
                          : contenido.estado === 'Rechazado'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {contenido.estado === 'Aprobado' && <CheckCircle className="w-4 h-4 mr-1" />}
                        {contenido.estado === 'Rechazado' && <XCircle className="w-4 h-4 mr-1" />}
                        {contenido.estado === 'Pendiente' && <AlertTriangle className="w-4 h-4 mr-1" />}
                        {contenido.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {contenido.fechaEnvio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel de Evaluación */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Evaluación del Contenido</h2>
          {selectedContenido && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900">{selectedContenido.titulo}</h3>
                <p className="text-sm text-gray-500">{selectedContenido.curso}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Instructor</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedContenido.instructor}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Tipo de Contenido</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedContenido.tipo}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Duración</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedContenido.duracion}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Fecha de Envío</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedContenido.fechaEnvio}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios de Evaluación
                </label>
                <textarea
                  rows={4}
                  className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Ingrese sus comentarios aquí..."
                />
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Aprobar
                </button>
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center justify-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Rechazar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}