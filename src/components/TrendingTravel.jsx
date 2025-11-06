import React from "react";
import { trendingTrips } from "../data/landingData";
import { Clock, Tag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./TrendingTravel.css";

export default function TrendingTravelSwipe() {
  return (
    <section className="tts-section">
      <div className="tts-header">
        <h2>
          Trending <span className="tts-gradient-text">Travel Experiences</span>
        </h2>
        <p>
          Explore this season’s most loved destinations — curated for the modern traveler.
        </p>
      </div>

      <div className="tts-view-all">
        <Link to="/trending-trips" className="tts-view-all-btn">
          View All
        </Link>
      </div>

      {/* Smooth marquee container */}
      <div className="tts-marquee">
        <div className="tts-track">
          {[...trendingTrips, ...trendingTrips].map((trip, idx) => (
            <div className="tts-card" key={idx}>
              <div className="tts-imgbox">
                <img src={trip.image} alt={trip.title} loading="lazy" />
                {trip.offer && <span className="tts-badge">🔥 {trip.offer}</span>}
              </div>

              <div className="tts-content">
                <h3>{trip.title}</h3>
                <p>{trip.description}</p>

                <div className="tts-info">
                  <div className="tts-rating">
                    <Star size={14} color="#FFD700" fill="#FFD700" />
                    <span>{trip.rating}.0</span>
                  </div>

                  <div className="tts-duration">
                    <Clock size={14} color="#007aff" />
                    <span>{trip.days} Days</span>
                  </div>
                </div>

                <div className="tts-footer">
                  <div className="tts-price">
                    <span className="tts-current">{trip.price}</span>
                    {trip.oldPrice && <span className="tts-old">{trip.oldPrice}</span>}
                  </div>
                  <Link to={`/trending-trips/${trip.id}`} className="tts-btn">
                    <Tag size={14} /> Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
