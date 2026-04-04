import React from 'react';

const Connect = () => {
  const sectionStyle = {
    padding: '100px 8%'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const textStyle = {
    color: '#cbd5e1',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    maxWidth: '500px'
  };

  const iconContainerStyle = {
    marginTop: '30px',
    display: 'flex',
    gap: '24px'
  };

  const iconLinkStyle = {
    width: '46px',
    height: '46px',
    padding: '10px',
    borderRadius: '14px',
    background: '#0f1a2f',
    border: '1px solid rgba(255,255,255,0.06)',
    color: '#94a3b8',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };

  return (
    <section id="connect" style={sectionStyle} className="container-fluid">
      <h2 style={titleStyle} className="hidden">Let’s Connect</h2>

      <div className="row g-5 align-items-center mt-3">

        <div className="col-12 col-md-7 hidden">
          <p style={textStyle}>
            Interested in collaborating, hiring, or discussing ideas?
            Let’s connect and build something impactful.
          </p>

          <div style={iconContainerStyle}>
            <a href="https://github.com/poorvanshtonk" target="_blank" rel="noopener noreferrer" className="icon-link" style={iconLinkStyle}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '100%', height: '100%'}}>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55
                0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.27-1.7-1.27-1.7
                -1.04-.72.08-.71.08-.71 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24
                3.33.95.1-.74.4-1.24.73-1.52-2.56-.29-5.25-1.28-5.25-5.7
                0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.5.11-3.13 0 0 .97-.31 3.18 1.18
                .92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39
                2.21-1.49 3.18-1.18 3.18-1.18.62 1.63.23 2.83.11 3.13
                .73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68
                .41.36.77 1.09.77 2.2 0 1.59-.01 2.87-.01 3.26
                0 .3.2.66.79.55C20.21 21.42 23.5 17.1 23.5 12
                23.5 5.65 18.35.5 12 .5z"/>
                </svg>
            </a>
            <a href="https://linkedin.com/in/poorvansh-tonk-7170b8366/" target="_blank" rel="noopener noreferrer" className="icon-link" style={iconLinkStyle}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '100%', height: '100%'}}>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5
                1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5
                0h4.78v2.2h.07c.67-1.27 2.3-2.6 4.74-2.6
                5.07 0 6 3.34 6 7.67V24h-5v-7.47c0-1.78-.03-4.08-2.5-4.08
                -2.5 0-2.88 1.95-2.88 3.95V24h-5V8z"/>
                </svg>
            </a>

            <a href="mailto:poorvanshtonk@gmail.com" className="icon-link" style={iconLinkStyle}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '100%', height: '100%'}}>
                <path d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2
                c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13
                22 6.01V6H2zm20 12V8l-10 7L2 8v10h20z"/>
            </svg>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-5 d-flex justify-content-start justify-content-md-end hidden delay-200">
          <a href="/resume.pdf" className="btn-primary-custom large text-center" download>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Connect;
