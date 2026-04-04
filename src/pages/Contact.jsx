import React, { useState } from 'react';
import '../styles/Contact.css';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'haxme26@gmail.com',
      link: 'mailto:haxme26@gmail.com',
    },
    {
      icon: '📱',
      label: 'Telephone',
      value: '09673567745',
      link: 'tel:096623800764',
    },
    {
      icon: '💼',
      label: 'GitHub',
      value: 'FenequitoJun',
      link: 'https://github.com/FenequitoJun',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Jun Fenequito',
      link: 'https://www.linkedin.com/in/jun-fenequito-544851372/',
    },
  ];

  return (
    <div className="contacto">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h1 className="section-title">
            <span className="number"></span> Contact
          </h1>
          
        </div>

        <div className="contact-content">
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="info-title">Information of Contact</h2>
        

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-text">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator"></div>
              <span>Available for work as a junior</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-title">Send me a message</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Matter</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What do you want to talk about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  Please contact me! I will respond to you soon.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacto;