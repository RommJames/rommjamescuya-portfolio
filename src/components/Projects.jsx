import { useState, useMemo } from "react";
import { projects, categories, getAllTechs } from "../data/projects.js";
import { useInView } from "../hooks/useInView.js";

const allTechs = getAllTechs();

export default function Projects() {
  const [cat, setCat] = useState("All");
  const [techs, setTechs] = useState([]);
  const [sort, setSort] = useState("default");
  const [headerRef, headerVis] = useInView();

  const toggleTech = (t) =>
    setTechs((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const catMatch = cat === "All" || p.category === cat;
      const techMatch =
        techs.length === 0 || techs.every((t) => p.tech.includes(t));
      return catMatch && techMatch;
    });
    if (sort === "az")
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za")
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "featured")
      list = [...list].sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
      );
    return list;
  }, [cat, techs, sort]);

  return (
    <section id="projects">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={headerRef}
          style={headerVis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">What I've Built</p>
          <h2 className="sec-title">
            My <span>Projects</span>
          </h2>
        </div>

        {/* Controls */}
        <div className="proj-controls">
          {/* Category filter */}
          <div className="filter-row">
            <span className="filter-lbl">Category:</span>
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn${cat === c ? " on" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="featured">Sort: Featured First</option>
              <option value="az">Sort: A → Z</option>
              <option value="za">Sort: Z → A</option>
            </select>
          </div>

          {/* Tech filter */}
          <div className="tech-row">
            <span className="filter-lbl">Tech:</span>
            {allTechs.map((t) => (
              <button
                key={t}
                className={`tfilter-btn${techs.includes(t) ? " on" : ""}`}
                onClick={() => toggleTech(t)}
              >
                {t}
              </button>
            ))}
            {techs.length > 0 && (
              <button
                className="tfilter-btn"
                style={{
                  color: "var(--text-dim)",
                  borderColor: "var(--text-dim)",
                }}
                onClick={() => setTechs([])}
              >
                ✕ Clear
              </button>
            )}
            <span className="proj-meta">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {filtered.length === 0 && (
            <p className="proj-empty">No projects match the current filters.</p>
          )}
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="proj-card reveal"
      style={
        vis
          ? {
              opacity: 1,
              transform: "none",
              transitionDelay: `${(index % 6) * 70}ms`,
            }
          : { transitionDelay: `${(index % 6) * 70}ms` }
      }
    >
      <div className="proj-card-top">
        <span className="proj-cat-badge">{p.category}</span>
        <div className="proj-links">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              title="GitHub"
            >
              <GithubIcon />
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              title="Live Demo"
            >
              <ExternalIcon />
            </a>
          )}
          {p.proprietary && (
            <span
              className="proj-link"
              title="Proprietary — no public link"
              style={{ cursor: "default" }}
            >
              <LockIcon />
            </span>
          )}
        </div>
      </div>

      <div className="proj-title">
        {p.title}
        {p.featured && (
          <span className="proj-featured" title="Featured project" />
        )}
      </div>

      <p className="proj-desc">{p.description}</p>

      <div className="proj-tech">
        {p.tech.map((t) => (
          <span key={t} className="tbadge">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
