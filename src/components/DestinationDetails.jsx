// src/pages/DestinationDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { topDestinations } from "../data/landingData";
import "../components/TopDestinations.css";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = topDestinations.find((d) => String(d.id) === String(id));

  if (!destination) {
    return (
      <main className="tds-section tds-whitegold">
        <div className="tds-header">
          <h2 className="tds-accent">Destination Not Found</h2>
          <Link to="/destinations" className="tds-cta subtle">Back</Link>
        </div>
        <p className="tds-lead">We couldn't find that destination — try browsing all destinations.</p>
      </main>
    );
  }

  const { name, image, fullDescription, description, bestTime, location } = destination;

  return (
    <main className="tds-section tds-whitegold">
      <div className="tds-header">
        <div className="tds-heading">
          <h2><span className="tds-accent">{name}</span></h2>
          <p className="tds-lead">A refined guide to help you plan your trip to {name}.</p>
        </div>
        <Link to="/destinations" className="tds-cta subtle">Back to All</Link>
      </div>

      <article className="tds-details">
        <div className="tds-details-media">
          <img src={image} alt={name} />
        </div>

        <div className="tds-details-body">
          <h3 className="tds-detail-title">About {name}</h3>
          <p className="tds-paragraph">{fullDescription || description}</p>

          <div className="tds-extras">
            <div className="tds-extra">
              <h4>Best time to visit</h4>
              <p>{bestTime || "All year (check local weather)"}</p>
            </div>

            <div className="tds-extra">
              <h4>Location</h4>
              <p>{location || "See map - location not provided"}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
