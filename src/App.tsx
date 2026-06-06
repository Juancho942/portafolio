import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-accentOrange-500/30 selection:text-white">
        {/* Global sticky header */}
        <Navbar />

        {/* Dynamic page routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Global contact section & footer */}
        <Contact />
      </div>
    </Router>
  );
}

export default App;
