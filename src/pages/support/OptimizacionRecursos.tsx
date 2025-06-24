import React from 'react';
import { Settings, Server, Database, MemoryStick as Memory, HardDrive, Cpu, Activity } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const performanceData = [
  { hora: '00:00', cpu: 45, memoria: 60, almacenamiento: 75 },
  { hora: '04:00', cpu: 35, memoria: 55, almacenamiento: 75 },
  { hora: '08:00', cpu: 65, memoria: 70, almacenamiento: 76 },
  { hora: '12:00', cpu: 85, memoria: 85, almacenamiento: 77 },
  { hora: '16:00', cpu: 75, memoria: 80, almacenamiento: 78 },
  { hora: '20:00', cpu: 55, memoria: 65, almacenamiento: 78 }
];

export function OptimizacionRecursos() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <Settings className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Optimización de Recursos</h1>
      </div>

      {/* Estado de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Cpu className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">CPU</p>
              <div className="flex items-center">
                <p className="text-2xl font-semibold text-gray-900">65%</p>
                <span className="ml-2 text-sm text-green-600">Normal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Memory className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Memoria</p>
              <div className="flex items-center">
                <p className="text-2xl font-semibold text-gray-900">75%</p>
                <span className="ml-2 text-sm text-yellow-600">Advertencia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <HardDrive className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Almacenamiento</p>
              <div className="flex items-center">
                <p className="text-2xl font-semibold text-gray-900">82%</p>
                <span className="ml-2 text-sm text-red-600">Crítico</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Activity className="h-10 w-10 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Red</p>
              <div className="flex items-center">
                <p className="text-2xl font-semibold text-gray-900">45%</p>
                <span className="ml-2 text-sm text-green-600">Normal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Rendimiento */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Rendimiento del Sistema</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#4F46E5" name="CPU %" />
              <Line type="monotone" dataKey="memoria" stroke="#10B981" name="Memoria %" />
              <Line type="monotone" dataKey="almacenamiento" stroke="#3B82F6" name="Almacenamiento %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Servicios Activos */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Servicios Activos</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Server className="h-6 w-6 text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Servidor Web</p>
                  <p className="text-xs text-gray-500">Puerto: 443</p>
                </div>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Activo
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Database className="h-6 w-6 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Base de Datos</p>
                  <p className="text-xs text-gray-500">Puerto: 5432</p>
                </div>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Activo
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Server className="h-6 w-6 text-blue-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Servidor de Archivos</p>
                  <p className="text-xs text-gray-500">Puerto: 21</p>
                </div>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Mantenimiento
              </span>
            </div>
          </div>
        </div>

        {/* Tareas de Optimización */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tareas de Optimización</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-900">Limpieza de Caché</p>
                <button className="px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                  Ejecutar
                </button>
              </div>
              <p className="text-xs text-gray-500">Última ejecución: Hace 2 horas</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-900">Optimización de Base de Datos</p>
                <button className="px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                  Ejecutar
                </button>
              </div>
              <p className="text-xs text-gray-500">Última ejecución: Hace 1 día</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-900">Compresión de Archivos</p>
                <button className="px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                  Ejecutar
                </button>
              </div>
              <p className="text-xs text-gray-500">Última ejecución: Hace 3 días</p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-900">Backup del Sistema</p>
                <button className="px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                  Ejecutar
                </button>
              </div>
              <p className="text-xs text-gray-500">Última ejecución: Hace 1 semana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}