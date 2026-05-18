import { useState, useEffect } from "react";
import rjLogo from "../assets.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => go(e, "#hero")}
          >
            <img src={rjLogo} alt="RJ" />
            <span>RommJames</span>
          </a>
          <ul className="navbar-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/references/CV-RommJamesCuya.pdf"
                className="nav-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
            </li>
          </ul>
          <button
            className="hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={
                open ? { transform: "rotate(45deg) translate(5px,5px)" } : {}
              }
            />
            <span style={open ? { opacity: 0 } : {}} />
            <span
              style={
                open ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}
              }
            />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a
          href="/references/CV-RommJamesCuya.pdf"
          style={{ color: "var(--gold)", fontWeight: 700 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
