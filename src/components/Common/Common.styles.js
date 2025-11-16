import styled, { css } from 'styled-components'
import { getGradient } from '../../styles/gradients.js'
import { breakpoints, transitions, shadows, borderRadius } from '../../styles/variables.js'

export const Button = styled.button`
  padding: ${props => props.size === 'large' ? '1rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.9rem' : '1rem'};
  font-weight: 600;
  border: none;
  border-radius: ${props => props.round ? '50px' : borderRadius.medium};
  cursor: pointer;
  transition: ${transitions.medium};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => {
    if (props.variant === 'primary') return 'var(--color-primary)'
    if (props.variant === 'secondary') return 'var(--color-secondary)'
    if (props.variant === 'outline') return 'transparent'
    if (props.variant === 'ghost') return 'transparent'
    return 'var(--color-primary)'
  }};
  color: ${props => {
    if (props.variant === 'outline' || props.variant === 'ghost') return 'var(--color-primary)'
    return 'white'
  }};
  border: ${props => {
    if (props.variant === 'outline') return `2px solid var(--color-primary)`
    return 'none'
  }};
  box-shadow: ${props => props.elevated ? shadows.medium : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => {
      if (props.elevated) return shadows.large
      if (props.variant === 'primary' || props.variant === 'secondary') return shadows.cardHover
      return shadows.small
    }};
    background: ${props => {
      if (props.variant === 'primary') return 'var(--color-secondary)'
      if (props.variant === 'ghost') return 'var(--color-primary)'
      if (props.variant === 'outline') return 'var(--color-primary)'
      return 'var(--color-secondary)'
    }};
    color: ${props => {
      if (props.variant === 'outline') return 'white'
      return 'inherit'
    }};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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
    padding: ${props => props.size === 'large' ? '0.9rem 1.5rem' : props.size === 'small' ? '0.4rem 0.8rem' : '0.6rem 1.2rem'};
    font-size: ${props => props.size === 'large' ? '1rem' : props.size === 'small' ? '0.8rem' : '0.9rem'};
  }
`

export const Container = styled.div`
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${props => props.padding || '2rem'};
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${props => props.mobilePadding || '1rem'};
  }
`

export const Section = styled.section`
  padding: ${props => props.padding || '4rem 2rem'};
  min-height: ${props => props.fullHeight ? '100vh' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.gradient ? getGradient(props.theme.mode, props.gradient) : 'transparent'};

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${props => props.mobilePadding || '3rem 1rem'};
    min-height: ${props => props.fullHeight ? '80vh' : 'auto'};
  }
`

export const Grid = styled.div`
  display: grid;
  gap: ${props => props.gap || '2rem'};
  grid-template-columns: ${props => {
    if (props.columns === 1) return '1fr'
    if (props.columns === 2) return 'repeat(2, 1fr)'
    if (props.columns === 3) return 'repeat(3, 1fr)'
    if (props.columns === 4) return 'repeat(4, 1fr)'
    return props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'
  }};

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${props => props.mobileGap || '1rem'};
  }

  @media (max-width: ${breakpoints.tablet}) and (min-width: 769px) {
    grid-template-columns: ${props => {
      if (props.columns === 3 || props.columns === 4) return 'repeat(2, 1fr)'
      return props.columns || 'repeat(auto-fit, minmax(250px, 1fr))'
    }};
  }
`

export const Card = styled.div`
  background: ${({ theme }) => getGradient(theme.mode, 'card')};
  border-radius: ${borderRadius.large};
  padding: ${props => props.padding || '2rem'};
  box-shadow: ${shadows.card};
  transition: ${transitions.medium};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.cardHover};
  }

  ${props => props.hover && css`
    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: ${shadows.large};
    }
  `}

  ${props => props.glass && css`
    background: ${({ theme }) => theme.mode === 'dark'
      ? 'rgba(45, 55, 72, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'
    };
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'
    };
  `}

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${props => props.mobilePadding || '1.5rem'};
  }
`

export const Heading = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: ${props => props.marginBottom || '1rem'};
  color: ${({ theme }) => theme.mode === 'dark' ? 'var(--color-text-dark)' : 'var(--color-text)'};
  position: relative;

  ${props => props.accent && css`
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: ${props => props.center ? '50%' : '0'};
      transform: ${props => props.center ? 'translateX(-50%)' : 'none'};
      width: ${props => props.accentWidth || '60px'};
      height: 4px;
      background: var(--color-primary);
      border-radius: 2px;
    }
  `}

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    margin-bottom: ${props => props.mobileMarginBottom || '1rem'};
  }
`

export const Text = styled.p`
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.9rem' : '1rem'};
  line-height: 1.6;
  color: ${({ theme }) => theme.mode === 'dark'
    ? (props => props.light ? 'var(--color-text-lighter-dark)' : 'var(--color-text-light-dark)')
    : (props => props.light ? 'var(--color-text-lighter)' : 'var(--color-text-light)')
  };
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: ${props => props.marginBottom || '1rem'};
  max-width: ${props => props.maxWidth || 'none'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${props => props.size === 'large' ? '1rem' : props.size === 'small' ? '0.85rem' : '0.95rem'};
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: ${props => props.size === 'large' ? '0.6rem 1.2rem' : props.size === 'small' ? '0.3rem 0.6rem' : '0.4rem 0.8rem'};
  border-radius: ${borderRadius.full};
  font-size: ${props => props.size === 'large' ? '0.9rem' : props.size === 'small' ? '0.75rem' : '0.8rem'};
  font-weight: 500;
  background: ${props => {
    if (props.variant === 'primary') return 'var(--color-primary)'
    if (props.variant === 'secondary') return 'var(--color-secondary)'
    if (props.variant === 'success') return 'var(--color-success)'
    if (props.variant === 'warning') return 'var(--color-warning)'
    if (props.variant === 'error') return 'var(--color-error)'
    if (props.variant === 'info') return 'var(--color-info)'
    return 'var(--color-primary)'
  }};
  color: white;
  border: ${props => props.outline ? `2px solid ${props.variant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'}` : 'none'};
  background: ${props => props.outline ? 'transparent' : props.variant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'};
  color: ${props => props.outline ? (props.variant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)') : 'white'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.small};
  }
`

export const Divider = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.thickness || '1px'};
  background: ${props => props.gradient ? getGradient(props.theme.mode, props.gradient) : 'var(--color-border)'};
  margin: ${props => props.margin || '2rem 0'};
  border-radius: ${props => props.rounded ? '10px' : '0'};

  ${props => props.accent && css`
    height: 3px;
    background: var(--color-primary);
    width: 60px;
    margin: 1.5rem auto;
  `}

  @media (max-width: ${breakpoints.mobile}) {
    margin: ${props => props.mobileMargin || '1.5rem 0'};
  }
`

export const LoadingSpinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: ${props => props.thickness || '3px'} solid ${props => props.color || 'var(--color-primary)'};
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const ErrorBoundary = styled.div`
  padding: 2rem;
  text-align: center;
  background: var(--color-error);
  color: white;
  border-radius: ${borderRadius.medium};
  margin: 1rem 0;
`