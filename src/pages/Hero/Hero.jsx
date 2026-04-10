import { useEffect, useId, useRef } from "react";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import "./hero.css";

const HERO_CONTENT = {
  badge: "Senior Frontend Developer · Better HR",
  name: "Htet Lin Ko",
  headline: "I craft thoughtful web experiences that turn complexity into clarity.",
  subtext:
    "4+ years building production-grade interfaces with React, Vue, Nuxt, and TypeScript from concept to release.",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "Download CV",
  availability: "Open to impactful frontend roles and collaborations",
};

const techPills = ["React", "TypeScript", "Vue", "Nuxt", "Design Systems"];
const HERO_RING_TEXT = "HTET LIN KO • SENIOR FRONTEND DEVELOPER • PRODUCT-FOCUSED FRONTEND ENGINEER • ";

const Hero = () => {
  const heroRef = useRef(null);
  const ringPathId = useId();

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
          <p className="hero-badge">{HERO_CONTENT.badge}</p>
          <p className="hero-name">{HERO_CONTENT.name}</p>
          <h1 className="hero-title">{HERO_CONTENT.headline}</h1>
          <p className="hero-subtext">{HERO_CONTENT.subtext}</p>

          <div className="hero-actions" data-animate>
            <a href="#projects" className="hero-btn hero-btn-primary">
              {HERO_CONTENT.ctaPrimary}
            </a>
            <DownloadButton label={HERO_CONTENT.ctaSecondary} className="hero-download-btn" />
          </div>

          <div className="hero-pills" aria-label="Core stack" data-animate>
            {techPills.map((item) => (
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
                <textPath href={`#${ringPathId}`}>{HERO_RING_TEXT.repeat(2)}</textPath>
              </text>
            </svg>
            <figure className="hero-portrait-frame">
              <img src="/hero-portrait.webp" alt="Portrait of Htet Lin Ko" className="hero-portrait" loading="eager" />
            </figure>
          </div>

          <p className="hero-availability">{HERO_CONTENT.availability}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
