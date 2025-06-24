import React, { useState } from 'react';
import { MessageCircle, Search, Send, User, Clock } from 'lucide-react';

const mockMensajes = [
  {
    id: 1,
    estudiante: 'Ana García',
    mensaje: '¿Podría explicar mejor el concepto de useEffect?',
    curso: 'React Avanzado',
    fecha: '2024-03-15 10:30',
    estado: 'No Respondido'
  },
  {
    id: 2,
    estudiante: 'Carlos López',
    mensaje: 'Tengo problemas con el ejercicio 3 de Hooks',
    curso: 'React Avanzado',
    fecha: '2024-03-15 09:15',
    estado: 'Respondido'
  },
  {
    id: 3,
    estudiante: 'María Rodríguez',
    mensaje: '¿Cuándo es la próxima sesión en vivo?',
    curso: 'React Avanzado',
    fecha: '2024-03-14 15:45',
    estado: 'Respondido'
  }
];

export function InteraccionEstudiantes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mensajes] = useState(mockMensajes);
  const [selectedMensaje, setSelectedMensaje] = useState(mockMensajes[0]);
  const [respuesta, setRespuesta] = useState('');

  const filteredMensajes = mensajes.filter(mensaje => 
    mensaje.estudiante.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mensaje.mensaje.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mensaje.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <MessageCircle className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Interacción con Estudiantes</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Mensajes */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar mensajes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-400px)]">
            {filteredMensajes.map((mensaje) => (
              <div
                key={mensaje.id}
                className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                  selectedMensaje?.id === mensaje.id ? 'bg-indigo-50' : ''
                }`}
                onClick={() => setSelectedMensaje(mensaje)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{mensaje.estudiante}</p>
                      <p className="text-sm text-gray-500">{mensaje.curso}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    mensaje.estado === 'Respondido' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {mensaje.estado}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{mensaje.mensaje}</p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  
                  {mensaje.fecha}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel de Respuesta */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedMensaje ? (
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Detalles del Mensaje</h2>
              </div>

              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{selectedMensaje.estudiante}</p>
                  <p className="text-sm text-gray-500">{selectedMensaje.curso}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700">{selectedMensaje.mensaje}</p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedMensaje.fecha}
                </div>
              </div>

              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu Respuesta
                </label>
                <textarea
                  rows={4}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Escribe tu respuesta aquí..."
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Respuesta
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Selecciona un mensaje para responder
            </div>
          )}
        </div>
      </div>
    </div>
  );
}