import React, { useState } from 'react';
import { LifeBuoy, MessageSquare, Search, HelpCircle, FileText, Send } from 'lucide-react';

const faqData = [
  {
    pregunta: '¿Cómo puedo restablecer mi contraseña?',
    respuesta: 'Para restablecer tu contraseña, haz clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión y sigue las instrucciones enviadas a tu correo electrónico.'
  },
  {
    pregunta: '¿Cómo puedo obtener un certificado?',
    respuesta: 'Los certificados se emiten automáticamente al completar todos los requisitos del curso. Puedes descargarlos desde la sección "Mis Cursos" una vez finalizado el curso.'
  },
  {
    pregunta: '¿Cuál es la política de reembolso?',
    respuesta: 'Ofrecemos un reembolso completo dentro de los primeros 30 días de la compra si no estás satisfecho con el curso.'
  }
];

export function Soporte() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center mb-6">
        <LifeBuoy className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">Centro de Soporte</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulario de Contacto */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Contactar Soporte</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Asunto</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Describe brevemente tu problema"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  rows={6}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Describe detalladamente tu problema o consulta"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Adjuntar Archivos</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Subir archivo</span>
                        <input type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">o arrastra y suelta</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF hasta 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ y Enlaces Rápidos */}
        <div className="space-y-6">
          {/* Buscador de FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Preguntas Frecuentes</h2>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Buscar en FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-sm font-medium text-gray-900">{faq.pregunta}</span>
                    <HelpCircle className="h-5 w-5 text-gray-400" />
                  </button>
                  <p className="mt-2 text-sm text-gray-500">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h2>
            <div className="space-y-2">
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-500">
                <FileText className="h-5 w-5 mr-2" />
                <span className="text-sm">Guía de Usuario</span>
              </a>
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-500">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="text-sm">Chat en Vivo</span>
              </a>
              <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-500">
                <HelpCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Centro de Ayuda</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}