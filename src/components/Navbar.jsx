import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="https://github.com/FenequitoJun" className="logo">{'FenequitoJun'}</Link>

        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number"></span> Home
          </NavLink>
          <NavLink to="/sobre-mi" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number"></span> About Me
          </NavLink>
          <NavLink to="/proyectos" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number"></span> Projects
          </NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number"></span> Contact
          </NavLink>

         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
