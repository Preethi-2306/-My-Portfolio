import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="copyright">&copy; {new Date().getFullYear()} Preethi Rajendran. All rights reserved.</p>
          <p className="footer-note">Designed with a modern, minimal aesthetic.</p>
        </div>
        <div className="footer-right">
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <span>Back to Top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

