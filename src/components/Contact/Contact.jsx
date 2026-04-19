import { forwardRef } from "react";
import Reveal from "../Reveal/Reveal";

/* ── Contact / Quote Section ── */
const Contact = forwardRef(function Contact({ email, setEmail }, ref) {
  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <Reveal>
        <h2 className="section-heading">
          Get a <span className="gradient-text">Free Quote</span>
        </h2>
        <p className="section-sub">
          Tell us about your project and we'll get back within 24 hours.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              id="contact-name"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              id="contact-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="form-input"
            id="contact-subject"
          />
          <textarea
            placeholder="Tell us about your project..."
            className="form-input form-textarea"
            rows="5"
            id="contact-message"
          />
          <button
            type="submit"
            className="btn-primary btn-submit"
            id="submit-quote-btn"
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
});

export default Contact;

//redeploy
