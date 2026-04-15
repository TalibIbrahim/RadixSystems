import Reveal from '../Reveal/Reveal';
import services from '../../data/services';

/* ── Services Section ── */
function Services() {
  return (
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
  );
}

export default Services;
