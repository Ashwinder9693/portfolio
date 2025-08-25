import React, { useEffect } from 'react';

const HomePage = ({ setCurrentPage }) => {
  // Ensure animations show on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        el.classList.add('visible');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleResumeDownload = () => {
    // You can replace this with the actual path to your resume file
    const resumeUrl = '/assets/resume/Ashwinder_Singh_Resume.pdf';
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page home-page">
      <div className="hero-section" data-animate id="hero">
        <div className="hero-bg">
          <div className="floating-shapes">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`shape shape-${i % 4}`}></div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-title">
            <h1 className="title-line">
              <span className="title-text">Ashwinder Singh</span>
            </h1>
            <div className="subtitle-container">
              <span className="subtitle">Computer Science Student & </span>
              <span className="rotating-text">
                <span>Software Developer |</span>
                <span> Problem Solver |</span>
                <span> Innovation Leader |</span>
                <span> Tech Enthusiast</span>
              </span>
            </div>
          </div>
          
          <p className="hero-description">
            Passionate about challenging the status quo and pushing the boundaries of technology. 
            Pi Theta Kappa Honors Society nominee with expertise in full-stack development, 
            AI research, and data analysis.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3.7</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Hackathon</span>
            </div>
          </div>

          <div className="hero-actions">
            <button 
              className="btn btn-primary pulse"
              onClick={() => setCurrentPage('projects')}
            >
              <span>View My Work</span>
              <i className="btn-icon">→</i>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setCurrentPage('about')}
            >
              <span>Learn More</span>
              <i className="btn-icon">📋</i>
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleResumeDownload}
              aria-label="Download Resume"
            >
              <span className="btn-icon">📄</span>
              Download Resume
            </button>
          </div>

          <div className="social-proof">
            <div className="social-links">
              <a href="https://github.com/Ashwinder9693" target="_blank" rel="noopener noreferrer" className="social-link github">
                <i>⚡</i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ashwinder-singh-5b1220206/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i>💼</i> LinkedIn
              </a>
              <a href="mailto:Ashwinderbhupal6@gmail.com" className="social-link email">
                <i>📧</i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          {/* <span>Scroll to explore</span> */}
        </div>
      </div>

      <div className="featured-section" data-animate id="featured">
        <div className="container">
          <h2 className="section-title">Recent Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🧠</div>
              <h3>AI Research at Princeton</h3>
              <p>Conducted cutting-edge research on gender bias in AI image generation</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🏆</div>
              <h3>Hackathon Attended</h3>
              <p>Made Major Projects at Hack TCNJ with FBI crime data visualization</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>Amazon Associate</h3>
              <p>Currently working as Fulfillment Center Associate at Amazon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;