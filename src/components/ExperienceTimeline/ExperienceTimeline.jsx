import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../../data/portfolio";
import "./ExperienceTimeline.css";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const experienceSection = portfolioData.experience;
const experiences = experienceSection.items;

// S-curve path through the SVG canvas
const PATH_D =
  "M 0,50 C 80,50 140,14 260,14 C 380,14 440,86 560,86 C 680,86 740,14 860,14 C 940,14 960,50 1000,50";

// approximate fractional positions along the path for each node
const NODE_FRACTIONS = experiences.map((_, i) => {
  if (experiences.length === 1) return 0.5;
  return 0.22 + (i / (experiences.length - 1)) * 0.56;
});

export default function ExperienceTimeline() {
  const sectionRef = useRef(null);
  const bgPathRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [nodePoints, setNodePoints] = useState([]);
  const [isCompact, setIsCompact] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 900px)").matches : false
  );

  // measure path and compute node positions
  useEffect(() => {
    const path = bgPathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    setPathLength(len);
    setNodePoints(
      NODE_FRACTIONS.map((f) => {
        const pt = path.getPointAtLength(f * len);
        return { x: pt.x, y: pt.y };
      })
    );
  }, []);

  // responsive breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const onChange = (e) => setIsCompact(e.matches);
    setIsCompact(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // scroll → active index
  useEffect(() => {
    if (isCompact) return;
    const section = sectionRef.current;
    if (!section) return;
    let rafId = null;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollDistance, 0, 1);
      const next = clamp(Math.round(progress * (experiences.length - 1)), 0, experiences.length - 1);
      setActiveIndex(next);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => { update(); rafId = null; });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isCompact]);

  const scrollSpan = `${(experiences.length - 1) * 100}svh`;
  const activeFraction = NODE_FRACTIONS[activeIndex] ?? 0;
  const progressDashoffset = pathLength > 0 ? pathLength * (1 - activeFraction) : pathLength;

  return (
    <section
      ref={sectionRef}
      className="timeline-section"
      style={{ "--timeline-scroll-span": scrollSpan }}
    >
      <div className="timeline-sticky">
        <div className="timeline-shell container">

          {/* ── Header ── */}
          <header className="timeline-header" data-animate>
            <p className="timeline-eyebrow">{experienceSection.eyebrow}</p>
            <h2 className="timeline-title">{experienceSection.title}</h2>
            <p className="timeline-copy">{experienceSection.copy}</p>
          </header>

          {isCompact ? (
            /* ── Mobile: stacked cards ── */
            <div className="timeline-mobile-list">
              {experiences.map((exp) => (
                <article key={exp.id} className="timeline-card timeline-card--visible">
                  <CardContent exp={exp} />
                </article>
              ))}
            </div>
          ) : (
            /* ── Desktop: SVG path + card ── */
            <div className="timeline-body">

              {/* SVG path with nodes */}
              <div className="timeline-path-wrap" data-animate>
                <svg
                  className="timeline-path-svg"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  {/* background path */}
                  <path
                    ref={bgPathRef}
                    d={PATH_D}
                    fill="none"
                    stroke="var(--surface-border-strong)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* progress path */}
                  {pathLength > 0 && (
                    <path
                      d={PATH_D}
                      fill="none"
                      stroke="url(#pathGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={pathLength}
                      strokeDashoffset={progressDashoffset}
                      className="timeline-path-progress"
                    />
                  )}

                  <defs>
                    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--accent-secondary)" />
                    </linearGradient>
                    <filter id="nodeGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* nodes */}
                  {nodePoints.map((pt, i) => {
                    const isPast = i < activeIndex;
                    const isActive = i === activeIndex;
                    return (
                      <g key={i} className={`timeline-node ${isActive ? "is-active" : isPast ? "is-past" : ""}`}>
                        {/* outer pulse ring */}
                        {isActive && (
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="18"
                            fill="rgba(59,130,246,0.12)"
                            className="timeline-node-pulse"
                          />
                        )}
                        {/* glow ring */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="11"
                          fill="var(--surface-2)"
                          stroke={isActive || isPast ? "var(--accent)" : "var(--surface-border-strong)"}
                          strokeWidth="1.5"
                          filter={isActive ? "url(#nodeGlow)" : undefined}
                        />
                        {/* inner dot */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="5"
                          fill={isActive ? "var(--accent)" : isPast ? "var(--accent-secondary)" : "var(--surface-border-strong)"}
                        />
                        {/* year label */}
                        <text
                          x={pt.x}
                          y={pt.y > 50 ? pt.y + 26 : pt.y - 20}
                          textAnchor="middle"
                          className="timeline-node-label"
                          fill={isActive ? "var(--accent)" : "var(--text-soft)"}
                        >
                          {experiences[i].year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* card stack */}
              <div className="timeline-card-stage">
                {experiences.map((exp, index) => (
                  <article
                    key={exp.id}
                    className={`timeline-card ${index === activeIndex ? "is-active" : index < activeIndex ? "is-past" : "is-future"}`}
                  >
                    <CardContent exp={exp} />
                  </article>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CardContent({ exp }) {
  return (
    <>
      <div className="timeline-card-strip" />
      <div className="timeline-card-body">
        <div className="timeline-card-top">
          <div className="timeline-card-meta">
            <img src={exp.img} alt={exp.company} className="timeline-logo" loading="lazy" />
            <div>
              <p className="timeline-card-company-name">{exp.company}</p>
              <p className="timeline-card-location">{exp.location}</p>
            </div>
          </div>
          <span className="timeline-card-period">{exp.period}</span>
        </div>

        <div className="timeline-card-role-wrap">
          <span className="timeline-card-year-ghost">{exp.year}</span>
          <h3 className="timeline-card-role">{exp.role}</h3>
        </div>

        <p className="timeline-card-description">{exp.description}</p>

        <div className="timeline-card-skills">
          {exp.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </>
  );
}
