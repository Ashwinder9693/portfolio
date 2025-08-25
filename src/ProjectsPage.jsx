import React, { useState } from 'react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Railway Booking System",
      category: "Web Development",
      description: "Full-stack railway reservation system with user authentication, train scheduling, and booking management. Built for CS336 Database Systems course.",
      tech: ["Java", "JSP", "MySQL", "Apache Tomcat", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ashwinder9693/Railway-booking-System",
      demo: "https://youtu.be/Ff84xtFbzAQ",
      featured: true,
      university: "Rutgers University",
      course: "CS336 - Database Systems",
      year: "2024"
    },
    {
      id: 2,
      title: "Crime Activity Report",
      category: "Web Development",
      description: "Interactive data visualization analyzing FBI crime data (1960-2019). Presented at Hack TCNJ.",
      tech: ["MongoDB", "HTML5", "CSS", "GCP"],
      github: "https://github.com/Ashwinder9693/FinalHACKTCNJ",
      demo: "#",
      featured: true,
      hackathon: "Hack TCNJ"
    },
    {
      id: 3,
      title: "Gender Bias in AI",
      category: "AI/ML Research",
      description: "Critical analysis of gender biases in AI image generation using Technopoly framework",
      tech: ["AI Ethics", "Research", "Adobe Illustrator"],
      github: "#",
      demo: "https://www.blogger.com/blog/post/edit/preview/4726622585428651523/9177347735298150073",
      university: "Princeton University"
    },
    {
      id: 4,
      title: "Port Parking System",
      category: "Web Development",
      description: "Interactive mapping tool for government port parking reservations using Folium",
      tech: ["Python", "Folium", "JavaScript", "HTML"],
      github: "https://github.com/Ashwinder9693/team6_NJITHackathon",
      demo: "#",
      hackathon: "NJIT Hackathon"
    },
    {
      id: 5,
      title: "Vestibular System Study",
      category: "Research",
      description: "Neuroscience research on vestibular system effects on auditory localization conducted during Princeton TSI program",
      tech: ["Python", "Neuroscience", "Data Analysis", "TSI Program"],
      github: "https://www.linkedin.com/in/ashwinder-singh-5b1220206/overlay/1725027609548/single-media-viewer/?profileId=ACoAADRbnVUBZiNEHBmmCQ0747XNEvHdtbUuRnk",
      demo: "https://tsi-ebcao.princeton.edu/tsi-experience",
      university: "Princeton University",
      program: "TSI (Teachers as Scholars Institute)"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page projects-page">
      <div className="container">
        <div className="projects-hero" data-animate id="projects-hero">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A showcase of my technical skills and innovative solutions across various domains
          </p>
        </div>

        <div className="projects-filter" data-animate id="filter">
          <div className="filter-tabs">
            {['All', 'Web Development', 'AI/ML Research', 'Research', 'Mobile'].map((filter) => (
              <button 
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="projects-grid" data-animate id="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i>📱</i> GitHub
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} className="project-link">
                        <i>🌐</i> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-preview">
                  <span className="project-emoji">
                    {project.category === 'Web Development' ? '🌐' : 
                     project.category === 'AI/ML Research' ? '🤖' : 
                     project.category === 'Research' ? '🔬' : '💻'}
                  </span>
                </div>
                {project.featured && (
                  <div className="project-banner">Featured</div>
                )}
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-stats">
                  {project.university && <span><i>🎓</i> {project.university}</span>}
                  {project.course && <span><i>📚</i> {project.course}</span>}
                  {project.program && <span><i>🔬</i> {project.program}</span>}
                  {project.hackathon && <span><i>🏆</i> {project.hackathon}</span>}
                  {project.year && <span><i>📅</i> {project.year}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;