export default function Projects({ projects }) {
  return (
    <section id="projects" className="wrap projects-section">
      <div className="projects-heading">
        <div>
          <p className="projects-kicker">Selected work</p>
          <h2 className="title">Projects</h2>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="glass project-card rv" key={project.name}>
            {project.image ? (
              <div className="project-preview">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="project-preview project-preview-placeholder">
                <span className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-initial" aria-hidden="true">
                  {project.name[0]}
                </span>
                <span className="project-preview-label">Project</span>
              </div>
            )}
            <div className="project-body">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech" aria-label="Technologies used">
                {project.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  className="project-link project-link-primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
                  </svg>
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
                {project.live && (
                  <a
                    className="project-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live demo`}
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
