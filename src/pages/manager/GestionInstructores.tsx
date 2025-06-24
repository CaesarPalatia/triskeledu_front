import React, { useState } from 'react';
import { Users, Search, Plus, Mail, Phone } from 'lucide-react';

const mockInstructores = [
  {
    id: 1,
    nombre: 'Marcela Díaz',
    email: 'marcela.diaz@edutech.cl',
    especialidad: 'Desarrollo Web',
    cursos: 3,
    estudiantes: 450,
    calificacion: 4.8
  },
  {
    id: 2,
    nombre: 'Gonzalo Herrera',
    email: 'gonzalo.herrera@edutech.cl',
    especialidad: 'Ciencia de Datos',
    cursos: 2,
    estudiantes: 280,
    calificacion: 4.6
  },
  {
    id: 3,
    nombre: 'Sofía Leiva',
    email: 'sofia.leiva@edutech.cl',
    especialidad: 'Diseño UX/UI',
    cursos: 4,
    estudiantes: 620,
    calificacion: 4.9
  }
];

export function GestionInstructores() {
  const [searchTerm, setSearchTerm] = useState('');
  const [instructores] = useState(mockInstructores);

  const filteredInstructores = instructores.filter(instructor => 
    instructor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Users className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Instructores</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Instructor
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Instructores */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar instructores..."
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
                    Instructor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Especialidad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cursos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estudiantes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Calificación
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInstructores.map((instructor) => (
                  <tr 
                    key={instructor.id}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 font-medium">
                              {instructor.nombre.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{instructor.nombre}</div>
                          <div className="text-sm text-gray-500">{instructor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {instructor.especialidad}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {instructor.cursos}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {instructor.estudiantes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-900">{instructor.calificacion}</div>
                        <div className="ml-2 flex-shrink-0">
                          <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400" 
                              style={{ width: `${(instructor.calificacion / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detalles del Instructor */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles del Instructor</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl text-indigo-600 font-medium">MD</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900">Marcela Díaz</h3>
              <p className="text-sm text-gray-500">Desarrollo Web</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center px-3 py-1 text-indigo-600 hover:text-indigo-800">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </button>
              <button className="flex items-center px-3 py-1 text-indigo-600 hover:text-indigo-800">
                <Phone className="w-4 h-4 mr-1" />
                Llamar
              </button>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Cursos Activos</dt>
                  <dd className="mt-1 text-sm text-gray-900">3 cursos</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Estudiantes Totales</dt>
                  <dd className="mt-1 text-sm text-gray-900">450 estudiantes</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Calificación Promedio</dt>
                  <dd className="mt-1 text-sm text-gray-900">4.8/5.0</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Fecha de Inicio</dt>
                  <dd className="mt-1 text-sm text-gray-900">15 de Enero, 2024</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}