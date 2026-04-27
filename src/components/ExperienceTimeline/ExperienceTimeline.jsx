import { useEffect, useRef } from "react";
import { portfolioData } from "../../data/portfolio";
import "./ExperienceTimeline.css";

const { eyebrow, title, copy, items } = portfolioData.experience;

export default function ExperienceTimeline() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Skip on mobile — vertical layout
    if (window.innerWidth < 768) return;

    let rafId;
    let current = 0;
    let target = 0;

    const onScroll = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;

      const { top, height } = outer.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / scrollable));

      const maxTranslate = track.scrollWidth - window.innerWidth;
      target = progress * Math.max(0, maxTranslate);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const tick = () => {
      // Lerp for smooth inertia feel
      current += (target - current) * 0.085;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${current}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);
    onScroll(); // sync on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="exp-outer" ref={outerRef}>
      <div className="exp-sticky">
        {/* Header — stays pinned at top */}
        <header className="exp-header container" data-animate>
          <p className="exp-eyebrow">{eyebrow}</p>
          <h2 className="exp-title">{title}</h2>
          <p className="exp-copy">{copy}</p>
          <p className="exp-hint" aria-hidden="true">Scroll to explore →</p>
        </header>

        {/* Horizontal track */}
        <div className="exp-track-wrapper">
          <div className="exp-track" ref={trackRef}>
            {/* Lead spacer aligns first card with container gutter */}
            <div className="exp-track-lead" aria-hidden="true" />

            {items.map((item, i) => {
              const isCurrent = i === 0;
              return (
                <article
                  key={item.id}
                  className={`exp-card glass-card${isCurrent ? " exp-card--current" : ""}`}
                >
                  {isCurrent && <div className="exp-card-strip" aria-hidden="true" />}

                  <div className="exp-card-inner">
                    {/* Chapter label */}
                    <div className="exp-card-meta">
                      <span className="exp-chapter-num">{item.chapterNum}</span>
                      <span className="exp-chapter-sep" aria-hidden="true">/</span>
                      <span className="exp-chapter-label">{item.chapterLabel}</span>
                      {isCurrent && <span className="exp-badge">Current</span>}
                    </div>

                    {/* Role + company */}
                    <div className="exp-role-block">
                      <h3 className="exp-role">{item.role}</h3>
                      <p className="exp-company">
                        <span className="exp-company-name">{item.company}</span>
                        <span className="exp-sep" aria-hidden="true">·</span>
                        {item.location}
                      </p>
                      <span className="exp-period">{item.period}</span>
                    </div>

                    {/* Core message */}
                    <p className="exp-core-msg">{item.coreMessage}</p>

                    {/* Bullets */}
                    <ul className="exp-bullets">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    {/* Stack chips */}
                    <ul className="exp-stack" aria-label="Technologies used">
                      {item.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}

            {/* Tail spacer */}
            <div className="exp-track-tail" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="exp-progress-bar" aria-hidden="true">
          <div className="exp-progress-fill" ref={progressRef} />
        </div>
      </div>
    </div>
  );
}
