import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toursData } from "../data/toursData";
import "./States.css";

export default function States() {
  return (
    <section className="states-section">
      {/* Section Header */}
      <div className="states-header">
        <h1 className="states-title">Explore Indian States</h1>
        <p className="states-subtitle">
          Discover the most beautiful destinations and vibrant cultures across India.
        </p>
      </div>

      {/* States Grid */}
      <div className="states-grid">
        {toursData.map((state, index) => (
          <motion.div
            key={state.state}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/states/${state.state.toLowerCase()}`}
              className="state-card"
            >
              <div className="state-image-wrapper">
                <img
                  src={state.image}
                  alt={state.state}
                  className="state-image"
                />
                <div className="state-overlay"></div>
                <h2 className="state-name">{state.state}</h2>
              </div>

              <div className="state-content">
                <p className="state-description">{state.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
