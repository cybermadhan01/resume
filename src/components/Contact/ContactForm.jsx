import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { validateField } from '../../utils/helpers.js'
import { personalInfo } from '../../data/personalInfo.js'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate name
    const nameError = validateField('name', formData.name, true)
    if (nameError.name) {
      newErrors.name = nameError.name
    }

    // Validate email
    const emailError = validateField('email', formData.email, true)
    if (emailError.email) {
      newErrors.email = emailError.email
    }

    // Validate message
    const messageError = validateField('message', formData.message, true)
    if (messageError.message) {
      newErrors.message = messageError.message
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In a real implementation, you would send the data to your backend here
      console.log('Form submitted:', formData)

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({
        submit: 'An error occurred. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--color-success)',
          color: 'white',
          padding: '3rem',
          borderRadius: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div style={{ fontSize: '3rem' }}>✅</div>
        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Message Sent Successfully!</h3>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: 0 }}>
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={resetForm}
          style={{
            background: 'white',
            color: 'var(--color-success)',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '0.5rem'
            }}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid ${errors.name ? 'var(--color-error)' : 'var(--color-border)'}`,
              borderRadius: '12px',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              transition: 'all 0.3s ease'
            }}
          />
          {errors.name && (
            <div style={{
              color: 'var(--color-error)',
              fontSize: '0.9rem',
              marginTop: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              ⚠️ {errors.name}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: '0.5rem'
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid ${errors.email ? 'var(--color-error)' : 'var(--color-border)'}`,
              borderRadius: '12px',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              transition: 'all 0.3s ease'
            }}
          />
          {errors.email && (
            <div style={{
              color: 'var(--color-error)',
              fontSize: '0.9rem',
              marginTop: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              ⚠️ {errors.email}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label
          htmlFor="subject"
          style={{
            display: 'block',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'var(--color-text)',
            marginBottom: '0.5rem'
          }}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="What's this about?"
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            border: '2px solid var(--color-border)',
            borderRadius: '12px',
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label
          htmlFor="message"
          style={{
            display: 'block',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'var(--color-text)',
            marginBottom: '0.5rem'
          }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your message here..."
          required
          rows={5}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            border: `2px solid ${errors.message ? 'var(--color-error)' : 'var(--color-border)'}`,
            borderRadius: '12px',
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            transition: 'all 0.3s ease',
            resize: 'vertical',
            fontFamily: 'inherit',
            lineHeight: '1.5'
          }}
        />
        {errors.message && (
          <div style={{
            color: 'var(--color-error)',
            fontSize: '0.9rem',
            marginTop: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            ⚠️ {errors.message}
          </div>
        )}
      </div>

      {errors.submit && (
        <div style={{
          background: 'var(--color-error)',
          color: 'white',
          padding: '1rem',
          borderRadius: '12px',
          marginBottom: '1rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          ❌ {errors.submit}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          background: 'var(--color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          position: 'relative',
          overflow: 'hidden',
          opacity: isSubmitting ? 0.7 : 1
        }}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? (
          <>
            <motion.div
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%'
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
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span style={{ fontSize: '1.2rem' }}>📤</span>
          </>
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm