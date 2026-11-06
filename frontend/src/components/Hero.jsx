import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Roles for subtle typing effect
  const roles = [
    'MCA Student',
    'Aspiring IT Professional',
    'Technology Enthusiast',
    'Data Science Graduate'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 90);
      } else {
        // Pause at complete word
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting back
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="pulse-dot"></span>
            HELLO, I'M
          </div>
          <h1 className="hero-title">Preethi Rajendran</h1>

          <div className="hero-subtitle-box">
            <span className="hero-subtitle-animated">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
          </div>

          <p className="hero-description">
            I'm an MCA student with a background in Data Science, interested in technology, problem-solving and building practical solutions. I enjoy exploring different areas of technology and continuously developing my skills through projects and hands-on learning.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <button onClick={() => window.print()} className="btn btn-secondary">
              <i className="fa-solid fa-file-pdf"></i>
              <span>Download Resume</span>
            </button>
          </div>

          <div className="hero-social-block">
            <span className="social-label">Connect with me:</span>
            <div className="social-links">
              <a
                href="https://github.com/Preethi-2306"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/preethi-rajendran2306"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:preethirajendran2306@gmail.com"
                className="social-pill"
                aria-label="Send Email"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card-wrapper">
            <div className="visual-card-backdrop"></div>
            <div className="visual-card">
              <div className="photo-container">
                <img
                  src="/profile.jpg"
                  alt="Preethi Rajendran"
                  className="profile-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('photo-fallback');
                    }
                  }}
                />
                <div className="photo-fallback-content">
                  <div className="initials-avatar">PR</div>
                  <span>Preethi Rajendran</span>
                </div>
              </div>

              {/* Floating highlight cards */}
              <div className="floating-badge badge-top-right">
                <div className="badge-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                <div className="badge-info">
                  <span className="badge-title">MCA Scholar</span>
                  <span className="badge-sub">BCA in Data Science</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon"><i className="fa-solid fa-code"></i></div>
                <div className="badge-info">
                  <span className="badge-title">Python & Web</span>
                  <span className="badge-sub">IoT & Cloud Basics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
