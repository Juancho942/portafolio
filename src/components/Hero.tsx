import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import fotoPerfil from '../assets/foto-perfil.png';

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
              href="/CV_Juan_David_Betancur.pdf"
              download="CV_Juan_David_Betancur.pdf"
              className="inline-flex justify-center items-center space-x-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Descargar CV</span>
            </a>

            {/* Social Icons (Prominent GitHub) */}
            <div className="flex items-center justify-center sm:justify-start space-x-4 sm:ml-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/Juancho942"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.linkedin.com/in/juan-david-betancur-valencia-132783393"
                target="_blank"
                rel="noopener noreferrer"
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

        {/* Right Column: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' as const }}
          className="lg:col-span-5 relative flex justify-center items-center w-full mt-10 lg:mt-0"
        >
          <img
            src={fotoPerfil}
            alt="Juan David Betancur Valencia"
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)] z-10 relative"
          />
          {/* Efecto de brillo (blob) para integrar la imagen con el fondo oscuro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}
