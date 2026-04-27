import { portfolioData } from "../../data/portfolio";
import "./contact.css";

export default function Contact() {
  const { header, cta, details, socials } = portfolioData.contact;

  return (
    <section className="contact-wrap container">
      <header className="contact-header" data-animate>
        <p className="section-kicker">{header.kicker}</p>
        <h2 className="section-heading">{header.heading}</h2>
        <p className="section-copy">{header.copy}</p>
      </header>

      <div className="contact-grid">
        {/* ── Left: CTA ── */}
        <div className="contact-cta" data-animate>
          <span className="contact-available-badge">
            <span className="contact-available-dot" />
            {cta.availability}
          </span>

          <p className="contact-cta-sub">
            The best way to reach me is directly — pick what works for you.
          </p>

          <div className="contact-actions">
            <a
              href={socials.find(s => s.name === "linkedin")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn--primary"
            >
              <LinkedInIcon />
              {cta.linkedinLabel}
            </a>
          </div>

          <div className="contact-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-chip"
                aria-label={social.label}
              >
                <SocialIcon name={social.name} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: details ── */}
        <div className="contact-details-panel glass-card" data-animate>
          <p className="contact-details-label">Contact details</p>
          <ul className="contact-detail-list">
            {details.map((detail) => (
              <li key={detail.label} className="contact-detail-item">
                <span className="contact-detail-label">{detail.label}</span>
                <span className="contact-detail-value">{detail.value}</span>
              </li>
            ))}
          </ul>

          <div className="contact-map-placeholder" aria-hidden="true">
            <span>Yangon, Myanmar</span>
            <MapDotIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 116.5 4a1.8 1.8 0 010 3.7zM20 19h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7C19.3 8.7 20 10.7 20 13.3V19z" />
    </svg>
  );
}

function MapDotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M12 .6C5.7.6.6 5.8.6 12.2c0 5.1 3.3 9.4 7.8 10.9c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.8-1.4-3.8-1.4c-.5-1.2-1.2-1.5-1.2-1.5c-1-.7.1-.7.1-.7c1.1.1 1.7 1.1 1.7 1.1c1 .1 2.6 1.8 3.4 1.3c.1-.7.4-1.1.7-1.4c-2.5-.3-5.2-1.3-5.2-5.8c0-1.3.5-2.3 1.2-3.2c-.1-.3-.5-1.5.1-3c0 0 1-.3 3.3 1.2a11 11 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.5.3 2.7.1 3c.8.9 1.2 1.9 1.2 3.2c0 4.5-2.7 5.5-5.2 5.8c.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6c4.5-1.5 7.8-5.8 7.8-10.9C23.4 5.8 18.3.6 12 .6z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 116.5 4a1.8 1.8 0 010 3.7zM20 19h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7C19.3 8.7 20 10.7 20 13.3V19z" />
    </svg>
  );
}
