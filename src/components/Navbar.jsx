import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/booking", label: "Booking" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/address", label: "Address" },
    { path: "/reviews", label: "Review" },
  ];

  const linkAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <motion.nav
      className="navbar-wrapper sticky-navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-unique">
          Shreeji Holidays
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              custom={index}
              variants={linkAnimation}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={item.path}
                className={`navbar-link ${
                  currentPath === item.path ? "active-link" : ""
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="navbar-toggle-unique"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar-links-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                custom={index}
                variants={linkAnimation}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={`navbar-link ${
                    currentPath === item.path ? "active-link" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
