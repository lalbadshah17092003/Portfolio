import React, { useEffect } from "react";
import { motion } from "framer-motion";
import person from "../assets/person.jpg";
import "./Landing.css";

export default function Landing() {
  useEffect(() => {
    // Typewriter Effect
    const el = document.querySelector(".typewriter");
    const roles = [
      "Full Stack Developer",
      "MERN Expert",
      "Frontend Developer",
      "Freelancer",
      "Backend Developer",
    ];
    let i = 0,
      j = 0,
      isDeleting = false;

    const tick = () => {
      const current = roles[i];
      j = isDeleting ? j - 1 : j + 1;
      el.textContent = current.substring(0, j);

      if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(tick, 1000);
        return;
      }
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
      setTimeout(tick, isDeleting ? 50 : 120);
    };
    tick();
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Blobs */}
      <div className="parallax blob blob-1"></div>
      <div className="parallax blob blob-2"></div>

      <div className="hero-inner">
        {/* Left Content */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1>
            Hey, I’m <span className="highlight">Mohit Parmar</span>
          </h1>
          <h2 className="typewriter"> </h2>
          <p className="lead">
            I create modern, scalable, and visually stunning web applications
            focused on user experience, speed, and clean architecture.
          </p>

          <div className="cta">
            <motion.a
              className="btn primary-btn"
             href="https://lalbadshah17092003.github.io/Portfolio/Mohit.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="profile-wrap">
            <motion.img
              src={person}
              alt="profile"
              className="profile-img"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
