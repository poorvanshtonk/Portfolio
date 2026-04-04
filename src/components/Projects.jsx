import React from 'react';

const Projects = () => {
  const sectionStyle = {
    padding: '3.5rem 8%',
    background: 'radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 55%)'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const cardStyle = {
    background: '#0b1020',
    padding: '1.8rem',
    borderRadius: '20px',
    border: '1px solid rgba(148, 163, 184, 0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    transition: 'all 0.35s ease',
    height: '100%'
  };

  const badgeStyle = {
    fontSize: '0.7rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#60a5fa',
    background: 'rgba(59, 130, 246, 0.12)',
    padding: '4px 10px',
    borderRadius: '999px',
    width: 'fit-content',
    marginBottom: '4px'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#e2e8f0',
    margin: 0
  };

  const textStyle = {
    fontSize: '0.92rem',
    color: '#94a3b8',
    lineHeight: '1.6',
    maxWidth: '90%',
    margin: 0
  };

  const linkStyle = {
    marginTop: 'auto', // push to bottom if flex
    paddingTop: '10px',
    fontSize: '0.9rem',
    color: '#38bdf8',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.25s ease'
  };

  return (
    <section id="projects" style={sectionStyle} className="container-fluid">
      <h2 style={titleStyle} className="hidden">Projects Showcase</h2>

      <div className="row g-4 mt-3">

        <div className="col-12 col-md-6 col-lg-4 hidden delay-100" style={{ transitionDelay: '0ms' }}>
          <div className="project-card" style={cardStyle}>
            <div style={badgeStyle}>Security</div>
            <h3 style={cardTitleStyle}>Security Engineering</h3>
            <p style={textStyle}>Explore vulnerability analysis, security tools, and system protection projects.</p>
            <a href="/projects/security" className="project-link" style={linkStyle}><span>Explore Domain →</span></a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 hidden delay-200" style={{ transitionDelay: '100ms' }}>
          <div className="project-card" style={cardStyle}>
            <div style={badgeStyle}>Startup</div>
            <h3 style={cardTitleStyle}>Startups</h3>
            <p style={textStyle}>Real-world product building, experiments, and scalable ideas.</p>
            <a href="/projects/startup" className="project-link" style={linkStyle}><span>Explore Domain →</span></a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 hidden delay-300" style={{ transitionDelay: '200ms' }}>
          <div className="project-card" style={cardStyle}>
            <div style={badgeStyle}>AI</div>
            <h3 style={cardTitleStyle}>AI / ML</h3>
            <p style={textStyle}>Machine learning models and intelligent systems development.</p>
            <a href="/projects/ai" className="project-link" style={linkStyle}><span>Explore Domain →</span></a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 hidden delay-400" style={{ transitionDelay: '300ms' }}>
          <div className="project-card" style={cardStyle}>
            <div style={badgeStyle}>OSS</div>
            <h3 style={cardTitleStyle}>Open Source</h3>
            <p style={textStyle}>Community-driven contributions and collaborative development.</p>
            <a href="/projects/open-source" className="project-link" style={linkStyle}><span>Explore Domain →</span></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
