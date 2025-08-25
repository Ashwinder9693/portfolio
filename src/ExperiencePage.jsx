import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      title: "Fulfillment Center Associate",
      company: "Amazon",
      period: "Oct 2024 - Present",
      location: "Edison, NJ",
      type: "Part-time",
      logo: "📦",
      current: true,
      responsibilities: [
        "Enhanced process efficiency by analyzing data and optimizing package routing",
        "Utilized inventory management software to monitor and sort packages efficiently",
        "Collaborated on safety protocols and troubleshooting scanning issues"
      ],
      skills: ["Data Analysis", "Process Optimization", "Inventory Management", "Team Collaboration"]
    },
    {
      id: 2,
      title: "Dietary Management",
      company: "Robert Wood Johnson Hospital",
      period: "Apr 2023 - Sept 2024",
      location: "Somerville, NJ",
      type: "Part-time",
      logo: "🏥",
      current: false,
      responsibilities: [
        "Managed dietary data to track patient needs and optimize meal planning",
        "Forecasted inventory needs using supply chain tools to reduce waste",
        "Digitized processes for streamlined communication with interdisciplinary teams"
      ],
      skills: ["Data Management", "Supply Chain", "Process Digitization", "Healthcare Operations"]
    }
  ];

  const leadershipRoles = [
    {
      title: "President",
      organization: "Computer Science Club, Middlesex College",
      period: "Jan 2024 - May 2024",
      icon: "👨‍💼",
      description: "Led club activities, organized coding competitions, and mentored fellow students in programming concepts and career development."
    },
    {
      title: "Vice President",
      organization: "Computer Science Club, Middlesex College",
      period: "Sept 2023 - Dec 2023",
      icon: "🎯",
      description: "Supported club initiatives, helped expand membership engagement, and coordinated technical workshops."
    },
    {
      title: "Management Team Member",
      organization: "National Service Scheme, SBSSU",
      period: "May 2022 - Dec 2022",
      icon: "🤝",
      description: "Coordinated community service projects and social impact initiatives, managing volunteer teams and project timelines."
    },
    {
      title: "Treasure Team Member",
      organization: "Compuwave Society, SBSSU",
      period: "Jan 2022 - Dec 2022",
      icon: "💰",
      description: "Managed financial operations and budget planning for technical events, ensuring proper allocation of resources."
    }
  ];

  const volunteerWork = [
    {
      organization: "Pi Theta Kappa Honor Society",
      role: "Member",
      period: "Nov 2023 - Present",
      description: "Active participant in honor society initiatives and community service projects."
    },
    {
      organization: "Mayank Foundation",
      role: "Student Volunteer Lead",
      period: "Jan 2022 - Dec 2022",
      description: "Led student volunteer initiatives and coordinated community outreach programs."
    }
  ];

  return (
    <div className="page experience-page">
      <div className="container">
        <div className="experience-hero" data-animate id="experience-hero">
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">
            Professional journey and leadership roles that shaped my career
          </p>
        </div>

        <div className="experience-timeline" data-animate id="experience-timeline">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className={`timeline-marker ${exp.current ? 'current' : ''}`}></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div className="company-logo">{exp.logo}</div>
                    <div className="experience-details">
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <div className="experience-meta">
                        <span className="experience-period">{exp.period}</span>
                        <span className="experience-location">{exp.location}</span>
                        <span className={`experience-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="experience-description">
                    <ul>
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-skills">
                    {exp.skills.map((skill, index) => (
                      <span key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="leadership-section" data-animate id="leadership">
          <h2 className="section-title">Leadership & Volunteering</h2>
          <div className="leadership-grid">
            {leadershipRoles.map((role, index) => (
              <div key={index} className="leadership-card">
                <div className="leadership-icon">{role.icon}</div>
                <h3>{role.title}</h3>
                <h4>{role.organization}</h4>
                <span className="leadership-period">{role.period}</span>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="volunteer-section" data-animate id="volunteer">
          <h2 className="section-title">Volunteer Work</h2>
          <div className="volunteer-grid">
            {volunteerWork.map((volunteer, index) => (
              <div key={index} className="volunteer-card">
                <div className="volunteer-header">
                  <h3>{volunteer.organization}</h3>
                  <span className="volunteer-period">{volunteer.period}</span>
                </div>
                <h4>{volunteer.role}</h4>
                <p>{volunteer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-developed" data-animate id="skills-developed">
          <h2 className="section-title">Skills Developed Through Experience</h2>
          <div className="skills-categories-exp">
            <div className="skill-category-exp">
              <h3>Technical Skills</h3>
              <div className="skills-list">
                <span>Data Analysis & Optimization</span>
                <span>Inventory Management Systems</span>
                <span>Process Digitization</span>
                <span>Supply Chain Management</span>
                <span>Healthcare Information Systems</span>
              </div>
            </div>
            <div className="skill-category-exp">
              <h3>Leadership Skills</h3>
              <div className="skills-list">
                <span>Team Management</span>
                <span>Project Coordination</span>
                <span>Strategic Planning</span>
                <span>Mentoring & Coaching</span>
                <span>Event Organization</span>
              </div>
            </div>
            <div className="skill-category-exp">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                <span>Communication</span>
                <span>Problem Solving</span>
                <span>Adaptability</span>
                <span>Time Management</span>
                <span>Critical Thinking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-stats" data-animate id="experience-stats">
          <h2 className="section-title">Experience Metrics</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">2+</div>
              <div className="stat-description">Years of Professional Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">4</div>
              <div className="stat-description">Leadership Positions Held</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">6+</div>
              <div className="stat-description">Organizations Involved</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">12+</div>
              <div className="stat-description">Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;