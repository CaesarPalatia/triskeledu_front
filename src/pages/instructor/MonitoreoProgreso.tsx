import React from 'react';
import { LineChart, Users, BookOpen, Award, Clock } from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const progresoData = [
  { semana: 'Sem 1', promedio: 85, completado: 95 },
  { semana: 'Sem 2', promedio: 82, completado: 88 },
  { semana: 'Sem 3', promedio: 88, completado: 92 },
  { semana: 'Sem 4', promedio: 85, completado: 85 },
  { semana: 'Sem 5', promedio: 90, completado: 90 },
  { semana: 'Sem 6', promedio: 87, completado: 87 }
];

const actividadData = [
  { actividad: 'Lección 1', completados: 45 },
  { actividad: 'Quiz 1', completados: 42 },
  { actividad: 'Ejercicio 1', completados: 38 },
  { actividad: 'Lección 2', completados: 40 },
  { actividad: 'Proyecto 1', completados: 35 }
];

export function MonitoreoProgreso() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <LineChart className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Monitoreo de Progreso</h1>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Estudiantes Activos</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Promedio del Curso</p>
              <p className="text-2xl font-semibold text-gray-900">85%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Award className="h-10 w-10 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tasa de Finalización</p>
              <p className="text-2xl font-semibold text-gray-900">78%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tiempo Promedio</p>
              <p className="text-2xl font-semibold text-gray-900">4.5h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Progreso */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Progreso Semanal</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={progresoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semana" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="promedio" stroke="#4F46E5" name="Promedio" />
                <Line type="monotone" dataKey="completado" stroke="#10B981" name="Completado" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Actividades */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Completado por Actividad</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={actividadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="actividad" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completados" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lista de Estudiantes en Riesgo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Estudiantes en Riesgo</h2>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Estudiante</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Progreso</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Última Actividad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Juan Pérez</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">35%</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">hace 15 días</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">María López</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">42%</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">hace 10 días</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">Pedro Ramírez</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28%</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">hace 20 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Próximas Actividades */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Próximas Actividades</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Evaluación Parcial</p>
                <p className="text-sm text-gray-500">Módulo 3 - React Hooks</p>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                En 2 días
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Entrega de Proyecto</p>
                <p className="text-sm text-gray-500">Aplicación React</p>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                En 1 semana
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sesión en Vivo</p>
                <p className="text-sm text-gray-500">Resolución de Dudas</p>
              </div>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                En 3 días
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}