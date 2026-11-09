const categoryIcons = {
  Frontend: (
    <path d="M3.5 5.5h17v13h-17zM3.5 9h17M8 21h8m-4-2.5V21" />
  ),
  Programming: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />,
  'Backend / Full Stack': (
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Zm-8.5 9L12 16.5l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
  ),
  'AI / ML': (
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  ),
  Core: (
    <path d="M4 5h16M4 12h16M4 19h16m-13-2v4m10-4v4M7 3v4m10-4v4" />
  ),
  Other: (
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
  ),
};

export default function Skills({ categories }) {
  return (
    <section id="skills" className="wrap skills-section">
      <div className="skills-heading">
        <p className="skills-kicker">Skills &amp; technologies</p>
        <h2 className="title">Tech stack</h2>
      </div>
      <div className="skills-grid">
        {categories.map((category, categoryIndex) => (
          <article
            className="glass skill-card rv"
            key={category.category}
          >
            <div className="skill-card-heading">
              <span className="skill-index" aria-hidden="true">
                {String(categoryIndex + 1).padStart(2, '0')}
              </span>
              <h3>{category.category}</h3>
              <svg
                className="skill-category-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {categoryIcons[category.category]}
              </svg>
            </div>
            <ul className="skill-list">
              {category.items.map((item, itemIndex) => (
                <li
                  className={`skill-item${item.learning ? ' is-learning' : ''}`}
                  key={`${item.name}-${itemIndex}`}
                >
                  <span className="skill-name">{item.name}</span>
                  {item.learning && (
                    <span className="skill-status">Learning</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
