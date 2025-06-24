import React from 'react';
import { BookOpen, Clock, Award, Play } from 'lucide-react';

const mockMisCursos = [
  {
    id: 1,
    titulo: 'Desarrollo Web con React',
    instructor: 'Marcela Díaz',
    progreso: 75,
    ultimaLeccion: 'Hooks Avanzados',
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 2,
    titulo: 'Python para Data Science',
    instructor: 'Gonzalo Herrera',
    progreso: 45,
    ultimaLeccion: 'Pandas Básico',
    imagen: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 3,
    titulo: 'Diseño UX/UI Avanzado',
    instructor: 'Sofía Leiva',
    progreso: 90,
    ultimaLeccion: 'Prototipado en Figma',
    imagen: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=640'
  }
];

export function MisCursos() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Mis Cursos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMisCursos.map((curso) => (
          <div key={curso.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white p-3 rounded-full">
                  <Play className="w-6 h-6 text-indigo-600" fill="currentColor" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{curso.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4">Instructor: {curso.instructor}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progreso</span>
                  <span>{curso.progreso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${curso.progreso}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>Última lección: {curso.ultimaLeccion}</span>
              </div>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Continuar
                </button>
                {curso.progreso === 100 && (
                  <div className="flex items-center text-green-600">
                    <Award className="w-5 h-5 mr-1" />
                    <span className="text-sm">Completado</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}