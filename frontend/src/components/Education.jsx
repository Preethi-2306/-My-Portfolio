import React from 'react';

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline-container">
          {/* 1. MCA */}
          <div className="timeline-item active-current">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-icon"><i className="fa-solid fa-graduation-cap"></i></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <span className="degree-status-badge">Currently Pursuing</span>
                  <h3 className="degree-title">Master of Computer Applications (MCA)</h3>
                  <h4 className="institution-name">Aditya Degree & P.G. College, Visakhapatnam</h4>
                </div>
                <div className="timeline-period">
                  <i className="fa-regular fa-calendar"></i>
                  <span>Pursuing</span>
                </div>
              </div>
              <p className="timeline-desc">
                Advancing core computer science domains, modern software engineering concepts, database management, and enterprise application architectures.
              </p>
            </div>
          </div>

          {/* 2. BCA */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-icon"><i className="fa-solid fa-chart-pie"></i></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <span className="degree-status-badge badge-completed">Completed</span>
                  <h3 className="degree-title">Bachelor of Computer Applications (BCA) – Data Science</h3>
                  <h4 className="institution-name">Gayatri Vidya Parishad College for Degree & PG Courses (A)</h4>
                </div>
                <div className="timeline-period">
                  <i className="fa-regular fa-calendar"></i>
                  <span>2022 – 2025</span>
                </div>
              </div>
              <p className="timeline-desc">
                Comprehensive curriculum covering Data Science principles, Python programming, database systems, statistical fundamentals, and practical software coursework.
              </p>
            </div>
          </div>

          {/* 3. Intermediate */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-icon"><i className="fa-solid fa-square-root-variable"></i></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <span className="degree-status-badge badge-completed">Completed</span>
                  <h3 className="degree-title">Intermediate (MPC)</h3>
                  <h4 className="institution-name">Sri Chaitanya Junior College, Visakhapatnam</h4>
                </div>
                <div className="timeline-period">
                  <i className="fa-regular fa-calendar"></i>
                  <span>2020 – 2022</span>
                </div>
              </div>
              <p className="timeline-desc">
                Core scientific education with focus on Mathematics, Physics, and Chemistry, providing strong analytical and logical foundation.
              </p>
            </div>
          </div>

          {/* 4. 10th ICSE */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-icon"><i className="fa-solid fa-school"></i></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <span className="degree-status-badge badge-completed">Completed</span>
                  <h3 className="degree-title">10th Standard (ICSE)</h3>
                  <h4 className="institution-name">Fort Catholic Girls School</h4>
                </div>
                <div className="timeline-period">
                  <i className="fa-regular fa-calendar"></i>
                  <span>2020</span>
                </div>
              </div>
              <p className="timeline-desc">
                Completed secondary education with ICSE curriculum, establishing strong fundamentals across academic disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

