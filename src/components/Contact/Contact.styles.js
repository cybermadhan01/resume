import styled from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints, transitions, shadows } from '../../styles/variables.js'

export const ContactSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => getGradient(theme.mode, 'contact')};
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

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

export const ContactInfo = styled.div`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${shadows.large};
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`

export const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  margin-bottom: 1.5rem;
`

export const ContactInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-light-dark)' : 'var(--color-text-light)'};
  margin-bottom: 2rem;
`

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  transition: ${transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`

export const ContactMethodIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`

export const ContactMethodInfo = styled.div`
  flex: 1;
`

export const ContactMethodLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-lighter-dark)' : 'var(--color-text-lighter)'};
  margin-bottom: 0.25rem;
`

export const ContactMethodValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: ${transitions.fast};

    &:hover {
      color: var(--color-secondary);
    }
  }
`

export const ContactFormWrapper = styled.form`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${shadows.large};
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.25rem;
  }
`

export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  margin-bottom: 0.5rem;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  transition: ${transitions.fast};

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  }

  ${props => props.error && css`
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  `}
`

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  transition: ${transitions.fast};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  }

  ${props => props.error && css`
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  `}
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${transitions.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const SuccessMessage = styled.div`
  background: var(--color-success);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: slideInUp 0.5s ease;
`