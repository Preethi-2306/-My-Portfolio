import React from 'react';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">A Little About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p className="lead-text">
              Hello! I am Preethi Rajendran, an enthusiastic technology learner pursuing my <strong>Master of Computer Applications (MCA)</strong>.
            </p>
            <p className="body-text">
              Having completed my <strong>BCA in Data Science</strong>, I have developed a strong foundation in core computer science, programming, analytical thinking, and database concepts. My core academic and technical interests lie in software development, data science, and artificial intelligence.
            </p>
            <p className="body-text">
              I enjoy understanding how modern technology works from the inside out and applying academic concepts through practical hands-on projects—from writing backend logic in Python and Django to building hardware-software integrations with IoT and Arduino. I believe in consistent learning, curiosity, and disciplined problem solving to prepare for real-world industry challenges.
            </p>

            <div className="languages-known">
              <span className="lang-title"><i className="fa-solid fa-globe"></i> Languages Spoken:</span>
              <div className="lang-tags">
                <span className="lang-tag"><span className="bullet"></span> Tamil (Native)</span>
                <span className="lang-tag"><span className="bullet"></span> English</span>
                <span className="lang-tag"><span className="bullet"></span> Telugu</span>
                <span className="lang-tag"><span className="bullet"></span> Hindi</span>
              </div>
            </div>
          </div>

          <div className="about-cards-grid">
            <div className="info-card">
              <div className="info-icon"><i className="fa-solid fa-laptop-code"></i></div>
              <h3>Focus Areas</h3>
              <p>Software development, web applications, data science workflows, and AI fundamentals.</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3>Academic Background</h3>
              <p>BCA in Data Science graduate, currently pursuing Master of Computer Applications (MCA).</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa-solid fa-gears"></i></div>
              <h3>Hands-on Mindset</h3>
              <p>Passionate about building functional solutions through projects, testing, and continuous practice.</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa-solid fa-compass"></i></div>
              <h3>Career Aspiration</h3>
              <p>Seeking an entry-level IT role to apply technical skills, collaborate, and grow professionally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

