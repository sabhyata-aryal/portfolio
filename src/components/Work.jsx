import { featuredProject, projects } from '../data/content';

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="project-card fade-up"
      data-cursor="view"
      style={{ '--card-accent': project.accent }}
      data-preview-icon={project.previewIcon}
      data-preview-title={project.previewTitle}
    >
      <p className="project-num">
        <span className="accent-dot" />
        {project.num}
      </p>
      <div className="project-tech">
        {project.tech.map((tag) => (
          <span key={tag} className="tech-pill">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <span className="project-arrow">
        {project.linkLabel} <span className="arrow-ico">↗</span>
      </span>
    </a>
  );
}

export default function Work() {
  return (
    <section id="work">
      <p className="section-label fade-up">02 · Selected Work</p>
      <h2 className="section-title fade-up">
        Projects &amp; <em>Case Studies</em>
      </h2>

      <div className="projects-grid">
        <a
          href={featuredProject.href}
          target="_blank"
          rel="noopener"
          className="project-card project-featured fade-up tilt"
          data-cursor="view"
          style={{ '--card-accent': featuredProject.accent }}
        >
          <div className="project-featured-visual">
            <img
              src={featuredProject.image}
              alt={featuredProject.imageAlt}
              className="featured-visual-photo"
            />
            <span className="featured-visual-tag">{featuredProject.tag}</span>
          </div>
          <div className="project-featured-content">
            <p className="project-num">{featuredProject.num}</p>
            <div className="project-tech">
              {featuredProject.tech.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="project-title">{featuredProject.title}</h3>
            <p className="project-desc">{featuredProject.desc}</p>
            <span className="project-arrow">
              {featuredProject.linkLabel} <span className="arrow-ico">↗</span>
            </span>
          </div>
        </a>

        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
