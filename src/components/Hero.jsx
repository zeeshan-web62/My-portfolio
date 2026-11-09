import SocialLinks from './SocialLinks.jsx';

export default function Hero({ person, social }) {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="hero-role">{person.title}</p>
        <h1>
          <span className="hero-greeting">Hi, I’m</span>
          <span className="hero-name">{person.name}</span>
        </h1>
        <p className="hero-tagline">{person.heroLine}</p>
        <p className="hero-intro">{person.heroText}</p>
        <div className="btns hero-actions">
          <a className="btn primary" href="#projects" aria-label="View my projects">
            View My Projects
          </a>
          {person.resume && (
            <a className="btn" href={person.resume} download>
              Download Resume
            </a>
          )}
          <a className="btn" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="hero-social">
          <SocialLinks links={social} />
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo glass">
          <picture>
            <source srcSet={person.photoWebp} type="image/webp" />
            <img
              src={person.photo}
              alt="Portrait of Zeeshan Ansari"
              width="900"
              height="835"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
