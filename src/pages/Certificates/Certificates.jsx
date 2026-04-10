import { useEffect, useMemo, useState } from "react";
import "./certificates.css";
import legacyJs from "../../assets/images/certificates/legacy-js.png";
import introFrontend from "../../assets/images/certificates/Introduction-to-frontend.jpeg";
import versionControl from "../../assets/images/certificates/meta-version-control.jpeg";
import programmingJs from "../../assets/images/certificates/meta-programing-js.jpeg";
import htmlCssDepth from "../../assets/images/certificates/meta-html-css-depth.jpeg";
import reactBasics from "../../assets/images/certificates/meta-react.jpeg";
import tailwind from "../../assets/images/certificates/tailwindcss.jpeg";
import reactHosting from "../../assets/images/certificates/react-create-hosting.jpeg";
import reactCssModule from "../../assets/images/certificates/react-css-module.jpeg";
import reactInterface from "../../assets/images/certificates/react-building-interface.jpeg";
import reactEssential from "../../assets/images/certificates/react-essential.jpeg";
import cssEssential from "../../assets/images/certificates/css-essential.jpeg";
import reactRouter from "../../assets/images/certificates/react-router.jpeg";
import nodeEssential from "../../assets/images/certificates/nodejs-essential.jpeg";
import expressEssential from "../../assets/images/certificates/express-essential.jpeg";

const PAGE_SIZE = 5;
const monthOrder = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const certificates = [
  {
    id: 1,
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2025",
    imageUrl: legacyJs,
  },
  {
    id: 2,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Jun 2024",
    imageUrl: introFrontend,
  },
  {
    id: 3,
    title: "Version Control",
    issuer: "Meta",
    date: "Jul 2024",
    imageUrl: versionControl,
  },
  {
    id: 4,
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "Jul 2024",
    imageUrl: programmingJs,
  },
  {
    id: 5,
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    date: "Aug 2024",
    imageUrl: htmlCssDepth,
  },
  {
    id: 6,
    title: "React Basics",
    issuer: "Meta",
    date: "Sep 2024",
    imageUrl: reactBasics,
  },
  {
    id: 7,
    title: "Tailwind CSS 3 Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: tailwind,
  },
  {
    id: 8,
    title: "React: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: reactHosting,
  },
  {
    id: 9,
    title: "React: Building Styles with CSS Modules",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: reactCssModule,
  },
  {
    id: 10,
    title: "React.js: Building an Interface",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: reactInterface,
  },
  {
    id: 11,
    title: "React.js Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: reactEssential,
  },
  {
    id: 12,
    title: "CSS Essential Training",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: cssEssential,
  },
  {
    id: 13,
    title: "Building Modern UIs with React Router v6",
    issuer: "LinkedIn",
    date: "Oct 2024",
    imageUrl: reactRouter,
  },
  {
    id: 14,
    title: "Node.js Essential Training",
    issuer: "LinkedIn",
    date: "Nov 2024",
    imageUrl: nodeEssential,
  },
  {
    id: 15,
    title: "Express Essentials: Build Powerful Web Apps with Node.js",
    issuer: "LinkedIn",
    date: "Nov 2024",
    imageUrl: expressEssential,
  },
];

const dateRank = (dateText) => {
  const [monthRaw, yearRaw] = dateText.split(" ");
  const month = monthOrder[monthRaw] ?? 0;
  const year = Number(yearRaw) || 0;
  return year * 12 + month;
};

export default function Certificates() {
  const sortedCertificates = useMemo(
    () => [...certificates].sort((a, b) => dateRank(b.date) - dateRank(a.date)),
    [],
  );

  const issuers = useMemo(
    () => ["All", ...Array.from(new Set(sortedCertificates.map((certificate) => certificate.issuer)))],
    [sortedCertificates],
  );

  const [issuerFilter, setIssuerFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCertificateId, setSelectedCertificateId] = useState(sortedCertificates[0]?.id ?? null);

  const filteredCertificates = useMemo(() => {
    if (issuerFilter === "All") {
      return sortedCertificates;
    }

    return sortedCertificates.filter((certificate) => certificate.issuer === issuerFilter);
  }, [sortedCertificates, issuerFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredCertificates.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [issuerFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (filteredCertificates.length === 0) {
      setSelectedCertificateId(null);
      return;
    }

    const hasSelected = filteredCertificates.some((certificate) => certificate.id === selectedCertificateId);
    if (hasSelected === false) {
      setSelectedCertificateId(filteredCertificates[0].id);
    }
  }, [filteredCertificates, selectedCertificateId]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleCertificates = filteredCertificates.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    if (visibleCertificates.length === 0) {
      return;
    }

    const isVisibleSelection = visibleCertificates.some((certificate) => certificate.id === selectedCertificateId);
    if (isVisibleSelection === false) {
      setSelectedCertificateId(visibleCertificates[0].id);
    }
  }, [currentPage, filteredCertificates, selectedCertificateId, visibleCertificates]);

  const selectedCertificate =
    filteredCertificates.find((certificate) => certificate.id === selectedCertificateId) || filteredCertificates[0];

  return (
    <section className="cert-showcase container">
      <header className="cert-showcase-header" data-animate>
        <p className="section-kicker">Credentials</p>
        <h2 className="section-heading">Certifications and Continuous Learning</h2>
        <p className="section-copy">
          Modern certificate showcase designed for scale. New certificates can be added without creating a long,
          overwhelming scroll.
        </p>
      </header>

      <div className="cert-showcase-toolbar glass-card" data-animate>
        <div className="cert-chip-group">
          {issuers.map((issuer) => (
            <button
              type="button"
              key={issuer}
              className={`cert-chip ${issuerFilter === issuer ? "is-active" : ""}`}
              onClick={() => setIssuerFilter(issuer)}
            >
              {issuer}
            </button>
          ))}
        </div>

        <div className="cert-page-controller">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="cert-showcase-main">
        <article className="cert-preview glass-card" data-animate>
          {selectedCertificate ? (
            <>
              <div className="cert-preview-media">
                <img src={selectedCertificate.imageUrl} alt={selectedCertificate.title} loading="lazy" />
                <span>{selectedCertificate.issuer}</span>
              </div>
              <div className="cert-preview-content">
                <p>{selectedCertificate.date}</p>
                <h3>{selectedCertificate.title}</h3>
                <small>
                  Highlighted certificate. Select any card from the right panel to update this preview instantly.
                </small>
              </div>
            </>
          ) : (
            <div className="cert-empty-state">No certificates found for this filter.</div>
          )}
        </article>

        <aside className="cert-navigator glass-card" data-animate>
          <h3>Certificate Navigator</h3>
          <p>
            Showing {visibleCertificates.length} of {filteredCertificates.length}
          </p>

          <div className="cert-navigator-list">
            {visibleCertificates.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                className={`cert-mini-card ${selectedCertificateId === certificate.id ? "is-active" : ""}`}
                onClick={() => setSelectedCertificateId(certificate.id)}
              >
                <img src={certificate.imageUrl} alt={certificate.title} loading="lazy" />
                <div>
                  <h4>{certificate.title}</h4>
                  <span>
                    {certificate.issuer} · {certificate.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
