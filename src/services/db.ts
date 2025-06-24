import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { User } from '../types/auth';

interface EduTechDB extends DBSchema {
  users: {
    key: number;
    value: User;
    indexes: { 'by-email': string };
  };
}

const DB_NAME = 'edutech-db';
const DB_VERSION = 1;

const defaultUsers = [
  {
    id: 1,
    nombre: "Ana Ruiz",
    email: "ana.ruiz@edutech.cl",
    password: "123",
    rol: "Administrador",
    estado: "activo",
    permisos: ["gestionar_usuarios", "configurar_permisos", "monitorizar_sistema", "respaldar_datos"]
  },
  {
    id: 2,
    nombre: "Carlos Soto",
    email: "carlos.soto@edutech.cl",
    password: "123",
    rol: "Gerente de Cursos",
    estado: "activo",
    permisos: ["gestionar_cursos", "generar_reportes", "gestionar_instructores", "evaluar_contenido"]
  },
  {
    id: 3,
    nombre: "Marcela Díaz",
    email: "marcela.diaz@edutech.cl",
    password: "123",
    rol: "Instructor",
    estado: "activo",
    permisos: ["crear_contenido", "gestionar_evaluaciones", "interactuar_estudiantes", "monitorear_progreso"]
  },
  {
    id: 4,
    nombre: "Roberto Núñez",
    email: "roberto.nunez@edutech.cl",
    password: "123",
    rol: "Soporte Técnico",
    estado: "activo",
    permisos: ["gestionar_incidencias", "optimizar_recursos", "actualizar_estado_incidencias", "gestionar_proveedores"]
  },
  {
    id: 5,
    nombre: "Laura Pérez",
    email: "laura.perez@gmail.com",
    password: "123",
    rol: "Cliente",
    estado: "activo",
    permisos: ["crear_cuenta", "iniciar_sesion", "buscar_cursos", "inscribirse", "consultar_progreso", "gestionar_perfil", "solicitar_soporte", "dejar_reseñas"]
  }
];

export async function initDB(): Promise<IDBPDatabase<EduTechDB>> {
  const db = await openDB<EduTechDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Create users store if it doesn't exist
      if (!db.objectStoreNames.contains('users')) {
        const userStore = db.createObjectStore('users', {
          keyPath: 'id',
          autoIncrement: true,
        });
        userStore.createIndex('by-email', 'email', { unique: true });

        // Initialize with default users
        defaultUsers.forEach(user => {
          userStore.add(user);
        });
      }
    },
  });

  return db;
}

let dbPromise: Promise<IDBPDatabase<EduTechDB>> | null = null;

export function getDB(): Promise<IDBPDatabase<EduTechDB>> {
  if (!dbPromise) {
    dbPromise = initDB();
  }
  return dbPromise;
}