import { useInView } from "../hooks/useInView.js";

const skillData = [
  {
    icon: "🌐",
    name: "Web Development",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Node.js",
      "Express",
      "Frappe Framework",
    ],
  },
  {
    icon: "🗄️",
    name: "Databases",
    tags: ["MySQL", "MongoDB", "Oracle"],
  },
  {
    icon: "💻",
    name: "Programming Languages",
    tags: ["Python", "Java", "PHP", "C", "C++", "C#"],
  },
  {
    icon: "⚙️",
    name: "Tools & DevOps",
    tags: ["Git", "GitHub", "Vite", "Redis", "SMTP/IMAP", "VS Code"],
  },
  {
    icon: "📋",
    name: "Methodologies",
    tags: [
      "Agile",
      "Scrum",
      "Debugging",
      "Software Testing",
      "Technical Documentation",
    ],
  },
  {
    icon: "🎨",
    name: "Frontend Frameworks",
    tags: [
      "Tailwind CSS",
      "DaisyUI",
      "Chakra UI",
      "CSS Modules",
      "CSS Grid",
      "Flexbox",
    ],
  },
];

export default function Skills() {
  const [ref, vis] = useInView();

  return (
    <section id="skills">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">What I Know</p>
          <h2 className="sec-title">
            Technical <span>Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillData.map((cat, i) => (
            <SkillCard key={cat.name} cat={cat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, delay }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="skill-cat reveal"
      style={
        vis
          ? { opacity: 1, transform: "none", transitionDelay: `${delay}ms` }
          : { transitionDelay: `${delay}ms` }
      }
    >
      <div className="skill-cat-hdr">
        <div className="skill-cat-icon">{cat.icon}</div>
        <span className="skill-cat-name">{cat.name}</span>
      </div>
      <div className="skill-tags">
        {cat.tags.map((t) => (
          <span key={t} className="skill-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
