// src/Navigation.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  scrollProgress,
}) => {
  // Use Vite base to work locally AND on GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  // Your PDF lives in public/Resume/Ashwinder_Bhupal.pdf -> served from /Resume/...
  const resumeHref = `${base}Resume/Ashwinder_Bhupal.pdf`;

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' },
  ];

  return (
    <>
      <style>{`
        /* ---- Resume dropdown (desktop & mobile) ---- */
        .resume-dropdown { position: relative; }
        .resume-btn {
          appearance: none; border: 0; cursor: pointer;
          background: var(--bg-glass); color: var(--text-primary);
          border: 1px solid var(--border-glass); border-radius: 12px;
          padding: 10px 14px; font-weight: 700; display: inline-flex; align-items: center; gap: 10px;
          backdrop-filter: blur(10px);
        }
        .resume-btn:hover { box-shadow: var(--shadow-lg); transform: translateY(-1px); }

        .resume-dropdown-content {
          position: absolute; top: calc(100% + 10px); right: 0;
          display: none; min-width: 220px; padding: 6px;
          background: var(--bg-secondary); border: 1px solid var(--border-color);
          border-radius: 14px; box-shadow: var(--shadow-xl); z-index: 1003;
        }
        .resume-dropdown:hover .resume-dropdown-content,
        .resume-dropdown:focus-within .resume-dropdown-content { display: block; }

        .resume-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px; border-radius: 10px; text-decoration: none;
          color: var(--text-primary); font-weight: 600;
        }
        .resume-dropdown-item:hover { background: var(--bg-tertiary); color: var(--accent-color); }

        /* When hamburger menu is open, hide the floating dropdown so we don't
           get those two large "View/Download" cards in the center. */
        .nav.nav-open .resume-dropdown-content { display: none !important; }

        /* Keep nav content on a single row; center tabs; keep controls on right */
        .nav-container { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .nav-menu { flex: 1; display: flex; justify-content: center; }

        /* Mobile tweaks */
        @media (max-width: 768px) {
          .resume-btn { padding: 8px 10px; font-size: 14px; }
          .resume-dropdown-content { right: 0; left: auto; top: calc(100% + 8px); }
        }
      `}</style>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          {/* Logo (always left) */}
          <Link className="nav-logo" to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-text">AS</span>
            <span className="logo-subtitle">Portfolio</span>
          </Link>

          {/* Center tabs */}
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

          {/* Right controls: only ONE resume control lives in the navbar */}
          <div className="nav-controls" style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div className="resume-dropdown">
              <button className="resume-btn" aria-haspopup="true" aria-expanded="false">
                <span style={{fontSize:'1.1rem'}}>📄</span> Resume
              </button>
              <div className="resume-dropdown-content" role="menu">
                <a
                  className="resume-dropdown-item"
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>👁️</span> View Resume
                </a>
                <a
                  className="resume-dropdown-item"
                  href={resumeHref}
                  download="Ashwinder_Bhupal_Resume.pdf"
                >
                  <span>📥</span> Download PDF
                </a>
              </div>
            </div>

            {/* Hamburger */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {/* progress line */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        {/* backdrop for the slide-down panel */}
        {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}
      </nav>
    </>
  );
};

export default Navigation;
