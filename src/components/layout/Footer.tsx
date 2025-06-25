import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">Triskeledu</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transformando la educación a través de la tecnología
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Plataforma</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/courses" className="text-gray-400 hover:text-white">
                  Cursos
                </a>
              </li>
              <li>
                <a href="/instructors" className="text-gray-400 hover:text-white">
                  Instructores
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white">
                  Trabaja con Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EduTech Innovators. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}