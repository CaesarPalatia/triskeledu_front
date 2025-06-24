import React, { useState } from 'react';
import { ClipboardList, Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';

const mockEvaluaciones = [
  {
    id: 1,
    titulo: 'Evaluación Final - React Hooks',
    tipo: 'Examen',
    duracion: '60 minutos',
    intentos: 2,
    estudiantes: 45,
    promedioCalificacion: 85
  },
  {
    id: 2,
    titulo: 'Quiz - useState y useEffect',
    tipo: 'Quiz',
    duracion: '15 minutos',
    intentos: 1,
    estudiantes: 38,
    promedioCalificacion: 92
  },
  {
    id: 3,
    titulo: 'Proyecto Final - Aplicación React',
    tipo: 'Proyecto',
    duracion: '1 semana',
    intentos: 1,
    estudiantes: 42,
    promedioCalificacion: 88
  }
];

export function GestionEvaluaciones() {
  const [searchTerm, setSearchTerm] = useState('');
  const [evaluaciones] = useState(mockEvaluaciones);

  const filteredEvaluaciones = evaluaciones.filter(evaluacion => 
    evaluacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evaluacion.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ClipboardList className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Evaluaciones</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Nueva Evaluación
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Evaluaciones */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar evaluaciones..."
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
                    Evaluación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duración
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estudiantes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Promedio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvaluaciones.map((evaluacion) => (
                  <tr key={evaluacion.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{evaluacion.titulo}</div>
                      <div className="text-sm text-gray-500">Intentos: {evaluacion.intentos}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {evaluacion.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evaluacion.duracion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evaluacion.estudiantes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900">{evaluacion.promedioCalificacion}%</span>
                        <div className="ml-2 w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500" 
                            style={{ width: `${evaluacion.promedioCalificacion}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel de Estadísticas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Estadísticas Generales</h2>
          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-indigo-800 mb-2">Total de Evaluaciones</h3>
              <p className="text-2xl font-bold text-indigo-600">15</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-800 mb-2">Promedio General</h3>
              <p className="text-2xl font-bold text-green-600">88.5%</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">Evaluaciones Pendientes</h3>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-red-800 mb-2">Estudiantes en Riesgo</h3>
              <p className="text-2xl font-bold text-red-600">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}