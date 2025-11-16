import React from 'react'
import { motion } from 'framer-motion'
import { projectCategories } from '../../data/projects.js'
import { Badge } from '../Common/Common.styles.js'

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '3rem'
      }}
    >
      {projectCategories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant={activeFilter === category.id ? 'primary' : 'outline'}
            size="large"
            onClick={() => onFilterChange(category.id)}
            style={{
              cursor: 'pointer',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: activeFilter === category.id
                ? 'var(--color-primary)'
                : 'transparent',
              color: activeFilter === category.id
                ? 'white'
                : 'var(--color-primary)',
              border: `2px solid var(--color-primary)`,
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
            {category.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectFilter