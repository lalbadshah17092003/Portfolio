import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import heroVideo from "../images/10.mp4";

export default function HeroUltraVideoFixed() {
  const orbRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      orbRefs.current.forEach((orb, index) => {
        if (orb) {
          // Each orb moves slightly at different speed
          const speed = 0.1 + index * 0.05;
          orb.style.transform = `translateY(${scrollY * speed}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="hero-ultra-container">
      {/* Video Background stays fixed */}
      <video
        className="hero-ultra-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay */}
      <div className="hero-ultra-overlay"></div>

      {/* Floating Orbs with parallax */}
      {[0, 1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          ref={(el) => (orbRefs.current[i] = el)}
          className={`hero-ultra-orb orb-${i % 3 === 0 ? "small" : i % 3 === 1 ? "medium" : "large"}`}
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
        ></div>
      ))}

      {/* Hero Content with animated text */}
      <motion.div
        className="hero-ultra-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
      <motion.h1 className="hero-ultra-title" variants={textVariants}>
          Discover <span className="highlight-text">Exotic Destinations</span> <br />
          Around the <span className="highlight-text">World</span> 🌍
        </motion.h1>

      <motion.p className="hero-ultra-subtitle" variants={textVariants}>
          Adventure awaits with curated tours, immersive experiences, and <br />
          exclusive travel packages designed for <span className="highlight-text">your dream journey</span>.
        </motion.p>
       <motion.div className="hero-ultra-buttons" variants={textVariants}>
          <motion.button whileHover={{ scale: 1.05 }} className="hero-ultra-btn-primary">
            Start Exploring
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
