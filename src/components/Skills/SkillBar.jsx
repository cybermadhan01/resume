import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getSkillColor, getSkillLevel } from '../../data/skills.js'

const SkillBar = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: '-100px 0px'
  })

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setAnimate(true), index * 100)
      return () => clearTimeout(timer)
    }
  }, [inView, index])

  const skillColor = getSkillColor(skill.level)
  const skillLevelText = getSkillLevel(skill.level)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{
        marginBottom: '2rem'
      }}
    >
      {/* Skill Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.75rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span
            style={{
              fontSize: '1.5rem',
              lineHeight: 1
            }}
          >
            {skill.icon}
          </span>
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--color-text)',
                margin: 0,
                lineHeight: 1.3
              }}
            >
              {skill.name}
            </h4>
            {skill.years && (
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-lighter)',
                  margin: 0,
                  marginTop: '0.25rem'
                }}
              >
                {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: '500',
              color: skillColor,
              minWidth: '60px',
              textAlign: 'right'
            }}
          >
            {skill.level}%
          </span>
          <div
            style={{
              background: skillColor,
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '600',
              minWidth: 'fit-content'
            }}
          >
            {skillLevelText}
          </div>
        </div>
      </div>

      {/* Progress Bar Background */}
      <div
        style={{
          width: '100%',
          height: '12px',
          background: 'var(--color-background)',
          borderRadius: '6px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid var(--color-border)'
        }}
      >
        {/* Progress Bar Fill */}
        <motion.div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${skillColor}dd, ${skillColor})`,
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${skill.level}%` : 0 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            }}
            animate={{
              left: animate ? '100%' : '-100%'
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>
      </div>

      {/* Skill Description */}
      {skill.description && (
        <motion.p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-light)',
            marginTop: '0.5rem',
            lineHeight: 1.5
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.8 + index * 0.1
          }}
        >
          {skill.description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SkillBar