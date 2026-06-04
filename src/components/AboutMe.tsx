import { motion } from 'framer-motion';
import { Cpu, Settings, Code, Zap } from 'lucide-react';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 60, damping: 15 },
    },
  };

  const keyStrengths = [
    {
      icon: <Cpu className="text-accentOrange-500" size={24} />,
      title: 'Diagnóstico de Hardware',
      description: 'Capacidad técnica avanzada para ejecutar el análisis, mantenimiento y diagnóstico preciso en sistemas electrónicos e industriales.',
    },
    {
      icon: <Settings className="text-blue-400" size={24} />,
      title: 'Sistemas de Control (IoT)',
      description: 'Diseño e integración de sistemas de automatización combinando sensores, actuadores y protocolos de red para conectar la industria.',
    },
    {
      icon: <Code className="text-emerald-400" size={24} />,
      title: 'Desarrollo de Software',
      description: 'Construcción de aplicaciones robustas, escalables y eficientes tanto a nivel de servidor (backend) como de interfaces (frontend).',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accentOrange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accentOrange-500">¿Quién soy?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                Uniendo el Hardware y el Software en una sola disciplina
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                Soy un <strong className="text-white">Ingeniero Mecatrónico</strong> con experiencia demostrable en Automatización Industrial, Soporte Técnico y Desarrollo de Software. Mi perfil híbrido me permite ejecutar con precisión el diagnóstico técnico de hardware, diseñar sistemas de control (IoT) y construir aplicaciones de software robustas para la gestión y optimización de procesos.
              </p>
              <p className="text-slate-400">
                A lo largo de mi carrera, he liderado proyectos de modernización de maquinaria industrial pesada y he creado soluciones lógicas de software para resolver cuellos de botella operativos en entornos logísticos. Disfruto diseñar y construir toda la vertical tecnológica de un producto: desde los sensores físicos hasta la interfaz web del usuario final.
              </p>
            </motion.div>

            {/* Quick stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3">
                <Zap size={20} className="text-accentOrange-500" />
                <div>
                  <div className="text-2xl font-bold text-white font-display">Hybrid</div>
                  <div className="text-xs text-slate-500">Full-Stack & PLC</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3">
                <Settings size={20} className="text-blue-400" />
                <div>
                  <div className="text-2xl font-bold text-white font-display">6+ Años</div>
                  <div className="text-xs text-slate-500">Experiencia Técnica</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key strength cards */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {keyStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                variants={itemVariants}
                custom={index}
                className="group relative p-6 rounded-2xl glass-card border border-white/5 hover:border-white/10 hover:bg-slate-900/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 border border-white/5 transition-colors">
                    {strength.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-white font-display">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
