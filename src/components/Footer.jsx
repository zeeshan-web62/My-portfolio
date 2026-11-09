import SocialLinks from './SocialLinks.jsx';

export default function Footer({ name, social }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">
          {name}
        </a>
        <p className="footer-copyright">
          © {new Date().getFullYear()} {name}
        </p>
        <div className="footer-links">
          <SocialLinks links={social} />
          <a className="footer-top" href="#home" aria-label="Back to top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
