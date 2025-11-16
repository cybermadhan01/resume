import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills, skillCategories } from '../../data/skills.js'
import {
  fadeInUp,
  staggerContainer,
  slideInUp
} from '../../utils/animations.js'
import SkillBar from './SkillBar.jsx'
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SkillsFilter,
  FilterButton,
  SkillsGrid,
  SkillCategory,
  CategoryHeader,
  CategoryIcon,
  SkillsList,
  NoSkillsMessage
} from './Skills.styles.js'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const filteredSkills = activeFilter === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeFilter)

    const grouped = filteredSkills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {})

    return grouped
  }, [activeFilter])

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
  }

  return (
    <SkillsSection id="skills" ref={ref}>
      <SkillsContainer>
        <AnimatePresence>
          {inView && (
            <>
              <SectionHeader
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>Skills & Expertise</SectionTitle>
                <SectionSubtitle>
                  A comprehensive overview of my technical skills and experience levels
                </SectionSubtitle>
              </SectionHeader>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SkillsFilter>
                  {skillCategories.map((category) => (
                    <FilterButton
                      key={category.id}
                      active={activeFilter === category.id}
                      color={category.color}
                      onClick={() => handleFilterChange(category.id)}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </FilterButton>
                  ))}
                </SkillsFilter>
              </motion.div>

              <SkillsGrid>
                <AnimatePresence mode="wait">
                  {Object.keys(skillsByCategory).length > 0 ? (
                    Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
                      const categoryInfo = skillCategories.find(cat => cat.id === category)
                      return (
                        <SkillCategory
                          key={category}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={staggerContainer}
                          transition={{
                            duration: 0.6,
                            delay: categoryIndex * 0.1
                          }}
                        >
                          <CategoryHeader
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: categoryIndex * 0.1 }}
                          >
                            <CategoryIcon color={categoryInfo?.color || 'var(--color-primary)'}>
                              {categoryInfo?.icon || '💻'}
                            </CategoryIcon>
                            <h3>
                              {categoryInfo?.name || category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                          </CategoryHeader>

                          <SkillsList>
                            {categorySkills.map((skill, skillIndex) => (
                              <SkillBar
                                key={skill.name}
                                skill={skill}
                                index={skillIndex}
                              />
                            ))}
                          </SkillsList>
                        </SkillCategory>
                      )
                    })
                  ) : (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      style={{ gridColumn: '1 / -1' }}
                    >
                      <NoSkillsMessage>
                        <h3>No skills found</h3>
                        <p>
                          Try selecting a different category to see more skills.
                        </p>
                      </NoSkillsMessage>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SkillsGrid>
            </>
          )}
        </AnimatePresence>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills