import styled from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints, transitions } from '../../styles/variables.js'

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => getGradient(theme.mode, 'background')};
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

export const ProjectsContainer = styled.div`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 769px) and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ProjectCardWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const NoProjectsMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 16px;
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
    margin-bottom: 1.5rem;
  }
`