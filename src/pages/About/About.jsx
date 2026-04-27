import "./about.css";
import { portfolioData } from "../../data/portfolio";

const About = () => {
  const about = portfolioData.about;

  return (
    <section className="about-section">
      <div className="about-container container">

        {/* ── Top row: headline + at-a-glance ── */}
        <div className="about-top" data-animate>
          <div className="about-headline-block">
            <p className="about-eyebrow">{about.eyebrow}</p>
            <h2 className="about-title">{about.title}</h2>
            <p className="about-support">{about.support}</p>
          </div>

          <div className="about-glance glass-card">
            <p className="about-glance-label">At a glance</p>
            <div className="about-stats">
              {about.stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="about-glance-rows">
              {about.infoRows.map((row) => (
                <div key={row.label} className="about-glance-row">
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Story card ── */}
        <div className="about-story-card glass-card" data-animate>
          <div className="about-story-inner">
            <div className="about-story-header">
              <span className="about-story-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </span>
              <h3>{about.storyTitle}</h3>
            </div>
            <p>{about.story}</p>
          </div>
          <div className="about-story-accent" aria-hidden="true" />
        </div>

        {/* ── Skills bento ── */}
        <div className="about-skills-grid" data-animate>
          {about.skillGroups.map((group) => (
            <div key={group.label} className="about-skill-group glass-card">
              <span className="about-skill-group-label">{group.label}</span>
              <div className="about-skill-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="about-skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
