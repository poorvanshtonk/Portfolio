import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© <span id="year">{year}</span> Poorvansh Tonk. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
