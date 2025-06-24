import React from 'react';
import { Activity, AlertTriangle, CheckCircle2, Clock, Server } from 'lucide-react';
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
  { time: '00:00', cpu: 45, memory: 60, users: 120 },
  { time: '03:00', cpu: 35, memory: 55, users: 80 },
  { time: '06:00', cpu: 30, memory: 50, users: 60 },
  { time: '09:00', cpu: 65, memory: 75, users: 240 },
  { time: '12:00', cpu: 85, memory: 85, users: 380 },
  { time: '15:00', cpu: 75, memory: 80, users: 320 },
  { time: '18:00', cpu: 70, memory: 75, users: 280 },
  { time: '21:00', cpu: 55, memory: 65, users: 200 },
];

const systemAlerts = [
  {
    id: 1,
    type: 'error',
    message: 'Error de conexión con la base de datos',
    timestamp: '2024-03-15 14:23:45'
  },
  {
    id: 2,
    type: 'warning',
    message: 'Alto uso de memoria en el servidor principal',
    timestamp: '2024-03-15 13:15:30'
  },
  {
    id: 3,
    type: 'success',
    message: 'Backup automático completado exitosamente',
    timestamp: '2024-03-15 12:00:00'
  }
];

export function Monitorizacion() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <Activity className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Monitorización del Sistema</h1>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Server className="w-8 h-8 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">CPU</p>
              <p className="text-2xl font-semibold text-gray-900">75%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Server className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Memoria</p>
              <p className="text-2xl font-semibold text-gray-900">80%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tiempo Activo</p>
              <p className="text-2xl font-semibold text-gray-900">15d 6h</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
              <p className="text-2xl font-semibold text-gray-900">320</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Rendimiento del Sistema</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#4F46E5" name="CPU %" />
              <Line type="monotone" dataKey="memory" stroke="#10B981" name="Memoria %" />
              <Line type="monotone" dataKey="users" stroke="#6366F1" name="Usuarios" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Alertas del Sistema</h2>
        <div className="space-y-4">
          {systemAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg flex items-start ${
                alert.type === 'error'
                  ? 'bg-red-50'
                  : alert.type === 'warning'
                  ? 'bg-yellow-50'
                  : 'bg-green-50'
              }`}
            >
              {alert.type === 'error' ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : alert.type === 'warning' ? (
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
              <div className="ml-3">
                <p className={`text-sm font-medium ${
                  alert.type === 'error'
                    ? 'text-red-800'
                    : alert.type === 'warning'
                    ? 'text-yellow-800'
                    : 'text-green-800'
                }`}>
                  {alert.message}
                </p>
                <p className="text-sm text-gray-500 mt-1">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}