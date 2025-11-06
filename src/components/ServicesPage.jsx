import React from "react";
import "./ServicesPage.css";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Vehicle Booking",
      description:
        "Book comfortable cars, vans, or buses for your travel. Choose from luxury, budget, or group options.",
      icon: "🚗",
      bg: "#f0f8ff",
    },
    {
      id: 2,
      title: "Hotel Booking",
      description:
        "Find the best stays from budget to luxury resorts with easy booking and verified properties.",
      icon: "🏨",
      bg: "#fff5f7",
    },
    {
      id: 3,
      title: "Travel Packages",
      description:
        "Choose from curated travel packages for families, couples, and solo travelers with discounts.",
      icon: "🧳",
      bg: "#f3fff0",
    },
    {
      id: 4,
      title: "Flight Assistance",
      description:
        "Get help booking domestic or international flights with the best deals and 24/7 support.",
      icon: "✈️",
      bg: "#f8f9ff",
    },
    {
      id: 5,
      title: "Custom Plans",
      description:
        "Personalize your trip itinerary with destinations, activities, and transport of your choice.",
      icon: "🗺️",
      bg: "#fffbee",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Travel Services</h2>
        <p>
          We offer a complete range of travel solutions to make your journey smooth and unforgettable.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div
              className="service-card"
              key={service.id}
              style={{ backgroundColor: service.bg }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Explore More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
