import { portfolioData } from '../data/portfolioData';
import './Experience.css';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-position">{exp.position}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date">{exp.startDate} - {exp.endDate}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <p className="exp-description">{exp.description}</p>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
                <div className="exp-technologies">
                  {exp.technologies?.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
