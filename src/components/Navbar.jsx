// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { id: "home", label: "Home", route: "/Portfolio" },
    { id: "about", label: "About", route: "/#about" },
    { id: "experience", label: "Experience", route: "/#experience" },
    { id: "skills", label: "Skills", route: "/#skills" },
    { id: "projects", label: "Projects", route: "/#projects" },
    { id: "contact", label: "Contact", route: "/#contact" },
  ];

  // Detect scroll direction + change navbar visibility
  useEffect(() => {
    const controlNavbar = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > lastScrollY && window.scrollY > 150) setVisible(false);
      else setVisible(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Scroll smoothly to section if on home page
  const handleLinkClick = (link) => {
    setActive(link.id);
    setMenuOpen(false);

    if (link.route.startsWith("/#")) {
      const sectionId = link.route.split("#")[1];
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      if (location.pathname !== "/Portfolio") navigate("/Portfolio");
    } else {
      navigate(link.route);
    }
  };

  // Update active link on route change
  useEffect(() => {
    const sectionFromHash = location.hash.replace("#", "");
    if (sectionFromHash) setActive(sectionFromHash);
    else if (location.pathname === "/Portfolio") setActive("home");
  }, [location]);

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <span className="brand">
            Mohit<span className="highlight">.dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={active === link.id ? "active" : ""}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      className={active === link.id ? "active" : ""}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
