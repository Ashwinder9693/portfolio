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
  const resumeUrl =
    'https://github.com/Ashwinder9693/portfolio/raw/gh-pages/Ashwinder%20Bhupal.pdf';

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' },
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* small CSS just for resume hover (desktop) */}
      <style>{`
        .resume-dropdown { position: relative; display: inline-block; }
        .resume-dropdown-content {
          display: none; position: absolute; background-color: #f9f9f9;
          min-width: 160px; box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          z-index: 10; border-radius: 8px; overflow: hidden; top: 100%; right: 0;
        }
        .resume-dropdown:hover .resume-dropdown-content { display: block; }
        .resume-dropdown-item {
          color: black; padding: 12px 16px; text-decoration: none; display: flex;
          align-items: center; gap: 8px; cursor: pointer; transition: background-color 0.3s;
        }
        .resume-dropdown-item:hover { background-color: #f1f1f1; }
      `}</style>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          {/* Logo (always left) */}
          <Link className="nav-logo" to="/" onClick={closeMenu} aria-label="Go home">
            <span className="logo-text">AS</span>
            <span className="logo-subtitle">Portfolio</span>
          </Link>

          {/* Desktop menu (hidden on mobile) */}
          <div className="nav-menu">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Right controls */}
          <div className="nav-controls">
            {/* Desktop resume hover; hidden on mobile (mobile panel shows actions) */}
            <div className="resume-dropdown">
              <button className="btn btn-secondary" type="button" aria-haspopup="true">
                <span>📄</span> Resume
              </button>
              <div className="resume-dropdown-content">
                <div className="resume-dropdown-item" onClick={handleResumeView}>
                  <span>👁️</span> View Resume
                </div>
                <div className="resume-dropdown-item" onClick={handleResumeDownload}>
                  <span>📥</span> Download PDF
                </div>
              </div>
            </div>

            {/* Mobile hamburger (right aligned) */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              <span></span><span></span><span></span>
            </button>

            {/* Mobile dropdown panel (glassy card from top-right) */}
            <div
              id="mobile-menu-panel"
              className={`mobile-panel ${isMenuOpen ? 'open' : ''}`}
              role="menu"
            >
              <div className="mobile-list">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) =>
                      `mobile-item ${isActive ? 'active' : ''}`
                    }
                    onClick={closeMenu}
                    role="menuitem"
                  >
                    <span className="mobile-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>

              <div className="mobile-divider" />

              <div className="mobile-actions">
                <button className="mobile-action" onClick={handleResumeView}>
                  👁️ View Resume
                </button>
                <button className="mobile-action" onClick={handleResumeDownload}>
                  📥 Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        {/* Dim overlay for mobile panel */}
        {isMenuOpen && (
          <div
            className="nav-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
