import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import meImage from "../assets/me.jpg"
import '../styles/home.css'

const roles = ['BS Information Technology', 'Front End Developer', 'Junior web developer'];

function Inicio() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);

    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <div className="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <p className="greeting">Hello, my name is</p>
          <h1 className="name">Jun Fenequito</h1>
          <h2 className="tagline">
          <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            Focused on growing as a developer and building useful and modern applications.

          </p>

          <div className="hero-buttons">
            <Link to="/proyectos" className="btn-primary">View Projects</Link>
            <Link to="/contacto" className="btn-secondary">Lets talk →</Link>
          </div>
        </div>

        {/* Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={meImage} alt="Jun Fenequito" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      {/* Barra lateral redes */}
      <div className="social-sidebar">
        <a href="https://github.com/FenequitoJun" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jun-fenequito-544851372/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="haxme26@gmail.com">Email</a>
        <div className="social-line"></div>
      </div>

    
    </div>
  );
}

export default Inicio;
