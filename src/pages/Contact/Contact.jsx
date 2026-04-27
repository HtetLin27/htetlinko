import { portfolioData } from "../../data/portfolio";
import "./contact.css";

export default function Contact() {
  const { header, cta, details, socials } = portfolioData.contact;
  const email = details.find((d) => d.label === "Email")?.value;
  const linkedin = socials.find((s) => s.name === "linkedin");

  return (
    <section className="contact-section">
      <div className="contact-container container">

        {/* ── Eyebrow ── */}
        <p className="contact-eyebrow" data-animate>{header.kicker}</p>

        {/* ── Big display heading ── */}
        <h2 className="contact-title" data-animate>{header.heading}</h2>

        {/* ── Large email CTA ── */}
        <a href={`mailto:${email}`} className="contact-email-cta" data-animate>
          <span className="contact-email-text">{email}</span>
          <span className="contact-email-arrow" aria-hidden="true">↗</span>
        </a>

        <div className="contact-divider" data-animate />

        {/* ── Detail rows — no card, just ruled lines ── */}
        <ul className="contact-detail-list" data-animate>
          {details.filter((d) => d.label !== "Email").map((detail) => (
            <li key={detail.label} className="contact-detail-item">
              <span className="contact-detail-key">{detail.label}</span>
              <span className="contact-detail-val">{detail.value}</span>
            </li>
          ))}
        </ul>

        <div className="contact-divider" data-animate />

        {/* ── Availability + socials ── */}
        <div className="contact-bottom" data-animate>
          <span className="contact-available-badge">
            <span className="contact-available-dot" />
            {cta.availability}
          </span>

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
                {social.label}
              </a>
            ))}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-linkedin-btn"
              >
                <LinkedInIcon />
                {cta.linkedinLabel}
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 116.5 4a1.8 1.8 0 010 3.7zM20 19h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7C19.3 8.7 20 10.7 20 13.3V19z" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M12 .6C5.7.6.6 5.8.6 12.2c0 5.1 3.3 9.4 7.8 10.9c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.8-1.4-3.8-1.4c-.5-1.2-1.2-1.5-1.2-1.5c-1-.7.1-.7.1-.7c1.1.1 1.7 1.1 1.7 1.1c1 .1 2.6 1.8 3.4 1.3c.1-.7.4-1.1.7-1.4c-2.5-.3-5.2-1.3-5.2-5.8c0-1.3.5-2.3 1.2-3.2c-.1-.3-.5-1.5.1-3c0 0 1-.3 3.3 1.2a11 11 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.5.3 2.7.1 3c.8.9 1.2 1.9 1.2 3.2c0 4.5-2.7 5.5-5.2 5.8c.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6c4.5-1.5 7.8-5.8 7.8-10.9C23.4 5.8 18.3.6 12 .6z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 116.5 4a1.8 1.8 0 010 3.7zM20 19h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7C19.3 8.7 20 10.7 20 13.3V19z" />
    </svg>
  );
}
