import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { AdminLayout } from './components/admin/AdminLayout';
import { ManagerLayout } from './components/manager/ManagerLayout';
import { InstructorLayout } from './components/instructor/InstructorLayout';
import { SupportLayout } from './components/support/SupportLayout';
import { ClientLayout } from './components/client/ClientLayout';
import { GestionUsuarios } from './pages/admin/GestionUsuarios';
import { ConfiguracionPermisos } from './pages/admin/ConfiguracionPermisos';
import { Monitorizacion } from './pages/admin/Monitorizacion';
import { RespaldoDatos } from './pages/admin/RespaldoDatos';
import { GestionCursos } from './pages/manager/GestionCursos';
import { GenerarReportes } from './pages/manager/GenerarReportes';
import { GestionInstructores } from './pages/manager/GestionInstructores';
import { EvaluarContenido } from './pages/manager/EvaluarContenido';
import { GestionContenido } from './pages/instructor/GestionContenido';
import { GestionEvaluaciones } from './pages/instructor/GestionEvaluaciones';
import { InteraccionEstudiantes } from './pages/instructor/InteraccionEstudiantes';
import { MonitoreoProgreso } from './pages/instructor/MonitoreoProgreso';
import { GestionIncidencias } from './pages/support/GestionIncidencias';
import { OptimizacionRecursos } from './pages/support/OptimizacionRecursos';
import { ActualizacionIncidencias } from './pages/support/ActualizacionIncidencias';
import { GestionProveedores } from './pages/support/GestionProveedores';
import { ExploreCursos } from './pages/client/ExploreCursos.tsx';
import { MisCursos } from './pages/client/MisCursos.tsx';
import { MiProgreso } from './pages/client/MiProgreso.tsx';
import { MiPerfil } from './pages/client/MiPerfil.tsx';
import { Soporte } from './pages/client/Soporte.tsx';
import { MisResenas } from './pages/client/MisResenas.tsx';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['Administrador']}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/admin/usuarios" replace />} />
            <Route path="usuarios" element={<GestionUsuarios />} />
            <Route path="permisos" element={<ConfiguracionPermisos />} />
            <Route path="monitorizacion" element={<Monitorizacion />} />
            <Route path="respaldo" element={<RespaldoDatos />} />
          </Route>

          {/* Course Manager Routes */}
          <Route path="/gerente" element={
            <ProtectedRoute allowedRoles={['Gerente de Cursos']}>
              <ManagerLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/gerente/cursos" replace />} />
            <Route path="cursos" element={<GestionCursos />} />
            <Route path="reportes" element={<GenerarReportes />} />
            <Route path="instructores" element={<GestionInstructores />} />
            <Route path="evaluacion" element={<EvaluarContenido />} />
          </Route>

          {/* Instructor Routes */}
          <Route path="/instructor" element={
            <ProtectedRoute allowedRoles={['Instructor']}>
              <InstructorLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/instructor/contenido" replace />} />
            <Route path="contenido" element={<GestionContenido />} />
            <Route path="evaluaciones" element={<GestionEvaluaciones />} />
            <Route path="interaccion" element={<InteraccionEstudiantes />} />
            <Route path="progreso" element={<MonitoreoProgreso />} />
          </Route>

          {/* Support Routes */}
          <Route path="/soporte" element={
            <ProtectedRoute allowedRoles={['Soporte Técnico']}>
              <SupportLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/soporte/incidencias" replace />} />
            <Route path="incidencias" element={<GestionIncidencias />} />
            <Route path="recursos" element={<OptimizacionRecursos />} />
            <Route path="actualizacion" element={<ActualizacionIncidencias />} />
            <Route path="proveedores" element={<GestionProveedores />} />
          </Route>

          {/* Client Routes */}
          <Route path="/cliente" element={
            <ProtectedRoute allowedRoles={['Cliente']}>
              <ClientLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/cliente/cursos" replace />} />
            <Route path="cursos" element={<ExploreCursos />} />
            <Route path="mis-cursos" element={<MisCursos />} />
            <Route path="progreso" element={<MiProgreso />} />
            <Route path="perfil" element={<MiPerfil />} />
            <Route path="soporte" element={<Soporte />} />
            <Route path="resenas" element={<MisResenas />} />
          </Route>

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;