
// src/components/TopDestinations.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { topDestinations } from "../data/landingData";
import "./TopDestinations.css";

export default function TopDestinations() {
  // duplicate for seamless marquee loop
  const items = useMemo(() => [...topDestinations, ...topDestinations], []);

  // duration (seconds) scales with number of unique items for comfortable speed (min 20s)
  const duration = Math.max(20, topDestinations.length * 4);

  return (
    <section className="tds-section tds-whitegold">
      <div className="tds-header">
        <div className="tds-heading">
          <h2>
            Top <span className="tds-accent">Destinations</span>
          </h2>
          <p className="tds-lead">
            Handpicked premium locations for your next unforgettable experience.
          </p>
        </div>

        <Link to="/destinations" className="tds-cta">
          View All
        </Link>
      </div>

      <div
        className="tds-marquee"
        style={{ ["--marquee-duration" /* eslint-disable-line */]: `${duration}s` }}
        aria-hidden={false}
      >
        <div className="tds-marquee-track">
          {items.map((dest, idx) => (
            <article className="tds-card" key={`${dest.id}-${idx}`}>
              <Link to={`/destinations/${dest.id}`} className="tds-card-link" aria-label={`Open ${dest.name} details`}>
                <div className="tds-imgbox">
                  <img src={dest.image} alt={dest.name} loading="lazy" />
                </div>
                <div className="tds-info">
                  <h3 className="tds-name">{dest.name}</h3>
                  <p className="tds-desc">{dest.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
