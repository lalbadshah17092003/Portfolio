import { useParams, Link } from "react-router-dom";
import { toursData } from "../data/toursData";
import "./TourDetails.css";

export default function TourDetails() {
  const { stateName, tourId } = useParams();
  const state = toursData.find(
    (s) => s.state.toLowerCase() === stateName.toLowerCase()
  );
  const tour = state?.tours.find((t) => t.id === tourId);

  if (!tour)
    return (
      <div className="tour-not-found">
        <h1>Tour not found</h1>
      </div>
    );

  return (
    <section className="tour-details-section">
      {/* Hero Image */}
      <div className="tour-hero">
        <img src={tour.image} alt={tour.name} className="tour-hero-image" />
        <div className="tour-hero-overlay"></div>
        <div className="tour-hero-text">
          <h1 className="tour-title">{tour.name}</h1>
          <p className="tour-duration">{tour.duration}</p>
          <p className="tour-price">₹{tour.price}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="tour-content-wrapper">
        {/* Overview */}
        <section className="tour-section">
          <h2 className="tour-heading">Overview</h2>
          <p className="tour-description">{tour.details.overview}</p>
        </section>

        {/* Itinerary */}
        <section className="tour-section">
          <h2 className="tour-heading">Itinerary</h2>
          <ul className="tour-list">
            {tour.details.itinerary.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Inclusions */}
        <section className="tour-section">
          <h2 className="tour-heading">Inclusions</h2>
          <ul className="tour-list">
            {tour.details.inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Back Link */}
        <div className="tour-back">
          <Link to={`/states/${stateName}`} className="tour-back-btn">
            ← Back to {state.state} Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
