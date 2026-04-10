import { useEffect, useMemo, useState } from "react";
import "./projects.css";

const PAGE_SIZE = 4;

const projects = [
  {
    id: 1,
    title: "LinkedIn Clone",
    description:
      "Professional networking platform with authentication, post sharing, and real-time feed interactions inspired by LinkedIn.",
    technologies: ["React", "Redux", "Firebase", "Firestore", "Material UI"],
    codeUrl: "https://github.com/HtetLin27/linkedin-clone",
  },
  {
    id: 2,
    title: "Netflix Clone (MERN)",
    description:
      "Full-stack streaming app with authentication, movie browsing flows, and watch experiences powered by TMDB APIs.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Firebase", "TMDB API"],
    codeUrl: "https://github.com/HtetLin27/MERN-netflix-_clone",
  },
  {
    id: 3,
    title: "React Music Player",
    description:
      "Responsive music player with playlist controls, smooth transitions, and audio playback management using HTML5 Audio API.",
    technologies: ["React", "JavaScript", "CSS", "HTML5 Audio API"],
    codeUrl: "https://github.com/HtetLin27/react-music-player/",
  },
  {
    id: 4,
    title: "Social Media UI",
    description:
      "Modern social platform interface with feeds, profile blocks, and reusable UI patterns built in React and Material UI.",
    technologies: ["React", "Material UI", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/Social-Media",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio inspired by FreeCodeCamp styling patterns, featuring project showcases and smooth scrolling.",
    technologies: ["HTML", "SCSS", "JavaScript"],
    previewUrl: "https://htetlin27.github.io/Porfolio-Refer-FreeCodeCamp/",
    codeUrl: "https://github.com/HtetLin27/Porfolio-Refer-FreeCodeCamp",
  },
  {
    id: 6,
    title: "Solo Creative Landing Page",
    description:
      "Landing page tailored for creative professionals with strong visual hierarchy and interactive UI elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewUrl: "https://htetlin27.github.io/SoloCreativeWebsite/",
    codeUrl: "https://github.com/HtetLin27/SoloCreativeWebsite",
  },
  {
    id: 7,
    title: "Chatbot Application",
    description:
      "Real-time chatbot powered by React and Firebase for authentication, messaging persistence, and deployment workflows.",
    technologies: ["React", "Firebase", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/Chatbot",
  },
  {
    id: 8,
    title: "Real-Time Chat Application",
    description:
      "Instant messaging experience built with React and Firebase focusing on low-latency communication and reliable auth.",
    technologies: ["React", "Firebase", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/RealTime-Chat",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const technologyFilters = useMemo(() => {
    const techSet = new Set(projects.flatMap((project) => project.technologies));
    return ["All", ...Array.from(techSet)];
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(activeFilter));

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <section className="projects-wrap container">
      <header className="projects-header" data-animate>
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-heading">Selected Projects</h2>
        <p className="section-copy">
          A collection of frontend-focused builds across product UI, interactive apps, and full-stack experiments.
        </p>
      </header>

      <div className="projects-filters" data-animate>
        {technologyFilters.slice(0, 9).map((tech) => (
          <button
            type="button"
            key={tech}
            className={`projects-filter-btn ${activeFilter === tech ? "is-active" : ""}`}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-pager">
        <p>
          Showing {visibleProjects.length} of {filteredProjects.length}
        </p>
        <div className="projects-pager-controls">
          <button type="button" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="projects-grid" key={activeFilter}>
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className="projects-card glass-card"
            style={{ "--stagger-index": index % 6 }}
          >
            <div className="projects-card-top">
              <span className="projects-card-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="projects-card-links">
                {project.previewUrl ? (
                  <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" aria-label="Open live preview">
                    <PreviewIcon />
                  </a>
                ) : null}
                {project.codeUrl ? (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open source code">
                    <CodeIcon />
                  </a>
                ) : null}
              </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="projects-card-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="projects-card-footer">
              <span>Web Application</span>
              <span className="projects-status">
                <i /> Completed
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M8 7l-5 5l5 5" />
      <path d="M16 7l5 5l-5 5" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

function PreviewIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M2.5 12s3.5-6 9.5-6s9.5 6 9.5 6s-3.5 6-9.5 6s-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
