import SocialLinks from './SocialLinks.jsx';

export default function Contact({ person, social, contact }) {
  return (
    <section id="contact" className="wrap contact">
      <div className="contact-card glass">
        <div className="contact-copy">
          <p className="contact-kicker">Get in touch</p>
          <h2 className="big">{contact.heading}</h2>
          <p className="lead">{contact.text}</p>
        </div>
        <div className="contact-actions">
          <a
            className="contact-email"
            href={`mailto:${person.email}`}
            aria-label={`Send an email to ${person.email}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>{person.email}</span>
            <span className="contact-email-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="contact-social">
            <span className="contact-social-label">Find me on</span>
            <SocialLinks links={social} labeled />
          </div>
        </div>
      </div>
    </section>
  );
}
