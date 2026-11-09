import { useEffect } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Journey from './components/Journey.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import { portfolio } from './data/portfolio.js';

export default function App() {
  useEffect(() => {
    const progress = document.querySelector('#progress');
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const revealElements = document.querySelectorAll(
      '.rv, .title, .pad, #contact .contact-card',
    );
    let observer;

    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      progress.style.transform = `scaleX(${ratio})`;

      if (observer) {
        revealElements.forEach((element) => {
          if (
            !element.classList.contains('is-visible') &&
            element.getBoundingClientRect().top < window.innerHeight + 64
          ) {
            element.classList.add('is-visible');
            observer.unobserve(element);
          }
        });
      }
    };

    if (!motionPreference.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              currentObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px 64px 0px', threshold: 0.01 },
      );
      revealElements.forEach((element) => observer.observe(element));
      document.documentElement.classList.add('motion-ready');
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    function disableMotion(event) {
      if (!event.matches) return;
      observer?.disconnect();
      document.documentElement.classList.remove('motion-ready');
      revealElements.forEach((element) => element.classList.add('is-visible'));
    }

    motionPreference.addEventListener('change', disableMotion);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      observer?.disconnect();
      motionPreference.removeEventListener('change', disableMotion);
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return (
    <>
      <div id="progress" aria-hidden="true" />
      <div id="glow" aria-hidden="true" />
      <Navbar name={portfolio.person.name} />
      <main>
        <Hero person={portfolio.person} social={portfolio.social} />
        <About paragraphs={portfolio.about} />
        <Skills categories={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Journey
          journey={portfolio.journey}
          education={portfolio.education}
          experience={portfolio.experience}
        />
        <Contact
          person={portfolio.person}
          social={portfolio.social}
          contact={portfolio.contact}
        />
      </main>
      <Footer name={portfolio.person.name} social={portfolio.social} />
    </>
  );
}
