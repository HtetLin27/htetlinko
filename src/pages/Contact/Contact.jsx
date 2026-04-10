import { useState } from "react";
import "./contact.css";

const socials = [
  { name: "github", url: "https://github.com/HtetLin27" },
  { name: "linkedin", url: "https://www.linkedin.com/in/htet-lin-ko-411b02204/" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "htetlinko.dev@gmail.com";
    const subject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-wrap container">
      <header className="contact-header" data-animate>
        <p className="section-kicker">Contact</p>
        <h2 className="section-heading">Let&apos;s build something valuable together.</h2>
        <p className="section-copy">
          Open to new opportunities, freelance collaborations, and frontend engineering discussions.
        </p>
      </header>

      <div className="contact-grid">
        <article className="contact-info glass-card" data-animate>
          <h3>Get in touch</h3>

          <ul className="contact-details">
            <li>
              <span>Location</span>
              <p>Yangon, Myanmar</p>
            </li>
            <li>
              <span>Email</span>
              <p>htetlinko.dev@gmail.com</p>
            </li>
            <li>
              <span>Education</span>
              <p>Technological University</p>
            </li>
            <li>
              <span>Languages</span>
              <p>Myanmar, English</p>
            </li>
          </ul>

          <div className="contact-socials">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label={social.name}
                data-stagger-item
                style={{ "--stagger-index": index }}
              >
                <SocialIcon name={social.name} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="contact-form-box glass-card" data-animate>
          <h3>Send a message</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project discussion"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                rows={6}
                required
              />
            </label>

            <button type="submit" className="contact-submit-btn">
              Send Message
              <SendIcon />
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5L21 3l-8.5 18l-1.6-7.9L3 11.5z" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 .6C5.7.6.6 5.8.6 12.2c0 5.1 3.3 9.4 7.8 10.9c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.8-1.4-3.8-1.4c-.5-1.2-1.2-1.5-1.2-1.5c-1-.7.1-.7.1-.7c1.1.1 1.7 1.1 1.7 1.1c1 .1 2.6 1.8 3.4 1.3c.1-.7.4-1.1.7-1.4c-2.5-.3-5.2-1.3-5.2-5.8c0-1.3.5-2.3 1.2-3.2c-.1-.3-.5-1.5.1-3c0 0 1-.3 3.3 1.2a11 11 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.5.3 2.7.1 3c.8.9 1.2 1.9 1.2 3.2c0 4.5-2.7 5.5-5.2 5.8c.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6c4.5-1.5 7.8-5.8 7.8-10.9C23.4 5.8 18.3.6 12 .6z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 116.5 4a1.8 1.8 0 010 3.7zM20 19h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7C19.3 8.7 20 10.7 20 13.3V19z" />
    </svg>
  );
}
