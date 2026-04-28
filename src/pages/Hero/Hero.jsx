import { useEffect, useId, useRef } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../../data/portfolio";
import "./hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const ringPathId = useId();
  const hero = portfolioData.hero;

  useEffect(() => {
    const section = heroRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId = null;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));

      section.style.setProperty("--hero-shift-a", `${progress * -26}px`);
      section.style.setProperty("--hero-shift-b", `${progress * -14}px`);
      section.style.setProperty("--hero-shift-c", `${progress * -8}px`);
    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateParallax();
        rafId = null;
      });
    };

    updateParallax();
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

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-orb hero-orb-left" />
        <span className="hero-orb hero-orb-right" />
      </div>

      <div className="hero-layout container">
        <div className="hero-copy" data-animate>
          <p className="hero-badge">{hero.badge}</p>
          <h1 className="hero-name-heading" aria-label={`${hero.name} – ${hero.headline}`}>
            <span className="hero-name">{hero.name}</span>
            <span className="hero-title">{hero.headline}</span>
          </h1>
          <p className="hero-subtext">{hero.summary}</p>

          <div className="hero-actions" data-animate>
            <a href={hero.primaryCta.href} className="hero-btn hero-btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="hero-btn hero-btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="hero-pills" aria-label="Core stack" data-animate>
            {hero.stack.map((item) => (
              <span key={item} className="hero-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-animate>
          <div className="hero-portrait-shell">
            <span className="hero-portrait-halo" aria-hidden="true" />
            <svg className="hero-rotating-ring" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path id={ringPathId} d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
              </defs>
              <text>
                <textPath href={`#${ringPathId}`}>{hero.ringText.repeat(2)}</textPath>
              </text>
            </svg>
            <figure className="hero-portrait-frame">
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                className="hero-portrait"
                width="1024"
                height="1024"
                loading="eager"
                fetchPriority="high"
              />
            </figure>
          </div>

          <p className="hero-availability">{hero.availability}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
