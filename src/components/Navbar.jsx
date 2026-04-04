import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="navbar">
      <div 
        className="hamburger" 
        id="hamburger" 
        onClick={toggleMenu}
      >
        ☰
      </div>

      <div className="logo">Portfolio</div>

      <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <button className="btn-primary small">Hire Me</button>
    </header>
  );
};

export default Navbar;
