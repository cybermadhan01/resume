import styled, { keyframes, css } from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints, transitions, shadows } from '../../styles/variables.js'

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: ${({ theme }) => getGradient(theme.mode, 'hero')};
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => getGradient(theme.mode, 'overlay')};
    z-index: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`

export const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`

export const Greeting = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(247, 250, 252, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
`

export const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
`

export const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 600;
  margin: 1rem 0;
  color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(159, 122, 234, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1.25rem, 6vw, 1.75rem);
  }
`

export const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(226, 232, 240, 0.9)' : 'rgba(255, 255, 255, 0.85)'};
  margin: 1.5rem auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(0.95rem, 4vw, 1.1rem);
    margin: 1rem auto;
  }
`

export const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
  }
`

export const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${transitions.medium};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  ${props => props.primary ? css`
    background: rgba(255, 255, 255, 0.95);
    color: #667eea;
    box-shadow: ${shadows.card};

    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
      box-shadow: ${shadows.cardHover};
    }
  ` : css`
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
`

export const TypewriterText = styled.span`
  display: inline-block;
  border-right: 3px solid currentColor;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { border-color: currentColor; }
    51%, 100% { border-color: transparent; }
  }
`

export const SkillsHighlight = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  max-width: 800px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 2rem;
    gap: 0.4rem;
  }
`

export const SkillBadge = styled(motion.span)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 1rem;
    font-size: 0.8rem;
  }
`

export const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    width: 4px;
    height: 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% { top: 8px; opacity: 1; }
    100% { top: 20px; opacity: 0; }
  }
`

export const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

export const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${props => props.size === 'large' && css`
    width: 200px;
    height: 200px;
  `}

  ${props => props.size === 'medium' && css`
    width: 100px;
    height: 100px;
  `}

  ${props => props.size === 'small' && css`
    width: 50px;
    height: 50px;
  `}

  ${props => props.position === 'top-left' && css`
    top: 10%;
    left: 10%;
  `}

  ${props => props.position === 'top-right' && css`
    top: 20%;
    right: 15%;
  `}

  ${props => props.position === 'bottom-left' && css`
    bottom: 20%;
    left: 5%;
  `}

  ${props => props.position === 'bottom-right' && css`
    bottom: 30%;
    right: 10%;
  `}

  @media (max-width: ${breakpoints.mobile}) {
    ${props => props.size === 'large' && css`
      width: 100px;
      height: 100px;
    `}

    ${props => props.size === 'medium' && css`
      width: 60px;
      height: 60px;
    `}

    ${props => props.size === 'small' && css`
      width: 30px;
      height: 30px;
    `}
  }
`