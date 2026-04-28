import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../seo/siteSeo";
import { useTheme } from "../../hooks/useTheme";
import "./htetLinKo.css";

const journey = [
  {
    year: "2019–2022",
    title: "Network engineering foundation",
    copy:
      "Htet Lin Ko began in network engineering at Frontiir, building the systems thinking, troubleshooting discipline, and reliability mindset that now shape his frontend work.",
  },
  {
    year: "2022–2023",
    title: "Frontend product builder",
    copy:
      "Htet Lin Ko moved into frontend development at Better HR, shipping Vue interfaces, REST API integrations, job workflows, authentication, filters, and responsive product screens.",
  },
  {
    year: "2023–Present",
    title: "Senior frontend leadership",
    copy:
      "As a Senior Frontend Developer, Htet Lin Ko leads UI architecture across ATS, appraisal, customer management, internal tools, and marketing systems with React, Vue, Next.js, Nuxt, TypeScript, GraphQL, and REST APIs.",
  },
];

const skillGroups = [
  {
    title: "Frontend systems",
    skills: ["React", "Vue", "Next.js", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Data and APIs",
    skills: ["GraphQL", "REST APIs", "Apollo Client", "TanStack Query", "Axios", "Zustand"],
  },
  {
    title: "Product delivery",
    skills: ["UI architecture", "Code reviews", "Mentoring", "Figma-to-code", "Performance-minded builds"],
  },
];

const projects = [
  "Applicant Tracking System for structured hiring workflows, candidate pipelines, interviews, and offer management.",
  "Better HR marketing site with Next.js App Router, Notion API as a CMS, static generation, and revalidation.",
  "API Debugger full stack project showing request building, server-side routes, response viewing, and developer-focused UX.",
];

export default function HtetLinKo() {
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className="identity-page">
      <header className="identity-topbar container">
        <Link to="/" className="identity-home-link" aria-label="Return to Htet Lin Ko portfolio homepage">
          Htet Lin Ko
        </Link>
        <button type="button" className="identity-theme-toggle" onClick={toggleTheme} aria-label={themeLabel}>
          <span aria-hidden="true">{theme === "dark" ? <SunIcon /> : <MoonIcon />}</span>
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </header>

      <main className="identity-main">
        <section className="identity-hero container">
          <p className="identity-kicker">Official profile</p>
          <h1>Htet Lin Ko – Senior Frontend Developer</h1>
          <p className="identity-lede">
            Htet Lin Ko is a Senior Frontend Developer specializing in React, Vue, Next.js, and scalable frontend systems
            for HR, recruitment, and internal business products.
          </p>
          <div className="identity-actions" aria-label="Official Htet Lin Ko profiles">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </section>

        <section className="identity-section container" aria-labelledby="who-is-htet-lin-ko">
          <div className="identity-section-header">
            <p className="identity-kicker">Who is Htet Lin Ko?</p>
            <h2 id="who-is-htet-lin-ko">Product-minded frontend engineer with a systems background.</h2>
          </div>
          <p>
            Htet Lin Ko combines frontend product delivery with the operational mindset of a former network engineer. His
            work focuses on clear user flows, maintainable component systems, fast interfaces, and reliable API-driven
            experiences.
          </p>
        </section>

        <section className="identity-section container" aria-labelledby="htet-lin-ko-career-journey">
          <div className="identity-section-header">
            <p className="identity-kicker">Career journey</p>
            <h2 id="htet-lin-ko-career-journey">From network engineering to senior frontend development.</h2>
          </div>
          <div className="identity-journey">
            {journey.map((item) => (
              <article key={item.title} className="identity-journey-item">
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="identity-section container" aria-labelledby="htet-lin-ko-skills-projects">
          <div className="identity-section-header">
            <p className="identity-kicker">Skills and projects</p>
            <h2 id="htet-lin-ko-skills-projects">React, Vue, Next.js, and scalable frontend systems.</h2>
          </div>

          <div className="identity-skills">
            {skillGroups.map((group) => (
              <article key={group.title} className="identity-skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="identity-proof">
            <h3>Project proof</h3>
            <ul>
              {projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="identity-cta container" aria-labelledby="work-with-htet-lin-ko">
          <p className="identity-kicker">Why work with Htet Lin Ko?</p>
          <h2 id="work-with-htet-lin-ko">He builds frontend systems that recruiters, teams, and customers can trust.</h2>
          <p>
            Htet Lin Ko brings senior frontend execution, practical product judgment, code review leadership, mentoring,
            and a growing full stack foundation with Node.js and Express.
          </p>
          <Link to="/#contact" className="identity-primary-link">
            Contact Htet Lin Ko
          </Link>
        </section>
      </main>
    </div>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M4.5 12h3" />
      <path d="M16.5 12h3" />
      <path d="M5.8 5.8l2.2 2.2" />
      <path d="M16 16l2.2 2.2" />
      <path d="M5.8 18.2L8 16" />
      <path d="M16 8l2.2-2.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M20 14.2A8.3 8.3 0 119.8 4A6.7 6.7 0 0020 14.2z" />
    </svg>
  );
}
