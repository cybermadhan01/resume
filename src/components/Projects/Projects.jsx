import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/projects.js'
import {
  fadeInUp,
  staggerContainer,
  slideInUp
} from '../../utils/animations.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectFilter from './ProjectFilter.jsx'
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ProjectsGrid,
  ProjectCardWrapper,
  NoProjectsMessage
} from './Projects.styles.js'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }
    return projects.filter(project => project.category === activeFilter)
  }, [activeFilter])

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
  }

  return (
    <ProjectsSection id="projects" ref={ref}>
      <ProjectsContainer>
        <AnimatePresence>
          {inView && (
            <>
              <SectionHeader
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>Projects</SectionTitle>
                <SectionSubtitle>
                  Explore my recent work and see how I've helped bring ideas to life through code
                </SectionSubtitle>
              </SectionHeader>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProjectFilter
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                />
              </motion.div>

              <ProjectsGrid>
                <AnimatePresence mode="wait">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                      <ProjectCardWrapper
                        key={project.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={staggerContainer}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        layout
                      >
                        <ProjectCard
                          project={project}
                          index={index}
                          filter={activeFilter}
                        />
                      </ProjectCardWrapper>
                    ))
                  ) : (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      style={{ gridColumn: '1 / -1' }}
                    >
                      <NoProjectsMessage>
                        <h3>No projects found</h3>
                        <p>
                          Try selecting a different filter category to see more projects.
                        </p>
                      </NoProjectsMessage>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ProjectsGrid>
            </>
          )}
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects