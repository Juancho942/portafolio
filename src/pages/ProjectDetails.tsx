import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Cpu, CheckCircle2, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (id !== 'jd-pos') {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-[#090d16] text-center px-6">
        <HelpCircle size={64} className="text-accentOrange-500 mb-4 animate-bounce" />
        <h1 className="text-2xl md:text-3xl font-bold font-display text-white">Proyecto No Encontrado</h1>
        <p className="text-slate-400 mt-2 max-w-md">El caso de estudio solicitado no existe o está en desarrollo.</p>
        <Link 
          to="/" 
          className="mt-6 inline-flex items-center space-x-2 bg-accentOrange-500 hover:bg-accentOrange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Volver al Portafolio</span>
        </Link>
      </div>
    );
  }

  const techStack = {
    frontend: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Recharts'],
    backend: ['FastAPI (Python)', 'Uvicorn'],
    database: ['PostgreSQL'],
    runtime: ['Electron'],
    infra: ['electron-builder', 'NSIS installer']
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-300 pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-accentOrange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md backdrop-blur-md"
          >
            <ArrowLeft size={14} className="text-accentOrange-500" />
            <span>Volver al Portafolio</span>
          </Link>
        </motion.div>

        {/* Hero Section of the Case Study */}
        <header className="space-y-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-accentOrange-500/10 border border-accentOrange-500/30 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-accentOrange-400"
          >
            <Cpu size={12} />
            <span>Caso de Estudio de Arquitectura</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight"
          >
            JD POS – Sistema de Punto de Venta <br/>
            <span className="text-orange-gradient">de Grado Institucional</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans"
          >
            Orquestación híbrida de escritorio y base de datos relacional PostgreSQL local empaquetados en un solo runtime offline distribuible.
          </motion.p>
        </header>

        {/* Project Metadata Stats Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-card border border-white/5 mb-12 text-left"
        >
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Rol</div>
            <div className="text-sm font-semibold text-white mt-1">Tech Lead & Architect</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Categoría</div>
            <div className="text-sm font-semibold text-white mt-1">Desktop Application</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Tipo de Cliente</div>
            <div className="text-sm font-semibold text-white mt-1">Retail / Comercial</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Licencia</div>
            <div className="text-sm font-semibold text-white mt-1">Propietaria</div>
          </div>
        </motion.div>

        {/* Case Study Content */}
        <article className="space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
          
          {/* Section 1: Executive Summary */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-accentOrange-500"></span>
              <span>1. Resumen Ejecutivo</span>
            </h2>
            <p>
              <strong>JD POS</strong> es una solución de escritorio robusta diseñada para la gestión integral de operaciones comerciales de retail e inventarios en tiempo real. En la industria, las fallas de conexión a internet o la latencia de servicios en la nube representan pérdidas económicas críticas; por ello, este sistema fue ideado bajo la premisa de <strong>funcionamiento 100% offline</strong> sin sacrificar la robustez transaccional de una gran base de datos.
            </p>
            <p>
              Como <strong>Tech Lead y Arquitecto</strong>, mi rol principal fue diseñar un ecosistema donde la lógica de negocio (Backend en Python), la persistencia de datos (PostgreSQL) y la interfaz de usuario (React) coexistieran en un único instalador ejecutable, garantizando estabilidad operativa y capacidades offline.
            </p>
          </section>

          {/* Section 2: Tech Stack Grid */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-blue-500"></span>
              <span>2. Stack Tecnológico</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-accentOrange-400 uppercase tracking-wider mb-2">Frontend & Client</div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.frontend.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Backend Services</div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.backend.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Base de Datos</div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.database.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Runtime & Empaquetado</div>
                <div className="flex flex-wrap gap-1.5">
                  {[...techStack.runtime, ...techStack.infra].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Architecture diagram */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-emerald-500"></span>
              <span>3. Arquitectura del Sistema</span>
            </h2>
            <p>
              El software sigue una **Arquitectura de Procesos Orquestados** a nivel local, dividida en tres capas concurrentes:
            </p>
            
            {/* Visual ASCII Diagram */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 font-mono text-xs text-slate-400 space-y-3 overflow-x-auto">
              <div>+-------------------------------------------------------------+</div>
              <div>|                       ELECTRON RUNTIME                      |</div>
              <div>|  +------------------+  http://127.0.0.1  +---------------+  |</div>
              <div>|  | Renderer Process | &lt;=================&gt; | local server  |  |</div>
              <div>|  |  (React Client)  |   (REST API)   | (FastAPI Core)|  |</div>
              <div>|  +------------------+                    +---------------+  |</div>
              <div>|          ||                                      ||         |</div>
              <div>|          || (IPC Channel)                        ||         |</div>
              <div>|  +------------------+                            || (SQL)   |</div>
              <div>|  |   Main Process   |                            ||         |</div>
              <div>|  | (OS Coordinator) |                            \/         |</div>
              <div>|  +------------------+                    +---------------+  |</div>
              <div>|          || (Orquestador binario)        |  PostgreSQL   |  |</div>
              <div>|          ==============================&gt; |  Database     |  |</div>
              <div>+-------------------------------------------------------------+</div>
            </div>

            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start text-sm">
                <CheckCircle2 size={16} className="text-accentOrange-500 mt-1 mr-2.5 flex-shrink-0" />
                <span><strong>Main Process (Electron):</strong> Actúa como controlador de bajo nivel del sistema operativo. Coordina la inicialización de los servicios de apoyo y controla las ventanas.</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 size={16} className="text-accentOrange-500 mt-1 mr-2.5 flex-shrink-0" />
                <span><strong>Servidor de Aplicación Local (FastAPI):</strong> Levantado en un puerto efímero. Gestiona las consultas pesadas, autenticación y lógica de facturación local.</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 size={16} className="text-accentOrange-500 mt-1 mr-2.5 flex-shrink-0" />
                <span><strong>Renderer Process (React):</strong> Interfaz fluida y responsiva que consume el API de la lógica local, logrando una experiencia fluida de SPA.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Main Features */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-purple-500"></span>
              <span>4. Características Principales</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Ciclo de Vida Autónomo</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  El sistema empaquetado inicia y apaga de forma transparente la base de datos PostgreSQL local y el backend Python sin que el usuario tenga interacción con terminales o dependencias adicionales.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Persistencia Local Segura</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Utiliza una base de datos relacional embebida con scripts automatizados de respaldo diario local para garantizar la integridad física de las ventas registradas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Router SPA Nativo</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Navegación interna sumamente rápida gracias al acoplamiento de componentes desacoplados de persistencia global que previenen reinicializaciones de datos de sesión.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Seguridad y Empaquetado</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cifrado del código fuente en formato ASAR y creación de instaladores autoejecutables guiados (NSIS) para una instalación libre de configuraciones manuales de red.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Technical Challenges */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-amber-500"></span>
              <span>5. Desafíos Técnicos y Soluciones</span>
            </h2>

            <div className="space-y-4">
              {/* Challenge A */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">Desafío A</span>
                  <h3 className="font-bold text-white text-sm sm:text-base">Políticas de Chromium & Pantalla Blanca</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Al empaquetar en producción, Electron intentaba cargar los recursos estáticos desde esquemas <code>file://</code>. Esto causaba fallas en las rutas dinámicas y bloqueos de seguridad por CORS, resultando en pantallas en blanco inesperadas al iniciar el ejecutable.
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Solución:</strong> Desarrollé un servidor HTTP local efímero embebido en el Main Process que sirve los recursos compilados de producción a través de la dirección <code>http://127.0.0.1</code> en un puerto aleatorio libre, evadiendo las restricciones CORS de Chromium de forma segura.
                  </span>
                </div>
              </div>

              {/* Challenge B */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">Desafío B</span>
                  <h3 className="font-bold text-white text-sm sm:text-base">Orquestación Silenciosa de Binarios</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Para el funcionamiento offline, la aplicación requiere arrancar simultáneamente el servidor FastAPI y el servicio de PostgreSQL en la máquina del usuario final. Abrir ventanas de terminal o consolas de comando flotantes resultaba molesto e inaceptable para la experiencia del usuario comercial.
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Solución:</strong> Creé un <code>DBManager</code> nativo en Node.js que orquesta e invoca los binarios compilados de Python y Postgres usando <code>child_process.execFile</code> con el flag <code>windowsHide: true</code>. Esto ejecuta los subprocesos de manera invisible y gestiona automáticamente los puertos de red del host local.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Impact & Conclusion */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-slate-500"></span>
              <span>6. Conclusión e Impacto</span>
            </h2>
            <p>
              La implementación de <strong>JD POS</strong> resultó en un sistema de escritorio altamente estable, capaz de procesar facturas e inventario con latencia prácticamente nula. Al evitar los servidores en la nube para las operaciones críticas de venta diaria, eliminamos el costo mensual de mantenimiento del servidor y redujimos los cuellos de botella por pérdida de conectividad local a cero.
            </p>
            <p>
              Este proyecto demuestra mi habilidad para abordar retos de infraestructura profunda, orquestación de subprocesos nativos del sistema operativo y diseño de interfaces que combinan la potencia local con la flexibilidad del desarrollo web moderno.
            </p>
          </section>

        </article>

        {/* Bottom footer contact back button CTA */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accentOrange-600 to-accentOrange-500 hover:from-accentOrange-500 hover:to-accentOrange-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-glow-orange hover:shadow-glow-orange-strong transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            <span>Volver al Portafolio</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
