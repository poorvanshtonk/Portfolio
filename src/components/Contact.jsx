import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section-title hidden">Contact</h2>

      <p className="contact-text hidden delay-100">
        Want to work together? Drop a message below 👇
      </p>

      <form className="contact-form hidden delay-200">
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>

        <textarea rows={5} placeholder="Your Message" required></textarea>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
