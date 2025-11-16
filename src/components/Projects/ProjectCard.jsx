import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { isTouchDevice } from '../../utils/helpers.js'
import { card3DHover } from '../../utils/animations.js'
import { Badge } from '../Common/Common.styles.js'

const ProjectCard = ({ project, index, filter = 'all' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isTouch = isTouchDevice()

  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (isTouch) return

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2

    const angleX = (e.clientY - cardCenterY) / 20
    const angleY = (e.clientX - cardCenterX) / -20

    const rotateX = Math.max(-15, Math.min(15, angleX))
    const rotateY = Math.max(-15, Math.min(15, angleY))

    setMousePosition({ rotateX, rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  // Filter projects based on active filter
  const shouldShow = filter === 'all' || project.category === filter

  if (!shouldShow) {
    return null
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      layout
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: 'var(--color-surface)',
          borderRadius: '16px',
          padding: '2rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-card)',
          transform: isHovered && !isTouch
            ? `rotateX(${mousePosition.rotateX}deg) rotateY(${mousePosition.rotateY}deg) translateZ(20px)`
            : 'rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          cursor: isTouch ? 'pointer' : 'default'
        }}
        whileHover={!isTouch ? {
          scale: 1.05,
          z: 50,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        } : {
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Project Image or Placeholder */}
        <div
          className="project-image"
          style={{
            width: '100%',
            height: '200px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          ) : (
            <div style={{
              color: 'white',
              fontSize: '3rem',
              opacity: 0.8
            }}>
              🚀
            </div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--color-success)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Project Title */}
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
              color: 'var(--color-text)',
              lineHeight: '1.3'
            }}
          >
            {project.title}
          </h3>

          {/* Project Description */}
          <p
            style={{
              color: 'var(--color-text-light)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              flex: 1
            }}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              {project.techStack.slice(0, 4).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  size="small"
                  variant="primary"
                  style={{
                    fontSize: '0.75rem',
                    background: 'var(--color-primary)',
                    border: 'none'
                  }}
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge
                  size="small"
                  variant="secondary"
                  style={{
                    fontSize: '0.75rem',
                    background: 'var(--color-secondary)',
                    border: 'none'
                  }}
                >
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Project Links */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}
          >
            <motion.button
              style={{
                flex: 1,
                padding: '0.75rem 1.5rem',
                background: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              🚀 Live Demo
            </motion.button>

            <motion.button
              style={{
                padding: '0.75rem',
                minWidth: '45px',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: '2px solid var(--color-primary)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              📁
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard