import { portfolioData } from '../data/portfolioData';
import './Header.css';

export const Header = () => {
  const { personalInfo } = portfolioData;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>{personalInfo.name}</h2>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
