// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navigation from './Navigation.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import SkillsPage from './SkillsPage.jsx'
import ExperiencePage from './ExperiencePage.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [notifications, setNotifications] = useState([])

  const mainRef = useRef(null)
  const location = useLocation()

  // Advanced loading with progress tracking
  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        setTimeout(() => setIsLoading(false), 500)
        clearInterval(interval)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [])

  // Scroll progress tracking against <main> (make sure CSS sets overflow:auto)
  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    const handleScroll = () => {
      const scrollTop = el.scrollTop
      const max = el.scrollHeight - el.clientHeight || 1
      setScrollProgress((scrollTop / max) * 100)
    }
    handleScroll()
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse tracking (desktop flair)
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // ESC closes menu
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen)
  }, [isMenuOpen])

  // Close menu & scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false)
    // smooth scroll the internal scroller
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Reveal animations when sections enter viewport
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
      document.querySelectorAll('[data-animate]').forEach((el) => {
        obs.observe(el)
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible')
      })
      return () => obs.disconnect()
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return
    const t = setTimeout(() => {
      document.querySelectorAll('[data-animate]').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible')
      })
    }, 200)
    return () => clearTimeout(t)
  }, [isLoading])

  const LoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">AS</div>
        <div className="loading-text">Loading Portfolio...</div>
        <div className="loading-bar"><div className="loading-progress" /></div>
      </div>
    </div>
  )

  const NotificationSystem = () => (
    <div className="notification-system">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {n.type === 'success' ? '✅' : n.type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span className="notification-message">{n.message}</span>
          </div>
          <button className="notification-close"
                  onClick={() => setNotifications((prev) => prev.filter(x => x.id !== n.id))}>×</button>
        </div>
      ))}
    </div>
  )

  if (isLoading) return <LoadingScreen />

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="cursor-follower" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollProgress={scrollProgress}
      />
      <NotificationSystem />

      <main className="main-content" ref={mainRef}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
