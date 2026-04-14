import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Aurora from './components/Aurora/Aurora';
import './App.css';

/* ── Scroll-reveal wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── Data ── */
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l2-2-2-2" /><path d="M8 18l-2-2 2-2" />
        <path d="M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <line x1="12" y1="10" x2="12" y2="16" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Pixel-perfect, high-performance web applications built with modern frameworks and best practices.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Cross-platform native experiences for iOS & Android, from concept to App Store launch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'DevOps',
    desc: 'CI/CD pipelines, cloud infrastructure, containerization & monitoring for seamless delivery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5v1h-4v-1c-1.2-.7-2-2-2-3.5a4 4 0 014-4z" />
        <path d="M10 10.5v2.5h4v-2.5" />
        <rect x="9" y="13" width="6" height="3" rx="1" />
        <path d="M10 16v2" /><path d="M14 16v2" />
        <path d="M8 20h8" />
      </svg>
    ),
    title: 'AI & LangChain Automation',
    desc: 'Intelligent agents, RAG pipelines, and LLM-powered automation for your business workflows.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Custom Chatbots',
    desc: 'Conversational AI solutions tailored to your platform — web, mobile, or messaging apps.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Cloud Solutions',
    desc: 'Scalable cloud architecture on AWS, GCP & Azure — from migration to fully managed infrastructure.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces designed for conversion, accessibility, and delightful user journeys.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v2" /><path d="M15 2v2" />
        <path d="M9 20v2" /><path d="M15 20v2" />
        <path d="M2 9h2" /><path d="M2 15h2" />
        <path d="M20 9h2" /><path d="M20 15h2" />
      </svg>
    ),
    title: 'API Development',
    desc: 'RESTful & GraphQL APIs built for scale — robust, documented, and production-ready from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: 'E-Commerce Solutions',
    desc: 'End-to-end online storefronts with payment gateways, inventory management, and analytics.',
  },
];

const projects = [
  {
    title: 'Solara',
    desc: 'A modern, visually stunning web experience.',
    url: 'https://talibibrahim.github.io/Solara/',
    tag: 'Web',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776193664/Radix%20Systems/000fdd6f-9cea-485e-9f75-dc2ec186d8a4.png',
  },
  {
    title: 'Byters',
    desc: 'Dynamic web application with rich interactivity.',
    url: 'https://byters.vercel.app/',
    tag: 'Web App',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776194008/Radix%20Systems/cfaca28d-245a-47d2-b658-879a9d8d3c4c.png',
  },
  {
    title: 'Quickdrop',
    desc: 'Lightning-fast file sharing platform.',
    url: 'https://quickdrop-file.vercel.app/',
    tag: 'SaaS',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776193606/Radix%20Systems/b37e4ed6-e19b-4811-8c42-2a645463ec5b.png',
  },
  {
    title: 'App Landing Page',
    desc: 'Sleek, conversion-focused landing page template.',
    url: 'https://talibibrahim.github.io/app-landing-page/',
    tag: 'Landing',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776193829/Radix%20Systems/3b0f1ab0-6cbc-45e3-b8aa-445595cb6c4f.png',
  },
  {
    title: 'SlingKick',
    desc: 'High-performance e-commerce storefront with modern UI.',
    url: null,
    tag: 'E-Commerce',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776193971/Radix%20Systems/85a9cf36-676b-45c9-9270-93f309f101b2.png',
  },
  {
    title: 'GitChat',
    desc: 'Chat with any GitHub repository using AI.',
    url: 'https://github.com/TalibIbrahim/GitChat',
    tag: 'AI',
    image: null,
  },
  {
    title: 'WhatsApp AI Agent',
    desc: 'RAG-enabled chatbot integrated directly into WhatsApp using whatsapp-web.js.',
    url: null,
    tag: 'AI Bot',
    image: null,
  },
  {
    title: 'EasyPOS',
    desc: 'Scalable, multi-tenant Point of Sale system built with NestJS & PostgreSQL.',
    url: null,
    tag: 'Enterprise',
    image: 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776194079/Radix%20Systems/f318e1af-bb4c-4bc1-b63b-ec54cf018425.png',
  },
];

const LOGO_URL = 'https://res.cloudinary.com/dk5pnej6r/image/upload/q_auto/f_auto/v1776195849/radix_nt23cq.png';

/* ── App ── */
function App() {
  const [email, setEmail] = useState('');
  const contactRef = useRef(null);

  const handleGetQuote = (e) => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <Aurora
          colorStops={['#6e67ff', '#B497CF', '#ac94b8']}
          blend={0.49}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      <div className="content">
        {/* ── Navbar ── */}
        <nav className="navbar">
          <div className="nav-links">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="hero">
          <motion.img
            src={LOGO_URL}
            alt="Radix Systems"
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ✦ Next-Gen Software Agency
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Build Something
            <span className="gradient-text"> Extraordinary</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We craft cutting-edge digital experiences — from stunning web apps
            to AI-powered automation — that captivate and scale.
          </motion.p>

          <motion.form
            className="hero-cta-row"
            onSubmit={handleGetQuote}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="email-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
                id="hero-email-input"
              />
              <button type="submit" className="btn-quote" id="get-quote-btn">
                Get a Free Quote
              </button>
            </div>
            <button
              type="button"
              className="btn-services"
              id="our-services-btn"
              onClick={() => scrollTo('services')}
            >
              Our Services ↓
            </button>
          </motion.form>

          <motion.div
            className="stats-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-number">50+</span>
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
        </section>

        {/* ── Services ── */}
        <section id="services" className="section services-section">
          <Reveal>
            <h2 className="section-heading">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-sub">
              End-to-end digital solutions engineered for performance, scale, and delight.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section projects-section">
          <Reveal>
            <h2 className="section-heading">
              Our <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-sub">
              A showcase of what we've built — shipped, live, and battle-tested.
            </p>
          </Reveal>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <div className="project-img-wrap">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="project-img" loading="lazy" />
                      ) : (
                        <div className="project-img-placeholder">
                          <span>{p.title[0]}</span>
                        </div>
                      )}
                    </div>
                    <div className="project-info">
                      <span className="project-tag">{p.tag}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <span className="project-arrow">→</span>
                    </div>
                  </a>
                ) : (
                  <div className="project-card project-card--no-link">
                    <div className="project-img-wrap">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="project-img" loading="lazy" />
                      ) : (
                        <div className="project-img-placeholder">
                          <span>{p.title[0]}</span>
                        </div>
                      )}
                    </div>
                    <div className="project-info">
                      <span className="project-tag">{p.tag}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Contact / Quote ── */}
        <section id="contact" className="section contact-section" ref={contactRef}>
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
              <button type="submit" className="btn-primary btn-submit" id="submit-quote-btn">
                Send Message
              </button>
            </form>
          </Reveal>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <p>© 2026 Radix Systems. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
