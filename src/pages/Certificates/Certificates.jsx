import "./certificates.css";
const certificates = [
  {
    id: 1,
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2025",
    imageUrl: "/src/assets/images/certificates/legacy-js.png",
  },
  {
    id: 2,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Jun 2024",
    imageUrl: "/src/assets/images/certificates/Introduction-to-frontend.jpeg", // Using the same image for demo
  },
  {
    id: 3,
    title: "Version Control",
    issuer: "Meta",
    date: "Jul 2024",
    imageUrl: "/src/assets/images/certificates/meta-version-control.jpeg", // Using the same image for demo
  },
  {
    id: 4,
    title: "Programming with JavaScript ",
    issuer: "Meta",
    date: "Jul 2024",
    imageUrl: "/src/assets/images/certificates/meta-programing-js.jpeg", // Using the same image for demo
  },
  {
    id: 5,
    title: "HTML and CSS in depth ",
    issuer: "Meta",
    date: "Aug 2024",
    imageUrl: "/src/assets/images/certificates/meta-html-css-depth.jpeg", // Using the same image for demo
  },
  {
    id: 6,
    title: "React Basics ",
    issuer: "Meta",
    date: "Sep 2024",
    imageUrl: "/src/assets/images/certificates/meta-react.jpeg", // Using the same image for demo
  },
  {
    id: 7,
    title: "Tailwind CSS 3 Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/tailwindcss.jpeg", // Using the same image for demo
  },
  {
    id: 8,
    title: "React: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/react-create-hosting.jpeg", // Using the same image for demo
  },
  {
    id: 9,
    title: "React: Building Styles with CSS Modules",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/react-css-module.jpeg", // Using the same image for demo
  },
  {
    id: 10,
    title: "React.js: Building an Interface",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/react-building-interface.jpeg", // Using the same image for demo
  },
   {
    id: 11,
    title: "React.js Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/react-essential.jpeg", // Using the same image for demo
  },
   {
    id: 12,
    title: "CSS Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/css-essential.jpeg", // Using the same image for demo
  },
  {
    id: 13,
    title: "Building Modern UIs with React Router v6",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: "/src/assets/images/certificates/react-router.jpeg", // Using the same image for demo
  },
  {
    id: 14,
    title: "Node.js Essential Training",
    issuer: "LinkedIn",
    date: "Nov 2024",
    imageUrl: "/src/assets/images/certificates/nodejs-essential.jpeg", // Using the same image for demo
  },
  {
    id: 15,
    title: "Express Essentials: Build Powerful Web Apps with Node.js",
    issuer: "LinkedIn",
    date: "Nov 2024",
    imageUrl: "/src/assets/images/certificates/express-essential.jpeg", // Using the same image for demo
  },
];

export default function Certificates() {
  return (
    <section className="certificates-section container">
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
