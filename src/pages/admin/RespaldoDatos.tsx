import React from 'react';
import { Database, Download, Upload, Clock, CheckCircle2, RefreshCw } from 'lucide-react';

const backupHistory = [
  {
    id: 1,
    type: 'Automático',
    status: 'Completado',
    size: '2.5 GB',
    date: '2024-03-15 00:00:00',
    duration: '15 minutos'
  },
  {
    id: 2,
    type: 'Manual',
    status: 'Completado',
    size: '2.4 GB',
    date: '2024-03-14 12:30:00',
    duration: '14 minutos'
  },
  {
    id: 3,
    type: 'Automático',
    status: 'Completado',
    size: '2.3 GB',
    date: '2024-03-14 00:00:00',
    duration: '13 minutos'
  }
];

export function RespaldoDatos() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <Database className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Respaldo y Restauración</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Backup Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Crear Respaldo</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Último respaldo:</span>
              </div>
              <span className="text-sm font-medium">15 Mar 2024, 00:00</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Database className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Tamaño estimado:</span>
              </div>
              <span className="text-sm font-medium">2.5 GB</span>
            </div>

            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Download className="w-5 h-5 mr-2" />
              Iniciar Respaldo Manual
            </button>
          </div>
        </div>

        {/* Restore Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Restaurar Datos</h2>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Arrastra y suelta un archivo de respaldo o
                  </p>
                  <button className="mt-2 text-sm text-indigo-600 font-medium hover:text-indigo-500">
                    Selecciona un archivo
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled>
              <RefreshCw className="w-5 h-5 mr-2" />
              Iniciar Restauración
            </button>
          </div>
        </div>
      </div>

      {/* Backup History */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Historial de Respaldos</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamaño
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duración
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {backupHistory.map((backup) => (
                <tr key={backup.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {backup.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {backup.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {backup.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {backup.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="flex items-center text-green-800">
                      <CheckCircle2 className="w-4 h-4 mr-1"  />
                      {backup.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}