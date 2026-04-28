import { useMemo, useState } from "react";
import { portfolioData } from "../../data/portfolio";
import "./certificates.css";

const monthOrder = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
const dateRank = (d) => { const [m,y] = d.split(" "); return (Number(y)||0)*12+(monthOrder[m]??0); };

export default function Certificates() {
  const { header, labels, items } = portfolioData.certificates;

  const sorted = useMemo(() => [...items].sort((a,b) => dateRank(b.date) - dateRank(a.date)), [items]);

  const issuers = useMemo(
    () => [labels.all, ...Array.from(new Set(sorted.map(c => c.issuer)))],
    [sorted, labels.all]
  );

  const [filter, setFilter] = useState(labels.all);
  const [hovered, setHovered] = useState(null);

  const filtered = useMemo(
    () => filter === labels.all ? sorted : sorted.filter(c => c.issuer === filter),
    [sorted, filter, labels.all]
  );

  return (
    <section className="cert-section container">
      <header className="cert-header" data-animate>
        <p className="section-kicker">{header.kicker}</p>
        <h2 className="section-heading">{header.heading}</h2>
        <p className="section-copy">{header.copy}</p>
      </header>

      {/* filter chips */}
      <div className="cert-filters" data-animate>
        {issuers.map(issuer => (
          <button
            key={issuer}
            type="button"
            className={`cert-filter-chip ${filter === issuer ? "is-active" : ""}`}
            onClick={() => setFilter(issuer)}
          >
            {issuer}
          </button>
        ))}
        <span className="cert-count">{filtered.length} certificates</span>
      </div>

      {/* masonry gallery */}
      <div className="cert-gallery" data-animate>
        {filtered.map(cert => (
          <div
            key={cert.id}
            className={`cert-item ${hovered === cert.id ? "is-hovered" : ""}`}
            onMouseEnter={() => setHovered(cert.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={cert.imageUrl} alt={`${cert.title} certificate earned by Htet Lin Ko`} loading="lazy" decoding="async" />
            <div className="cert-item-overlay">
              <span className="cert-item-issuer">{cert.issuer}</span>
              <p className="cert-item-title">{cert.title}</p>
              <span className="cert-item-date">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
