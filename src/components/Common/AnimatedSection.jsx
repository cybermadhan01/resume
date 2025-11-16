import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '../../utils/animations.js'

const AnimatedSection = ({
  children,
  variants = fadeInUp,
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  duration = 0.6,
  className = '',
  id = '',
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px 0px'
  })

  const motionProps = {
    ref,
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1]
    },
    className,
    id,
    ...props
  }

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  )
}

export default AnimatedSection