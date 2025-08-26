// src/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = ({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, scrollProgress }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Build file URL that works locally and on GitHub Pages
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}Resume/Ashwinder_Bhupal.pdf`;

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', to: '/' },
    { id: 'about', label: 'About', icon: '👨‍💻', to: '/about' },
    { id: 'projects', label: 'Projects', icon: '🚀', to: '/projects' },
    { id: 'skills', label: 'Skills', icon: '⚡', to: '/skills' },
    { id: 'experience', label: 'Experience', icon: '💼', to: '/experience' }
  ];

  const [showResume, setShowResume] = useState(false);

  // Professional color palette
  const colors = {
    primary: '#2563eb',
    primaryDark: '#1e40af',
    primaryLight: '#3b82f6',
    secondary: '#64748b',
    accent: '#06b6d4',
    accentDark: '#0891b2',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    glassBg: 'rgba(255, 255, 255, 0.9)',
    text: '#1e293b',
    textLight: '#64748b',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    shadow: 'rgba(15, 23, 42, 0.1)',
    shadowMedium: 'rgba(15, 23, 42, 0.15)',
    shadowHeavy: 'rgba(15, 23, 42, 0.25)',
    overlay: 'rgba(15, 23, 42, 0.4)',
    success: '#10b981',
    warning: '#f59e0b',
    gradient1: '#6366f1',
    gradient2: '#8b5cf6'
  };

  // Effects and animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e) => {
      if (showResume && !e.target.closest('.resume-dropdown')) {
        setShowResume(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showResume]);

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

  // Styles object
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      height: '75px',
      willChange: 'transform, background, box-shadow'
    },

    navContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1.5rem',
      height: '75px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    },

    navLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      width: '65px',
      height: '65px',
      borderRadius: '16px',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      outline: 'none',
      padding: '4px'
    },

    logoImage: {
      width: '57px',
      height: '57px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '12px',
      position: 'relative',
      zIndex: 3,
      transition: 'all 0.3s ease',
      filter: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      pointerEvents: 'none'
    },

    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      textDecoration: 'none',
      color: colors.textLight,
      fontSize: '0.95rem',
      fontWeight: '500',
      padding: '0.8rem 1.2rem',
      borderRadius: '14px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: '"SF Pro Text", system-ui, sans-serif',
      border: '1px solid transparent',
      minHeight: '44px',
      justifyContent: 'center'
    },

    navItemActive: {
      color: colors.primary,
      background: `linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%)`,
      border: `1px solid rgba(37, 99, 235, 0.2)`,
      boxShadow: `
        0 6px 20px rgba(37, 99, 235, 0.2),
        0 2px 8px rgba(37, 99, 235, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.7)
      `,
      transform: 'translateY(-1px)',
      fontWeight: '600'
    },

    navIcon: {
      fontSize: '1rem',
      opacity: 0.8,
      transition: 'all 0.3s ease'
    },

    navLabel: {
      fontSize: '0.9rem',
      fontWeight: '500'
    },

    navControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },

    resumeDropdown: {
      position: 'relative',
      display: 'inline-block'
    },

    resumeBtn: {
      background: `linear-gradient(135deg, ${colors.gradient1} 0%, ${colors.gradient2} 100%)`,
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '0.6rem 1.2rem',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      boxShadow: `0 6px 20px rgba(139, 92, 246, 0.4)`,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',
      minHeight: '40px'
    },

    resumeMenu: {
      position: 'absolute',
      right: 0,
      top: 'calc(100% + 8px)',
      width: '220px',
      background: colors.cardBg,
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: `1px solid ${colors.border}`,
      borderRadius: '16px',
      boxShadow: `
        0 20px 60px rgba(15, 23, 42, 0.15),
        0 8px 25px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.7)
      `,
      overflow: 'hidden',
      zIndex: 1100,
      opacity: showResume ? 1 : 0,
      visibility: showResume ? 'visible' : 'hidden',
      transform: showResume ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: 'top right'
    },

    resumeItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem 1.25rem',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.95rem',
      color: colors.text,
      transition: 'all 0.3s ease',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    },

    menuToggle: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      border: 'none',
      background: 'transparent',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',
      '@media (min-width: 769px)': {
        display: 'none'
      }
    },

    menuToggleSpan: {
      display: 'block',
      height: '2px',
      width: '100%',
      background: colors.text,
      margin: '4px 0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '1px'
    },

    mobilePanel: {
      position: 'absolute',
      right: '1rem',
      top: 'calc(100% + 12px)',
      width: 'min(90vw, 350px)',
      maxHeight: '75vh',
      overflowY: 'auto',
      background: `rgba(255, 255, 255, 0.95)`,
      backdropFilter: 'blur(25px) saturate(180%) brightness(110%)',
      WebkitBackdropFilter: 'blur(25px) saturate(180%) brightness(110%)',
      border: `1px solid rgba(255, 255, 255, 0.3)`,
      borderRadius: '24px',
      boxShadow: `
        0 30px 90px rgba(15, 23, 42, 0.15),
        0 15px 40px rgba(15, 23, 42, 0.08),
        0 5px 20px rgba(15, 23, 42, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1px 0 rgba(255, 255, 255, 0.2)
      `,
      transformOrigin: 'top right',
      transform: isMenuOpen ? 'scale(1) translateY(0) rotateX(0deg)' : 'scale(0.95) translateY(-15px) rotateX(-5deg)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      pointerEvents: isMenuOpen ? 'auto' : 'none',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1003
    },

    mobileList: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem'
    },

    mobileItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      borderRadius: '16px',
      textDecoration: 'none',
      color: colors.text,
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',
      minHeight: '52px'
    },

    mobileItemActive: {
      background: `rgba(37, 99, 235, 0.1)`,
      color: colors.primary,
      boxShadow: `0 4px 12px rgba(37, 99, 235, 0.15)`
    },

    mobileIcon: {
      fontSize: '1.2rem',
      opacity: 0.8
    },

    navOverlay: {
      position: 'fixed',
      inset: 0,
      background: colors.overlay,
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      pointerEvents: isMenuOpen ? 'auto' : 'none',
      zIndex: 1002,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)'
    },

    scrollProgress: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '3px',
      background: `
        linear-gradient(90deg, 
          ${colors.primary} 0%, 
          ${colors.accent} 50%, 
          ${colors.gradient2} 100%
        )
      `,
      borderRadius: '0 2px 2px 0',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `
        0 0 15px rgba(37, 99, 235, 0.5),
        0 -2px 8px rgba(37, 99, 235, 0.2)
      `,
      backgroundSize: '200% 100%',
      animation: 'progressGlow 3s ease-in-out infinite'
    }
  };

  // Event handlers for hover effects
  const handleNavItemHover = (e, isEntering) => {
    if (window.innerWidth < 769) return; // Skip on mobile
    
    if (isEntering) {
      e.target.style.background = `
        linear-gradient(135deg, 
          rgba(37, 99, 235, 0.12) 0%, 
          rgba(37, 99, 235, 0.08) 50%,
          rgba(6, 182, 212, 0.06) 100%
        )
      `;
      e.target.style.transform = 'translateY(-3px) scale(1.02)';
      e.target.style.boxShadow = `
        0 12px 25px rgba(37, 99, 235, 0.2),
        0 4px 12px rgba(37, 99, 235, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.7)
      `;
      e.target.style.border = '1px solid rgba(37, 99, 235, 0.3)';
      e.target.style.backdropFilter = 'blur(15px) saturate(150%)';
      
      const icon = e.target.querySelector('.nav-icon') || e.target.querySelector('span:first-child');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotateY(15deg)';
        icon.style.filter = 'drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3))';
      }
    } else {
      if (!e.target.classList.contains('active')) {
        e.target.style.background = 'transparent';
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = 'none';
        e.target.style.border = '1px solid transparent';
        e.target.style.backdropFilter = 'none';
        
        const icon = e.target.querySelector('.nav-icon') || e.target.querySelector('span:first-child');
        if (icon) {
          icon.style.transform = 'scale(1) rotateY(0deg)';
          icon.style.filter = 'none';
        }
      }
    }
  };

  const handleResumeHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.transform = 'translateY(-3px) scale(1.05) rotateZ(1deg)';
      e.target.style.boxShadow = `
        0 15px 35px rgba(139, 92, 246, 0.5),
        0 5px 15px rgba(99, 102, 241, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4)
      `;
      e.target.style.background = `
        linear-gradient(135deg, 
          ${colors.gradient1} 0%, 
          ${colors.gradient2} 50%,
          ${colors.accent} 100%
        )
      `;
      e.target.style.filter = 'brightness(110%) saturate(120%)';
    } else {
      e.target.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
      e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
      e.target.style.background = `linear-gradient(135deg, ${colors.gradient1} 0%, ${colors.gradient2} 100%)`;
      e.target.style.filter = 'brightness(100%) saturate(100%)';
    }
  };

  const handleResumeItemHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.background = 'rgba(37, 99, 235, 0.08)';
      e.target.style.transform = 'translateX(4px)';
    } else {
      e.target.style.background = 'transparent';
      e.target.style.transform = 'translateX(0)';
    }
  };

  const handleMobileItemHover = (e, isEntering) => {
    if (isEntering && !e.target.classList.contains('active')) {
      e.target.style.background = `
        linear-gradient(135deg, 
          rgba(37, 99, 235, 0.08) 0%, 
          rgba(6, 182, 212, 0.05) 100%
        )
      `;
      e.target.style.transform = 'translateX(6px) scale(1.02)';
      e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
      
      const icon = e.target.querySelector('.mobile-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotateY(15deg)';
        icon.style.filter = 'drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3))';
      }
    } else if (!isEntering && !e.target.classList.contains('active')) {
      e.target.style.background = 'transparent';
      e.target.style.transform = 'translateX(0) scale(1)';
      e.target.style.boxShadow = 'none';
      
      const icon = e.target.querySelector('.mobile-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotateY(0deg)';
        icon.style.filter = 'none';
      }
    }
  };

  const handleLogoHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'scale(1.2) translateY(-4px) rotateZ(3deg)';
      e.currentTarget.style.boxShadow = `
        0 25px 60px rgba(99, 102, 241, 0.5),
        0 12px 35px rgba(99, 102, 241, 0.4),
        0 0 0 6px rgba(99, 102, 241, 0.15),
        inset 0 2px 0 rgba(255, 255, 255, 0.9),
        inset 0 -2px 0 rgba(255, 255, 255, 0.5)
      `;
      e.currentTarget.style.background = `
        linear-gradient(135deg, 
          rgba(99, 102, 241, 0.3) 0%, 
          rgba(139, 92, 246, 0.25) 25%,
          rgba(6, 182, 212, 0.25) 75%,
          rgba(99, 102, 241, 0.3) 100%
        )
      `;
      
      const logoImg = e.currentTarget.querySelector('img');
      if (logoImg) {
        logoImg.style.filter = 'drop-shadow(0 8px 16px rgba(99, 102, 241, 0.5)) brightness(115%) contrast(115%) saturate(120%)';
        logoImg.style.transform = 'scale(1.1) rotateZ(-2deg)';
      }
    } else {
      e.currentTarget.style.transform = 'scale(1) translateY(0) rotateZ(0deg)';
      e.currentTarget.style.boxShadow = `
        0 8px 32px rgba(99, 102, 241, 0.2),
        0 4px 16px rgba(99, 102, 241, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1px 0 rgba(255, 255, 255, 0.3)
      `;
      e.currentTarget.style.background = `
        linear-gradient(135deg, 
          rgba(99, 102, 241, 0.15) 0%, 
          rgba(139, 92, 246, 0.1) 25%,
          rgba(6, 182, 212, 0.1) 75%,
          rgba(99, 102, 241, 0.15) 100%
        )
      `;
      
      const logoImg = e.currentTarget.querySelector('img');
      if (logoImg) {
        logoImg.style.filter = 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3)) brightness(100%) contrast(100%) saturate(100%)';
        logoImg.style.transform = 'scale(1) rotateZ(0deg)';
      }
    }
  };

  const handleMenuToggleHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.background = 'rgba(37, 99, 235, 0.08)';
    } else {
      e.target.style.background = 'transparent';
    }
  };

  // Get menu toggle span styles based on menu state
  const getMenuToggleSpanStyle = (index) => {
    const baseStyle = { ...styles.menuToggleSpan };
    
    if (isMenuOpen) {
      if (index === 0) {
        baseStyle.transform = 'translateY(10px) rotate(45deg)';
      } else if (index === 1) {
        baseStyle.opacity = 0;
      } else if (index === 2) {
        baseStyle.transform = 'translateY(-10px) rotate(-45deg)';
      }
    }
    
    return baseStyle;
  };

  return (
    <>
      <style>
        {`
          /* Global body padding to prevent navbar overlap */
          body {
            margin: 0;
            padding-top: 85px !important;
          }
          
          /* Main content wrapper */
          .page, main, #root > div:first-child {
            margin-top: 0;
            padding-top: 0;
          }
          
          /* Navigation Base Styles */
          .nav-menu-desktop {
            display: none;
            gap: 0.5rem;
            align-items: center;
          }
          
          .menu-toggle-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          
          .mobile-panel-container {
            display: block;
          }
          
          /* Desktop Styles */
          @media (min-width: 769px) {
            .nav-menu-desktop {
              display: flex !important;
            }
            
            .menu-toggle-btn {
              display: none !important;
            }
            
            .mobile-panel-container {
              display: none !important;
            }
          }
          
          /* Mobile Styles */
          @media (max-width: 768px) {
            body {
              padding-top: 80px !important;
            }
            
            .nav-menu-desktop {
              display: none !important;
            }
            
            .menu-toggle-btn {
              display: inline-flex !important;
            }
          }
          
          /* Enhanced Glassmorphism */
          .nav-glass {
            backdrop-filter: blur(25px) saturate(180%) brightness(110%);
            -webkit-backdrop-filter: blur(25px) saturate(180%) brightness(110%);
            background: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 
              0 8px 40px rgba(15, 23, 42, 0.12),
              0 2px 12px rgba(15, 23, 42, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.7);
          }
          
          .nav-scrolled {
            backdrop-filter: blur(30px) saturate(200%) brightness(105%);
            -webkit-backdrop-filter: blur(30px) saturate(200%) brightness(105%);
            background: rgba(255, 255, 255, 0.95);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            box-shadow: 
              0 12px 50px rgba(15, 23, 42, 0.15),
              0 4px 20px rgba(15, 23, 42, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }
          
          /* Professional Animations */
          @keyframes slideDown {
            from { transform: translateY(-10px) scale(0.98); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(10px) scale(0.98); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          
          @keyframes progressGlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
          }
          
          .nav-animate-in {
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .logo-container::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(135deg, 
              rgba(99, 102, 241, 0.3) 0%, 
              rgba(139, 92, 246, 0.2) 25%,
              rgba(6, 182, 212, 0.2) 75%,
              rgba(99, 102, 241, 0.3) 100%
            );
            border-radius: 22px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .logo-container:hover::before {
            opacity: 1;
          }
          
          /* Prevent logo transparency on click/active */
          .logo-container:active,
          .logo-container:focus,
          .logo-container:visited,
          .logo-container:focus-visible {
            opacity: 1 !important;
            background: linear-gradient(135deg, 
              rgba(99, 102, 241, 0.15) 0%, 
              rgba(139, 92, 246, 0.1) 25%,
              rgba(6, 182, 212, 0.1) 75%,
              rgba(99, 102, 241, 0.15) 100%
            ) !important;
            transform: scale(1.05) translateY(-1px) rotateZ(1deg) !important;
            outline: none !important;
            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2),
                        0 4px 16px rgba(99, 102, 241, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.3) !important;
          }
          
          .logo-container:active span,
          .logo-container:focus span,
          .logo-container:visited span,
          .logo-container:focus-visible span {
            opacity: 1 !important;
            background: linear-gradient(135deg, 
              #2563eb 0%, 
              #6366f1 30%,
              #06b6d4 70%,
              #8b5cf6 100%
            ) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            filter: drop-shadow(0 3px 6px rgba(99, 102, 241, 0.3)) !important;
          }
          
          /* Remove any possible link styling */
          a.logo-container {
            text-decoration: none !important;
            color: inherit !important;
          }
          
          /* Prevent selection and highlights */
          .logo-container * {
            -webkit-tap-highlight-color: transparent !important;
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -khtml-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
          }
          
          /* Smooth scrollbar */
          .mobile-panel-container::-webkit-scrollbar {
            width: 6px;
          }
          
          .mobile-panel-container::-webkit-scrollbar-track {
            background: rgba(226, 232, 240, 0.3);
            border-radius: 3px;
          }
          
          .mobile-panel-container::-webkit-scrollbar-thumb {
            background: rgba(37, 99, 235, 0.3);
            border-radius: 3px;
          }
          
          .mobile-panel-container::-webkit-scrollbar-thumb:hover {
            background: rgba(37, 99, 235, 0.5);
          }
        `}
      </style>
      
      <nav 
        style={styles.nav} 
        className={`${isScrolled ? 'nav-scrolled' : 'nav-glass'} nav-animate-in`}
      >
        <div style={styles.navContainer}>
          {/* Logo */}
          <Link 
            style={styles.navLogo} 
            className="logo-container"
            to="/" 
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src={`${base}Static/Logo.jpg`}
              alt="Ashwinder Singh Logo" 
              style={styles.logoImage}
              draggable="false"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span style="color: #2563eb; font-weight: 900; font-size: 1.5rem;">AS</span>';
              }}
            />
          </Link>

          {/* Desktop menu */}
          <div style={styles.navMenu} className="nav-menu-desktop">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  style={{
                    ...styles.navItem,
                    ...(isActive ? styles.navItemActive : {})
                  }}
                  className={isActive ? 'active nav-item-link' : 'nav-item-link'}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => handleNavItemHover(e, true)}
                  onMouseLeave={(e) => handleNavItemHover(e, false)}
                  title={item.label}
                >
                  <span style={styles.navIcon} className="nav-icon">{item.icon}</span>
                  <span style={styles.navLabel}>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right controls */}
          <div style={styles.navControls}>
            {/* Resume dropdown */}
            <div 
              style={styles.resumeDropdown}
              className="resume-dropdown"
            >
              <button
                style={styles.resumeBtn}
                type="button"
                onClick={() => setShowResume(v => !v)}
                onMouseEnter={(e) => handleResumeHover(e, true)}
                onMouseLeave={(e) => handleResumeHover(e, false)}
                aria-expanded={showResume}
              >
                📄 Resume
              </button>
              <div style={styles.resumeMenu}>
                <div 
                  style={styles.resumeItem} 
                  onClick={handleResumeView}
                  onMouseEnter={(e) => handleResumeItemHover(e, true)}
                  onMouseLeave={(e) => handleResumeItemHover(e, false)}
                >
                  👁️ View Resume
                </div>
                <div 
                  style={styles.resumeItem} 
                  onClick={handleResumeDownload}
                  onMouseEnter={(e) => handleResumeItemHover(e, true)}
                  onMouseLeave={(e) => handleResumeItemHover(e, false)}
                >
                  📥 Download PDF
                </div>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              style={styles.menuToggle}
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={(e) => handleMenuToggleHover(e, true)}
              onMouseLeave={(e) => handleMenuToggleHover(e, false)}
              aria-label="Toggle navigation menu"
            >
              <span style={getMenuToggleSpanStyle(0)}></span>
              <span style={getMenuToggleSpanStyle(1)}></span>
              <span style={getMenuToggleSpanStyle(2)}></span>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div style={styles.mobilePanel} className="mobile-panel-container">
          <div style={styles.mobileList}>
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  style={{
                    ...styles.mobileItem,
                    ...(isActive ? styles.mobileItemActive : {})
                  }}
                  className={isActive ? 'active mobile-nav-item' : 'mobile-nav-item'}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => handleMobileItemHover(e, true)}
                  onMouseLeave={(e) => handleMobileItemHover(e, false)}
                >
                  <span style={styles.mobileIcon} className="mobile-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Mobile backdrop overlay */}
        <div 
          style={styles.navOverlay} 
          onClick={() => setIsMenuOpen(false)} 
        />

        {/* Scroll progress bar */}
        <div 
          style={{
            ...styles.scrollProgress,
            width: `${scrollProgress}%`
          }} 
        />
      </nav>
    </>
  );
};

export default Navigation;