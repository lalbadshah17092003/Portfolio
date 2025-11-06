import React from "react";
import { Link } from "react-router-dom";
import { seasonalPlans } from "../data/landingData";
import "./SeasonalPlans.css";

export default function SeasonalPlansProper() {
  const topFourPlans = seasonalPlans.slice(0, 4);

  return (
    <section className="spp-section">
      <div className="spp-header">
        <h2>
          Seasonal <span className="spp-gradient-text">Travel Plans</span>
        </h2>
        <p>Experience the beauty of every season with exclusive travel offers.</p>
      </div>

      <div className="spp-cards">
        {topFourPlans.map((plan) => (
          <div className="spp-card" key={plan.id}>
            <div className="spp-imgbox">
              <img src={plan.image} alt={plan.season} />
              {plan.offer && <span className="spp-badge">{plan.offer}</span>}
            </div>
            <div className="spp-info">
              <h3 className="spp-name">{plan.season}</h3>
              <p className="spp-description">{plan.description}</p>
              <Link to={`/seasonal-plans/${plan.id}`} className="spp-btn">
                Explore Plan
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="spp-viewall">
        <Link to="/seasonal-plans" className="spp-viewall-btn">
          View All Seasons
        </Link>
      </div>
    </section>
  );
}
