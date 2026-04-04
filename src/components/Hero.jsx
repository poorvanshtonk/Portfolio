import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* LEFT SIDE */}
      <div className="hero-text">
        <p className="tagline">👋 Hey, I’m</p>

        <h1>Poorvansh Tonk</h1>

        {/* <div className="social-links">
          <a className="social-link github" href="https://github.com/poorvanshtonk" target="_blank" rel="noreferrer">
            <img src="/images/Github.jpeg" alt="GitHub" />
          </a>
          <a className="social-link linkedin" href="https://www.linkedin.com/in/poorvansh-tonk-7170b8366/" target="_blank" rel="noreferrer">
            <img src="/images/Linkedin.jpeg" alt="LinkedIn" />
          </a>
        </div> */}

        <p className="subtitle">
          A <span className="highlight">Growth-Driven</span> developer exploring full-stack systems, contributing to open source, diving into cybersecurity, and building impactful ideas with leadership at the core.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Let’s Talk</a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-card">
        <div className="hero-circle"></div>
        <div className="hero-inner">
          <img className="hero-photo" src="/images/photo.jpeg" alt="Poorvansh Tonk" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
