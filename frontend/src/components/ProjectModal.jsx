import React from 'react';

const ProjectModal = ({ modalData, onClose }) => {
  if (!modalData) return null;

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal-header">
          <span className="modal-badge">{modalData.category}</span>
          <h3 className="modal-title">{modalData.title}</h3>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <h4>Overview</h4>
            <p>{modalData.overview}</p>
          </div>
          <div className="modal-section">
            <h4>Key Implementations</h4>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem' }}>
              {modalData.points.map((pt, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="modal-section">
            <h4>Technology Stack</h4>
            <p>{modalData.tech}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

