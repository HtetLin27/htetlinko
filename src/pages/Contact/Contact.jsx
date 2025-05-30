"use client"

import { useState } from "react"
import "./contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            CONTACT <span className="contact-title-accent">ME</span>
          </h1>
        </div>

        <div className="contact-content">
          {/* Contact Info Panel */}
          <div className="contact-info-panel">
            <h2 className="contact-info-title">CONTACT ME HERE</h2>
            <p className="contact-info-description">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind, want to
              discuss potential partnerships, or simply want to connect, I'd love to hear from you. Feel free to reach
              out through any of the contact methods below.
            </p>

            <ul className="contact-details">
              <li className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <MapIcon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-separator">:</span>
                  <span className="contact-detail-value">Yangon, Myanmar</span>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <MailIcon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-separator">:</span>
                  <span className="contact-detail-value">htetlinko.dev@gmail.com</span>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <GraduationIcon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Education</span>
                  <span className="contact-detail-separator">:</span>
                  <span className="contact-detail-value">Technological University</span>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <PhoneIcon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Mobile Number</span>
                  <span className="contact-detail-separator">:</span>
                  <span className="contact-detail-value">+959254351761</span>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <LanguagesIcon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Languages</span>
                  <span className="contact-detail-separator">:</span>
                  <span className="contact-detail-value">Myanmar, English</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="contact-socials">
              {[{name: "github",url:'https://github.com/HtetLin27' }, {name:"linkedin",url:"https://www.linkedin.com/in/htet-lin-ko-411b02204/"}].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.url}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  required
                  className="form-input"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="YOUR EMAIL"
                  required
                  className="form-input"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="ENTER SUBJECT"
                required
                className="form-input form-subject"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Messages"
                rows={6}
                required
                className="form-textarea"
              ></textarea>

              <button type="submit" className="form-submit-btn">
                Send Message
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Icon Components
function MapIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2L2 6.5l8 4.5 8-4.5L10 2zm0 7l-8 4.5V16l8 4.5 8-4.5v-4.5L10 9zm0 6.5a1.5 1.5 0 1 1-2.999-.001A1.5 1.5 0 0 1 10 15.5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v16h10V4H7z" />
    </svg>
  )
}

function LanguagesIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .89-.17 1.73-.46 2.49l1.48 1.48C19.79 14.14 20 13.1 20 12c0-4.42-3.58-8-8-8zm6.86 14.13l-1.41 1.41C15.63 19.44 13.87 20 12 20c-4.42 0-8-3.58-8-8 0-1.1.2-2.14.57-3.09l1.48 1.48C5.17 10.27 5 11.11 5 12c0 3.31 2.69 6 6 6 .89 0 1.73-.17 2.49-.46l1.48 1.48c.46.31.96.58 1.49.84zm-3.86-6.13A2 2 0 0 1 8 12c0-1.1.9-2 2-2h4a2 2 0 0 1-2 2z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case "facebook":
      return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12.07c0-5.5-4.48-9.97-9.98-9.97s-9.97 4.47-9.97 9.97c0 4.97 3.63 9.08 8.38 9.87v-6.99H7.9v-2.88h2.53v-2.19c0-2.5 1.49-3.88 3.78-3.88 1.1 0 2.24.19 2.24.19v2.46H15c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.88h-2.34v6.99c4.75-.79 8.38-4.9 8.38-9.87z" />
        </svg>
      )
    case "twitter":
      return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 5.8c-.8.44-1.66.74-2.57.88.93-.56 1.64-1.45 1.97-2.51-.86.51-1.8.89-2.8 1.09C17.3 4.54 16.18 4 15 4c-2.3 0-4.13 1.87-4.13 4.17 0 .33.03.66.09.97-3.43-.18-6.46-1.84-8.5-4.35-.36.62-.56 1.34-.56 2.11 0 1.45.7 2.73 1.77 3.48-.66-.02-1.27-.2-1.8-.5v.05c0 2.02 1.41 3.7 3.28 4.08-.34.09-.69.14-1.05.14-.26 0-.5-.02-.74-.06.51 1.6 2 2.77 3.76 2.8-1.38 1.08-3.1 1.72-4.98 1.72-.32 0-.62-.02-.92-.06 1.77 1.14 3.91 1.8 6.19 1.8 7.43 0 11.5-6.16 11.5-11.5 0-.17 0-.34-.01-.5.79-.57 1.48-1.29 2.02-2.1z" />
        </svg>
      )
    case "github":
      return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8 11.4.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3.1.8.1-.6.4-1.1.7-1.3-2.5-.3-5-1.3-5-5.8 0-1.2.5-2.2 1.1-3-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.2 1.1a11 11 0 0 1 5.8 0c2.2-1.4 3.2-1.1 3.2-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.8 1.1 3 0 4.5-2.5 5.6-5 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 8-6.1 8-11.4 0-6.6-5.4-12-12-12z" />
        </svg>
      )
    case "youtube":
      return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.8 8.1a2.91 2.91 0 0 0-2.1-2C17.2 6 12 6 12 6s-5.2 0-7.7.1a2.91 2.91 0 0 0-2.1 2C2 9.6 2 12 2 12s0 2.4.1 3.9a2.91 2.91 0 0 0 2.1 2C6.8 18 12 18 12 18s5.2 0 7.7-.1a2.91 2.91 0 0 0 2.1-2C22 14.4 22 12 22 12s0-2.4-.2-3.9zM9.8 15.1v-6l6.1 3-6.1 3z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.785-1.75-1.75 0-.965.783-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .965-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.062-1.868-3.062-1.868 0-2.154 1.459-2.154 2.968v5.698h-3v-10h2.885v1.366h.041c.402-.76 1.381-1.561 2.845-1.561 3.042 0 3.604 2.004 3.604 4.609v5.586z" />
        </svg>
      )
    default:
      return null
  }
}
