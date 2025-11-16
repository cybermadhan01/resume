import { motion } from 'framer-motion'

// Common animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const slideInDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Stagger animation for lists
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

// Card hover animations
export const cardHover = {
  whileHover: {
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
}

export const card3DHover = {
  whileHover: {
    scale: 1.05,
    z: 50,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Button animations
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

export const buttonPulse = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

// Text animation variants
export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const textReveal = {
  hidden: {
    opacity: 0,
    y: "100%"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Navigation animations
export const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export const mobileMenuSlide = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Form animations
export const formInput = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  },
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

export const formError = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.1 }
  }
}

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity
    }
  }
}

export const loadingPulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Skill bar animations
export const skillBar = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
}

// 3D transform utilities
export const getCardTransform = (mouseX, mouseY, cardRect) => {
  const cardCenterX = cardRect.left + cardRect.width / 2
  const cardCenterY = cardRect.top + cardRect.height / 2

  const angleX = (mouseY - cardCenterY) / 30
  const angleY = (mouseX - cardCenterX) / -30

  return {
    rotateX: Math.max(-15, Math.min(15, angleX)),
    rotateY: Math.max(-15, Math.min(15, angleY)),
    transformPerspective: 1000
  }
}

// Reduced motion variants for accessibility
export const reducedMotionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scale: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

// Spring physics presets
export const springPresets = {
  gentle: {
    type: "spring",
    stiffness: 300,
    damping: 30
  },
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 10
  },
  smooth: {
    type: "spring",
    stiffness: 100,
    damping: 20
  },
  snappy: {
    type: "spring",
    stiffness: 500,
    damping: 40
  }
}