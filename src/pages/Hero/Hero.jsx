import React from "react";
import "./hero.css";

import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

const Hero = () => {
  return (
    <section className="hero-container container">
      <div className="hero-left">
        <div className="hero-profile">
          <img src="./hero.png" alt="hero" />
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Htet Lin Ko</span>.
          </h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "A Web Frontend Developer.",
              1000,
              "I build beautiful user interfaces.",
              1000,
              "I turn designs into functional code.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="animation-type"
            repeat={Infinity}
          />

          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
