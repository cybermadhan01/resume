import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled, { keyframes } from 'styled-components'
import { personalInfo } from '../../data/personalInfo.js'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  slideInDown,
  staggerContainer,
  buttonHover
} from '../../utils/animations.js'
import { smoothScroll } from '../../utils/helpers.js'
import {
  HeroSection,
  HeroContainer,
  Greeting,
  Name,
  Title,
  Subtitle,
  CTAContainer,
  CTAButton,
  TypewriterText,
  SkillsHighlight,
  SkillBadge,
  ScrollIndicator,
  ScrollIcon,
  BackgroundAnimation,
  FloatingShape
} from './Hero.styles.js'

// Typewriter effect component
const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return <TypewriterText>{displayedText}</TypewriterText>
}

// Floating shapes for background animation
const FloatingShapes = () => {
  const shapes = [
    { size: 'large', position: 'top-left' },
    { size: 'medium', position: 'top-right' },
    { size: 'small', position: 'bottom-left' },
    { size: 'medium', position: 'bottom-right' },
    { size: 'small', position: 'top-left' }
  ]

  return (
    <BackgroundAnimation>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          size={shape.size}
          position={shape.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0.6],
            scale: [0, 1, 1, 0.8],
            y: [0, -20, 0, -10],
            x: [0, 10, 0, -5]
          }}
          transition={{
            duration: 8 + index * 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      ))}
    </BackgroundAnimation>
  )
}

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const handleScrollToProjects = () => {
    smoothScroll('projects', 80)
  }

  const handleScrollToContact = () => {
    smoothScroll('contact', 80)
  }

  return (
    <HeroSection id="hero" ref={ref}>
      <FloatingShapes />

      <HeroContainer>
        <AnimatePresence>
          {inView && (
            <>
              <Greeting
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                transition={{ duration: 0.8 }}
              >
                {personalInfo.hero.greeting}
              </Greeting>

              <Name
                initial="hidden"
                animate="visible"
                variants={slideInDown}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {personalInfo.hero.name}
              </Name>

              <Title
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personalInfo.hero.title}
              </Title>

              {showTypewriter && (
                <Subtitle
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Typewriter
                    text={personalInfo.hero.subtitle}
                    speed={50}
                  />
                </Subtitle>
              )}

              <CTAContainer
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                transition={{ delay: 1.5 }}
              >
                <CTAButton
                  variants={buttonHover}
                  primary
                  onClick={handleScrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {personalInfo.hero.cta.primary.text}
                  <span>→</span>
                </CTAButton>

                <CTAButton
                  variants={buttonHover}
                  onClick={handleScrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {personalInfo.hero.cta.secondary.text}
                  <span>✉️</span>
                </CTAButton>
              </CTAContainer>

              <SkillsHighlight
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                transition={{ delay: 2 }}
              >
                {personalInfo.skillsHighlight.map((skill, index) => (
                  <SkillBadge
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1
                        }
                      }
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillBadge>
                ))}
              </SkillsHighlight>
            </>
          )}
        </AnimatePresence>
      </HeroContainer>

      <ScrollIndicator
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 2.5 }}
        onClick={handleScrollToProjects}
      >
        <span>Scroll to explore</span>
        <ScrollIcon
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero