import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Code2, Layers, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient z-0 pointer-events-none" />
      
      {/* Abstract background blur shapes */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accentOrange-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-accentOrange-500/10 border border-accentOrange-500/30 px-4 py-1.5 rounded-full w-fit"
          >
            <Sparkles size={14} className="text-accentOrange-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accentOrange-400">
              Perfil Híbrido: Hardware & Software
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display"
          >
            <span className="block text-gradient">Ingeniería Mecatrónica</span>
            <span className="block text-orange-gradient mt-1">& Desarrollo Full-Stack</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            <strong className="text-slate-200">Juan David Betancur Valencia</strong>. Transformando la complejidad industrial y tecnológica en soluciones eficientes. Desde la programación de PLCs hasta la arquitectura de software.
          </motion.p>

          {/* Actions & Social Handles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#proyectos"
              onClick={handleScrollToProjects}
              className="inline-flex justify-center items-center space-x-2 bg-gradient-to-r from-accentOrange-600 to-accentOrange-500 hover:from-accentOrange-500 hover:to-accentOrange-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-glow-orange hover:shadow-glow-orange-strong transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Ver Proyectos</span>
              <ArrowDown size={18} className="animate-bounce" />
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex justify-center items-center space-x-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Descargar CV</span>
            </a>

            {/* Social Icons (Prominent GitHub) */}
            <div className="flex items-center justify-center sm:justify-start space-x-4 sm:ml-4 mt-4 sm:mt-0">
              <a
                href="#"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-accentOrange-500/10 hover:bg-accentOrange-500 border border-accentOrange-500/30 hover:border-accentOrange-500 text-accentOrange-400 hover:text-white shadow-glow-orange hover:shadow-glow-orange-strong transition-all duration-300"
                aria-label="GitHub"
                title="GitHub Perfil"
              >
                <svg className="w-5.5 h-5.5 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="#"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
                title="LinkedIn Perfil"
              >
                <svg className="w-5.5 h-5.5 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Conceptual Bento Box Grid/Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-video lg:aspect-square flex items-center justify-center"
        >
          {/* Glassmorphism HMI / PLC Visualizer Card */}
          <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden glass-panel p-6 border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="text-xs font-mono text-slate-500">SYSTEM_MONITOR.log</div>
            </div>

            {/* Simulated industrial PLC monitor and HMI */}
            <div className="space-y-4">
              {/* Telemetry lights */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse mb-1"></div>
                  <span className="text-[10px] font-mono text-slate-400">PLC STATE</span>
                  <span className="text-[11px] font-mono font-bold text-slate-200">RUNNING</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accentOrange-500 animate-ping mb-1"></div>
                  <span className="text-[10px] font-mono text-slate-400">MQTT BROKER</span>
                  <span className="text-[11px] font-mono font-bold text-accentOrange-400">ONLINE</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mb-1"></div>
                  <span className="text-[10px] font-mono text-slate-400">HMI SCADA</span>
                  <span className="text-[11px] font-mono font-bold text-slate-200">CONNECTED</span>
                </div>
              </div>

              {/* IDE Code mock overlaid */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-white/10 font-mono text-[11px] md:text-xs text-slate-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-white/5">
                  <Code2 size={40} />
                </div>
                <div className="text-cyan-400">import <span className="text-slate-300">{"{ Controller }"}</span> from <span className="text-emerald-400">"@industrial/plc"</span>;</div>
                <div className="text-cyan-400">import <span className="text-slate-300">{"{ Client }"}</span> from <span className="text-emerald-400">"mqtt"</span>;</div>
                <div className="text-slate-500 mt-1">// Inicializar el Gateway IoT</div>
                <div><span className="text-purple-400">const</span> broker = Client.connect(<span className="text-emerald-400">"mqtt://localhost"</span>);</div>
                <div><span className="text-purple-400">const</span> ovenPlc = <span className="text-amber-400">new</span> <span className="text-yellow-300">Controller</span>(<span className="text-emerald-400">"192.168.1.10"</span>);</div>
                <div className="text-slate-500 mt-1">// Sincronización en tiempo real</div>
                <div>{"ovenPlc.on('temp_change', (temp) => {"}</div>
                <div className="pl-4">broker.publish(<span className="text-emerald-400">'factory/temp'</span>, temp);</div>
                <div className="pl-4"><span className="text-orange-400">ui.updateProgressBar</span>(temp);</div>
                <div>{"});"}</div>
              </div>

              {/* Graphic representations: CPU + Gears */}
              <div className="flex items-center justify-between bg-slate-900/40 border border-white/5 rounded-xl p-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accentOrange-500/10 text-accentOrange-400">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Hardware Gateway</div>
                    <div className="text-[10px] text-slate-500">Siemens S7-1200 + Modbus</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Stack de Software</div>
                    <div className="text-[10px] text-slate-500">React + NestJS + Docker</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge items */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-8 -right-4 bg-[#111c33]/90 backdrop-blur border border-white/10 rounded-2xl p-3 flex items-center space-x-2.5 shadow-xl"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
              <Cpu size={16} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-200">PLC SIEMENS</div>
              <div className="text-[9px] text-slate-500">Industrial Automation</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-[#111c33]/90 backdrop-blur border border-white/10 rounded-2xl p-3 flex items-center space-x-2.5 shadow-xl"
          >
            <div className="w-8 h-8 rounded-full bg-accentOrange-500/10 text-accentOrange-400 flex items-center justify-center">
              <Code2 size={16} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-200">FULL-STACK</div>
              <div className="text-[9px] text-slate-500">Node, React, NestJS</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
