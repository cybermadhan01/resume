import styled from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints, transitions, shadows } from '../../styles/variables.js'

export const AboutSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => getGradient(theme.mode, 'about')};
  position: relative;
  overflow: hidden;

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
    padding: 3rem 1rem;
  }
`

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`

export const SectionSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

export const ProfileCard = styled.div`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${shadows.large};
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  position: sticky;
  top: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    top: 0;
  }
`

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
`

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;
`

export const ProfileName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  margin-bottom: 0.5rem;
`

export const ProfileTitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
`

export const ProfileLocation = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: ${transitions.medium};
  font-size: 1.2rem;

  &:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`

export const AboutText = styled.div`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${shadows.medium};
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`

export const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const StatCard = styled.div`
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
`

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`