import React from 'react';

const Skills = () => {
  const sectionStyle = {
    padding: '100px 8%'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const cardStyle = {
    background: '#0b1020',
    padding: '1.2rem 1.4rem',
    borderRadius: '18px',
    border: '1px solid rgba(148, 163, 184, 0.18)',
    transition: 'all 0.3s ease',
    height: '100%'
  };

  const cardTitleStyle = {
    marginBottom: '18px',
    fontSize: '1.1rem',
    color: '#e5e7eb',
    fontWeight: 600
  };

  const tagContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  };

  const tagStyle = {
    background: 'rgba(59, 130, 246, 0.15)',
    color: '#3b82f6',
    padding: '6px 14px',
    borderRadius: '50px',
    fontSize: '0.85rem'
  };

  return (
    <section id="skills" style={sectionStyle} className="container-fluid">
      <h2 style={titleStyle} className="hidden">Skills Summary</h2>

      <div className="row g-4 mt-3">

        {/* Programming */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-100">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Programming</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>JavaScript</span>
              <span style={tagStyle}>Python</span>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-200">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Web Development</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>HTML</span>
              <span style={tagStyle}>CSS</span>
              <span style={tagStyle}>React</span>
              <span style={tagStyle}>Node.js</span>
              <span style={tagStyle}>Express</span>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-100">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Cloud & DevOps</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>AWS</span>
              <span style={tagStyle}>Google Cloud</span>
              <span style={tagStyle}>Docker</span>
              <span style={tagStyle}>CI/CD</span>
              <span style={tagStyle}>GitHub Actions</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-300">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Databases</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>MySQL</span>
              <span style={tagStyle}>PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-100">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Tools & Platforms</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>Git</span>
              <span style={tagStyle}>GitHub</span>
              <span style={tagStyle}>Vercel</span>
              <span style={tagStyle}>Netlify</span>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="col-12 col-md-6 col-lg-4 hidden delay-200">
          <div className="skill-card" style={cardStyle}>
            <h3 style={cardTitleStyle}>Soft Skills</h3>
            <div style={tagContainerStyle}>
              <span style={tagStyle}>Problem Solving</span>
              <span style={tagStyle}>System Thinking</span>
              <span style={tagStyle}>Leadership</span>
              <span style={tagStyle}>Communication</span>
            </div>
          </div>
        </div>

      </div>  
    </section>
  );
};

export default Skills;
