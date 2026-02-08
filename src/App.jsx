import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import portfolioData from './data/portfolioData';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const { personal } = portfolioData;

function App() {
  const [activeSection, setActiveSection] = useState('About');

  const handleNavigate = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['about', 'education', 'experience', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const name = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
            setActiveSection(name);
          }
        }
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="main-content">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="footer">
          <p>&copy; 2026 {personal.name}. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
