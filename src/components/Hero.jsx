import React from 'react';

const Hero = () => {
  const sectionStyle = {
    padding: '4rem 8%',
  };

  const taglineStyle = {
    fontSize: '0.95rem',
    color: '#9ca3af',
    marginBottom: '0.4rem',
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0
  };

  const titleStyle = {
    fontSize: 'clamp(2.3rem, 4vw, 3rem)',
    marginBottom: '0.6rem',
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
    animationDelay: '0.2s',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    color: '#9ca3af',
    marginBottom: '1.5rem',
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
    animationDelay: '0.4s'
  };

  const highlightStyle = {
    color: '#38bdf8',
    fontWeight: 600
  };

  const buttonsStyle = {
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
    animationDelay: '0.6s'
  };

  const cardContainerStyle = {
    position: 'relative',
    maxWidth: '390px',
    animation: 'fadeInRight 1s ease-out forwards',
    opacity: 0,
    animationDelay: '0.4s'
  };

  const circleStyle = {
    width: '240px',
    height: '240px',
    borderRadius: '28px',
    background: 'radial-gradient(circle at 30% 30%, #22d3ee 0%, #6366f1 60%, transparent 80%)',
    border: '2px solid rgba(255, 255, 255, 0.05)',
    filter: 'blur(10px)',
    opacity: 0.55,
    transition: 'all 0.4s ease',
    margin: 'auto'
  };

  const innerStyle = {
    position: 'absolute',
    inset: '10% 6%',
    padding: '0.9rem',
    background: 'rgba(15, 23, 42, 0.92)',
    borderRadius: '28px',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    backdropFilter: 'blur(14px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'transform 0.4s ease'
  };

  const photoStyle = {
    width: '100%',
    aspectRatio: '1/1',
    objectFit: 'cover',
    borderRadius: '18px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
  };

  return (
    <section id="hero" style={sectionStyle} className="d-flex flex-column flex-md-row align-items-md-center justify-content-between overflow-hidden">
        
      {/* LEFT SIDE */}
      <div style={{maxWidth: '520px', width: '100%'}}>
        <p style={taglineStyle}>👋 Hey, I’m</p>

        <h1 style={titleStyle}>Poorvansh Tonk</h1>

        <p style={subtitleStyle}>
          A <span style={highlightStyle}>Growth-Driven</span> developer exploring full-stack systems, contributing to open source, diving into cybersecurity, and building impactful ideas with leadership at the core.
        </p>

        <div className="d-flex flex-column flex-md-row gap-3 mt-4" style={buttonsStyle}>
          <a href="#projects" className="btn-primary-custom text-center">View Projects</a>
          <a href="#contact" className="btn-ghost-custom text-center">Let’s Talk</a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={cardContainerStyle}>
        <div style={circleStyle}></div>
        <div style={innerStyle}>
          <img className="hero-photo-hover" style={photoStyle} src="/images/photo.jpeg" alt="Poorvansh Tonk" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
