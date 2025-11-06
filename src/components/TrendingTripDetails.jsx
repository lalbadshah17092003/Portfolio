// src/pages/TrendingTripDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trendingTrips } from "../data/landingData";
import "./TrendingTripDetails.css";

export default function TrendingTripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trendingTrips.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <div className="trip-not-found">
        <h2>Trip not found 😕</h2>
        <button onClick={() => navigate("/trending-trips")}>Go Back</button>
      </div>
    );
  }

  return (
    <section className="ttd-section">
      <button className="ttd-back" onClick={() => navigate("/trending-trips")}>
        ← Back
      </button>

      <div className="ttd-container">
        <div className="ttd-image-wrapper">
          <img src={trip.image} alt={trip.title} className="ttd-image" />
        </div>

        <div className="ttd-details">
          <h1 className="ttd-title">{trip.title}</h1>
          <p className="ttd-description">{trip.description}</p>

          <div className="ttd-meta">
            <p><strong>Duration:</strong> {trip.days} Days</p>
            <p><strong>Rating:</strong> ⭐ {trip.rating}.0</p>
            <p><strong>Offer:</strong> {trip.offer}</p>
          </div>

          <div className="ttd-price">
            <span className="ttd-current">{trip.price}</span>
            {trip.oldPrice && <span className="ttd-old">{trip.oldPrice}</span>}
          </div>

          <div className="ttd-buttons">
            <button className="ttd-book">Book Now</button>
            <button className="ttd-enquire">Enquire</button>
          </div>
        </div>
      </div>
    </section>
  );
}
