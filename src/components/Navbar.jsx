import { useEffect, useRef, useState } from 'react';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
];

export default function Navbar({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function updateActiveLink() {
      const header = document.querySelector('.nav');
      const marker =
        window.scrollY +
        (header?.getBoundingClientRect().height ?? 0) +
        Math.min(window.innerHeight * 0.25, 200);
      let current = '#home';

      links.forEach(([, href]) => {
        const section = document.querySelector(href);
        if (section && section.offsetTop <= marker) current = href;
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = links.at(-1)[1];
      }

      setActiveLink((active) => (active === current ? active : current));
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('hashchange', updateActiveLink);
    return () => {
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('hashchange', updateActiveLink);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function closeOnDesktop() {
      if (window.matchMedia('(min-width: 821px)').matches) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          {name}
        </a>
        <button
          ref={menuButtonRef}
          className="burger"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="links"
          className={menuOpen ? 'open' : ''}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={activeLink === href ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
