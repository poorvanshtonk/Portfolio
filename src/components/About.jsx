import React from 'react';

const About = () => {
  const sectionStyle = {
    padding: '3.5rem 8%'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const textStyle = {
    color: '#e5e7eb',
    fontSize: '1rem',
    lineHeight: '1.6'
  };

  const stackContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  };

  const stackItemStyle = {
    background: '#0b1020',
    border: '1px solid rgba(255,255,255,0.06)',
    padding: '16px 20px',
    borderRadius: '14px',
    fontWeight: 500,
    transition: '0.3s ease'
  };

  return (
    <section id="about" style={sectionStyle} className="container-fluid">
      <h2 style={titleStyle} className="hidden">About Me</h2>

      <div className="row g-5 mt-3">

        {/* LEFT TEXT */}
        <div className="col-12 col-md-7 hidden" style={textStyle}>
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
        <div className="col-12 col-md-5 hidden delay-200">
          <div style={stackContainerStyle}>
            <div className="stack-item" style={stackItemStyle}>⚡ Growth-Driven</div>
            <div className="stack-item" style={stackItemStyle}>🚀 Full-Stack Learner</div>
            <div className="stack-item" style={stackItemStyle}>🛡 Exploring Cybersecurity</div>
            <div className="stack-item" style={stackItemStyle}>🧠 System-Oriented Thinker</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
