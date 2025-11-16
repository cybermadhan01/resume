import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../../data/personalInfo.js'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  slideInUp
} from '../../utils/animations.js'
import {
  AboutSection,
  AboutContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  AboutContent,
  ProfileCard,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTitle,
  ProfileLocation,
  SocialLinks,
  SocialLink,
  AboutText,
  AboutParagraph,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel
} from './About.styles.js'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experience = {
    years: new Date().getFullYear() - 2019,
    projects: 15,
    technologies: 20
  }

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContainer>
        <AnimatePresence>
          {inView && (
            <>
              <SectionHeader
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>About Me</SectionTitle>
                <SectionSubtitle>
                  Get to know me better - my journey, skills, and what drives me as a developer
                </SectionSubtitle>
              </SectionHeader>

              <AboutContent>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ProfileCard>
                    <ProfileImage>
                      🧑‍💻
                    </ProfileImage>

                    <ProfileInfo>
                      <ProfileName>{personalInfo.name}</ProfileName>
                      <ProfileTitle>{personalInfo.title}</ProfileTitle>
                      <ProfileLocation>
                        📍 {personalInfo.location}
                      </ProfileLocation>
                    </ProfileInfo>

                    <StatsGrid>
                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                      >
                        <StatCard>
                          <StatNumber>{experience.years}+</StatNumber>
                          <StatLabel>Years Experience</StatLabel>
                        </StatCard>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.5 }}
                      >
                        <StatCard>
                          <StatNumber>{experience.projects}</StatNumber>
                          <StatLabel>Projects Completed</StatLabel>
                        </StatCard>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.6 }}
                      >
                        <StatCard>
                          <StatNumber>{experience.technologies}</StatNumber>
                          <StatLabel>Technologies</StatLabel>
                        </StatCard>
                      </motion.div>
                    </StatsGrid>

                    <SocialLinks>
                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.7 }}
                      >
                        <SocialLink
                          href={personalInfo.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          📁
                        </SocialLink>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.8 }}
                      >
                        <SocialLink
                          href={personalInfo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          💼
                        </SocialLink>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.9 }}
                      >
                        <SocialLink
                          href={personalInfo.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter Profile"
                        >
                          🐦
                        </SocialLink>
                      </motion.div>

                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 1.0 }}
                      >
                        <SocialLink
                          href={`mailto:${personalInfo.email}`}
                          aria-label="Email Contact"
                        >
                          ✉️
                        </SocialLink>
                      </motion.div>
                    </SocialLinks>
                  </ProfileCard>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <AboutText>
                    <AnimatePresence>
                      {personalInfo.about.paragraphs.map((paragraph, index) => (
                        <AboutParagraph
                          key={index}
                          initial="hidden"
                          animate="visible"
                          variants={fadeInUp}
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + index * 0.2
                          }}
                        >
                          {paragraph}
                        </AboutParagraph>
                      ))}
                    </AnimatePresence>
                  </AboutText>
                </motion.div>
              </AboutContent>
            </>
          )}
        </AnimatePresence>
      </AboutContainer>
    </AboutSection>
  )
}

export default About