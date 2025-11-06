// src/pages/AllDestinations.jsx
import React from "react";
import { Link } from "react-router-dom";
import { topDestinations } from "../data/landingData";
import "../components/TopDestinations.css";

export default function AllDestinations() {
  return (
    <main className="tds-section tds-whitegold">
      <div className="tds-header">
        <div className="tds-heading">
          <h2>
            Explore <span className="tds-accent">All Destinations</span>
          </h2>
          <p className="tds-lead">
            Browse every curated destination. Tap any card for full details,
            tips, and recommended times to visit.
          </p>
        </div>

        <Link to="/" className="tds-cta subtle">
          Home
        </Link>
      </div>

      <section className="tds-grid" aria-label="All Destinations">
        {topDestinations.map((dest) => (
          <Link to={`/destinations/${dest.id}`} className="tds-card tds-grid-card" key={dest.id}>
            <div className="tds-imgbox">
              <img src={dest.image} alt={dest.name} loading="lazy" />
            </div>
            <div className="tds-info">
              <h3 className="tds-name">{dest.name}</h3>
              <p className="tds-desc">{dest.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
