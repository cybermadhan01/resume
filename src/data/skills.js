export const skills = [
  // Frontend Skills
  {
    name: "React",
    level: 90,
    category: "frontend",
    years: 3,
    icon: "⚛️",
    description: "Expert in React ecosystem including hooks, context, and performance optimization"
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    years: 4,
    icon: "📜",
    description: "Advanced ES6+, async programming, and modern JavaScript patterns"
  },
  {
    name: "TypeScript",
    level: 80,
    category: "frontend",
    years: 2,
    icon: "📘",
    description: "Strong typing, interfaces, and advanced TypeScript features"
  },
  {
    name: "HTML/CSS",
    level: 92,
    category: "frontend",
    years: 4,
    icon: "🎨",
    description: "Semantic HTML, modern CSS, Flexbox, Grid, and animations"
  },
  {
    name: "Vue.js",
    level: 75,
    category: "frontend",
    years: 1,
    icon: "💚",
    description: "Vue 3, Composition API, and Vue ecosystem"
  },
  {
    name: "Styled Components",
    level: 85,
    category: "frontend",
    years: 2,
    icon: "🎭",
    description: "CSS-in-JS, theme system, and component styling"
  },

  // Backend Skills
  {
    name: "Node.js",
    level: 88,
    category: "backend",
    years: 3,
    icon: "🟢",
    description: "Express.js, REST APIs, middleware, and server-side JavaScript"
  },
  {
    name: "Python",
    level: 82,
    category: "backend",
    years: 2,
    icon: "🐍",
    description: "Django, Flask, data processing, and automation scripts"
  },
  {
    name: "MongoDB",
    level: 80,
    category: "backend",
    years: 2,
    icon: "🍃",
    description: "NoSQL database design, aggregation pipelines, and indexing"
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    years: 1.5,
    icon: "🐘",
    description: "Relational database design, queries, and optimization"
  },
  {
    name: "Redis",
    level: 70,
    category: "backend",
    years: 1,
    icon: "🔴",
    description: "Caching, session management, and real-time data"
  },

  // Tools & Technologies
  {
    name: "Git",
    level: 90,
    category: "tools",
    years: 4,
    icon: "📦",
    description: "Version control, branching strategies, and collaborative workflows"
  },
  {
    name: "Docker",
    level: 75,
    category: "tools",
    years: 1.5,
    icon: "🐳",
    description: "Containerization, Docker Compose, and deployment"
  },
  {
    name: "AWS",
    level: 70,
    category: "tools",
    years: 1,
    icon: "☁️",
    description: "EC2, S3, Lambda, and cloud infrastructure"
  },
  {
    name: "Figma",
    level: 80,
    category: "tools",
    years: 2,
    icon: "🎨",
    description: "UI/UX design, prototyping, and design systems"
  },
  {
    name: "Webpack",
    level: 75,
    category: "tools",
    years: 2,
    icon: "📦",
    description: "Build optimization, bundling, and development workflow"
  },

  // Testing Skills
  {
    name: "Jest",
    level: 82,
    category: "testing",
    years: 2,
    icon: "🃏",
    description: "Unit testing, integration testing, and test coverage"
  },
  {
    name: "Cypress",
    level: 78,
    category: "testing",
    years: 1.5,
    icon: "🌲",
    description: "End-to-end testing, component testing, and CI integration"
  }
]

// Skill categories for filtering and organization
export const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
    icon: '🎯',
    color: '#667eea'
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    color: '#f093fb'
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⚙️',
    color: '#4facfe'
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: '🔧',
    color: '#43e97b'
  },
  {
    id: 'testing',
    name: 'Testing',
    icon: '🧪',
    color: '#fa709a'
  }
]

// Skill proficiency levels
export const proficiencyLevels = {
  beginner: { min: 0, max: 30, color: '#e53e3e' },
  intermediate: { min: 31, max: 60, color: '#d69e2e' },
  advanced: { min: 61, max: 80, color: '#3182ce' },
  expert: { min: 81, max: 100, color: '#38a169' }
}

// Get skill level text
export const getSkillLevel = (level) => {
  if (level >= proficiencyLevels.expert.min) return 'Expert'
  if (level >= proficiencyLevels.advanced.min) return 'Advanced'
  if (level >= proficiencyLevels.intermediate.min) return 'Intermediate'
  return 'Beginner'
}

// Get skill color based on level
export const getSkillColor = (level) => {
  if (level >= proficiencyLevels.expert.min) return proficiencyLevels.expert.color
  if (level >= proficiencyLevels.advanced.min) return proficiencyLevels.advanced.color
  if (level >= proficiencyLevels.intermediate.min) return proficiencyLevels.intermediate.color
  return proficiencyLevels.beginner.color
}