import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section-title hidden">About Me</h2>

      <div className="about-grid">

        {/* LEFT TEXT */}
        <div className="about-text hidden">
          <p>
            I’m a growth-driven developer and aspiring entrepreneur who enjoys turning ideas into real, working products.
          </p>
          <br />
          <p>
            Beyond development, I actively explore open source, cybersecurity, and AI to expand my technical perspective.
          </p>
          <br />
          <p>
            With an entrepreneurial mindset and leadership experience, I enjoy taking initiative and building meaningful digital products.
          </p>
        </div>

        {/* RIGHT STACK */}
        <div className="about-stack hidden delay-200">
          <div className="stack-item">⚡ Growth-Driven</div>
          <div className="stack-item">🚀 Full-Stack Learner</div>
          <div className="stack-item">🛡 Exploring Cybersecurity</div>
          <div className="stack-item">🧠 System-Oriented Thinker</div>
        </div>

      </div>
    </section>
  );
};

export default About;
