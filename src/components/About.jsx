import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container-fluid">

      <h2 className="section-title hidden">About Me</h2>

      <div className="row g-5 mt-3">

        <div className="col-12 col-md-7 hidden about-text">
          <p>I’m a growth-driven developer and aspiring entrepreneur who enjoys turning ideas into real products.</p>
          <p>Beyond development, I explore open source, cybersecurity, and AI.</p>
          <p>I enjoy taking initiative and building meaningful digital products.</p>
        </div>

        <div className="col-12 col-md-5 hidden delay-200">
          <div className="about-stack">
            <div className="stack-item">⚡ Growth-Driven</div>
            <div className="stack-item">🚀 Full-Stack Learner</div>
            <div className="stack-item">🛡 Security Explorer</div>
            <div className="stack-item">🧠 System Thinker</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;