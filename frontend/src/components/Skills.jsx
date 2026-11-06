import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'tools', label: 'Tools' }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Systematically organised technical competencies acquired through academic coursework, internships, and self-directed practice.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="skill-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="skill-category-card">
              <div className="category-header">
                <div className="category-icon"><i className="fa-solid fa-terminal"></i></div>
                <h3>Programming Languages</h3>
              </div>
              <div className="skill-tags-wrapper">
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-code"></i>
                    <span className="skill-name">C</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-python"></i>
                    <span className="skill-name">Python</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-java"></i>
                    <span className="skill-name">Java (Basics)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Web Technologies */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="skill-category-card">
              <div className="category-header">
                <div className="category-icon"><i className="fa-solid fa-layer-group"></i></div>
                <h3>Web Technologies</h3>
              </div>
              <div className="skill-tags-wrapper">
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-html5"></i>
                    <span className="skill-name">HTML</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-css3-alt"></i>
                    <span className="skill-name">CSS</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-bootstrap"></i>
                    <span className="skill-name">Bootstrap</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-network-wired"></i>
                    <span className="skill-name">Django</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Database */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="skill-category-card">
              <div className="category-header">
                <div className="category-icon"><i className="fa-solid fa-database"></i></div>
                <h3>Database</h3>
              </div>
              <div className="skill-tags-wrapper">
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-server"></i>
                    <span className="skill-name">SQL</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-table"></i>
                    <span className="skill-name">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cloud */}
          {(activeTab === 'all' || activeTab === 'cloud') && (
            <div className="skill-category-card">
              <div className="category-header">
                <div className="category-icon"><i className="fa-solid fa-cloud"></i></div>
                <h3>Cloud Services</h3>
              </div>
              <div className="skill-tags-wrapper">
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-aws"></i>
                    <span className="skill-name">AWS EC2</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-aws"></i>
                    <span className="skill-name">AWS S3</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className={`skill-category-card ${activeTab === 'all' ? 'full-width-card' : ''}`}>
              <div className="category-header">
                <div className="category-icon"><i className="fa-solid fa-wrench"></i></div>
                <h3>Development & Analytical Tools</h3>
              </div>
              <div className="skill-tags-wrapper">
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-brands fa-github"></i>
                    <span className="skill-name">GitHub</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-code"></i>
                    <span className="skill-name">VS Code</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-file-excel"></i>
                    <span className="skill-name">Excel</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-chart-simple"></i>
                    <span className="skill-name">Tableau</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-inner">
                    <i className="fa-solid fa-microchip"></i>
                    <span className="skill-name">Arduino</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
