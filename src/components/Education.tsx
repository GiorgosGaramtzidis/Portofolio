import { portfolioData } from '../data/portfolioData';
import './Education.css';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon">🎓</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-field">{edu.field}</h4>
              <h5 className="edu-institution">{edu.institution}</h5>
              <div className="edu-meta">
                <span className="edu-date">{edu.startDate} - {edu.endDate}</span>
                <span className="edu-location">{edu.location}</span>
              </div>
              {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="edu-achievements">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
