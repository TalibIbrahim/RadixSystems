import { useState } from 'react'
import Reveal from '../Reveal/Reveal'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="visually-hidden" htmlFor="contact-name">Your Name</label>
            <input type="text" placeholder="Your Name" className="form-input" id="contact-name" name="name" />

            <label className="visually-hidden" htmlFor="contact-email">Email Address</label>
            <input type="email" placeholder="Email Address" className="form-input" id="contact-email" name="email" required />
          </div>
          <label className="visually-hidden" htmlFor="contact-subject">Subject</label>
          <input type="text" placeholder="Subject" className="form-input" id="contact-subject" name="subject" />

          <label className="visually-hidden" htmlFor="contact-message">Message</label>
          <textarea placeholder="Tell us about your project..." className="form-input form-textarea" rows="5" id="contact-message" name="message" />

          <button type="submit" className="btn-primary btn-submit" id="submit-quote-btn">Send Message</button>

          {status === 'success' && <p className="form-status">Thanks — we'll get back to you shortly.</p>}
          {status === 'error' && <p className="form-status">Something went wrong. Please try again later.</p>}
        </form>
      </Reveal>
    </section>
  )
}
