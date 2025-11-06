// src/pages/TrendingTripsPage.jsx
import React from "react";
import { trendingTrips } from "../data/landingData";
import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import "./TrendingTripsPage.css";

export default function TrendingTripsPage() {
  return (
    <section className="ttp-section">
      <div className="ttp-container">
        <div className="ttp-header">
          <h1>All Trending Trips</h1>
          <p>Explore all the trending travel experiences this season.</p>
        </div>

        <div className="ttp-grid">
          {trendingTrips.map((trip) => (
            <Link to={`/trending-trips/${trip.id}`} key={trip.id} className="ttp-card">
              <img src={trip.image} alt={trip.title} className="ttp-image" />
              <div className="ttp-content">
                <h3>{trip.title}</h3>
                <p>{trip.description}</p>

                <div className="ttp-info">
                  <span className="ttp-days">
                    <Clock size={16} /> {trip.days} Days
                  </span>
                  <span className="ttp-rating">
                    <Star size={16} fill="#FFD700" stroke="none" /> {trip.rating}.0
                  </span>
                </div>

                <div className="ttp-price">{trip.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
