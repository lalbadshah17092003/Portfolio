import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toursData } from "../data/toursData";
import "./StateSection.css";

export default function StateSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const startXRef = useRef(0);

  const visibleStates = toursData.slice(0, 4); // Show only 4 states
  const hasMoreStates = toursData.length > 4;

  // Desktop animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  // Mobile carousel
  const cardsPerView = 2;
  const totalSlides = Math.ceil(visibleStates.length / cardsPerView);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const startIndex = currentIndex * cardsPerView;
  const endIndex = startIndex + cardsPerView;
  const mobileVisibleStates = visibleStates.slice(startIndex, endIndex);

  // Swipe support
  const handleTouchStart = (e) => (startXRef.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startXRef.current;
    if (delta > 50) prevSlide();
    else if (delta < -50) nextSlide();
  };

  return (
    <section className="state-section" id="states">
      {/* Header */}
      <motion.div
        className="state-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="state-heading-box">
          <h2 className="state-heading">
            Explore States of <span>India</span>
          </h2>
          <p className="state-subheading">
            Choose your destination and start your unforgettable journey today.
          </p>
        </div>

        {hasMoreStates && (
          <div className="state-btn-container">
            <Link to="/states" className="state-btn">
              View All
            </Link>
          </div>
        )}
      </motion.div>

      {/* Desktop Grid */}
      <div className="desktop-view">
        {visibleStates.map((state, i) => (
          <motion.div
            key={state.state}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to={`/states/${state.state.toLowerCase()}`}
              className="state-card desktop-card"
            >
              <div className="state-image-wrapper">
                <img src={state.image} alt={state.state} className="state-image" />
              </div>
           
              <div className="state-info">
                <h3 className="state-name2">{state.state}</h3>
                <p className="state-description">{state.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div
        className="mobile-view"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="arrow-btn left" onClick={prevSlide}>
          <ChevronLeft size={22} />
        </button>

        <motion.div
          className="mobile-carousel"
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
        >
          {mobileVisibleStates.map((state) => (
            <Link
              key={state.state}
              to={`/states/${state.state.toLowerCase()}`}
              className="state-card mobile-card"
            >
              <div className="state-image-wrapper">
                <img src={state.image} alt={state.state} className="state-image" />
              </div>
              <div className="state-info">
                <h3 className="state-name2">{state.state}</h3>
                <p className="state-description">{state.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>

        <button className="arrow-btn right" onClick={nextSlide}>
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
