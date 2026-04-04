import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 2000,
    background: 'rgba(5, 8, 22, 0.92)',
    backdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.25)',
    animation: 'popIn 0.6s ease-out forwards',
  };

  const logoStyle = {
    fontWeight: 700,
    fontSize: '1.3rem',
    letterSpacing: '1px',
    color: 'white'
  };

  const navLinksStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '1.5rem'
  };

  const mobileNavStyle = {
    position: 'fixed',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'rgba(5, 8, 22, 0.98)',
    backdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.25)',
    padding: '30px 0',
    zIndex: 9999,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
    display: isActive ? 'flex' : 'none'
  };

  return (
    <header className="d-flex justify-content-between align-items-center px-3 px-md-5 py-3" style={headerStyle}>
      <div className="d-md-none text-white fs-4" style={{cursor: 'pointer'}} onClick={toggleMenu}>
        ☰
      </div>

      <div style={logoStyle}>Portfolio</div>

      {/* Desktop Nav */}
      <nav className="d-none d-md-block">
        <ul className="d-flex" style={navLinksStyle}>
          <li><a href="#hero" className="text-decoration-none" style={{color: '#cbd5f5'}}>Home</a></li>
          <li><a href="#about" className="text-decoration-none" style={{color: '#cbd5f5'}}>About</a></li>
          <li><a href="#skills" className="text-decoration-none" style={{color: '#cbd5f5'}}>Skills</a></li>
          <li><a href="#projects" className="text-decoration-none" style={{color: '#cbd5f5'}}>Projects</a></li>
          <li><a href="#contact" className="text-decoration-none" style={{color: '#cbd5f5'}}>Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="d-md-none" style={mobileNavStyle}>
        <ul className="d-flex flex-column align-items-center" style={{...navLinksStyle, gap: '25px'}}>
          <li><a href="#hero" onClick={toggleMenu} className="text-decoration-none fs-5 text-white">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="text-decoration-none fs-5 text-white">About</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="text-decoration-none fs-5 text-white">Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="text-decoration-none fs-5 text-white">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="text-decoration-none fs-5 text-white">Contact</a></li>
        </ul>
      </nav>

      <button className="btn-primary-custom small">Hire Me</button>
    </header>
  );
};

export default Navbar;
