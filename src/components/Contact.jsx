import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section container-fluid">

      <h2 className="section-title hidden">Contact</h2>

      <p className="contact-text hidden">
        Want to work together? Drop a message below 👇
      </p>

      <form className="contact-form hidden" style={{ maxWidth: "600px" }}>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" placeholder="Your Email" required />
          </div>
        </div>

        <textarea rows="5" placeholder="Your Message" required></textarea>

        <button className="btn-primary-custom">Send Message</button>
      </form>

    </section>
  );
};

export default Contact;