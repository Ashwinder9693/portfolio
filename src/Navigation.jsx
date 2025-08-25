// src/Navigation.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ 
  darkMode, 
  setDarkMode, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollProgress 
}) => {
  const resumeUrl = "https://github.com/Ashwinder9693/portfolio/raw/gh-pages/Ashwinder%20Bhupal.pdf";

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' }
  ];

  const handleResumeView = () => window.open(resumeUrl, '_blank');

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Bhupal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        .resume-dropdown { position: relative; display: inline-block; }
        .resume-dropdown-content {
          display: none; position: absolute; background-color: #f9f9f9;
          min-width: 160px; box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          z-index: 1; border-radius: 8px; overflow: hidden; top: 100%; right: 0;
        }
        .resume-dropdown:hover .resume-dropdown-content { display: block; }
        .resume-dropdown-item {
          color: black; padding: 12px 16px; text-decoration: none; display: flex;
          align-items: center; gap: 8px; cursor: pointer; transition: background-color 0.3s;
        }
        .resume-dropdown-item:hover { background-color: #f1f1f1; }
        .resume-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;
          font-size: 14px; font-weight: 500; display: flex; align-items: center; gap: 6px;
          transition: all 0.3s ease;
        }
        .resume-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(102,126,234,.4); }
        @media (max-width: 768px) {
          .resume-dropdown-content { position: fixed; bottom: 60px; right: 10px; left: auto; top: auto; }
        }
      `}</style>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          {/* Logo goes home */}
          <Link className="nav-logo" to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-text">AS</span>
            <span className="logo-subtitle">Portfolio</span>
          </Link>

          <div className="nav-menu">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="nav-controls">
            <div className="resume-dropdown" aria-label="Resume">
              <div className="resume-dropdown-content">
                <div className="resume-dropdown-item" onClick={handleResumeView}><span>👁️</span> View Resume</div>
                <div className="resume-dropdown-item" onClick={handleResumeDownload}><span>📥</span> Download PDF</div>
              </div>
            </div>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </nav>
    </>
  );
};

export default Navigation;
