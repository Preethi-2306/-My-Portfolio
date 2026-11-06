import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollY = window.pageYOffset;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY > top && scrollY <= top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div class="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-badge">PR</span>
          <span className="logo-text">Preethi<span>.</span></span>
        </a>

        {/* Desktop & Mobile Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            onClick={() => window.print()}
            className="btn btn-outline btn-sm nav-resume-btn"
            title="Print / Save PDF of Resume"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>Resume</span>
          </button>
          <button
            className="hamburger-btn"
            id="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

