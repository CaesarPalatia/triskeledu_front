import React from 'react';
import { LineChart, BarChart, Clock, Award, BookOpen, Target } from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar
} from 'recharts';

const progresoData = [
  { semana: 'Sem 1', progreso: 85 },
  { semana: 'Sem 2', progreso: 75 },
  { semana: 'Sem 3', progreso: 90 },
  { semana: 'Sem 4', progreso: 85 },
  { semana: 'Sem 5', progreso: 95 },
  { semana: 'Sem 6', progreso: 88 }
];

const tiempoDedicadoData = [
  { dia: 'Lun', horas: 2.5 },
  { dia: 'Mar', horas: 1.8 },
  { dia: 'Mie', horas: 3.0 },
  { dia: 'Jue', horas: 2.0 },
  { dia: 'Vie', horas: 2.2 },
  { dia: 'Sab', horas: 4.0 },
  { dia: 'Dom', horas: 1.5 }
];

const cursosActivos = [
  {
    id: 1,
    nombre: 'Desarrollo Web con React',
    progreso: 75,
    ultimaActividad: '2024-03-15',
    proximaLeccion: 'Hooks Avanzados'
  },
  {
    id: 2,
    nombre: 'Python para Data Science',
    progreso: 45,
    ultimaActividad: '2024-03-14',
    proximaLeccion: 'Pandas Básico'
  },
  {
    id: 3,
    nombre: 'Diseño UX/UI Avanzado',
    progreso: 90,
    ultimaActividad: '2024-03-13',
    proximaLeccion: 'Prototipado en Figma'
  }
];

export function MiProgreso() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <LineChart className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Mi Progreso</h1>
      </div>

      {/* Estadísticas Generales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cursos Activos</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Horas de Estudio</p>
              <p className="text-2xl font-semibold text-gray-900">45h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Target className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Objetivos Completados</p>
              <p className="text-2xl font-semibold text-gray-900">12/15</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Award className="h-10 w-10 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Certificados</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
                <Line type="monotone" dataKey="progreso" stroke="#4F46E5" name="Progreso %" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Tiempo Dedicado */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tiempo Dedicado</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={tiempoDedicadoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="horas" fill="#4F46E5" name="Horas" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Cursos Activos */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cursos Activos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Curso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progreso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Actividad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Próxima Lección
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cursosActivos.map((curso) => (
                <tr key={curso.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{curso.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                        <div
                          className="h-2 bg-indigo-600 rounded-full"
                          style={{ width: `${curso.progreso}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{curso.progreso}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {curso.ultimaActividad}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {curso.proximaLeccion}
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