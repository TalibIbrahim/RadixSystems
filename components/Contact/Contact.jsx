import { useState } from 'react'
import Reveal from '../Reveal/Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

export default function Contact({ quoteEmail, setQuoteEmail }) {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
        // Reset to idle after a few seconds so they can send another if they want
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <Reveal>
        <h2 className="section-heading">Get a <span className="gradient-text">Free Quote</span></h2>
        <p className="section-sub">Tell us about your project and we'll get back within 24 hours.</p>
      </Reveal>

      <Reveal delay={0.15}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="successMsg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', padding: '4rem 0', color: '#10b981', textAlign: 'center'
              }}
            >
              <FiCheckCircle size={80} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem' }}>Thanks for reaching out. We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              key="contactForm"
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="form-row">
                <label className="visually-hidden" htmlFor="contact-name">Your Name</label>
                <input type="text" placeholder="Your Name" className="form-input" id="contact-name" name="name" required disabled={status === 'submitting'} />

                <label className="visually-hidden" htmlFor="contact-email">Email Address</label>
                <input type="email" placeholder="Email Address" className="form-input" id="contact-email" name="email" required disabled={status === 'submitting'} value={quoteEmail || ''} onChange={(e) => setQuoteEmail && setQuoteEmail(e.target.value)} />
              </div>
              <label className="visually-hidden" htmlFor="contact-subject">Subject</label>
              <input type="text" placeholder="Subject" className="form-input" id="contact-subject" name="subject" disabled={status === 'submitting'} />

              <label className="visually-hidden" htmlFor="contact-message">Message</label>
              <textarea placeholder="Tell us about your project..." className="form-input form-textarea" rows="5" id="contact-message" name="message" required disabled={status === 'submitting'} />

              <button type="submit" className="btn-primary btn-submit" id="submit-quote-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'error' && <p className="form-status" style={{color: '#ef4444', marginTop: '1rem', textAlign: 'center'}}>Something went wrong. Please try again later.</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  )
}
