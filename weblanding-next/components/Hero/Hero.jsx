import { motion } from "framer-motion";
import { LOGO_URL } from "../../data/constants";

function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-title-logo-wrap" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
        <img src={LOGO_URL} alt="Radix Systems" className="hero-title-logo" />
      </motion.div>

      <motion.div className="hero-badge" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        ✦ Next-Gen Software Agency
      </motion.div>

      <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
        We craft cutting-edge digital experiences, from stunning web apps to
        AI-powered automations that captivate and scale.
      </motion.p>

      <motion.form className="hero-cta-row" onSubmit={(e) => e.preventDefault()} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
        <div className="email-input-group">
          <input type="email" placeholder="Enter your email" required className="email-input" id="hero-email-input" />
          <button type="submit" className="btn-quote" id="get-quote-btn">Get a Free Quote</button>
        </div>
        <button type="button" className="btn-services" id="our-services-btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          Our Services ↓
        </button>
      </motion.form>

      <motion.div className="stats-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">Uptime</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">4.9★</span>
          <span className="stat-label">Client Rating</span>
        </div>
      </motion.div>

      <motion.div className="scroll-indicator" initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ opacity: { duration: 0.6, delay: 0.9 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }, }} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
