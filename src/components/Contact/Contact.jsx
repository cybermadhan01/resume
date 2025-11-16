import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../../data/personalInfo.js'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer
} from '../../utils/animations.js'
import ContactForm from './ContactForm.jsx'
import {
  ContactSection,
  ContactContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ContactContent,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoText,
  ContactMethods,
  ContactMethod,
  ContactMethodIcon,
  ContactMethodInfo,
  ContactMethodLabel,
  ContactMethodValue
} from './Contact.styles.js'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: '📱',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ]

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContainer>
        <AnimatePresence>
          {inView && (
            <>
              <SectionHeader
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>Get In Touch</SectionTitle>
                <SectionSubtitle>
                  Have a project in mind or want to collaborate? I'd love to hear from you!
                </SectionSubtitle>
              </SectionHeader>

              <ContactContent>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <ContactInfo>
                    <ContactInfoTitle>Let's Connect</ContactInfoTitle>
                    <ContactInfoText>
                      I'm always interested in hearing about new opportunities,
                      exciting projects, or just having a chat about technology
                      and development. Feel free to reach out through any of the
                      following methods:
                    </ContactInfoText>

                    <ContactMethods>
                      <AnimatePresence>
                        {contactMethods.map((method, index) => (
                          <ContactMethod
                            key={method.label}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{
                              duration: 0.6,
                              delay: 0.4 + index * 0.1
                            }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ContactMethodIcon>
                              {method.icon}
                            </ContactMethodIcon>
                            <ContactMethodInfo>
                              <ContactMethodLabel>{method.label}</ContactMethodLabel>
                              <ContactMethodValue>
                                {method.href ? (
                                  <a
                                    href={method.href}
                                    style={{
                                      color: 'var(--color-primary)',
                                      textDecoration: 'none'
                                    }}
                                  >
                                    {method.value}
                                  </a>
                                ) : (
                                  method.value
                                )}
                              </ContactMethodValue>
                            </ContactMethodInfo>
                          </ContactMethod>
                        ))}
                      </AnimatePresence>
                    </ContactMethods>
                  </ContactInfo>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <ContactForm />
                </motion.div>
              </ContactContent>
            </>
          )}
        </AnimatePresence>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact