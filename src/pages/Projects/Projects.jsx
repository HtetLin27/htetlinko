import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../../data/portfolio";
import "./projects.css";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function Projects() {
  const sectionRef = useRef(null);
  const { kicker, heading, copy, labels, items } = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompact, setIsCompact] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 980px)").matches : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 980px)");

    const handleChange = (event) => {
      setIsCompact(event.matches);
    };

    setIsCompact(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (isCompact) {
      setActiveIndex(0);
      return undefined;
    }

    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    let rafId = null;

    const updateScrollState = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollDistance, 0, 1);
      const maxIndex = items.length - 1;
      const nextIndex = clamp(Math.round(progress * maxIndex), 0, maxIndex);
      setActiveIndex(nextIndex);

    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateScrollState();
        rafId = null;
      });
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isCompact, items.length]);

  const scrollSpan = `${Math.max(1, items.length - 1) * 100}svh`;

  return (
    <section ref={sectionRef} className="projects-narrative" style={{ "--projects-scroll-span": scrollSpan }}>
      <div className="projects-sticky">
        <div className="projects-wrap container">
          <header className="projects-header" data-animate>
            <p className="section-kicker">{kicker}</p>
            <h2 className="section-heading">{heading}</h2>
            <p className="section-copy">{copy}</p>
          </header>

          {isCompact ? (
            <div className="projects-mobile-list">
              {items.map((project, index) => (
                <article key={project.id} className="projects-card glass-card" data-stagger-item style={{ "--stagger-index": index }}>
                  <div className="projects-card-header-strip" />
                  <div className="projects-card-body">
                    <div className="projects-card-top">
                      <div className="projects-card-identity">
                        <span className="projects-card-index">
                          {labels.projectPrefix} {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="projects-card-category">{project.category}</span>
                      </div>
                      {project.privateProject ? <span className="projects-card-private">{labels.privateProject}</span> : null}
                    </div>

                    <h3>{project.name}</h3>
                    <p className="projects-card-summary">{project.summary}</p>

                    <div className="projects-card-role">
                      <span>{labels.role}</span>
                      <strong>{project.role}</strong>
                    </div>

                    <div className="projects-card-tech" aria-label={labels.techStackAria}>
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="projects-card-features">
                      <h4>{labels.keyFeatures}</h4>
                      <ul>
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="projects-stage">
              <aside className="projects-navigator glass-card" data-animate>
                {items.map((project, index) => {
                  const stateClass = index === activeIndex ? "is-active" : "";
                  return (
                    <div key={project.id} className={`projects-nav-item ${stateClass}`}>
                      <span className="projects-nav-num">{String(index + 1).padStart(2, "0")}</span>
                      <span className="projects-nav-name">{project.name}</span>
                      <span className="projects-nav-bar" />
                    </div>
                  );
                })}
              </aside>

              <div className="projects-spotlight">
                <div className="projects-card-stack">
                  {items.map((project, index) => {
                    const stateClass =
                      index === activeIndex ? "is-active" : index < activeIndex ? "is-prev" : "is-next";

                    return (
                      <article key={project.id} className={`projects-card glass-card ${stateClass}`}>
                        <div className="projects-card-header-strip" />
                        <div className="projects-card-body">
                          <div className="projects-card-top">
                            <div className="projects-card-identity">
                              <span className="projects-card-index">
                                {labels.projectPrefix} {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="projects-card-category">{project.category}</span>
                            </div>
                            {project.privateProject ? <span className="projects-card-private">{labels.privateProject}</span> : null}
                          </div>

                          <h3>{project.name}</h3>
                          <p className="projects-card-summary">{project.summary}</p>

                          <div className="projects-card-role">
                            <span>{labels.role}</span>
                            <strong>{project.role}</strong>
                          </div>

                          <div className="projects-card-tech" aria-label={labels.techStackAria}>
                            {project.tech.map((tech) => (
                              <span key={tech}>{tech}</span>
                            ))}
                          </div>

                          <div className="projects-card-features">
                            <h4>{labels.keyFeatures}</h4>
                            <ul>
                              {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <p className="projects-private-note">{labels.confidentialNote}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
