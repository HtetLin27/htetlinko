import "./about.css";

const About = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const infoRows = [
    { label: "Experience", value: `${experienceYears}+ years` },
    { label: "Current role", value: "Senior Frontend Developer" },
    { label: "Focus", value: "Frontend architecture and UX quality" },
    { label: "Team style", value: "Collaborative, product-driven delivery" },
  ];

  const coreSkills = ["React", "Next.js", "TypeScript", "Vue", "Nuxt", "Node.js", "Express.js", "Design Systems", "Performance"];

  return (
    <section className="about-section">
      <div className="about-layout">
        <header className="about-primary" data-animate>
          <p className="about-eyebrow">About</p>
          <h2 className="about-title">I build reliable interfaces that help teams ship with confidence.</h2>
          <p className="about-support">
            Frontend engineer focused on clean architecture, thoughtful UX, and steady delivery from idea to production.
          </p>
        </header>

        <aside className="about-secondary" data-animate>
          <section className="about-story">
            <h3>My Story</h3>
            <p>
              I started with infrastructure and transitioned into product engineering, where I now lead frontend work
              and help teams deliver maintainable, user-focused web experiences.
            </p>
          </section>

          <dl className="about-info-list">
            {infoRows.map((item, index) => (
              <div key={item.label} className="about-info-row" data-stagger-item style={{ "--stagger-index": index }}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="about-skills">
            <h4>Core Skills</h4>
            <div className="about-skill-list">
              {coreSkills.map((skill, index) => (
                <span key={skill} className="about-skill-chip" data-stagger-item style={{ "--stagger-index": index }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
};

export default About;
