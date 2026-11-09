const statusLabels = {
  done: 'Completed',
  current: 'Learning now',
  next: 'Up next',
};

export default function Journey({ journey, education, experience }) {
  return (
    <section id="journey" className="wrap journey-section">
      <div className="journey-heading">
        <div>
          <p className="journey-kicker">Learning &amp; education</p>
          <h2 className="title">Learning journey</h2>
        </div>
        <p className="journey-intro muted">
          My current direction, one step at a time.
        </p>
      </div>
      <div className="journey-layout">
        <div className="journey-panel glass rv">
          <h3 className="journey-panel-title">Learning path</h3>
          <ol className="journey-list">
            {journey.map((step, index) => (
              <li
                className={`journey-step ${step.status} rv`}
                key={step.title}
              >
                <span className="journey-step-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="journey-step-content">
                  <span className="journey-step-title">{step.title}</span>
                  <span className="journey-step-status">
                    {statusLabels[step.status]}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div id="edu" className="education-panel">
          <h2 className="title">Education</h2>
          {education.map((item) => (
            <article className="glass education-card rv" key={item.school}>
              <p className="education-label">Institution</p>
              <h3 className="education-school">{item.school}</h3>
              <p className="education-degree">{item.degree}</p>
              <div className="education-details">
                <span>{item.years}</span>
                <span>{item.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      {experience.length > 0 && (
        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="glass education-card rv"
              key={`${item.role}-${item.org}`}
            >
              <h3 className="education-school">
                {item.role} — {item.org}
              </h3>
              <p className="muted">{item.period}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
