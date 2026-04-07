import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="navbar d-flex justify-content-between align-items-center px-3 px-md-5 py-3">
      
      {/* Hamburger */}
      <div className="hamburger d-md-none" onClick={() => setIsActive(!isActive)}>
        ☰
      </div>

      {/* Logo */}
      <div className="logo">Portfolio</div>

      {/* Desktop Nav */}
      <nav className="d-none d-md-block">
        <ul className="nav-links d-flex">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`mobile-menu ${isActive ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#hero" onClick={() => setIsActive(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsActive(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsActive(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsActive(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsActive(false)}>Contact</a></li>
        </ul>
      </nav>

      <button className="btn-primary-custom small">Hire Me</button>
    </header>
  );
};

export default Navbar;
