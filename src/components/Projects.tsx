import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Server, Flame, Activity } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  visualMockup: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'JD POS - Sistema de Gestión',
      category: 'Desktop App & Frontend',
      description: 'Aplicación de escritorio de alto rendimiento para la gestión de puntos de venta e inventarios en tiempo real.',
      tags: ['Electron', 'React', 'TypeScript', 'TailwindCSS', 'Recharts'],
      githubUrl: '#',
      liveUrl: '#',
      visualMockup: (
        <div className="w-full h-full bg-[#0a0f1d] border border-white/5 rounded-2xl overflow-hidden flex flex-col font-sans p-3 text-slate-300">
          {/* Mock Window Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="text-[9px] font-mono text-slate-500 ml-2">jd-pos-desktop.exe</span>
            </div>
            <Monitor size={10} className="text-slate-600" />
          </div>
          
          {/* Mock Dashboard content */}
          <div className="flex-1 grid grid-cols-12 gap-2 text-[10px]">
            {/* Sidebar */}
            <div className="col-span-3 bg-slate-900/50 rounded-lg p-1.5 flex flex-col space-y-1">
              <div className="bg-accentOrange-500/10 text-accentOrange-400 font-bold px-1.5 py-0.5 rounded">Dashboard</div>
              <div className="px-1.5 py-0.5 text-slate-600 hover:text-slate-400">Ventas</div>
              <div className="px-1.5 py-0.5 text-slate-600 hover:text-slate-400">Inventario</div>
            </div>

            {/* Main Area */}
            <div className="col-span-9 space-y-2 flex flex-col justify-between">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-[#12192c] border border-white/5 p-1.5 rounded-lg">
                  <div className="text-slate-500 text-[8px]">Ventas Hoy</div>
                  <div className="font-bold text-white text-xs">$1,240 USD</div>
                </div>
                <div className="bg-[#12192c] border border-white/5 p-1.5 rounded-lg">
                  <div className="text-slate-500 text-[8px]">Stock Bajo</div>
                  <div className="font-bold text-red-400 text-xs">5 Items</div>
                </div>
              </div>
              
              {/* Graphic Chart bar illustration */}
              <div className="bg-[#12192c] border border-white/5 p-2 rounded-lg flex-1 flex flex-col justify-between">
                <div className="text-slate-500 text-[8px] mb-1">Rendimiento Semanal</div>
                <div className="flex items-end justify-between h-12 pt-2 px-1">
                  <div className="w-2.5 h-6 bg-slate-800 rounded-sm"></div>
                  <div className="w-2.5 h-10 bg-slate-800 rounded-sm"></div>
                  <div className="w-2.5 h-8 bg-slate-800 rounded-sm"></div>
                  <div className="w-2.5 h-12 bg-accentOrange-500 rounded-sm shadow-glow-orange"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Arquitectura Logística Backend',
      category: 'Backend & Database',
      description: 'API REST robusta orientada a microservicios para la gestión logística de importación y control de stocks.',
      tags: ['NestJS', 'Prisma ORM', 'PostgreSQL', 'Docker', 'JWT', 'REST API'],
      githubUrl: '#',
      visualMockup: (
        <div className="w-full h-full bg-[#030712] border border-white/5 rounded-2xl overflow-hidden flex flex-col font-mono p-3 text-[10px] text-slate-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-slate-600">
            <div className="flex items-center space-x-1.5">
              <Server size={10} className="text-emerald-400" />
              <span>NESTJS API SERVER</span>
            </div>
            <span className="text-[8px] bg-slate-900 px-1 py-0.5 rounded text-emerald-400">HTTP/2</span>
          </div>

          <div className="flex-1 space-y-2 flex flex-col justify-between">
            {/* Simulated Server Logs */}
            <div className="space-y-1 text-[9px] leading-tight">
              <div><span className="text-purple-400">[Nest]</span> 14036 - <span className="text-slate-500">06/04/2026 12:44:02 PM</span> <span className="text-emerald-400">LOG</span> [RoutesResolver] OrderController</div>
              <div><span className="text-green-400">GET /api/v1/inventory</span> - <span className="text-emerald-400">200 OK</span> - 12ms</div>
              <div><span className="text-amber-400">POST /api/v1/orders</span> - <span className="text-emerald-400">201 Created</span> - 24ms</div>
              <div><span className="text-red-400">POST /api/v1/auth/login</span> - <span className="text-red-400">401 Unauthorized</span> - 8ms</div>
            </div>

            {/* Docker Database Node status */}
            <div className="p-2 rounded-lg bg-slate-900/50 border border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-slate-300 font-bold">Postgres Container</span>
              </div>
              <span className="text-slate-500">Port: 5432</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Automatización Horno Industrial',
      category: 'Mechatronics & Control',
      description: 'Lógica operativa de control térmico e HMI para la modernización de la maquinaria Hitachi de cocción cerámica.',
      tags: ['PLC Siemens', 'TIA Portal', 'HMI SCADA', 'Variadores', 'Modbus TCP'],
      githubUrl: '#',
      visualMockup: (
        <div className="w-full h-full bg-[#0c101b] border border-white/5 rounded-2xl overflow-hidden flex flex-col p-3 font-sans relative">
          
          {/* HMI Screen Title */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-slate-300">
            <div className="flex items-center space-x-1.5">
              <Flame size={12} className="text-accentOrange-500" />
              <span className="text-[10px] font-bold tracking-wide">HMI HITACHI OVEN #3</span>
            </div>
            <div className="flex items-center space-x-1 text-[8px] bg-slate-900 px-1.5 py-0.5 rounded text-red-500 border border-red-500/20">
              <Activity size={8} className="animate-pulse" />
              <span>HOT</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-2.5 items-center">
            {/* Left circular gauge graphic inside HMI */}
            <div className="flex flex-col items-center justify-center p-1.5 bg-slate-950/40 rounded-xl border border-white/5 relative">
              
              {/* Circle Gauge SVG */}
              <svg className="w-16 h-16 text-slate-800" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  animate={{ strokeDasharray: ["65, 100", "78, 100", "65, 100"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="text-accentOrange-500"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono font-bold text-slate-100">420°C</span>
                <span className="text-[7px] text-slate-500">TEMP</span>
              </div>
            </div>

            {/* Right parameter fields inside HMI */}
            <div className="space-y-1.5 text-[9px] font-mono">
              <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex justify-between">
                <span className="text-slate-500">SetPoint:</span>
                <span className="text-slate-300">450°C</span>
              </div>
              <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex justify-between">
                <span className="text-slate-500">Presión:</span>
                <span className="text-emerald-400">1.2 bar</span>
              </div>
              <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex justify-between">
                <span className="text-slate-500">Extractor:</span>
                <span className="text-blue-400">85% RPM</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accentOrange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accentOrange-500">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-2">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Una selección de trabajos que demuestran mi experiencia en automatización de maquinaria física y desarrollo de sistemas de software.
          </p>
        </div>

        {/* Projects Grid (Responsive Cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group flex flex-col justify-between rounded-3xl glass-card border border-white/5 p-6 hover:bg-slate-900/30 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Visual Mockup Container (No placeholders) */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-300">
                  {project.visualMockup}
                </div>

                {/* Metadata */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accentOrange-500 bg-accentOrange-500/10 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white font-display mt-3 group-hover:text-accentOrange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1.5 text-slate-400 hover:text-white text-xs font-semibold transition-colors duration-200"
                    title="Código fuente en GitHub"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>Código</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-accentOrange-400 hover:text-accentOrange-500 text-xs font-semibold transition-colors duration-200"
                      title="Ver demostración"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
