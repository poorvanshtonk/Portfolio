import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

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