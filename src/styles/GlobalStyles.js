import { createGlobalStyle } from 'styled-components'
import { breakpoints, transitions } from './variables.js'
import { gradientAnimations } from './gradients.js'

const GlobalStyles = createGlobalStyle`
  ${gradientAnimations.subtleShift}
  ${gradientAnimations.waveMove}
  ${gradientAnimations.pulse}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;

    /* Light theme colors */
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-accent: #f093fb;
    --color-text: #2d3748;
    --color-text-light: #4a5568;
    --color-text-lighter: #718096;
    --color-background: #f7fafc;
    --color-surface: #ffffff;
    --color-border: #e2e8f0;
    --color-shadow: rgba(0, 0, 0, 0.1);

    /* Dark theme colors */
    --color-primary-dark: #9f7aea;
    --color-secondary-dark: #b794f4;
    --color-accent-dark: #d53f8c;
    --color-text-dark: #f7fafc;
    --color-text-light-dark: #e2e8f0;
    --color-text-lighter-dark: #a0aec0;
    --color-background-dark: #1a202c;
    --color-surface-dark: #2d3748;
    --color-border-dark: #4a5568;
    --color-shadow-dark: rgba(0, 0, 0, 0.3);

    /* Semantic colors */
    --color-success: #38a169;
    --color-warning: #d69e2e;
    --color-error: #e53e3e;
    --color-info: #3182ce;

    /* Sizes */
    --max-width: 1200px;
    --section-padding: 4rem 2rem;
    --component-gap: 1.5rem;
    --card-gap: 2rem;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    line-height: 1.6;
    color: var(--color-text);
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Dark theme body styles */
  body[data-theme="dark"] {
    color: var(--color-text-dark);
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: inherit;
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
    color: inherit;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: ${transitions.fast};
  }

  a:hover {
    color: var(--color-secondary);
  }

  /* Form elements */
  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: none;
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    background: var(--color-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: ${transitions.medium};
  }

  button:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0);
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--color-border);
    background: var(--color-surface);
    color: inherit;
    transition: ${transitions.fast};
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  body[data-theme="dark"] input,
  body[data-theme="dark"] textarea {
    background: var(--color-surface-dark);
    border-color: var(--color-border-dark);
    color: var(--color-text-dark);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-secondary);
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Skip to main content link for accessibility */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Utility classes */
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: var(--section-padding);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Responsive text sizes */
  @media (max-width: ${breakpoints.mobile}) {
    html {
      font-size: 14px;
    }

    .container {
      padding: 0 1rem;
    }

    .section {
      padding: 3rem 1rem;
    }
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    html {
      scroll-behavior: auto;
    }
  }

  /* Print styles */
  @media print {
    body {
      background: white !important;
      color: black !important;
    }

    .section {
      min-height: auto;
      padding: 2rem 1rem !important;
    }
  }
`

export default GlobalStyles