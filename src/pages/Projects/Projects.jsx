import { useEffect, useRef } from "react";
import { portfolioData } from "../../data/portfolio";
import "./projects.css";

const { kicker, heading, copy, labels, items } = portfolioData.projects;

const heroProject  = items.find((p) => p.hero);
const supporting   = items.filter((p) => p.featured && !p.hero);
const archiveItems = items.filter((p) => !p.hero && !p.featured);

function useReveal(ref) {
  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]");
    if (!els?.length) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

export default function Projects() {
  const outerRef   = useRef(null);
  const archiveRef = useRef(null);

  useReveal(outerRef);
  useReveal(archiveRef);

  return (
    <div className="proj-outer container" ref={outerRef}>
      {/* Header */}
      <header className="proj-header" data-animate>
        <p className="proj-eyebrow">{kicker}</p>
        <h2 className="proj-title">{heading}</h2>
        <p className="proj-copy">{copy}</p>
      </header>

      {/* ── Hero project ── */}
      {heroProject && (
        <article className="proj-hero-card glass-card" data-reveal style={{ "--ri": 0 }}>
          <div className="proj-hero-strip" aria-hidden="true" />
          <div className="proj-hero-inner">
            {/* Top meta */}
            <div className="proj-meta">
              <span className="proj-category">{heroProject.category}</span>
              {heroProject.privateProject && (
                <span className="proj-badge">{labels.privateProject}</span>
              )}
              <span className="proj-featured-label">Featured Case Study</span>
            </div>

            {/* Title + summary */}
            <h3 className="proj-name">{heroProject.name}</h3>
            <p className="proj-summary">{heroProject.summary}</p>

            {/* Content grid */}
            <div className="proj-hero-grid">
              <div className="proj-blocks">
                {heroProject.problem && <Block label="Problem" text={heroProject.problem} />}
                {heroProject.built && <Block label="What I Built" text={heroProject.built} />}
                {heroProject.decisions && <Block label="Technical Decisions" text={heroProject.decisions} />}
                {heroProject.impact && <Block label="Impact" text={heroProject.impact} />}
              </div>

              {heroProject.pipeline && (
                <aside className="proj-pipeline-panel" aria-label="Hiring pipeline">
                  <p className="proj-panel-label">Hiring Pipeline</p>
                  <ol className="proj-pipeline">
                    {heroProject.pipeline.map((step, i) => (
                      <li key={step} className="proj-pipeline-step">
                        <span className="proj-step-num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="proj-step-name">{step}</span>
                      </li>
                    ))}
                  </ol>
                </aside>
              )}
            </div>

            {/* Footer */}
            <div className="proj-footer">
              <span className="proj-role">
                <span className="proj-role-label">{labels.role}</span>
                {heroProject.role}
              </span>
              <TechList items={heroProject.tech} label={labels.techStackAria} />
            </div>

            {heroProject.privateProject && (
              <p className="proj-conf-note">{labels.confidentialNote}</p>
            )}
          </div>
        </article>
      )}

      {/* ── Supporting projects ── */}
      <div className="proj-supporting-grid">
        {supporting.map((project, i) => (
          <article
            key={project.id}
            className="proj-support-card glass-card"
            data-reveal
            style={{ "--ri": i + 1 }}
          >
            <div className="proj-hero-strip" aria-hidden="true" />
            <div className="proj-support-inner">
              <div className="proj-meta">
                <span className="proj-category">{project.category}</span>
                {project.privateProject && (
                  <span className="proj-badge">{labels.privateProject}</span>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-source-link"
                  >
                    {labels.sourceCode} ↗
                  </a>
                )}
              </div>

              <h3 className="proj-support-name">{project.name}</h3>
              <p className="proj-support-summary">{project.summary}</p>

              <div className="proj-mini-blocks">
                {project.problem && <MiniBlock label="Problem" text={project.problem} />}
                {project.built && <MiniBlock label="Built" text={project.built} />}
                {project.impact && <MiniBlock label="Impact" text={project.impact} />}
              </div>

              {project.flow && (
                <div className="proj-flow-panel" aria-label="Content flow">
                  {project.flow.map((step, idx) => (
                    <span key={step} className="proj-flow-step">
                      {step}
                      {idx < project.flow.length - 1 && (
                        <span className="proj-flow-arrow" aria-hidden="true">→</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {project.debugPanel && (
                <div className="proj-debug-panel" aria-label="API debugger">
                  <div className="proj-debug-bar">
                    <span className="proj-debug-method">{project.debugPanel.method}</span>
                    <span className="proj-debug-url">{project.debugPanel.url}</span>
                  </div>
                  <div className="proj-debug-response">
                    <span className="proj-debug-status">{project.debugPanel.status}</span>
                    <span className="proj-debug-ms">{project.debugPanel.ms}</span>
                  </div>
                  <div className="proj-debug-body">
                    <span className="proj-debug-key">&quot;data&quot;</span>
                    <span className="proj-debug-colon">:</span>
                    <span className="proj-debug-value">{"{ … }"}</span>
                  </div>
                </div>
              )}

              <div className="proj-footer">
                <span className="proj-role">
                  <span className="proj-role-label">{labels.role}</span>
                  {project.role}
                </span>
                <TechList items={project.tech} label={labels.techStackAria} />
              </div>

              {project.privateProject && (
                <p className="proj-conf-note">{labels.confidentialNote}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ── Archive ── */}
      <section ref={archiveRef} className="proj-archive" aria-label={labels.archiveLabel}>
        <p className="proj-archive-label" data-reveal style={{ "--ri": 0 }}>
          {labels.archiveLabel}
        </p>
        <div className="proj-archive-list">
          {archiveItems.map((project, i) => (
            <div
              key={project.id}
              className="proj-archive-row"
              data-reveal
              style={{ "--ri": i + 1 }}
            >
              <div className="proj-archive-left">
                <span className="proj-archive-category">{project.category}</span>
                <h4 className="proj-archive-name">{project.name}</h4>
                <p className="proj-archive-summary">{project.summary}</p>
              </div>
              <div className="proj-archive-right">
                <span className="proj-archive-tech">{project.tech.join(" · ")}</span>
                <span className="proj-archive-role">{project.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Block({ label, text }) {
  if (!text) return null;
  return (
    <div className="proj-block">
      <p className="proj-block-label">{label}</p>
      <p className="proj-block-text">{text}</p>
    </div>
  );
}

function MiniBlock({ label, text }) {
  if (!text) return null;
  return (
    <div className="proj-mini-block">
      <span className="proj-mini-label">{label} — </span>
      <span className="proj-mini-text">{text}</span>
    </div>
  );
}

function TechList({ items: techs, label }) {
  return (
    <ul className="proj-tech-list" aria-label={label}>
      {techs.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
