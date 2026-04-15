import Reveal from "../Reveal/Reveal";
import projects from "../../data/projects";
import { FiExternalLink } from "react-icons/fi";

/* ── Project Card (internal) ── */
function ProjectCard({ project }) {
  const { title, desc, url, tag, image } = project;

  const imgContent = image ? (
    <img src={image} alt={title} className="project-img" loading="lazy" />
  ) : (
    <div className="project-img-placeholder">
      <span>{title[0]}</span>
    </div>
  );

  const info = (
    <div className="project-info">
      <span className="project-tag">{tag}</span>
      <h3>{title}</h3>
      <div className="project-description">
        <p>{desc}</p>
        {url && (
          <span className="project-arrow">
            <FiExternalLink />
          </span>
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <div className="project-img-wrap">{imgContent}</div>
        {info}
      </a>
    );
  }

  return (
    <div className="project-card project-card--no-link">
      <div className="project-img-wrap">{imgContent}</div>
      {info}
    </div>
  );
}

/* ── Projects Section ── */
function Projects() {
  return (
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
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
