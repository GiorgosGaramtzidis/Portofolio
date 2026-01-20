import type { PortfolioData } from "../types/portfolio";


// Replace this template data with your actual resume information
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Your Professional Title',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'City, Country',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/GiorgosGaramtzidis',
    website: 'https://yourwebsite.com',
    summary: 'Your professional summary goes here. Describe your background, expertise, and what you bring to the table.',
  },
  
  experience: [
    {
      id: 'exp-1',
      company: 'Company Name',
      position: 'Job Title',
      location: 'City, Country',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: 'Brief description of your role and company',
      responsibilities: [
        'Key responsibility or achievement #1',
        'Key responsibility or achievement #2',
        'Key responsibility or achievement #3',
      ],
      technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    },
    // Add more experience entries
  ],
  
  education: [
    {
      id: 'edu-1',
      institution: 'University Name',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'City, Country',
      startDate: '2019',
      endDate: '2023',
      gpa: '3.8/4.0',
      achievements: [
        'Achievement or honor #1',
        'Achievement or honor #2',
      ],
    },
    // Add more education entries
  ],
  
  projects: [
    {
      id: 'proj-1',
      title: 'Project Name',
      description: 'Brief description of what the project does and its purpose',
      technologies: ['React', 'TypeScript', 'Node.js'],
      imageUrl: '/path/to/project-image.jpg',
      liveUrl: 'https://project-demo.com',
      githubUrl: 'https://github.com/yourusername/project',
      highlights: [
        'Key feature or achievement #1',
        'Key feature or achievement #2',
        'Key feature or achievement #3',
      ],
    },
    // Add more projects
  ],
  
  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Django', 'PostgreSQL'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'CI/CD'],
    },
    // Add more skill categories
  ],
  
  certifications: [
    {
      id: 'cert-1',
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      date: 'Jan 2024',
      credentialId: 'ABC123',
      credentialUrl: 'https://credential-verification-url.com',
    },
    // Add more certifications
  ],
};
