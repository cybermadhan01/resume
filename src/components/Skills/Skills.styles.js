import styled from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints } from '../../styles/variables.js'

export const SkillsSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => getGradient(theme.mode, 'skills')};
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

export const SkillsContainer = styled.div`
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

export const SkillsFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 2rem;
    gap: 0.5rem;
  }
`

export const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active, color }) => active ? color : 'transparent'};
  color: ${({ active, color }) => active ? 'white' : 'var(--color-text)'};
  border: 2px solid ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 769px) and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`

export const SkillCategory = styled.div`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
    margin: 0;
  }
`

export const CategoryIcon = styled.div`
  font-size: 1.8rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color};
  border-radius: 10px;
  color: white;
`

export const SkillsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NoSkillsMessage = styled.div`
  text-align: center;
  padding: 3rem 2rem;
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
  }
`