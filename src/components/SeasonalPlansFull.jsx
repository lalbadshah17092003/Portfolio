import React from "react";
import { Link } from "react-router-dom";
import { seasonalPlans } from "../data/landingData";
import "./SeasonalPlansFull.css";

export default function SeasonalPlansFull() {
  return (
    <section className="spp-full-section">
      <div className="spp-full-header">
        <h2>All <span className="spp-gradient-text">Seasonal Plans</span></h2>
        <p>Find the perfect trip for every time of the year.</p>
      </div>

      <div className="spp-grid">
        {seasonalPlans.map((plan) => (
          <Link to={`/seasonal-plans/${plan.id}`} key={plan.id} className="spp-card">
            <div className="spp-imgbox">
              <img src={plan.image} alt={plan.season} />
              {plan.offer && <span className="spp-badge">{plan.offer}</span>}
            </div>
            <div className="spp-info">
              <h3 className="spp-name">{plan.season}</h3>
              <p className="spp-description">{plan.description}</p>
              <div className="spp-extra">
                <span>Best Time: {plan.bestTime || "Varies by region"}</span>
                <span>Duration: {plan.days || "Flexible"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
