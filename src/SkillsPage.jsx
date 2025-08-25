import React from 'react';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "JavaScript", level: 85, icon: "🌐" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 80, icon: "⚛️" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
        { name: "Node.js", level: 75, icon: "🟢" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "SQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Google Cloud", level: 75, icon: "☁️" }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85, icon: "🔧" },
        { name: "Data Analysis", level: 80, icon: "📊" },
        { name: "Machine Learning", level: 70, icon: "🤖" }
      ]
    }
  ];

  const certifications = [
    {
      provider: "HackerRank",
      title: "Python Programming",
      date: "Dec 2024",
      level: "Advanced"
    },
    {
      provider: "GitHub",
      title: "GitHub Foundations",
      date: "Nov 2024",
      level: "Foundations"
    },
    {
      provider: "Google",
      title: "Cybersecurity Foundations",
      date: "Oct 2023",
      level: "Professional"
    },
    {
      provider: "Harvard",
      title: "CS50x",
      date: "Dec 2021",
      level: "University"
    },
    {
      provider: "Verizon",
      title: "Cloud Platform Job Simulation",
      date: "Apr 2025",
      level: "Professional"
    },
    {
      provider: "NVIDIA",
      title: "Getting started with AI",
      date: "May 2022",
      level: "Beginner"
    }
  ];

  return (
    <div className="page skills-page">
      <div className="container">
        <div className="skills-hero" data-animate id="skills-hero">
          <h1 className="page-title">Skills & Technologies</h1>
          <p className="page-subtitle">
            Comprehensive technical expertise across multiple domains
          </p>
        </div>

        <div className="skills-categories" data-animate id="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level">
                      <div 
                        className="skill-bar" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section" data-animate id="certifications">
          <h2 className="section-title">Certifications & Training</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-provider">{cert.provider}</div>
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-level">{cert.level}</span>
                </div>
                <div className="cert-badge">
                  {cert.provider === 'HackerRank' ? '🏅' :
                   cert.provider === 'GitHub' ? '🔧' :
                   cert.provider === 'Google' ? '🛡️' :
                   cert.provider === 'Harvard' ? '🎓' :
                   cert.provider === 'Verizon' ? '☁️' : '🤖'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary" data-animate id="skills-summary">
          <h2 className="section-title">Technical Proficiency</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">💻</div>
              <h3>Full-Stack Development</h3>
              <p>Experienced in both frontend and backend development with modern frameworks and technologies.</p>
              <div className="summary-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>APIs</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <h3>Data Science & Analytics</h3>
              <p>Strong foundation in data analysis, visualization, and machine learning techniques.</p>
              <div className="summary-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🔬</div>
              <h3>Research & Innovation</h3>
              <p>Experience in academic research, particularly in AI ethics and neuroscience applications.</p>
              <div className="summary-tags">
                <span>Research Methods</span>
                <span>Academic Writing</span>
                <span>Data Analysis</span>
                <span>Critical Thinking</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🏆</div>
              <h3>Competitive Programming</h3>
              <p>Proven track record in coding competitions and hackathons with multiple wins.</p>
              <div className="summary-tags">
                <span>Algorithms</span>
                <span>Problem Solving</span>
                <span>Time Management</span>
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="learning-section" data-animate id="learning">
          <h2 className="section-title">Currently Learning</h2>
          <div className="learning-grid">
            <div className="learning-item">
              <div className="learning-icon">🤖</div>
              <h4>Advanced Machine Learning</h4>
              <div className="learning-progress">
                <div className="progress-bar" style={{width: '75%'}}></div>
              </div>
              <span>75% Complete</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">☁️</div>
              <h4>AWS Cloud Architecture</h4>
              <div className="learning-progress">
                <div className="progress-bar" style={{width: '60%'}}></div>
              </div>
              <span>60% Complete</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">📱</div>
              <h4>React Native</h4>
              <div className="learning-progress">
                <div className="progress-bar" style={{width: '45%'}}></div>
              </div>
              <span>45% Complete</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">🔐</div>
              <h4>Cybersecurity</h4>
              <div className="learning-progress">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
              <span>80% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;