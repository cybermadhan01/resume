export const gradients = {
  // Light theme gradients
  light: {
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    card: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    skills: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    about: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    contact: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    overlay: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
  },

  // Dark theme gradients
  dark: {
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    card: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    accent: 'linear-gradient(135deg, #9f7aea 0%, #b794f4 100%)',
    skills: 'linear-gradient(135deg, #805ad5 0%, #d53f8c 100%)',
    about: 'linear-gradient(135deg, #3182ce 0%, #38b2ac 100%)',
    contact: 'linear-gradient(135deg, #38a169 0%, #48bb78 100%)',
    overlay: 'linear-gradient(135deg, rgba(159, 122, 234, 0.1) 0%, rgba(183, 148, 244, 0.1) 100%)',
  }
}

export const getGradient = (theme, gradientName) => {
  return gradients[theme]?.[gradientName] || gradients.light[gradientName]
}

export const gradientAnimations = {
  subtleShift: `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `,

  waveMove: `
    @keyframes waveMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }
  `,

  pulse: `
    @keyframes gradientPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
  `
}