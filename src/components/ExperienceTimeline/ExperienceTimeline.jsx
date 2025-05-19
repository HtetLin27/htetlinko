// Timeline.jsx
import React from "react";
import "./ExperienceTimeline.css";

const experiences = [
  {
    id: 1,
    role: "Senior Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    img: "/betterhr.jpg",
    period: "Nov 2023 - Present",
    description:
      "Leading frontend development initiatives, mentoring junior developers, and implementing best practices for scalable applications.",
    skills: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Team Leadership",
      "Code Review",
    ],
  },
  {
    id: 2,
    role: "Junior Web Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    img: "/betterhr.jpg",
    period: "Sep 2022 - Nov 2023",
    description:
      "Developed and maintained responsive web applications, collaborated with cross-functional teams, and implemented modern UI/UX designs.",
    skills: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Git"],
  },
  {
    id: 3,
    role: "Network Engineer",
    company: "Frontiir",
    location: "Mandalay, Myanmar",
    img: "/frontiir.jpeg",
    period: "Jan 2019 - Feb 2022",
    description:
      "Managed network infrastructure, implemented security protocols, and ensured reliable network connectivity for enterprise clients.",
    skills: [
      "Network Security",
      "Infrastructure",
      "Troubleshooting",
      "System Administration",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <dv className="timeline-container">
      <h3 className="stat-title">My timeline</h3>
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={exp.id}>
          <span className="dot" />
          <div className="content">
            <div className="date-badge">{exp.period}</div>
            <div className="header">
              <img src={exp.img} alt={exp.company} className="company-logo" />
              <div>
                <h3 className="role">{exp.role}</h3>
                <p className="company">
                  {exp.company} • {exp.location}
                </p>
              </div>
            </div>
            <p className="description">{exp.description}</p>
            <div className="skills">
              {exp.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <h4 className="and-more">And More</h4>
    </dv>
  );
};

export default ExperienceTimeline;
