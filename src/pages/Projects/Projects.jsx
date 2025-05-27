"use client";

import { useState } from "react";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "LinkedIn Clone (React + Firebase)",
    description: "A professional networking platform clone with user authentication, post sharing, and a real-time feed, inspired by LinkedIn.",
    technologies: ["React", "Redux", "Firebase", "Firestore", "CSS", "Material UI"],
    codeUrl: "https://github.com/HtetLin27/linkedin-clone",
  },
  {
    id: 2,
    title: "Netflix Clone (MERN Stack)",
    description: "A full-stack Netflix clone with user authentication, movie browsing, video streaming, and a modern UI inspired by Netflix.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Firebase", "TMDB API"],
    demoUrl: "",
    codeUrl: "https://github.com/HtetLin27/MERN-netflix-_clone",
  },
  {
    id: 3,
    title: "React Music Player",
    description: "A sleek and responsive music player built with React, featuring audio controls, song library, and dynamic UI updates.",
    technologies: ["React", "CSS", "JavaScript", "HTML5 Audio API"],
    demoUrl: "",
    codeUrl: "https://github.com/HtetLin27/react-music-player/",
  },
  {
    id:4,
    title: "Social Media UI (React + Material UI)",
    description: "A responsive social media user interface built with React and Material UI, featuring post feeds, user interactions, and a modern design.",
    technologies: ["React", "Material UI", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/Social-Media",
  },
  {
    id: 5,
    title: "Personal Portfolio (FreeCodeCamp Inspired)",
    description: "A responsive personal portfolio website featuring project showcases, smooth scrolling, and a modern design, styled with SCSS.",
    technologies: ["HTML", "SCSS", "JavaScript"],
    codeUrl: "https://github.com/HtetLin27/Porfolio-Refer-FreeCodeCamp"
  },
  {
    id: 6,
    title: "Solo Creative Website (Responsive Landing Page)",
    description: "A modern, responsive landing page designed for creative professionals, built with semantic HTML, CSS, and JavaScript for interactive UI effects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    codeUrl:"https://github.com/HtetLin27/SoloCreativeWebsite"
  },
  {
    id: 7,
    title: "Chatbot Application with React and Firebase",
    description: "A real-time chatbot application built using React for the frontend and Firebase for backend services, including authentication, real-time database, and hosting.",
    technologies: ["React", "Firebase", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/Chatbot",
  },
  {
    id: 8,
    title: "Real-Time Chat Application",
    description: "A real-time chat app enabling instant messaging between users, built with React for the frontend and Firebase for authentication and real-time database functionality.",
    technologies: ["React", "Firebase", "JavaScript", "CSS"],
    codeUrl: "https://github.com/HtetLin27/RealTime-Chat",
  },

];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Get unique technology categories
  const allTechnologies = ["All"]
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech)
      }
    })
  })

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.technologies.includes(activeFilter))

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
          <p className="section-subtitle">Explore my latest projects and technical work</p>
        </div>

        <div className="filter-container">
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              className={`filter-button ${activeFilter === tech ? "active" : ""}`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-showcase">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-item">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
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

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <div className="project-type">
                    {project.videoUrl || project.gifUrl ? "Interactive Demo" : "Web Application"}
                  </div>
                  <div className="project-status">
                    <span className="status-dot"></span>
                    Completed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}