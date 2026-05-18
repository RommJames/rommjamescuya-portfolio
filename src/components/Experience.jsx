import { useInView } from "../hooks/useInView.js";

const experience = [
  {
    period: "Jan 2025 – Present",
    role: "Software Developer",
    company: "Titus Global-Tech",
    location: "Angeles, Pampanga · Remote",
    bullets: [
      "Developed and customized ERP systems using Python and JavaScript, implementing business logic, workflows, and feature enhancements for multiple clients.",
      "Built and maintained backend modules for a web-based Terminal Operating System (TOS) supporting cargo handling and port operations.",
      "Diagnosed and resolved system issues through debugging, root cause analysis, and ticket-based support.",
      "Optimized database performance through query improvements and backend enhancements.",
      "Configured SMTP/IMAP email integrations for automated notifications and communication workflows.",
      "Collaborated in Agile Scrum: sprint planning, backlog refinement, daily stand-ups, and sprint reviews.",
    ],
    tech: [
      "Python",
      "JavaScript",
      "Frappe Framework",
      "MySQL",
      "SMTP/IMAP",
      "Agile Scrum",
    ],
  },
  {
    period: "Jan 2022 – Dec 2024",
    role: "Education Associate & IT Support",
    company: "MFI Polytechnic Institute Inc.",
    location: "Ortigas, Pasig City",
    bullets: [
      "Delivered instruction in programming, web development, and database systems across multiple IT courses.",
      "Facilitated hands-on training in Java, PHP/MySQL, JavaScript, C/C++, and Oracle PL/SQL.",
      "Coached students in WorldSkills Philippines (Web Technology) — achieved multiple gold medal results.",
      "Managed IT laboratories and provided technical support for students and faculty.",
    ],
    tech: ["Java", "PHP", "MySQL", "JavaScript", "C/C++", "Oracle PL/SQL"],
  },
  {
    period: "Jan 2020 – Mar 2020",
    role: "IT Intern",
    company: "Domain Merchandising Services Inc.",
    location: "Ortigas, Pasig City",
    bullets: [
      "Assisted with Ethernet cabling, internet setup, and storage organization.",
      "Provided technical support and gained hands-on experience with Ubuntu OS and Bash scripting.",
      "Created a company website using WordPress.",
    ],
    tech: ["Ubuntu", "Bash", "WordPress"],
  },
];

export default function Experience() {
  const [ref, vis] = useInView();

  return (
    <section id="experience">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">Work History</p>
          <h2 className="sec-title">
            Professional <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, delay }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={`tl-item${vis ? " vis" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="tl-dot" />
      <p className="tl-period">{item.period}</p>
      <div className="tl-card">
        <p className="tl-role">{item.role}</p>
        <p className="tl-company">{item.company}</p>
        <p className="tl-loc">📍 {item.location}</p>
        <ul className="tl-bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tl-tech">
          {item.tech.map((t) => (
            <span key={t} className="tbadge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
