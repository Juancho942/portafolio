import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-darkBg/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, '#root')}
          className="flex items-center space-x-2 font-display text-2xl font-bold tracking-wider"
        >
          <span className="text-white">JD</span>
          <span className="text-accentOrange-500 font-extrabold">BV</span>
          <span className="h-2 w-2 rounded-full bg-accentOrange-500 animate-pulse"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-slate-300 hover:text-accentOrange-500 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:proyectos@juandavidbetancurvalencia.com"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accentOrange-600 to-accentOrange-500 hover:from-accentOrange-500 hover:to-accentOrange-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-glow-orange hover:shadow-glow-orange-strong transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare size={16} />
            <span>Contactar</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel border-b border-white/5 bg-darkBg/95 backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-slate-300 hover:text-accentOrange-500 text-lg font-medium tracking-wide transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:proyectos@juandavidbetancurvalencia.com"
                className="flex items-center justify-center space-x-2 bg-accentOrange-500 hover:bg-accentOrange-600 text-white font-semibold px-6 py-3 rounded-xl text-center shadow-lg transition-all duration-200"
              >
                <MessageSquare size={18} />
                <span>Contactar</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
