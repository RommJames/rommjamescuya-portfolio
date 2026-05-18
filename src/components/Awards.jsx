import { useInView } from "../hooks/useInView.js";

const awards = [
  {
    medal: "🎓",
    type: "medal-acad",
    title: "Academic Excellence",
    org: "MFI Polytechnic Institute",
    date: "Aug 2023",
  },
  {
    medal: "🥉",
    type: "medal-bronze",
    title: "Bronze Awardee — Philippine National Skills Competition 2024",
    org: "WorldSkills Philippines",
    date: "Sep 2024",
  },
  {
    medal: "🥇",
    type: "medal-gold",
    title: "Gold Awardee — Regional Skills Competition 2023",
    org: "TESDA NCR",
    date: "Dec 2023",
  },
  {
    medal: "🥇",
    type: "medal-gold",
    title: "Gold Awardee — Regional Skills Competition 2022",
    org: "TESDA NCR",
    date: "Sep 2022",
  },
  {
    medal: "🥇",
    type: "medal-gold",
    title: "Gold Awardee — District Skills Competition 2022",
    org: "TESDA PaMaMariSan District Office",
    date: "Jul 2022",
  },
  {
    medal: "🥇",
    type: "medal-gold",
    title: "Gold Medalist — Regional Skills Competition 2021",
    org: "TESDA NCR",
    date: "Nov 2021",
  },
  {
    medal: "🥇",
    type: "medal-gold",
    title: "Gold Medalist — District Skills Competition 2021",
    org: "TESDA PaMaMariSan District Office",
    date: "Oct 2021",
  },
  {
    medal: "🥉",
    type: "medal-bronze",
    title: "Bronze Medalist — Philippine National Skills Competition 2021",
    org: "WorldSkills Philippines",
    date: "Dec 2021",
  },
];

export default function Awards() {
  const [ref, vis] = useInView();

  return (
    <section id="awards">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">Recognition</p>
          <h2 className="sec-title">
            Awards &amp; <span>Achievements</span>
          </h2>
        </div>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <AwardCard key={i} award={a} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award, delay }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="award-card reveal"
      style={
        vis
          ? { opacity: 1, transform: "none", transitionDelay: `${delay}ms` }
          : { transitionDelay: `${delay}ms` }
      }
    >
      <div className={`award-medal ${award.type}`}>{award.medal}</div>
      <div>
        <p className="award-title">{award.title}</p>
        <p className="award-org">{award.org}</p>
        <p className="award-date">{award.date}</p>
      </div>
    </div>
  );
}
