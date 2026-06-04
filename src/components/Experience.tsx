import { motion } from 'framer-motion';
import { Calendar, Cpu, Truck, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
  tags: string[];
  color: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Tecnólogo en Mecatrónica',
      company: 'TDMEK S.A.S',
      period: 'Sept 2024 - Ene 2025',
      description: 'Liderazgo técnico en proyectos críticos de automatización industrial y renovación de maquinaria de alta precisión.',
      icon: <Cpu className="text-accentOrange-500" size={20} />,
      bulletPoints: [
        'Lideré el diagnóstico y la actualización completa del sistema de control para maquinaria industrial HITACHI (Planta Hitachi).',
        'Diseñé y programé secuencias operativas utilizando PLCs Siemens (TIA Portal) optimizando el rendimiento.',
        'Configuré e integré Variadores de Frecuencia y sensores para control de velocidad y posicionamiento de precisión.'
      ],
      tags: ['PLC Siemens', 'TIA Portal', 'Variadores de Frecuencia', 'Maquinaria Hitachi', 'Automatización'],
      color: 'border-accentOrange-500/30'
    },
    {
      role: 'Jefe de Logística',
      company: 'Importadora CCI',
      period: 'Oct 2018 - Sept 2024',
      description: 'Gestión técnica y administrativa de operaciones de inventario, combinando soporte industrial con soluciones de software personalizadas.',
      icon: <Truck className="text-blue-400" size={20} />,
      bulletPoints: [
        'Brindé soporte técnico para equipos industriales de importación, asegurando la continuidad operativa.',
        'Desarrollé y programé macros complejas en VBA para automatizar la gestión y control de inventarios.',
        'Logré una reducción drástica en tiempos de respuesta administrativa mediante la digitalización de reportes.',
        'Coordiné el flujo logístico de entrada y salida de mercancías optimizando la distribución local.'
      ],
      tags: ['Soporte Técnico', 'VBA / Macros', 'Gestión de Inventarios', 'Optimización de Procesos', 'Logística'],
      color: 'border-blue-500/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -40 : 40 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring' as const, stiffness: 50, damping: 15 }
    }
  });

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accentOrange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-accentOrange-500">Mi Trayectoria</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-2">
            Experiencia Laboral
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Historial profesional donde convergen la ingeniería industrial de campo y el desarrollo de herramientas lógicas.
          </p>
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical central bar (visible on desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 hidden md:block">
            {/* Illuminated glowing part of the line */}
            <div className="absolute inset-0 bg-gradient-to-b from-accentOrange-500 via-blue-500 to-transparent w-full rounded-full" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={exp.company} 
                  className={`relative flex flex-col md:flex-row md:items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-8 md:left-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      index === 0 ? 'bg-accentOrange-500' : 'bg-blue-400'
                    }`} />
                  </div>

                  {/* Empty Spacer Column for Desktop Grid Alignment */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Content Card Column */}
                  <motion.div
                    variants={cardVariants(index)}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8"
                  >
                    <div className={`p-6 md:p-8 rounded-3xl glass-card border ${exp.color} hover:bg-slate-900/35 relative transition-all duration-300`}>
                      
                      {/* Top Header Card Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-3.5">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white font-display leading-tight">
                              {exp.role}
                            </h3>
                            <div className="text-sm font-semibold text-slate-400 mt-0.5">
                              {exp.company}
                            </div>
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full font-medium w-fit sm:self-start">
                          <Calendar size={12} className="text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Main Paragraph Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Accomplishments Bullet Points */}
                      <ul className="space-y-2.5 mb-6">
                        {exp.bulletPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start text-xs text-slate-400 leading-relaxed">
                            <CheckCircle2 size={14} className="text-accentOrange-500 mt-0.5 mr-2.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags Footer */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/5 text-[10px] font-mono text-slate-400 hover:text-white transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
