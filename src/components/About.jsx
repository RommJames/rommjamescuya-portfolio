import rjLogo from "../assets.js";
import { useInView } from "../hooks/useInView.js";

export default function About() {
  const [ref, vis] = useInView();

  return (
    <section id="about">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">Who I Am</p>
          <h2 className="sec-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Visual */}
          <Reveal delay="d2">
            <div className="about-img-wrap">
              <div className="about-img-glow" />
              <img src={rjLogo} alt="RJ Logo" className="about-logo" />
              <div className="about-badge">
                <div className="about-badge-icon">🏆</div>
                <strong>Gold Awardee</strong>
                <span>WorldSkills Philippines</span>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay="d3">
            <div className="about-body">
              <h3>Hi, I&apos;m Romm James Cuya</h3>

              <p>
                I&apos;m a{" "}
                <strong style={{ color: "var(--text)" }}>
                  Software Developer
                </strong>{" "}
                based in Pasig City, Philippines, specializing in ERP system
                development and backend engineering. I build scalable business
                applications using Python, JavaScript, and the Frappe Framework
                — while staying current on full-stack web development.
              </p>

              <p>
                Beyond code, I spent three years as an IT educator, coaching
                students in web development and competitive programming. My team
                achieved gold medals in TESDA skills competitions and a bronze
                medal at the national level.
              </p>

              <div className="about-meta">
                <div className="meta-item">
                  <span className="meta-lbl">Location</span>
                  <span className="meta-val">Pasig City, Philippines</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Current Role</span>
                  <span className="meta-val">Software Developer</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Email</span>
                  <span className="meta-val">rj.cuya010@gmail.com</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Phone</span>
                  <span className="meta-val">09760791479</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Company</span>
                  <span className="meta-val">Titus Global-Tech</span>
                </div>
                <div className="meta-item">
                  <span className="meta-lbl">Education</span>
                  <span className="meta-val">CIIT College (CS)</span>
                </div>
              </div>

              <div className="about-links">
                <a
                  href="https://github.com/RommJames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/romm-james-cuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="mailto:rj.cuya010@gmail.com" className="about-link">
                  <MailIcon /> Email
                </a>
                <a
                  href="/references/CV-RommJamesCuya.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                  style={{
                    borderColor: "var(--border-gold)",
                    color: "var(--gold)",
                  }}
                >
                  <DocIcon /> Download CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = "" }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${delay}`}
      style={vis ? { opacity: 1, transform: "none" } : {}}
    >
      {children}
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );
}
