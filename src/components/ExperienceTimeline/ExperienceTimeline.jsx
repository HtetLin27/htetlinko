import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../../data/portfolio";
import "./ExperienceTimeline.css";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const experienceSection = portfolioData.experience;
const experiences = experienceSection.items;

const ExperienceTimeline = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const previousProgressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return undefined;
    }

    const isMobileQuery = window.matchMedia("(max-width: 1024px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = null;

    const updateTimelineScroll = () => {
      if (isMobileQuery.matches) {
        track.style.transform = "translate3d(0, 0, 0)";
        section.style.setProperty("--timeline-progress", "0");
        setActiveIndex(0);
        previousProgressRef.current = 0;
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollDistance, 0, 1);
      section.style.setProperty("--timeline-progress", progress.toFixed(4));

      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const maxIndex = experiences.length - 1;
      const nextIndex = clamp(Math.round(progress * maxIndex), 0, maxIndex);
      const translateUnit = maxIndex > 0 ? maxTranslate / maxIndex : 0;
      const translateX = nextIndex * translateUnit;
      track.style.transform = reducedMotionQuery.matches ? "translate3d(0, 0, 0)" : `translate3d(${-translateX}px, 0, 0)`;

      setActiveIndex(nextIndex);

      previousProgressRef.current = progress;
    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateTimelineScroll();
        rafId = null;
      });
    };

    updateTimelineScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollSpan = `${Math.max(1, experiences.length - 1) * 95}svh`;
  const activeExperience = experiences[activeIndex] ?? experiences[0];

  return (
    <section ref={sectionRef} className="timeline-section" style={{ "--timeline-scroll-span": scrollSpan }}>
      <div className="timeline-sticky">
        <div className="timeline-shell container">
          <header className="timeline-header" data-animate>
            <p className="timeline-eyebrow">{experienceSection.eyebrow}</p>
            <h2 className="timeline-title">{experienceSection.title}</h2>
            <p className="timeline-copy">{experienceSection.copy}</p>
          </header>

          <div className="timeline-stage">
            <div className="timeline-viewport" ref={viewportRef}>
              <div className="timeline-track" ref={trackRef}>
                {experiences.map((exp, index) => {
                  const panelState =
                    index === activeIndex ? "is-active" : index < activeIndex ? "is-past" : "is-future";

                  return (
                    <article key={exp.id} className={`timeline-panel ${panelState}`}>
                      <div className="timeline-panel-main">
                        <span className="timeline-panel-period">{exp.period}</span>

                        <div className="timeline-panel-role">
                          <img src={exp.img} alt={exp.company} className="timeline-logo" loading="lazy" />
                          <div>
                            <h3>{exp.role}</h3>
                            <p>
                              {exp.company} · {exp.location}
                            </p>
                          </div>
                        </div>

                        <p className="timeline-panel-description">{exp.description}</p>
                      </div>

                      <aside className="timeline-panel-aside">
                        <span className="timeline-panel-year" aria-hidden="true">
                          {exp.year}
                        </span>
                        <div className="timeline-panel-skills">
                          {exp.skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </aside>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="timeline-navigation" data-animate>
              <div className="timeline-navigation-top">
                {/* <p className={`timeline-direction is-${direction}`}>
                  {direction === "down" ? experienceSection.directionLabel.down : experienceSection.directionLabel.up}
                </p> */}
                <p className="timeline-active-label">
                  {activeIndex + 1} / {experiences.length} · {activeExperience.role}
                </p>
              </div>

              <ol className="timeline-steps" style={{ "--timeline-steps-count": experiences.length }}>
                {experiences.map((item, index) => {
                  const stepState =
                    index === activeIndex ? "is-active" : index < activeIndex ? "is-past" : "is-future";

                  return (
                    <li key={item.id} className={`timeline-step ${stepState}`}>
                      <span className="timeline-step-dot" />
                      <span className="timeline-step-label">{item.period}</span>
                      <span className="timeline-step-role">{item.role}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
