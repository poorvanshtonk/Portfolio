import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerStyle = {
    padding: '1.4rem 8%',
    borderTop: '1px solid #1f2937',
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#6b7280'
  };

  return (
    <footer style={footerStyle}>
      <p className="m-0">© <span id="year">{year}</span> Poorvansh Tonk. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
