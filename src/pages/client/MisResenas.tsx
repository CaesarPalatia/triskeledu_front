import React, { useState } from 'react';
import { Star, Search, Edit2, Trash2 } from 'lucide-react';

const mockResenas = [
  {
    id: 1,
    curso: 'Desarrollo Web con React',
    instructor: 'Marcela Díaz',
    calificacion: 5,
    comentario: 'Excelente curso, muy bien explicado y con ejemplos prácticos.',
    fecha: '2024-03-15',
    imagen: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 2,
    curso: 'Python para Data Science',
    instructor: 'Gonzalo Herrera',
    calificacion: 4,
    comentario: 'Buen contenido, aunque algunos temas podrían profundizarse más.',
    fecha: '2024-03-10',
    imagen: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=640'
  },
  {
    id: 3,
    curso: 'Diseño UX/UI Avanzado',
    instructor: 'Sofía Leiva',
    calificacion: 5,
    comentario: 'Increíble curso, aprendí muchísimo sobre diseño de interfaces.',
    fecha: '2024-03-05',
    imagen: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=640'
  }
];

export function MisResenas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [resenas] = useState(mockResenas);
  const [selectedResena, setSelectedResena] = useState<typeof mockResenas[0] | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const filteredResenas = resenas.filter(resena => 
    resena.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resena.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <Star className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Mis Reseñas</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Reseñas */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Buscar reseñas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredResenas.map((resena) => (
                <div
                  key={resena.id}
                  className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedResena(resena);
                    setIsEditing(false);
                  }}
                >
                  <img
                    src={resena.imagen}
                    alt={resena.curso}
                    className="w-48 h-32 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{resena.curso}</h3>
                        <p className="text-sm text-gray-600">Instructor: {resena.instructor}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < resena.calificacion
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-2">{resena.comentario}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{resena.fecha}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedResena(resena);
                            setIsEditing(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Implementar lógica de eliminación
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel de Edición/Vista */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedResena ? (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {isEditing ? 'Editar Reseña' : 'Detalles de la Reseña'}
              </h2>
              
              {isEditing ? (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Calificación</label>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="p-1"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              i < selectedResena.calificacion
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Comentario</label>
                    <textarea
                      rows={6}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue={selectedResena.comentario}
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{selectedResena.curso}</h3>
                    <p className="text-sm text-gray-600">Instructor: {selectedResena.instructor}</p>
                  </div>

                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < selectedResena.calificacion
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700">{selectedResena.comentario}</p>

                  <div className="text-sm text-gray-500">
                    Publicado el {selectedResena.fecha}
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsEditing(true)}
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Editar
                    </button>
                    <button
                      className="flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Selecciona una reseña para ver los detalles
            </div>
          )}
        </div>
      </div>
    </div>
  );
}