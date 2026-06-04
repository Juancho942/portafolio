import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Terminal, Hammer, 
  Globe, Cable, Network, Box, Drill
} from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 50, damping: 15 }
    }
  };

  const softwareSkills = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'NestJS', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'SQL', category: 'Database' },
    { name: 'C++', category: 'Embedded' },
    { name: 'Prisma', category: 'ORM' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
  ];

  const automationSkills = [
    { name: 'PLC Siemens', info: 'S7-1200 / S7-1500 / TIA Portal' },
    { name: 'SCADA', info: 'Control & Supervisión HMI' },
    { name: 'Mosquitto (MQTT)', info: 'Mensajería IoT Ligera' },
    { name: 'Protocolos', info: 'Modbus TCP/IP & Profinet' },
  ];

  const hardwareSkills = [
    { name: 'SolidWorks', category: 'CAD 3D' },
    { name: 'Inventor', category: 'CAD 3D' },
    { name: 'Impresión 3D', category: 'Prototipado' },
    { name: 'Planos Eléctricos', category: 'Esquemas' },
    { name: 'Sensores BME280', category: 'I2C / Telemetría' },
  ];

  return (
    <section id="habilidades" className="py-24 relative bg-[#090d16] bg-grid-pattern">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accentOrange-500">Mi Arsenal Técnico</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-2">
            Habilidades Especializadas
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Explora mis capacidades y herramientas agrupadas por mi experiencia en desarrollo y sistemas de control.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* Card 1: Software & Backend (6/12 columns on large screens) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-7 rounded-3xl glass-card border border-white/5 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-accentOrange-500/10 text-accentOrange-500">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Software & Backend</h3>
                    <p className="text-xs text-slate-500">Desarrollo de sistemas robustos y aplicaciones modernas</p>
                  </div>
                </div>
              </div>

              {/* Tag layout */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {softwareSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-accentOrange-500/30 text-slate-300 text-xs font-medium hover:text-white transition-all duration-200"
                  >
                    {skill.name}
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] text-slate-500 font-mono">
                      {skill.category}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Mock terminal code illustration */}
            <div className="rounded-2xl bg-slate-950/80 border border-white/5 p-4 font-mono text-[11px] text-slate-400">
              <div className="flex items-center space-x-1.5 mb-3 border-b border-white/5 pb-2">
                <Terminal size={12} className="text-slate-500" />
                <span className="text-[10px] text-slate-500">docker-compose.yml</span>
              </div>
              <div className="text-slate-500"># Docker stack local de desarrollo</div>
              <div><span className="text-emerald-400">services:</span></div>
              <div className="pl-4"><span className="text-emerald-400">backend:</span></div>
              <div className="pl-8">image: nestjs-api-service:latest</div>
              <div className="pl-8">environment:</div>
              <div className="pl-12">DATABASE_URL: "postgresql://postgres:***@db:5432/pos"</div>
              <div className="pl-4"><span className="text-emerald-400">database:</span></div>
              <div className="pl-8">image: postgres:15-alpine</div>
              <div className="pl-8">ports: [ "5432:5432" ]</div>
            </div>
          </motion.div>

          {/* Card 2: Automatización & IoT (5/12 columns on large screens) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 rounded-3xl glass-card border border-white/5 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Automatización & IoT</h3>
                  <p className="text-xs text-slate-500">Sistemas de control y comunicación industrial</p>
                </div>
              </div>

              {/* Stack list layout */}
              <div className="space-y-3.5 mb-6">
                {automationSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{skill.info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial pipeline flow visualization */}
            <div className="p-3 rounded-2xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-center relative overflow-hidden">
              <div className="flex flex-col items-center flex-1">
                <Network size={16} className="text-blue-400 mb-1" />
                <span className="text-[10px] text-slate-300 font-bold">PLC SIEMENS</span>
                <span className="text-[9px] text-slate-500 font-mono">Profinet</span>
              </div>
              <div className="h-[1px] bg-slate-800 flex-1 relative mx-2">
                <div className="absolute inset-0 bg-blue-500/30 animate-pulse" />
              </div>
              <div className="flex flex-col items-center flex-1">
                <Cable size={16} className="text-accentOrange-400 mb-1" />
                <span className="text-[10px] text-slate-300 font-bold">GATEWAY MQTT</span>
                <span className="text-[9px] text-slate-500 font-mono">Broker JSON</span>
              </div>
              <div className="h-[1px] bg-slate-800 flex-1 relative mx-2">
                <div className="absolute inset-0 bg-blue-500/30 animate-pulse" />
              </div>
              <div className="flex flex-col items-center flex-1">
                <Globe size={16} className="text-emerald-400 mb-1" />
                <span className="text-[10px] text-slate-300 font-bold">CLIENTE WEB</span>
                <span className="text-[9px] text-slate-500 font-mono">Websockets</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Diseño & Hardware (12/12 columns - Horizontal Layout) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-12 rounded-3xl glass-card border border-white/5 p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Info and list */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Hammer size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Diseño & Hardware</h3>
                  <p className="text-xs text-slate-500">Diseño mecánico CAD 3D y circuitos electrónicos</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {hardwareSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all"
                  >
                    <Box size={16} className="text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{skill.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{skill.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vector schematic illustration */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-slate-950/70 border border-white/5 relative overflow-hidden flex items-center justify-center p-6">
                
                {/* SVG Blueprint grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                {/* Simulated 3D Axis coordinates */}
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-emerald-400/50 flex flex-col">
                  <span>X: 145.2mm</span>
                  <span>Y: 82.7mm</span>
                  <span>Z: 12.0mm</span>
                </div>

                {/* Geometric blueprint rendering */}
                <svg className="w-36 h-36 text-emerald-500/70 relative z-10" viewBox="0 0 100 100">
                  {/* Axis lines */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />

                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
                  {/* Inner circle */}
                  <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />

                  {/* Animated rotating gear outline or gear teeth */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    style={{ originX: "50px", originY: "50px" }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={i}
                        d="M 46,6 L 54,6 L 52,14 L 48,14 Z"
                        fill="currentColor"
                        className="text-emerald-500/60"
                        transform={`rotate(${i * 45} 50 50)`}
                      />
                    ))}
                    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
                  </motion.g>

                  {/* Dimension lines */}
                  <line x1="50" y1="50" x2="77" y2="23" stroke="#f97316" strokeWidth="0.75" />
                  <circle cx="77" cy="23" r="1.5" fill="#f97316" />
                  <text x="80" y="22" fill="#f97316" fontSize="5" fontFamily="monospace">R38.0</text>

                  {/* Embedded mechanical node labels */}
                  <circle cx="50" cy="50" r="3" fill="#090d16" stroke="currentColor" strokeWidth="1" />
                </svg>

                <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2.5 py-1 text-[10px] text-emerald-400 font-semibold font-mono flex items-center space-x-1.5">
                  <Drill size={10} />
                  <span>CAD_ASSEMBLY_OK</span>
                </div>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
