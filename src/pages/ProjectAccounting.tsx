import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectAccounting() {

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const techStack = {
    frontend: ['React.js', 'Vite', 'TypeScript', 'Material UI', 'Zustand'],
    backend: ['Node.js', 'NestJS'],
    database: ['PostgreSQL', 'Prisma ORM'],
    devops: ['API Resend', 'PM2', 'VPS Linux']
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
            Sistema de Gestión ERP <br/>
            <span className="text-orange-gradient">para Firma de Contaduría</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans"
          >
            Plataforma ERP centralizada de alta seguridad para la automatización fiscal, control de expedientes documentales y portales de autoservicio cliente/contador.
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
            <div className="text-sm font-semibold text-white mt-1">Backend & Cloud</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Infraestructura</div>
            <div className="text-sm font-semibold text-white mt-1">Linux VPS & PM2</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Base de Datos</div>
            <div className="text-sm font-semibold text-white mt-1">PostgreSQL + Prisma</div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-[#0b0f1d] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">El Problema</div>
                <p className="text-xs leading-relaxed text-slate-400">
                  Gestión fragmentada de clientes de contaduría, trazabilidad completamente manual de los vencimientos fiscales calendarios y distribución insegura de documentos financieros confidenciales por email o chats comunes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0f1d] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">La Solución</div>
                <p className="text-xs leading-relaxed text-slate-400">
                  Una plataforma ERP centralizada e integrada que automatiza dinámicamente el calendario fiscal de obligaciones, estandariza la subida de expedientes documentales bajo especificaciones de seguridad y unifica las notificaciones.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0f1d] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Mi Rol</div>
                <p className="text-xs leading-relaxed text-slate-400">
                  <strong>Arquitecto Full-Stack y Tech Lead</strong>. Lideré el diseño de la arquitectura modular y el modelo relacional físico en PostgreSQL, el desarrollo de APIs robustas en NestJS, y la refactorización integral del Frontend a layouts mobile-first.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Tech Stack Grid */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-blue-500"></span>
              <span>2. Stack Tecnológico</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-accentOrange-400 uppercase tracking-wider mb-2">Frontend Stack</div>
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
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Base de Datos & ORM</div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.database.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Infraestructura & DevOps</div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.devops.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Architecture detail */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center space-x-2">
              <span className="w-1.5 h-6 rounded bg-emerald-500"></span>
              <span>3. Arquitectura del Sistema</span>
            </h2>
            <p>
              El ERP fue construido sobre un **Modelo Cliente-Servidor Desacoplado** guiado por principios RESTful y patrones de diseño SOLID, lo que facilita el mantenimiento y escalamiento de módulos individuales:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start text-sm">
                <CheckCircle2 size={16} className="text-accentOrange-500 mt-1 mr-2.5 flex-shrink-0" />
                <span><strong>Seguridad Perimetral Stateless:</strong> Flujos de autenticación stateless implementando tokens web JSON (JWT) con control de acceso basado en roles jerárquicos (RBAC), impidiendo accesos cruzados de datos de inquilinos.</span>
              </li>
              <li className="flex items-start text-sm">
                <CheckCircle2 size={16} className="text-accentOrange-500 mt-1 mr-2.5 flex-shrink-0" />
                <span><strong>Gestión de Carga Asíncrona:</strong> Procesamiento por lotes (Batch) y encolamiento inteligente de promesas para operaciones pesadas de cálculo fiscal grupal, manteniendo el hilo del servidor libre y evitando bloqueos de Event Loop.</span>
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
                <div className="font-bold text-white text-sm">Calendario Fiscal Dinámico</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Motor inteligente de alertas que calcula dinámicamente los vencimientos tributarios de cada empresa basándose en su identificación fiscal, reduciendo omisiones tributarias.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Bóveda Documental ISO</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Estructuración estandarizada para archivar extractos, balances y liquidaciones de impuestos, manteniendo conformidad de auditoría interna y nomenclatura uniforme.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Panel Híbrido Multi-Rol</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vistas personalizadas según el perfil: los Administradores gestionan la asignación de cuentas, los Contadores cargan datos tributarios y los Clientes descargan certificados.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="font-bold text-white text-sm">Importador de Datos Excel</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lector de planillas en memoria capaz de procesar y validar miles de registros contables masivos con reporte de errores amigable al usuario en tiempo real.
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
              {/* Challenge 1 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">Desafío 1</span>
                  <h3 className="font-bold text-white text-sm sm:text-base">Seguridad en Acceso a Documentación Financiera Sensible</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Para evitar fugas de datos, los balances de los clientes no podían almacenarse en carpetas públicas accesibles mediante URLs estáticas. No obstante, las descargas y previsualizaciones debían ser rápidas, evitando sobrecargar el servidor backend de streaming continuo.
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Solución:</strong> Diseñé un flujo de acceso mediado por el servidor NestJS que genera URLs de almacenamiento firmadas temporalmente con expiración de 5 minutos, validadas estrictamente a nivel de API mediante tokens JWT según el rol del usuario que ejecuta la consulta.
                  </span>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">Desafío 2</span>
                  <h3 className="font-bold text-white text-sm sm:text-base">UX/UI de Tablas Complejas en Pantallas Móviles</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  El calendario fiscal requiere mostrar tablas matriciales de alta densidad con más de 13 columnas (meses, obligaciones, estados de pago). En dispositivos móviles de clientes, el renderizado de estas tablas rompía el DOM y causaba desbordes horizontales del layout global, haciendo inutilizable la aplicación.
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Solución:</strong> Implementé un patrón Mobile-First Híbrido. En smartphones, las filas de las tablas se renderizan dinámicamente como tarjetas de estado expandibles e interactivas. Para matrices de datos densas que requerían vista de tabla original, agregué contenedores con la propiedad CSS <code>-webkit-overflow-scrolling: 'touch'</code> logrando desplazamiento nativo fluido sin afectar el grid de la aplicación.
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
              El despliegue de esta plataforma ERP centralizada trajo consigo una **reducción del 80% en los tiempos de búsqueda** física y digital de carpetas de clientes por parte de los contadores. Además, la tasa de errores de navegación y consultas de soporte disminuyó notablemente, habilitando un portal de auto-servicio accesible las 24 horas del día.
            </p>
            <p>
              Este proyecto resalta mi capacidad para conceptualizar arquitecturas cliente-servidor robustas y escalables y mi enfoque para resolver problemas de accesibilidad móvil en aplicaciones empresariales densas.
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
