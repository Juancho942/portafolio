import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-accentOrange-500/30 selection:text-white">
      {/* Dynamic navbar container */}
      <Navbar />

      {/* Main pages container */}
      <main>
        {/* Hero entry section */}
        <Hero />
        
        {/* Detailed professional bio */}
        <AboutMe />
        
        {/* Skills Bento Box */}
        <Skills />
        
        {/* Vertical Experience Timeline */}
        <Experience />
        
        {/* Projects showcases */}
        <Projects />
        
        {/* Interactive Contact Form & Footer */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
