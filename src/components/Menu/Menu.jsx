import { portfolioData } from "../../data/portfolio";
import "./menu.css";

const iconMap = {
  home: HomeIcon,
  user: UserIcon,
  timeline: TimelineIcon,
  code: CodeIcon,
  badge: BadgeIcon,
  mail: MailIcon,
};

const Menu = ({ activeSection, theme, onThemeToggle }) => {
  const { items } = portfolioData.navigation;
  const themeToggleLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const themeLabel = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <div className="menu-cluster">
      <div className="menu-cluster-main">
        <nav className="menu-cluster-nav" aria-label="Section navigation">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? HomeIcon;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`menu-cluster-item ${activeSection === item.id ? "is-active" : ""}`}
                aria-label={item.label}
              >
                <span className="menu-cluster-item-icon">
                  <Icon />
                </span>
                <span className="menu-cluster-item-label">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="menu-cluster-divider" aria-hidden="true" />

        <button
          type="button"
          className="menu-cluster-item menu-cluster-theme-toggle"
          onClick={onThemeToggle}
          aria-label={themeToggleLabel}
        >
          <span className="menu-cluster-item-icon">{theme === "dark" ? <SunIcon /> : <MoonIcon />}</span>
          <span className="menu-cluster-item-label">{themeLabel}</span>
        </button>
      </div>
    </div>
  );
};

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

export default Menu;
