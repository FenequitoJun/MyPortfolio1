import React from 'react';
import '../styles/About.css';

function Sobremi() {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React',],
    backend: ['MongoDB'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite','Vercel','Render'],
  };

  const experience = [
    {
      year: '2026',
      title: 'Front-End Development',
      company: 'Personal Portfolio',
      description: 'Development of my web portfolio using React, CSS, JSX, and Vite',
    },
    {
      year: '2025',
      title: 'Learning Javascript',
      company: '',
      description: 'Introduction to web development and good practices. Creation of my first projects and JavaScript basics.',

    },
    {
      year: '2025',
      title: 'Vanilla Coding',
      company: 'EBAC',
      description: 'Learning curve of HTML, CSS and Javascript',
    },
  ];

  return (
    <div className='sobremi-container'>
      {/* Sección Principal */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Web developer
            <span className='gradient-text'>  </span>
          </h1>
          <p className='hero-description'>
            I am learning and improving every day as a web developer. I am interested in creating useful projects, well-designed and that offer a good user experience.
          </p>
        </div>
      </section>

      {/* About Me Section: mi historia personal */}
      <section className='about-content'>
        <div className='content-grid'>
          <div className='about-text'>
            <h2 className='section-title'>My History</h2>
            <div className='text-content'>
            </div>
          </div>
        </div>

        {/* Stats: Tarjetas */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">2+</h3>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">1</h3>
            <p className="stat-label">Year included in the programming</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">∞</h3>
            <p className="stat-label">Motivation to keep growing</p>
          </div>
        </div>

        {/* Imagen de perfil */}

      </section>

      {/* Skills Section */}
      <section className='skills-section'>
        <h2 className='section-title'>Technical Skills</h2>
        <div className='skills-grid'>
          <div className='skills-category'>
            <h3 className='category-title'>
              <span className='icon'>🎨</span>
              Frontend
            </h3>
            <div className='skill-tags'>
              {skills.frontend.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>

          <div className='skill-category'>
            <h3 className='category-title'>
              <span className='icon'>⚙️</span>
              Backend
            </h3>
            <div className='skill-tags'>
              {skills.backend.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>

          <div className='skill-category'>
            <h3 className='category-title'>
              <span className='icon'>🛠️</span>
              Tools
            </h3>
            <div className='skill-tags'>
              {skills.tools.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='experience-section'>
        <h2 className='section-title'>Experience</h2>
        <div className='timeline'>
          {experience.map((exp, index) => (
            <div key={index} className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <span className='timeline-year'>{exp.year}</span>
                <h3 className='timeline-title'>{exp.title}</h3>
                <p className='timeline-company'>{exp.company}</p>
                <p className='timeline-description'>{exp.description}</p>
                {exp.certificateUrl && (
                  <a 
                    href={exp.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                   Certification
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Are you looking for a web developer?</h2>
        <p className="cta-description">
          I am looking for my first job as a junior web developer. I like to learn, work in a team, and improve on every project. If you are interested in someone with attitude and eagerness to grow, let's talk.
        </p>
        <a href="/contacto" className="cta-button">
         Let's talk
        </a>
      </section>
    </div>
  );
}

export default Sobremi;