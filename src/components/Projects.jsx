import React from 'react';

const Projects = () => {
  // Using React inline styles for transition delays instead of main.js manipulation
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title hidden">Projects Showcase</h2>

      <div className="project-grid">

        <div className="project-card hidden delay-100" style={{ transitionDelay: '0ms' }}>
          <div className="project-badge">Security</div>
          <h3>Security Engineering</h3>
          <p>Explore vulnerability analysis, security tools, and system protection projects.</p>
          <a href="/projects/security" className="project-link">Explore Domain →</a>
        </div>

        <div className="project-card hidden delay-200" style={{ transitionDelay: '100ms' }}>
          <div className="project-badge">Startup</div>
          <h3>Startups</h3>
          <p>Real-world product building, experiments, and scalable ideas.</p>
          <a href="/projects/startup" className="project-link">Explore Domain →</a>
        </div>

        <div className="project-card hidden delay-300" style={{ transitionDelay: '200ms' }}>
          <div className="project-badge">AI</div>
          <h3>AI / ML</h3>
          <p>Machine learning models and intelligent systems development.</p>
          <a href="/projects/ai" className="project-link">Explore Domain →</a>
        </div>

        <div className="project-card hidden delay-400" style={{ transitionDelay: '300ms' }}>
          <div className="project-badge">OSS</div>
          <h3>Open Source</h3>
          <p>Community-driven contributions and collaborative development.</p>
          <a href="/projects/open-source" className="project-link">Explore Domain →</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
