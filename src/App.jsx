import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import { Analytics } from "@vercel/analytics/react"; 
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const [introStage, setIntroStage] = useState('center'); 
  // center → move → done

  useEffect(() => {
    const triggerAnimation = () => {
      if (introStage === 'center') {
        setIntroStage('move');

        setTimeout(() => {
          setIntroStage('done');
        }, 900);
      }
    };

    window.addEventListener('wheel', triggerAnimation, { passive: true });
    window.addEventListener('touchmove', triggerAnimation, { passive: true });
    window.addEventListener('keydown', triggerAnimation);

    return () => {
      window.removeEventListener('wheel', triggerAnimation);
      window.removeEventListener('touchmove', triggerAnimation);
      window.removeEventListener('keydown', triggerAnimation);
    };
  }, [introStage]);

  /* ===== your existing observer (unchanged) ===== */
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const homePage = (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Connect />
      <Contact />
    </>
  );

  return (
    <>
      {/* 🔥 REAL MOVING INTRO */}
      {introStage !== 'done' && (
        <div className={`intro ${introStage}`}>
          <div className="intro-mark" aria-hidden="true">
            <span className="intro-orbit"></span>
            <h1 className="intro-text">Portfolio</h1>
          </div>
        </div>
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
      <Analytics />
    </>
  );
}

export default App;
