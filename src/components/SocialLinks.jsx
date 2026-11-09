function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" />
    </svg>
  );
}

export default function SocialLinks({ links, labeled = false }) {
  return (
    <div className={`social${labeled ? ' social-labeled' : ''}`}>
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <SocialIcon type="github" />
        {labeled && <span>GitHub</span>}
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <SocialIcon type="linkedin" />
        {labeled && <span>LinkedIn</span>}
      </a>
    </div>
  );
}
