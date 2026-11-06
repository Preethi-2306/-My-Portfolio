import React from 'react';

const Certifications = () => {
  const certs = [
    {
      issuer: 'Microsoft',
      name: 'Microsoft Python Development Professional Certificate',
      scope: 'Proficiency in Python syntax, programming fundamentals, data structures, and script development.',
      iconClass: 'fa-brands fa-microsoft',
      boxType: 'ms'
    },
    {
      issuer: 'IBM',
      name: 'IBM AI Certification',
      scope: 'Understanding of Artificial Intelligence paradigms, machine learning concepts, and intelligent system workflows.',
      iconClass: 'fa-solid fa-network-wired',
      boxType: 'ibm'
    },
    {
      issuer: 'AWS',
      name: 'AWS Cloud Computing Training',
      scope: 'Foundational training in AWS core cloud infrastructure services including EC2 compute instances and S3 object storage.',
      iconClass: 'fa-brands fa-aws',
      boxType: 'aws'
    },
    {
      issuer: 'NPTEL',
      name: 'NPTEL IoT Certification',
      scope: 'Internet of Things architecture, sensor integration, embedded protocols, and microcontroller application workflows.',
      iconClass: 'fa-solid fa-microchip',
      boxType: 'nptel'
    },
    {
      issuer: 'GeeksforGeeks',
      name: 'GeeksforGeeks C Programming Certification',
      scope: 'Core procedural programming, memory handling, data structures, and algorithmic logic in C.',
      iconClass: 'fa-solid fa-code',
      boxType: 'gfg'
    }
  ];

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Learning & Verification</span>
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Industry and professional training certifications completed to expand practical competence.
          </p>
        </div>

        <div className="certifications-grid">
          {certs.map((c, idx) => (
            <div className="cert-card" key={idx}>
              <div className={`cert-icon-box ${c.boxType}`}>
                <i className={c.iconClass}></i>
              </div>
              <div className="cert-details">
                <span className="cert-issuer">{c.issuer}</span>
                <h3 className="cert-name">{c.name}</h3>
                <p className="cert-scope">{c.scope}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

