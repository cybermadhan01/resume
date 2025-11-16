import React from 'react'
import { motion } from 'framer-motion'
import { buttonHover } from '../../utils/animations.js'
import { Button as StyledButton } from './Common.styles.js'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  elevated = false,
  loading = false,
  disabled = false,
  onClick,
  href,
  target,
  rel,
  ...props
}) => {
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e)
    }
  }

  const buttonProps = {
    variant,
    size,
    round: rounded,
    elevated,
    disabled: disabled || loading,
    ...props
  }

  const MotionButton = motion(StyledButton)

  if (href) {
    return (
      <MotionButton
        as="a"
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        variants={buttonHover}
        whileHover="whileHover"
        whileTap="whileTap"
        {...buttonProps}
      >
        {children}
      </MotionButton>
    )
  }

  return (
    <MotionButton
      onClick={handleClick}
      variants={buttonHover}
      whileHover="whileHover"
      whileTap="whileTap"
      {...buttonProps}
    >
      {loading && <LoadingSpinner size={size} />}
      {children}
    </MotionButton>
  )
}

const LoadingSpinner = ({ size }) => {
  return (
    <motion.div
      style={{
        width: size === 'large' ? '20px' : size === 'small' ? '16px' : '18px',
        height: size === 'large' ? '20px' : size === 'small' ? '16px' : '18px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderTop: '2px solid white',
        borderRadius: '50%',
        marginRight: '0.5rem'
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity
      }}
    />
  )
}

export default Button