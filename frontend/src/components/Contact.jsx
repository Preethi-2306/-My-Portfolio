import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts correcting it
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    setFieldErrors({});

    // Target deployed backend API (or relative/configurable without hardcoded localhost in prod)
    const apiUrl = 'https://preethi-portfolio-cy8u.onrender.com/api/contact';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Could not send message. Please review the form.'
        });
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        type: 'error',
        message: 'Could not connect to the backend server. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Open to campus placement opportunities, internships, and entry-level IT roles.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-panel">
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>
                Feel free to reach out directly via email or phone. I'm actively seeking entry-level IT opportunities to apply my skills and grow professionally.
              </p>
            </div>

            <div className="contact-details-list">
              <a href="mailto:preethirajendran2306@gmail.com" className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Email Address</span>
                  <span className="contact-value">preethirajendran2306@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918247227129" className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Phone / Mobile</span>
                  <span className="contact-value">+91 8247227129</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Visakhapatnam, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social-footer">
              <span className="footer-social-label">Find me on professional platforms:</span>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/preethi-rajendran2306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Preethi-2306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="mailto:preethirajendran2306@gmail.com"
                  className="social-circle"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={fieldErrors.name ? { borderColor: '#EF4444' } : {}}
                  />
                  {fieldErrors.name && (
                    <small style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                      {fieldErrors.name}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={fieldErrors.email ? { borderColor: '#EF4444' } : {}}
                  />
                  {fieldErrors.email && (
                    <small style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                      {fieldErrors.email}
                    </small>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Project Inquiry"
                  required
                  style={fieldErrors.subject ? { borderColor: '#EF4444' } : {}}
                />
                {fieldErrors.subject && (
                  <small style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {fieldErrors.subject}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  style={fieldErrors.message ? { borderColor: '#EF4444' } : {}}
                ></textarea>
                {fieldErrors.message && (
                  <small style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>
                    {fieldErrors.message}
                  </small>
                )}
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Sending to Server...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className="form-status-msg"
                  style={{
                    display: 'block',
                    backgroundColor: status.type === 'success' ? 'var(--secondary-sage-soft)' : '#FEE2E2',
                    color: status.type === 'success' ? 'var(--primary-teal)' : '#B91C1C',
                    border: `1px solid ${status.type === 'success' ? 'var(--secondary-sage-border)' : '#FCA5A5'}`,
                    marginTop: '1.1rem',
                    padding: '0.85rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <i
                    className={`fa-solid ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}
                    style={{ marginRight: '8px' }}
                  ></i>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
