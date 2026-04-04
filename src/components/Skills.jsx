import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h2 className="section-title hidden">Skills Summary</h2>

      <div className="skills-grid">

        {/* Programming */}
        <div className="skill-card hidden delay-100">
          <h3>Programming</h3>
          <div className="skill-tags">
            <span>JavaScript</span>
            <span>Python</span>
            {/* <span>Java</span>
            <span>C++</span> */}
          </div>
        </div>

        {/* Web Development */}
        <div className="skill-card hidden delay-200">
          <h3>Web Development</h3>
          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
          </div>
        </div>

        <div className="skill-card hidden delay-100">
          <h3>Cloud & DevOps</h3>
          <div className="skill-tags">
            <span>AWS</span>
            <span>Google Cloud</span>
            <span>Docker</span>
            <span>CI/CD</span>
            <span>GitHub Actions</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card hidden delay-300">
          <h3>Databases</h3>
          <div className="skill-tags">
            <span>MySQL</span>
            <span>PostgreSQL</span>
            {/* <span>MongoDB</span> */}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-card hidden delay-100">
          <h3>Tools & Platforms</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Netlify</span>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="skill-card hidden delay-200">
          <h3>Soft Skills</h3>
          <div className="skill-tags">
            <span>Problem Solving</span>
            <span>System Thinking</span>
            <span>Leadership</span>
            <span>Communication</span>
          </div>
        </div>

      </div>  
    </section>
  );
};

export default Skills;
