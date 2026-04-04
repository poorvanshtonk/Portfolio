import React from 'react';

const Contact = () => {
  const sectionStyle = {
    padding: '3.5rem 8%'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const textStyle = {
    color: '#9ca3af',
    maxWidth: '520px',
    marginBottom: '1.5rem'
  };

  const inputStyle = {
    padding: '0.8rem 1rem',
    borderRadius: '12px',
    border: '1px solid #4b5563',
    background: '#020617',
    color: '#e5e7eb',
    fontFamily: 'inherit',
    fontSize: '0.95rem'
  };

  return (
    <section id="contact" style={sectionStyle} className="container-fluid">
      <h2 style={titleStyle} className="hidden">Contact</h2>

      <p className="hidden delay-100" style={textStyle}>
        Want to work together? Drop a message below 👇
      </p>

      <form className="hidden delay-200" style={{ maxWidth: '620px' }}>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-6">
            <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="Your Name" required />
          </div>
          <div className="col-12 col-md-6">
            <input type="email" className="form-control shadow-none" style={inputStyle} placeholder="Your Email" required />
          </div>
        </div>

        <div className="mb-3">
          <textarea className="form-control shadow-none" style={{...inputStyle, resize: 'vertical'}} rows={5} placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="btn-primary-custom">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
