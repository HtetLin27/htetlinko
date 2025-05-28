import React, { useState } from "react";
import "./menu.css";

const Menu = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-wrapper">
      {/* Hamburger Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu Items */}
      <div className={`menus ${isOpen ? "show" : ""}`}>
        <a onClick={()=>setIsOpen(false)} href="#hero" className={activeSection === "hero" ? "active" : "icon"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z" />
          </svg>
        </a>
        <a onClick={()=>setIsOpen(false)} href="#about" className={activeSection === "about" ? "active" : "icon"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
          </svg>
        </a>
        <a onClick={()=>setIsOpen(false)} href="#projects" className={activeSection === "projects" ? "active" : "icon"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z" clipRule="evenodd" />
          </svg>
        </a>
        <a onClick={()=>setIsOpen(false)} href="#certificates" className={activeSection === "certificates" ? "active" : "icon"}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M19 11a3 3 0 0 1 2 5.236v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955A3 3 0 0 1 19 11m1-7a2 2 0 0 1 2 2v4a5 5 0 0 0-7 7v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 13H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m4-4H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993z"
            />
          </g>
        </svg>
        </a>
        <a onClick={()=>setIsOpen(false)} href="#contact" className={activeSection === "contact" ? "active" : "icon"}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-opacity="0"
            d="M12 15l-8 -5v8h16v-8l-8 5Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.8s"
              dur="0.5s"
              values="0;1"
            />
          </path>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="64"
              stroke-dashoffset="64"
              d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="64;0"
              />
            </path>
            <path
              stroke-dasharray="24"
              stroke-dashoffset="24"
              d="M3 8.5l9 5.5l9 -5.5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.6s"
                dur="0.2s"
                values="24;0"
              />
            </path>
          </g>
        </svg>
        </a>
      </div>
    </div>
  );
};

export default Menu;
