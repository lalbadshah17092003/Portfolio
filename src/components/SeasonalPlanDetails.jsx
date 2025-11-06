import React from "react";
import { useParams, Link } from "react-router-dom";
import { seasonalPlans } from "../data/landingData";
import "./SeasonalPlans.css";

export default function SeasonalPlanDetails() {
  const { id } = useParams();
  const plan = seasonalPlans.find((p) => p.id === parseInt(id));

  if (!plan) {
    return (
      <section className="spp-details">
        <h2>Plan Not Found</h2>
        <Link to="/seasonal-plans" className="spp-btn">Back to All Plans</Link>
      </section>
    );
  }

  return (
    <section className="spp-details">
      <div className="spp-hero">
        <img src={plan.image} alt={plan.season} />
        <div className="spp-hero-overlay">
          <h1>{plan.season}</h1>
          <p>{plan.offer || "Exclusive Experience"}</p>
        </div>
      </div>

      <div className="spp-details-content">
        <h2>About the {plan.season} Plan</h2>
        <p>{plan.description}</p>

        <div className="spp-details-info">
          <div><strong>Best Time:</strong> {plan.bestTime || "Seasonal availability"}</div>
          <div><strong>Ideal Duration:</strong> {plan.days || "Flexible"}</div>
          <div><strong>Highlights:</strong> {plan.highlights || "Nature, Culture, Relaxation"}</div>
        </div>

        <Link to="/seasonal-plans" className="spp-btn back-btn">← Back to All Plans</Link>
      </div>
    </section>
  );
}
