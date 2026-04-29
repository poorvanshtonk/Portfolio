import React from 'react';
import SectionArtwork from './SectionArtwork';

const Contact = () => {
  return (
    <section id="contact" className="section container-fluid">
      <SectionArtwork variant="contact" className="section-artwork-left" />

      <h2 className="section-title hidden">Contact</h2>

      <p className="contact-text hidden">
        Want to work together? Drop a message below 👇
      </p>

      <form 
        action="https://formsubmit.co/mr.poorvansh@gmail.com" 
        method="POST" 
        className="contact-form hidden" 
        style={{ maxWidth: "600px" }}
      >
        {/* Hidden inputs for FormSubmit configuration */}
        <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
        </div>

        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit" className="btn-primary-custom mt-3">Send Message</button>
      </form>

    </section>
  );
};

export default Contact;
