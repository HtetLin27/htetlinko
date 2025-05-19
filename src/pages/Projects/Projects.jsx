"use client";

import { useState } from "react";
import "./projects.css";
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing capabilities.",
    gifUrl: "/project1.gif",
    imageUrl: "/ecommerce-dashboard.jpg",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Redux",
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team assignments, and progress tracking.",
    videoUrl: "/project2.mp4",
    imageUrl: "/task-app.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS", "Jest"],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.",
    gifUrl: "/project3.gif",
    imageUrl: "/weather-app.jpg",
    technologies: [
      "JavaScript",
      "OpenWeather API",
      "HTML5",
      "CSS3",
      "Leaflet.js",
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A social networking platform with real-time messaging, post sharing, and user profile customization.",
    videoUrl: "/project4.mp4",
    imageUrl: "/social-media.jpg",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "AWS S3"],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description:
      "A mobile-responsive fitness application that tracks workouts, nutrition, and provides personalized training plans.",
    gifUrl: "/project5.gif",
    imageUrl: "/fitness-app.jpg",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB", "Expo"],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform with search functionality, user ratings, and personalized recommendations.",
    videoUrl: "/project6.mp4",
    imageUrl: "/recipe-app.jpg",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "TypeScript",
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/project",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique technology categories
  const allTechnologies = ["All"];
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <div className="header-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
          </div>
          <h2 className="section-title">Creative Portfolio</h2>
          <p className="section-subtitle">
            Explore my latest projects and technical work
          </p>
        </div>

        <div className="filter-container">
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              className={`filter-button ${
                activeFilter === tech ? "active" : ""
              }`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-showcase">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item ${index === 0 ? "featured" : ""}`}
            >
              <div className="project-card">
                <div className="project-preview">
                  {project.videoUrl ? (
                    <video autoPlay loop muted className="project-media">
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.gifUrl ? (
                    <img
                      src={project.gifUrl || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      className="project-media"
                    />
                  ) : (
                    <img
                      src={
                        project.imageUrl ||
                        "/placeholder.svg?height=200&width=350"
                      }
                      alt={`${project.title} preview`}
                      className="project-media"
                    />
                  )}

                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3 className="overlay-title">{project.title}</h3>
                      <div className="overlay-tech">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="overlay-tag">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="overlay-tag more-tag">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="details-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo-link"
                          aria-label="View live demo"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18">
                            <path
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link code-link"
                          aria-label="View source code"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18">
                            <path
                              d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5a2 2 0 002 2h1M16 3h1a2 2 0 012 2v5a2 2 0 002 2 2 2 0 00-2 2v5a2 2 0 01-2 2h-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
