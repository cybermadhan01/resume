import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import Hero from '../components/Hero/Hero.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Skills from '../components/Skills/Skills.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Header from '../components/Layout/Header.jsx'
import { getPreferredTheme, applyTheme } from '../utils/helpers.js'

const App = () => {
  const [theme, setTheme] = useState(() => getPreferredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  // Apply system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        setTheme(systemTheme)
        applyTheme(systemTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const themeConfig = {
    mode: theme,
    toggleTheme
  }

  return (
    <ThemeProvider theme={themeConfig}>
      <div className="app" data-theme={theme}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App