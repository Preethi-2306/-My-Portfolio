import React from 'react';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">Internship Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-container">
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="exp-role-info">
                <div className="exp-badge-icon">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <div>
                  <h3 className="exp-role-title">Data Science, Machine Learning & AI Intern</h3>
                  <div className="exp-meta">
                    <span className="meta-tag"><i className="fa-regular fa-clock"></i> Short-Term Internship</span>
                    <span className="meta-tag"><i className="fa-solid fa-laptop"></i> Hands-on Practice</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-card-body">
              <p className="exp-summary-text">
                Participated in a hands-on technical internship program focusing on foundational data science concepts, python workflows, and intelligent system introductory pipelines.
              </p>
              <h4 className="exp-tasks-title">Key Responsibilities & Deliverables:</h4>
              <ul className="exp-task-list">
                <li>
                  <div className="check-bullet"><i className="fa-solid fa-check"></i></div>
                  <span><strong>Data Preprocessing & Cleaning:</strong> Performed data preprocessing and data cleaning using Python, handling missing values and preparing structured datasets for analysis.</span>
                </li>
                <li>
                  <div className="check-bullet"><i className="fa-solid fa-check"></i></div>
                  <span><strong>ML & AI Concepts:</strong> Worked with basic Machine Learning and AI concepts and introductory workflows to understand algorithmic decision processes.</span>
                </li>
                <li>
                  <div className="check-bullet"><i className="fa-solid fa-check"></i></div>
                  <span><strong>Data Visualization & Analysis:</strong> Performed basic data visualisation and dataset analysis to understand key distributions and extract meaningful insights.</span>
                </li>
              </ul>
            </div>

            <div className="experience-card-footer">
              <div className="tag-group">
                <span className="pill-tag">Python</span>
                <span className="pill-tag">Data Preprocessing</span>
                <span className="pill-tag">Machine Learning Workflows</span>
                <span className="pill-tag">Data Visualisation</span>
                <span className="pill-tag">Dataset Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

