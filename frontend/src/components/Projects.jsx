import React from 'react';

const Projects = ({ onOpenModal }) => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Practical applications built during academic curriculum and focused programming initiatives.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 01: Pet Adoption Portal */}
          <article className="project-card">
            <div className="project-media">
              <div className="project-preview-mockup pet-preview">
                <div className="mockup-top-bar">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                  <span className="mockup-address">localhost:8000/pet-adoption</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-header-area">
                    <i className="fa-solid fa-paw mock-icon"></i>
                    <div>
                      <div className="mock-line title"></div>
                      <div className="mock-line sub"></div>
                    </div>
                  </div>
                  <div className="mockup-cards-row">
                    <div className="mock-card">
                      <div className="mock-thumb"><i className="fa-solid fa-dog"></i></div>
                      <div className="mock-caption"></div>
                    </div>
                    <div className="mock-card">
                      <div className="mock-thumb"><i className="fa-solid fa-cat"></i></div>
                      <div className="mock-caption"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="project-badge">PROJECT 01</span>
            </div>

            <div className="project-body">
              <span className="project-category">Short-Term Python Project</span>
              <h3 className="project-title">Pet Adoption Portal</h3>
              <p className="project-description">
                Developed a full-featured pet adoption web portal with pet listings, picture uploads, user login, and adoption request features using Django and MySQL.
              </p>

              <div className="project-feature-box">
                <h4>Key Features</h4>
                <ul className="feature-checklist">
                  <li><i className="fa-solid fa-circle-check"></i> Pet listings and picture uploads</li>
                  <li><i className="fa-solid fa-circle-check"></i> Secure user login functionality</li>
                  <li><i className="fa-solid fa-circle-check"></i> Streamlined adoption request functionality</li>
                  <li><i className="fa-solid fa-circle-check"></i> Interactive portal for user and pet interaction</li>
                </ul>
              </div>

              <div className="project-tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Bootstrap</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/Preethi-2306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>View Repository</span>
                </a>
                <button className="btn btn-outline btn-sm" onClick={() => onOpenModal('pet')}>
                  <i className="fa-solid fa-circle-info"></i>
                  <span>Architecture Details</span>
                </button>
              </div>
            </div>
          </article>

          {/* Project 02: Automatic Passenger Bridge using IoT */}
          <article className="project-card">
            <div className="project-media">
              <div className="project-preview-mockup iot-preview">
                <div className="mockup-top-bar">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                  <span className="mockup-address">system://arduino-bridge-control</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-header-area">
                    <i className="fa-solid fa-train-subway mock-icon"></i>
                    <div>
                      <div className="mock-line title"></div>
                      <div className="mock-line sub"></div>
                    </div>
                  </div>
                  <div className="mockup-iot-schematic">
                    <div className="iot-node"><i className="fa-solid fa-tower-broadcast"></i><span>Sensors</span></div>
                    <div className="iot-arrow"><i className="fa-solid fa-right-long"></i></div>
                    <div className="iot-node active"><i className="fa-solid fa-microchip"></i><span>Arduino</span></div>
                    <div className="iot-arrow"><i className="fa-solid fa-right-long"></i></div>
                    <div className="iot-node"><i className="fa-solid fa-desktop"></i><span>Display</span></div>
                  </div>
                </div>
              </div>
              <span className="project-badge">PROJECT 02</span>
            </div>

            <div className="project-body">
              <span className="project-category">Academic Project</span>
              <h3 className="project-title">Automatic Passenger Bridge Using IoT</h3>
              <p className="project-description">
                Built an IoT-based railway bridge safety system using Arduino and sensors, involving embedded programming, connectivity, rigorous testing and troubleshooting.
              </p>

              <div className="project-feature-box">
                <h4>Key Features</h4>
                <ul className="feature-checklist">
                  <li><i className="fa-solid fa-circle-check"></i> Integrated sensor detection module</li>
                  <li><i className="fa-solid fa-circle-check"></i> Real-time display system for bridge monitoring</li>
                  <li><i className="fa-solid fa-circle-check"></i> Automated bridge operation mechanism</li>
                  <li><i className="fa-solid fa-circle-check"></i> Complete hardware and software integration</li>
                </ul>
              </div>

              <div className="project-tech-stack">
                <span className="tech-tag">Arduino</span>
                <span className="tech-tag">Sensors</span>
                <span className="tech-tag">IoT</span>
                <span className="tech-tag">Embedded Programming</span>
              </div>

              <div className="project-actions">
                <button className="btn btn-primary btn-sm" onClick={() => onOpenModal('iot')}>
                  <i className="fa-solid fa-circle-info"></i>
                  <span>System Architecture</span>
                </button>
                <a
                  href="https://github.com/Preethi-2306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;

