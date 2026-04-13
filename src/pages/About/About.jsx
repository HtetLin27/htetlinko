import "./about.css";
import { portfolioData } from "../../data/portfolio";

const About = () => {
  const about = portfolioData.about;

  return (
    <section className="about-section">
      <div className="about-layout container">
        <header className="about-primary" data-animate>
          <p className="about-eyebrow">{about.eyebrow}</p>
          <h2 className="about-title">{about.title}</h2>
          <p className="about-support">{about.support}</p>
        </header>

        <aside className="about-secondary" data-animate>
          <section className="about-story">
            <h3>{about.storyTitle}</h3>
            <p>{about.story}</p>
          </section>

          <dl className="about-info-list">
            {about.infoRows.map((item, index) => (
              <div key={item.label} className="about-info-row" data-stagger-item style={{ "--stagger-index": index }}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="about-skills">
            <h4>{about.skillsTitle}</h4>
            <div className="about-skill-list">
              {about.skills.map((skill, index) => (
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
