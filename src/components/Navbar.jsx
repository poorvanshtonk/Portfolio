import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="navbar d-flex justify-content-between align-items-center px-3 px-md-5 py-3">
      
      {/* Hamburger */}
      <div className="hamburger d-md-none" onClick={() => setIsActive(!isActive)}>
        ☰
      </div>

      {/* Logo */}
      <Link className="logo" to="/#hero">Portfolio</Link>

      {/* Desktop Nav */}
      <nav className="d-none d-md-block">
        <ul className="nav-links d-flex">
          <li><Link to="/#hero">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`mobile-menu ${isActive ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/#hero" onClick={() => setIsActive(false)}>Home</Link></li>
          <li><Link to="/#about" onClick={() => setIsActive(false)}>About</Link></li>
          <li><Link to="/#skills" onClick={() => setIsActive(false)}>Skills</Link></li>
          <li><Link to="/#projects" onClick={() => setIsActive(false)}>Projects</Link></li>
          <li><Link to="/#contact" onClick={() => setIsActive(false)}>Contact</Link></li>
        </ul>
      </nav>

      <button className="btn-primary-custom small">Hire Me</button>
    </header>
  );
};

export default Navbar;
