export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    category: "full-stack",
    featured: true,
    image: "/images/ecommerce-screenshot.jpg",
    achievements: [
      "Built responsive design achieving 95+ Lighthouse score",
      "Implemented real-time inventory updates",
      "Integrated secure payment processing with Stripe"
    ]
  },
  {
    id: "task-management-app",
    title: "Task Management Application",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI", "Redux"],
    demoUrl: "https://task-manager.example.com",
    githubUrl: "https://github.com/username/task-management",
    category: "frontend",
    featured: true,
    image: "/images/task-manager-screenshot.jpg",
    achievements: [
      "Real-time collaboration using WebSockets",
      "Drag-and-drop interface for task organization",
      "Offline functionality with data synchronization"
    ]
  },
  {
    id: "weather-dashboard",
    title: "Weather Analytics Dashboard",
    description: "Interactive weather dashboard with data visualization, forecasting, and location-based weather alerts.",
    techStack: ["Vue.js", "Chart.js", "OpenWeather API", "Express", "PostgreSQL"],
    demoUrl: "https://weather-dashboard.example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    category: "frontend",
    featured: false,
    image: "/images/weather-dashboard-screenshot.jpg",
    achievements: [
      "Interactive charts and weather maps",
      "Location-based notifications",
      "Historical weather data analysis"
    ]
  },
  {
    id: "social-media-api",
    title: "Social Media Backend API",
    description: "RESTful API for social media platform with authentication, real-time messaging, and data analytics.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Redis", "JWT"],
    demoUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com/username/social-media-api",
    category: "backend",
    featured: false,
    image: "/images/api-documentation.jpg",
    achievements: [
      "Built scalable REST API architecture",
      "Implemented real-time messaging system",
      "Added comprehensive API documentation"
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, animated portfolio website showcasing projects and skills with interactive 3D effects and smooth animations.",
    techStack: ["React", "Framer Motion", "Styled Components", "Vite"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    category: "frontend",
    featured: true,
    image: "/images/portfolio-screenshot.jpg",
    achievements: [
      "60fps animations optimized for performance",
      "Responsive design with mobile-first approach",
      "Accessibility features and keyboard navigation"
    ]
  },
  {
    id: "blog-cms",
    title: "Headless Blog CMS",
    description: "Content management system for blogs with markdown support, SEO optimization, and RESTful API.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://blog-cms.example.com",
    githubUrl: "https://github.com/username/blog-cms",
    category: "full-stack",
    featured: false,
    image: "/images/blog-cms-screenshot.jpg",
    achievements: [
      "Markdown-based content creation",
      "SEO-optimized pages and meta tags",
      "Admin dashboard with rich text editor"
    ]
  }
]

// Filter categories for project filtering
export const projectCategories = [
  { id: 'all', name: 'All Projects', icon: '🎯' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'full-stack', name: 'Full Stack', icon: '🚀' }
]

// Featured projects for hero section
export const featuredProjects = projects.filter(project => project.featured)