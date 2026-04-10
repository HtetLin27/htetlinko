import { useState } from "react";
import "./menu.css";

const menuItems = [
  { id: "hero", label: "Home", icon: <HomeIcon /> },
  { id: "about", label: "About", icon: <UserIcon /> },
  { id: "experience", label: "Experience", icon: <TimelineIcon /> },
  { id: "projects", label: "Projects", icon: <CodeIcon /> },
  { id: "certificates", label: "Certificates", icon: <BadgeIcon /> },
  { id: "contact", label: "Contact", icon: <MailIcon /> },
];

const Menu = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu-wrapper">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`menu-panel ${isOpen ? "is-open" : ""}`}>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`menu-link ${activeSection === item.id ? "is-active" : ""}`}
            onClick={closeMenu}
            aria-label={item.label}
          >
            <span className="menu-link-icon">{item.icon}</span>
            <span className="menu-link-label">{item.label}</span>
          </a>
        ))}

      </nav>
    </div>
  );
};

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5.5 10.5V20h13V10.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19a7 7 0 0114 0" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M8 7l-5 5l5 5" />
      <path d="M16 7l5 5l-5 5" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M8 4h8l2 4l-2 4H8L6 8l2-4z" />
      <path d="M9 12l-1 8l4-2l4 2l-1-8" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4 6h16" />
      <path d="M4 12h8" />
      <path d="M4 18h16" />
      <circle cx="16" cy="12" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 8l9 6l9-6" />
    </svg>
  );
}

export default Menu;
