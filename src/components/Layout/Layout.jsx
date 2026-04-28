import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import "./layout.css";
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Certificates from "../../pages/Certificates/Certificates";
import Contact from "../../pages/Contact/Contact";
import ExperienceTimeline from "../ExperienceTimeline/ExperienceTimeline";
import { portfolioData } from "../../data/portfolio";
import { useTheme } from "../../hooks/useTheme";

const sectionComponentMap = {
  hero: Hero,
  about: About,
  experience: ExperienceTimeline,
  projects: Projects,
  certificates: Certificates,
  contact: Contact,
};

const sectionItems = portfolioData.sections
  .map((id) => ({ id, component: sectionComponentMap[id] }))
  .filter((item) => item.component);

const Layout = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

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

  return (
    <div className="site-layout">
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
        <Menu activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      </div>
    </div>
  );
};

export default Layout;
