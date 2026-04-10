import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import "./layout.css";
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Certificates from "../../pages/Certificates/Certificates";
import Contact from "../../pages/Contact/Contact";
import ExperienceTimeline from "../ExperienceTimeline/ExperienceTimeline";

const sectionItems = [
  { id: "hero", component: Hero },
  { id: "about", component: About },
  { id: "experience", component: ExperienceTimeline },
  { id: "projects", component: Projects },
  { id: "certificates", component: Certificates },
  { id: "contact", component: Contact },
];

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const Layout = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sectionItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        if (window.scrollY >= element.offsetTop - window.innerHeight * 0.3) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-animate], [data-stagger-item]");

    if (!animatedElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    animatedElements.forEach((element) => {
      if (!element.classList.contains("in-view")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((previousTheme) => {
      const nextTheme = previousTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  return (
    <div className="site-layout">
      <button
        type="button"
        className="layout-theme-toggle"
        onClick={handleThemeToggle}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <main>
        {sectionItems.map((section) => {
          const SectionComponent = section.component;

          return (
            <section key={section.id} id={section.id} className="page-section">
              <SectionComponent />
            </section>
          );
        })}
      </main>

      <div className="menu-lists">
        <Menu activeSection={activeSection} />
      </div>
    </div>
  );
};

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M4.5 12h3" />
      <path d="M16.5 12h3" />
      <path d="M5.8 5.8l2.2 2.2" />
      <path d="M16 16l2.2 2.2" />
      <path d="M5.8 18.2L8 16" />
      <path d="M16 8l2.2-2.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M20 14.2A8.3 8.3 0 119.8 4A6.7 6.7 0 0020 14.2z" />
    </svg>
  );
}

export default Layout;
