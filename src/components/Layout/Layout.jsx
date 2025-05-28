import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import "./layout.css";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Certificates from "../../pages/Certificates/Certificates";
import Contact from "../../pages/Contact/Contact";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "certificates", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="layout">
      <div>
        {/* <Outlet /> */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="menu-lists">
        <Menu activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Layout;
