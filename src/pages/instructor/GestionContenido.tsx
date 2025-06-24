import React, { useState } from 'react';
import { BookOpen, Plus, Search, Edit2, Trash2, Upload, FileText, Video, Image, ClipboardList } from 'lucide-react';
import { Editor } from '@tinymce/tinymce-react';

const mockContenidos = [
  {
    id: 1,
    titulo: 'Introducción a React Hooks',
    tipo: 'Lección',
    estado: 'Publicado',
    ultimaActualizacion: '2024-03-15'
  },
  {
    id: 2,
    titulo: 'Ejercicios Prácticos - useState',
    tipo: 'Ejercicio',
    estado: 'Borrador',
    ultimaActualizacion: '2024-03-14'
  },
  {
    id: 3,
    titulo: 'Video Tutorial - useEffect',
    tipo: 'Video',
    estado: 'En Revisión',
    ultimaActualizacion: '2024-03-13'
  }
];

export function GestionContenido() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contenidos] = useState(mockContenidos);
  const [showEditor, setShowEditor] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  const filteredContenidos = contenidos.filter(contenido => 
    contenido.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contenido.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Contenido</h1>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          onClick={() => setShowEditor(true)}
        >
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Contenido
        </button>
      </div>

      {showEditor ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título del Contenido
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ingrese el título..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Contenido
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="leccion">Lección</option>
              <option value="ejercicio">Ejercicio</option>
              <option value="video">Video</option>
              <option value="recurso">Recurso</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contenido
            </label>
            <Editor
              apiKey="your-tinymce-api-key"
              init={{
                height: 400,
                menubar: true,
                readonly: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; }',
                branding: false,
                promotion: false
              }}
              value={editorContent}
              onEditorChange={handleEditorChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recursos Adicionales
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Subir archivos</span>
                    <input type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">o arrastrar y soltar</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF hasta 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setShowEditor(false)}
            >
              Cancelar
            </button>
            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Buscar contenido..."
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
                    Contenido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última Actualización
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredContenidos.map((contenido) => (
                  <tr key={contenido.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {contenido.tipo === 'Lección' && (
                            <FileText className="h-10 w-10 text-indigo-600" />
                          )}
                          {contenido.tipo === 'Video' && (
                            <Video className="h-10 w-10 text-indigo-600" />
                          )}
                          {contenido.tipo === 'Ejercicio' && (
                            <ClipboardList className="h-10 w-10 text-indigo-600" />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {contenido.titulo}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {contenido.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${contenido.estado === 'Publicado' ? 'bg-green-100 text-green-800' : 
                          contenido.estado === 'En Revisión' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'}`}>
                        {contenido.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {contenido.ultimaActualizacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}