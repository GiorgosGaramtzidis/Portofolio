import { portfolioData } from '../data/portfolioData';
import './Contact.css';

export const Contact = () => {
  const { personalInfo, certifications } = portfolioData;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="contact-social">
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {certifications && certifications.length > 0 && (
            <div className="certifications">
              <h3>Certifications & Courses</h3>
              <div className="cert-list">
                {certifications.map((cert) => (
                  <div key={cert.id} className="cert-item">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.date}</p>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Credential
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
