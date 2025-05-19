import "./certificates.css";
const certificates = [
  {
    id: 1,
    title: "Web Development Certification",
    issuer: "Frontend Masters",
    date: "May 2023",
    imageUrl: "/certificate1.jpg",
  },
  {
    id: 2,
    title: "React Advanced Concepts",
    issuer: "Udemy",
    date: "January 2023",
    imageUrl: "/certificate1.jpg", // Using the same image for demo
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    date: "October 2022",
    imageUrl: "/certificate1.jpg", // Using the same image for demo
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "July 2022",
    imageUrl: "/certificate1.jpg", // Using the same image for demo
  },
];

export default function Certificates() {
  return (
    <section className="certificates-section">
      <div className="section-container">
        <div className="section-header">
          <div className="header-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional achievements and qualifications
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-item">
              <div className="certificate-card">
                <div className="certificate-image-container">
                  <img
                    src={certificate.imageUrl || "/placeholder.svg"}
                    alt={certificate.title}
                    className="certificate-image"
                    loading="lazy"
                  />
                  <div className="certificate-overlay">
                    <div className="certificate-info">
                      <h3 className="certificate-title">{certificate.title}</h3>
                      <p className="certificate-issuer">{certificate.issuer}</p>
                      <p className="certificate-date">{certificate.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
