import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { smoothScroll } from '../../utils/helpers.js'
import { personalInfo } from '../../data/personalInfo.js'

const Header = ({ theme, toggleTheme }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const { scrollYProgress } = useScroll()
  const headerBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  )

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '💡' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ]

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsSticky(scrollTop > 100)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    smoothScroll(sectionId, 80)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--color-primary)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 1000,
          transform: `scaleX(${scrollYProgress.get()})`
        }}
      />

      {/* Main Header */}
      <motion.header
        className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: theme.mode === 'dark'
            ? (isSticky ? 'rgba(26, 32, 44, 0.95)' : 'transparent')
            : (isSticky ? 'rgba(255, 255, 255, 0.95)' : 'transparent'),
          backdropFilter: isSticky ? 'blur(10px)' : 'none',
          borderBottom: isSticky ? `1px solid ${theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}` : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          {/* Logo/Name */}
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isSticky ? '1.2rem' : '1.4rem',
              fontWeight: '700',
              color: theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleNavClick('hero')}
          >
            {personalInfo.name}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="nav-item"
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: activeSection === item.id
                    ? 'var(--color-primary)'
                    : (theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'),
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '30px',
                      height: '3px',
                      background: 'var(--color-primary)',
                      borderRadius: '2px'
                    }}
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              style={{
                background: 'var(--color-primary)',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme.mode === 'dark' ? '☀️' : '🌙'}
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)',
              padding: '0.5rem',
              display: 'block'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                top: '80px',
                right: 0,
                width: '300px',
                height: 'calc(100vh - 80px)',
                background: theme.mode === 'dark' ? 'rgba(26, 32, 44, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                borderLeft: `1px solid ${theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                padding: '2rem',
                zIndex: 998
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: activeSection === item.id
                        ? 'var(--color-primary)'
                        : (theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '12px',
                      color: activeSection === item.id
                        ? 'white'
                        : (theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'),
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease'
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}

                {/* Theme Toggle for Mobile */}
                <motion.button
                  onClick={toggleTheme}
                  style={{
                    background: 'var(--color-primary)',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '12px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem'
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={{ fontSize: '1.2rem' }}>
                    {theme.mode === 'dark' ? '☀️' : '🌙'}
                  </span>
                  {theme.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: '80px',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 997
              }}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Add styles for desktop nav visibility */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header