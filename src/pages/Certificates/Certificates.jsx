import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../../data/portfolio";
import "./certificates.css";

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

const dateRank = (dateText) => {
  const [monthRaw, yearRaw] = dateText.split(" ");
  const month = monthOrder[monthRaw] ?? 0;
  const year = Number(yearRaw) || 0;
  return year * 12 + month;
};

export default function Certificates() {
  const section = portfolioData.certificates;
  const { header, labels } = section;

  const sortedCertificates = useMemo(() => [...section.items].sort((a, b) => dateRank(b.date) - dateRank(a.date)), [section.items]);

  const issuers = useMemo(
    () => [labels.all, ...Array.from(new Set(sortedCertificates.map((certificate) => certificate.issuer)))],
    [sortedCertificates, labels.all],
  );

  const [issuerFilter, setIssuerFilter] = useState(labels.all);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCertificateId, setSelectedCertificateId] = useState(sortedCertificates[0]?.id ?? null);

  const filteredCertificates = useMemo(() => {
    if (issuerFilter === labels.all) {
      return sortedCertificates;
    }

    return sortedCertificates.filter((certificate) => certificate.issuer === issuerFilter);
  }, [sortedCertificates, issuerFilter, labels.all]);

  const totalPages = Math.max(1, Math.ceil(filteredCertificates.length / section.pageSize));

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

  const startIndex = (currentPage - 1) * section.pageSize;
  const visibleCertificates = filteredCertificates.slice(startIndex, startIndex + section.pageSize);

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
        <p className="section-kicker">{header.kicker}</p>
        <h2 className="section-heading">{header.heading}</h2>
        <p className="section-copy">{header.copy}</p>
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
            {labels.previous}
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            {labels.next}
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
                <small>{labels.previewNote}</small>
              </div>
            </>
          ) : (
            <div className="cert-empty-state">{labels.emptyState}</div>
          )}
        </article>

        <aside className="cert-navigator glass-card" data-animate>
          <h3>{labels.navigatorTitle}</h3>
          <p>
            {labels.showing} {visibleCertificates.length} of {filteredCertificates.length}
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
