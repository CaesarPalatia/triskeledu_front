import React from 'react';
import { BarChart, LineChart as LineChartIcon, PieChart, Download } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

const inscripcionesData = [
  { mes: 'Ene', cantidad: 120 },
  { mes: 'Feb', cantidad: 150 },
  { mes: 'Mar', cantidad: 180 },
  { mes: 'Abr', cantidad: 220 },
  { mes: 'May', cantidad: 250 },
  { mes: 'Jun', cantidad: 280 }
];

const rendimientoData = [
  { curso: 'React', promedio: 85 },
  { curso: 'Python', promedio: 78 },
  { curso: 'UX/UI', promedio: 92 },
  { curso: 'Node.js', promedio: 88 },
  { curso: 'Angular', promedio: 82 }
];

const distribucionData = [
  { name: 'Desarrollo Web', value: 45 },
  { name: 'Ciencia de Datos', value: 25 },
  { name: 'Diseño', value: 20 },
  { name: 'Marketing Digital', value: 10 }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

export function GenerarReportes() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BarChart className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Reportes y Análisis</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Download className="w-5 h-5 mr-2" />
          Exportar Reportes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inscripciones Mensuales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <LineChartIcon className="w-5 h-5 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Inscripciones Mensuales</h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inscripcionesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cantidad" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rendimiento por Curso */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BarChart className="w-5 h-5 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Rendimiento por Curso</h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={rendimientoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="curso" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="promedio" fill="#4F46E5" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribución de Categorías */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <PieChart className="w-5 h-5 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Distribución de Categorías</h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={distribucionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribucionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Métricas Generales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Métricas Generales</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-600 mb-1">Total de Cursos</p>
              <p className="text-2xl font-bold text-indigo-700">24</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 mb-1">Estudiantes Activos</p>
              <p className="text-2xl font-bold text-green-700">1,250</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-600 mb-1">Promedio de Calificación</p>
              <p className="text-2xl font-bold text-yellow-700">4.5</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-600 mb-1">Tasa de Finalización</p>
              <p className="text-2xl font-bold text-red-700">78%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}