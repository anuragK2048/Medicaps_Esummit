// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/e_summit.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRedirect = () => {
    window.location.href =
      "https://linktr.ee/ecell.medicaps?fbclid=PAZXh0bgNhZW0CMTEAAaYVdbP9aP1LqMpJeTdWSGnKqPKOmR-js0Z9NAWjE_oOXd9oR_UueJeQjBU_aem_ARn8A_9xF2XVL75rh91b6g"; // Replace with your desired URL
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          {/* <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a> */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          {/* <a href="#about" onClick={() => setIsMenuOpen(false)}>
            E-Summit 24'
          </a> */}
          <Link to="esummit" onClick={() => setIsMenuOpen(false)}>
            E-Summit
          </Link>
        </li>
        {/* <li>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
            Archives
          </a>
          <Link to="archives" onClick={() => setIsMenuOpen(false)}>
            Archives
          </Link>
        </li> */}
        <li>
          {/* <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Our Team
          </a> */}
          <Link to="ourteam" onClick={() => setIsMenuOpen(false)}>
            Our Team
          </Link>
        </li>
        <li>
          {/* <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a> */}
          <Link to="contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <button
            className="custom-button"
            style={{ marginTop: "0px", scale: "1" }}
            onClick={handleRedirect}
          >
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
