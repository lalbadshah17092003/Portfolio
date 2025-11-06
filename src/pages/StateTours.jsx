import { useParams, Link } from "react-router-dom";
import { toursData } from "../data/toursData";
import "./StateTours.css";

export default function StateTours() {
  const { stateName } = useParams();
  const state = toursData.find(
    (s) => s.state.toLowerCase() === stateName.toLowerCase()
  );

  if (!state)
    return (
      <div className="state-not-found">
        <h1>State not found</h1>
      </div>
    );

  return (
    <section className="state-tours-section">
      <div className="state-tours-header">
        <h1 className="state-tours-title">{state.state} Tour Packages</h1>
        <p className="state-tours-subtitle">
          Choose from the best tour experiences curated specially for {state.state}.
        </p>
      </div>

      <div className="state-tours-grid">
        {state.tours.map((tour) => (
          <Link
            key={tour.id}
            to={`/states/${stateName}/${tour.id}`}
            className="tour-card"
          >
            <div className="tour-image-wrapper">
              <img src={tour.image} alt={tour.name} className="tour-image" />
              <div className="tour-overlay"></div>
              <h3 className="tour-name">{tour.name}</h3>
            </div>

            <div className="tour-content">
              <p className="tour-duration">{tour.duration}</p>
              <p className="tour-price">₹{tour.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
