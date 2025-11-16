// Theme management
export const getPreferredTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}

export const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
}

// Debounce utility for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle utility for performance
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Smooth scroll utility
export const smoothScroll = (elementId, offset = 0) => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

// Intersection Observer for scroll animations
export const createIntersectionObserver = (callback, options = {}) => {
  if (typeof IntersectionObserver === 'undefined') {
    return null
  }

  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Screen size detection
export const getScreenSize = () => {
  if (typeof window === 'undefined') return 'desktop'

  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// Email validation
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Form validation utilities
export const validateField = (name, value, required = false) => {
  const errors = {}

  if (required && !value.trim()) {
    errors[name] = `${name} is required`
    return errors
  }

  switch (name) {
    case 'email':
      if (value && !isValidEmail(value)) {
        errors[name] = 'Please enter a valid email address'
      }
      break
    case 'name':
      if (value && value.trim().length < 2) {
        errors[name] = 'Name must be at least 2 characters long'
      }
      break
    case 'message':
      if (value && value.trim().length < 10) {
        errors[name] = 'Message must be at least 10 characters long'
      }
      break
    default:
      break
  }

  return errors
}

// Utility to generate random IDs for components
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// Format date for display
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    ...options
  }

  return new Intl.DateTimeFormat('en-US', defaultOptions).format(new Date(date))
}

// Clamp utility for animations
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
}

// Linear interpolation utility
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor
}

// Map number from one range to another
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// Check if element is in viewport
export const isInViewport = (element) => {
  if (typeof document === 'undefined' || !element) return false

  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Utility to handle image loading
export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Reduce motion detection
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Device detection utilities
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export const isMobile = () => {
  if (typeof navigator === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Local storage utilities
export const storage = {
  get: (key, defaultValue = null) => {
    if (typeof localStorage === 'undefined') return defaultValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: (key, value) => {
    if (typeof localStorage === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn('Failed to save to localStorage:', error)
    }
  },

  remove: (key) => {
    if (typeof localStorage === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error)
    }
  }
}