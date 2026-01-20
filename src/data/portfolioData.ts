import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Giorgos Garamtzidis',
    title: 'Software Engineer',
    email: 'garamtzidisgiorgos@outlook.com',
    phone: '+30 698 006 4071',
    location: 'Thessaloníki, Greece',
    linkedin: 'https://linkedin.com/in/giorgos-garamtzidis',
    github: 'https://github.com/GiorgosGaramtzidis',
    website: 'https://giorgosgaramtzidis.github.io/Portofolio',
    summary: 'Dynamic Software Engineer with 3 years of experience in developing innovative web applications and enterprise solutions. Expertise in crafting scalable systems using .NET Core, Angular, and SQL Server, with a strong emphasis on secure and efficient RESTful APIs. Committed to delivering high-quality code through best practices and rigorous code reviews while staying ahead of industry trends. Enthusiastic about continuous learning and collaboration, driving impactful solutions in fast-paced environments.',
  },
  
  experience: [
    {
      id: 'exp-1',
      company: 'KLEEMANN',
      position: 'Software Engineer',
      location: 'Kilkis, Greece',
      startDate: 'Oct 2023',
      endDate: 'Present',
      description: 'Developing scalable web applications and enterprise solutions for a leading manufacturing company',
      responsibilities: [
        'Develop and enhance scalable web applications and enterprise solutions using .NET Core, Angular, and SQL Server',
        'Design secure and performant RESTful APIs, ensuring seamless communication between front-end and back-end systems',
        'Implement GitLab CI/CD pipelines, automating testing and deployment processes to improve workflow efficiency',
        'Optimize database queries to enhance performance and data integrity',
        'Integrate SonarQube for continuous code quality analysis and maintain high coding standards',
      ],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'TypeScript', 'GitLab CI/CD', 'Docker', 'SonarQube'],
    },
    {
      id: 'exp-2',
      company: 'ArtAbout eCommerce Agency',
      position: 'Junior Web Developer',
      location: 'Thessaloniki, Greece',
      startDate: 'Oct 2022',
      endDate: 'Apr 2023',
      description: 'Developed custom websites and eCommerce solutions for diverse clients',
      responsibilities: [
        'Developed and maintained custom websites and eCommerce solutions using Magento, WordPress, PHP, and JavaScript',
        'Translated client requirements into functional, responsive, and user-friendly web interfaces using HTML5, CSS3, and modern JavaScript practices',
        'Integrated and customized themes and plugins for WordPress and Magento to meet client-specific design and functionality needs',
        'Collaborated with cross-functional teams to ensure smooth project delivery and optimize site performance',
        'Implemented SEO best practices and ensured web compatibility across different devices and browsers',
        'Troubleshot and resolved technical issues related to frontend and backend development',
      ],
      technologies: ['Magento', 'WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      id: 'exp-3',
      company: 'Hellenic Army Communications Corps',
      position: 'Communications Specialist',
      location: 'Évros, Greece',
      startDate: 'Sept 2021',
      endDate: 'May 2022',
      description: 'Military Service - Communications and technical operations',
      responsibilities: [
        'Served as Communications Specialist ensuring secure and reliable military communications',
        'Operated and maintained radio communication systems and electronic equipment',
        'Developed technical troubleshooting skills and attention to detail in high-pressure environments',
        'Gained experience in teamwork, discipline, and following strict protocols',
      ],
      technologies: ['Radio Systems', 'Electronic Equipment', 'Communications Protocols'],
    },
  ],
  
  education: [
    {
      id: 'edu-1',
      institution: 'International Hellenic University',
      degree: 'Bachelor of Engineering',
      field: 'Informatics and Telecommunications Engineering',
      location: 'Serres, Greece',
      startDate: 'Oct 2017',
      endDate: 'Nov 2023',
      achievements: [
        'Completed comprehensive curriculum in software engineering, networking, and telecommunications',
        'Developed strong foundation in computer science fundamentals and modern web technologies',
      ],
    },
  ],
  
  projects: [
    {
      id: 'proj-1',
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and TypeScript, showcasing projects and professional experience',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
      githubUrl: 'https://github.com/GiorgosGaramtzidis/Portofolio',
      liveUrl: 'https://giorgosgaramtzidis.github.io/Portofolio',
      highlights: [
        'Built with modern React 19 and TypeScript for type safety',
        'Deployed on GitHub Pages with automated CI/CD pipeline',
        'Responsive design for optimal viewing across all devices',
      ],
    },
    // Add more projects from your GitHub profile
  ],
  
  skills: [
    {
      category: 'Programming Languages',
      items: ['TypeScript', 'JavaScript', 'C#', 'PHP', 'SQL'],
    },
    {
      category: 'Frontend Development',
      items: ['Angular', 'React', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend Development',
      items: ['.NET Core', 'RESTful APIs', 'SQL Server'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'GitLab CI/CD', 'Docker', 'SonarQube'],
    },
    {
      category: 'CMS & eCommerce',
      items: ['WordPress', 'Magento'],
    },
  ],
  
  certifications: [
    {
      id: 'cert-1',
      name: 'Build an app with ASPNET Core and Angular from scratch',
      issuer: 'Online Course',
      date: '2023',
    },
    {
      id: 'cert-2',
      name: 'Angular & NodeJS - The MEAN Stack Guide',
      issuer: 'Online Course',
      date: '2023',
    },
    {
      id: 'cert-3',
      name: 'React 18 for Beginners',
      issuer: 'Online Course',
      date: '2024',
    },
  ],
};
