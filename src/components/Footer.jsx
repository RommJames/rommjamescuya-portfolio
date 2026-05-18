import rjLogo from "../assets.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={rjLogo} alt="RJ" />
          <span>Romm James Cuya</span>
        </div>

        <p className="footer-copy">
          © {year} Romm James Cuya. Built with React + Vite.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/RommJames"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/romm-james-cuya"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="mailto:rj.cuya010@gmail.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
