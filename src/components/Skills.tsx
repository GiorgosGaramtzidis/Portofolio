import { portfolioData } from '../data/portfolioData';
import './Skills.css';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
