// src/Navigation.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, scrollProgress }) => {
  // Build file URL that works locally and on GitHub Pages
  const base = import.meta.env.BASE_URL; // ends with /
  const resumeUrl = `${base}Resume/Ashwinder_Bhupal.pdf`;

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' }
  ];

  const [showResume, setShowResume] = useState(false);

  const handleResumeView = () => window.open(resumeUrl, '_blank');
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Bhupal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResume(false);
  };

  return (
    <>
      <style>{`
        /* ---- Resume dropdown look (70% glass) ---- */
        .resume-dropdown { position: relative; display:inline-block; }
        .resume-btn{
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color:#fff; border:0; padding:8px 14px; border-radius:10px;
          font-weight:600; display:flex; align-items:center; gap:8px; cursor:pointer;
          box-shadow: 0 6px 18px rgba(118,75,162,.35);
        }
        .resume-menu{
          position:absolute; right:0; top:calc(100% + 8px);
          width:220px; background: rgba(255,255,255,.95);
          backdrop-filter: blur(12px) saturate(150%);
          -webkit-backdrop-filter: blur(12px) saturate(150%);
          border:1px solid var(--border-glass); border-radius:12px;
          box-shadow: 0 12px 40px rgba(0,0,0,.18);
          overflow:hidden; z-index:1100; display:none;
        }
        .resume-menu.open{ display:block; }
        .resume-item{
          display:flex; align-items:center; gap:10px;
          padding:12px 14px; cursor:pointer; font-weight:600; color:var(--text-primary);
        }
        .resume-item:hover{ background:rgba(255,255,255,.45); }

        /* keep the nav progress line */
        .scroll-progress{ position:absolute; bottom:0; left:0; height:3px;
          background:var(--gradient-primary); border-radius:0 2px 2px 0; }

        /* Desktop layout */
        @media (min-width:769px){
          .nav-container{ justify-content:space-between; }
          .nav-menu{ display:flex; gap:.8rem; align-items:center; }
          .menu-toggle, .mobile-panel{ display:none; }
        }

        /* Mobile: hide desktop inline menu, use mobile panel */
        @media (max-width:768px){
          .nav-container{
            padding:.6rem .8rem; display:flex; align-items:center;
            justify-content:space-between; gap:.4rem; flex-wrap:nowrap;
          }
          .nav-menu{ display:none !important; }  /* hide desktop list */

          .menu-toggle{
            display:inline-flex; align-items:center; justify-content:center;
            width:40px; height:40px; border:0; background:transparent; padding:6px; cursor:pointer;
          }
          .menu-toggle span{ display:block; height:2px; width:100%; background:var(--text-primary);
            margin:6px 0; transition:transform .2s ease, opacity .2s ease; }
          .nav.nav-open .menu-toggle span:nth-child(1){ transform:translateY(8px) rotate(45deg); }
          .nav.nav-open .menu-toggle span:nth-child(2){ opacity:0; }
          .nav.nav-open .menu-toggle span:nth-child(3){ transform:translateY(-8px) rotate(-45deg); }

          /* 70% visible glass dropdown panel, anchored right under the bar */
          .mobile-panel{
            position:absolute; right:12px; top:calc(100% + 10px);
            width:min(86vw, 320px); max-height:70vh; overflow:auto;
            background: rgba(255,255,255,.95);
            backdrop-filter: blur(18px) saturate(160%);
            -webkit-backdrop-filter: blur(18px) saturate(160%);
            border:1px solid var(--border-glass); border-radius:16px;
            box-shadow: 0 12px 40px rgba(0,0,0,.15);
            transform-origin: top right;
            transform: scale(.96) translateY(-8px);
            opacity:0; pointer-events:none;
            transition: transform .18s ease, opacity .16s ease;
            z-index:1003;
          }
          .mobile-panel.open{ opacity:1; pointer-events:auto; transform: scale(1) translateY(0); }

          .mobile-list{ display:flex; flex-direction:column; padding:8px; }
          .mobile-item{
            display:flex; align-items:center; gap:12px;
            padding:12px 12px; border-radius:12px; text-decoration:none;
            color:var(--text-primary); font-weight:600; font-size:1rem;
          }
          .mobile-item:hover{ background:rgba(255,255,255,.45); }
          .mobile-item.active{ background: rgba(52,152,219,.12); color:var(--accent-color); }

          .nav-overlay{
            position:fixed; inset:0; background:rgba(0,0,0,.35);
            opacity:1; pointer-events:auto; z-index:1002;
          }
        }
      `}</style>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link className="nav-logo" to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-text">A S</span>
            {/* <span className="logo-text"></span> */}
          </Link>

          {/* Desktop menu (hidden on mobile) */}
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

          {/* Right controls: Resume + Hamburger */}
          <div className="nav-controls" style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <div className="resume-dropdown">
              <button
                className="resume-btn"
                type="button"
                onClick={() => setShowResume(v => !v)}
                aria-expanded={showResume}
              >
                📄 Resume
              </button>
              <div className={`resume-menu ${showResume ? 'open' : ''}`}>
                <div className="resume-item" onClick={handleResumeView}>👁️ View Resume</div>
                <div className="resume-item" onClick={handleResumeDownload}>📥 Download PDF</div>
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

        {/* Mobile panel (separate node; no Resume here to avoid duplicates) */}
        <div className={`mobile-panel ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-list">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `mobile-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mobile-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}

        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      </nav>
    </>
  );
};

export default Navigation;
