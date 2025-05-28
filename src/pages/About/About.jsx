import React from "react";
import "./about.css";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";

// Helper function to convert a number to its word representation
const numberToWords = (num) => {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    // You can extend this array for larger numbers if needed
  ];

  if (num >= 0 && num < words.length) {
    return words[num];
  } else {
    // Fallback: return the number as a string if it's outside our defined range
    return num.toString();
  }
};

const About = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();

  // This calculates the number of full years passed since the startYear + 1
  // In 2025, this would be (2025 - 2022) + 1 = 3 + 1 = 4
  const experienceYearsCalculated = currentYear - startYear + 1;

  return (
    <section className="about-container-main container">
      <div class="main-title">
        <h2>
          About <span>me</span>
          <span class="bg-text">my stats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="about-left">
          <h4>Information About Me</h4>
          <p>
            I am a results-oriented Senior Web Frontend Developer with nearly{" "}
            {numberToWords(experienceYearsCalculated)}{" "}
            {/* Use the helper function here */}
            years of hands-on experience in building robust applications using
            modern frontend technologies like React.js, Vue.js, and Nuxt.js. My
            expertise spans across designing and implementing scalable user
            interfaces, collaborating within cross-functional teams, and
            delivering high-quality software that enhances customer
            satisfaction.
          </p>
          <p>
            Throughout my career, I have demonstrated a strong track record in
            leading frontend projects, mentoring junior developers, and
            optimizing web performance. I am skilled in translating complex
            Figma designs into smooth, responsive UI and integrating advanced
            APIs for real-time data interaction. Currently, I am employed as a
            Senior Web Frontend Developer at Better HR Company, where I continue
            to contribute to innovative web experiences.
          </p>
          <DownloadButton />
        </div>
        {/* <div className="about-right">
          <div className="experience-year">
            <h4>{experienceYears}+</h4>
            <div className="experience-text">
              Years Of <br />
              Experience
            </div>
          </div>
          <div></div>
        </div> */}
      </div>
      <ExperienceTimeline />
    </section>
  );
};

export default About;
