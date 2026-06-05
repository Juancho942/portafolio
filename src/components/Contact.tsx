import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate API request send
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Background glowing shape */}
      <div className="absolute -top-1/4 right-1/4 w-80 h-80 rounded-full bg-accentOrange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accentOrange-500">Contacto</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                ¿Hablamos de tu próximo proyecto?
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Tanto si necesitas optimizar una línea de producción industrial como si buscas construir una plataforma web moderna, mi perfil híbrido está listo para aportar valor.
              </p>
            </div>

            {/* Direct Contact info cards */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:proyectos@juandavidbetancurvalencia.com"
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accentOrange-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accentOrange-500/10 text-accentOrange-400 group-hover:bg-accentOrange-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Enviar un Correo</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    proyectos@juandavidbetancurvalencia.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+573115804302"
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Llamada / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    +57 311 580 4302
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card border border-white/5 relative">
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">¡Mensaje Enviado!</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Muchas gracias por contactarme, Juan David te responderá a la brevedad.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ej. John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm glass-input placeholder-slate-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl text-sm glass-input placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl text-sm glass-input placeholder-slate-600 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-accentOrange-600 to-accentOrange-500 hover:from-accentOrange-500 hover:to-accentOrange-600 text-white font-semibold py-3.5 rounded-xl text-sm shadow-glow-orange hover:shadow-glow-orange-strong transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
              
            </div>
          </div>

        </div>

        {/* Footer division */}
        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs">
          
          <div className="flex items-center space-x-1.5 font-display text-sm font-semibold tracking-wider text-slate-400">
            <span>JD</span>
            <span className="text-accentOrange-500 font-extrabold">BV</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accentOrange-500"></span>
          </div>

          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Juan David Betancur Valencia. Todos los derechos reservados.
          </div>

          {/* Footer Social icons (Prominent GitHub) */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Juancho942"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-9 h-9 rounded-xl bg-accentOrange-500/10 hover:bg-accentOrange-500 border border-accentOrange-500/30 hover:border-accentOrange-500 text-accentOrange-400 hover:text-white transition-all duration-300"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-david-betancur-valencia-132783393"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

        </footer>

      </div>
    </section>
  );
}
