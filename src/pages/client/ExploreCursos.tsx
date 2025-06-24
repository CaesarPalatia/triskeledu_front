import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Tag, Star } from 'lucide-react';

const mockCursos = [
  {
    id: 1,
    titulo: 'Desarrollo Web con React',
    instructor: 'Marcela Díaz',
    descripcion: 'Aprende a crear aplicaciones web modernas con React',
    duracion: '12 horas',
    estudiantes: 450,
    precio: 49.99,
    descuento: 0,
    calificacion: 4.8,
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 2,
    titulo: 'Python para Data Science',
    instructor: 'Gonzalo Herrera',
    descripcion: 'Domina el análisis de datos con Python',
    duracion: '15 horas',
    estudiantes: 380,
    precio: 59.99,
    descuento: 20,
    calificacion: 4.6,
    imagen: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 3,
    titulo: 'Diseño UX/UI Avanzado',
    instructor: 'Sofía Leiva',
    descripcion: 'Crea interfaces de usuario excepcionales',
    duracion: '10 horas',
    estudiantes: 290,
    precio: 44.99,
    descuento: 15,
    calificacion: 4.9,
    imagen: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=640'
  }
];

const categorias = [
  'Desarrollo Web',
  'Data Science',
  'Diseño',
  'Marketing Digital',
  'Negocios',
  'Idiomas'
];

export function ExploreCursos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [cursos] = useState(mockCursos);

  const filteredCursos = cursos.filter(curso => 
    curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    curso.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Explorar Cursos</h1>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedCategoria}
              onChange={(e) => setSelectedCategoria(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Lista de Cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCursos.map((curso) => (
          <div key={curso.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{curso.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4">{curso.descripcion}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">{curso.duracion}</span>
                <Users className="w-4 h-4 mr-1" />
                <span>{curso.estudiantes} estudiantes</span>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(curso.calificacion)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {curso.calificacion.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {curso.descuento > 0 ? (
                    <>
                      <span className="text-lg font-bold text-gray-900">
                        ${(curso.precio * (1 - curso.descuento / 100)).toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${curso.precio.toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm text-green-600">
                        {curso.descuento}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      ${curso.precio.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Inscribirse
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}