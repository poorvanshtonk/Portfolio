import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section d-flex flex-column flex-md-row align-items-md-center justify-content-between">

      <div className="hero-text">
        <p className="tagline">👋 Hey, I’m</p>
        <h1>Poorvansh Tonk</h1>

        <p className="subtitle">
          A <span className="highlight">Growth-Driven</span> developer exploring full-stack systems,
          contributing to open source, diving into cybersecurity, and building impactful ideas with leadership at the core.
        </p>

        <div className="hero-buttons d-flex flex-column flex-md-row gap-3 mt-4">
          <a href="#projects" className="btn-primary-custom text-center">View Projects</a>
          <a href="#contact" className="btn-ghost-custom text-center">Let’s Talk</a>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-circle"></div>
        <div className="hero-inner">
          <img className="hero-photo-hover" src="/images/photo.jpeg" alt="profile" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
