import { useInView } from "../hooks/useInView.js";

const education = [
  {
    period: "Aug 2025 – Present",
    school: "CIIT College of Innovation and Integrated Technology",
    degree: "Bachelor of Science in Computer Science (AI & Cloud Computing)",
    location: "Kamuning, Pasig City",
    tags: ["BS Computer Science", "Dean's List", "GPA: 3.74/4.00"],
    highlights: [
      "Dean's List — GPA 3.74/4.00",
      "Specialization: AI & Cloud Computing",
      "Coursework: Computer Programming (Java, C++, C#, Python), Architecture & Organization, 3D Modeling, Information Management, Technical Communication",
    ],
  },
  {
    period: "Aug 2020 – Sep 2022",
    school: "MFI Polytechnic Institute",
    degree: "Diploma in Information Technology",
    location: "Ortigas, Pasig City",
    tags: ["Diploma in IT", "Academic Excellence", "Grade: 1.5 (94–97%)"],
    highlights: [
      "Graduated with Academic Excellence — Grade 1.5 (94–97%)",
      "Concentration: Software Development & Systems Administration",
      "Coursework: Web Development, Android Development, DBMS, System Analysis & Design, Windows Server, Desktop App Development (VB.NET)",
      "Gold Medal — TESDA PaMaMariSan District & NCR Regional Skills Competition (Web Technology)",
      "Bronze Medal — WorldSkills Philippine National Skills Competition",
    ],
  },
];

export default function Education() {
  const [ref, vis] = useInView();

  return (
    <section id="education">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">Academic Background</p>
          <h2 className="sec-title">
            My <span>Education</span>
          </h2>
        </div>

        <div className="edu-grid">
          {education.map((e, i) => (
            <EduCard key={i} item={e} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EduCard({ item, delay }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="edu-card reveal"
      style={
        vis
          ? { opacity: 1, transform: "none", transitionDelay: `${delay}ms` }
          : { transitionDelay: `${delay}ms` }
      }
    >
      <p className="edu-period">{item.period}</p>
      <p className="edu-school">{item.school}</p>
      <p className="edu-degree">{item.degree}</p>
      <div className="edu-meta-tags">
        {item.tags.map((t) => (
          <span key={t} className="edu-tag">
            {t}
          </span>
        ))}
      </div>
      <ul className="edu-pts">
        {item.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
