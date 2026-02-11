import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import MouseGradient from './components/MouseGradient';
import LoadingScreen from './components/LoadingScreen';
import portfolioData from './data/portfolioData';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

const { personal } = portfolioData;

function App() {
  const [activeSection, setActiveSection] = useState('About');
  const [loading, setLoading] = useState(true);

  const handleNavigate = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['about', 'education', 'experience', 'projects', 'certificates', 'contact'];

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

  // Preload the profile image and signal readiness to the loading screen
  useEffect(() => {
    const img = new Image();
    img.src = personal.avatarUrl;
    const signalReady = () => window.dispatchEvent(new Event('app-ready'));
    img.onload = signalReady;
    img.onerror = signalReady;
    // Fallback: signal ready after 4s even if image is still loading
    const fallback = setTimeout(signalReady, 4000);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      document.title = document.hidden ? "Where 'd You Go?" : 'Dhanshri Ahir';
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleLoadingFinished = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}
      <div className="app">
        <MouseGradient />
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="main-content">
          <About />
          <div className="section-divider" />
          <Education />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Certificates />
          <div className="section-divider" />
          <Contact />
        </main>
        <footer className="footer">
          <p>Made with <span className="footer-heart">&hearts;</span> by Dhanshri</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
