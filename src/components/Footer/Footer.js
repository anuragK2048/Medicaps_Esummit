import React from 'react';
import "./styles/Footer.style.css";
import { FaMapMarkedAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/e_summit.png";

const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="E-cell MediCaps Logo" />
        <div className="copy">
          <p className="footer-copyright">
            Copyright © 2023 E-cell MediCaps
          </p>
          <p className="footer-developed">
            Website developed by E-CELL
          </p>
        </div>
        <p className="footer-links">
          <a className="link-1" href="/">Home</a>
          <a href="/esummit">E-summit</a>
          <a href="/contact">Contact Us</a>
          <a href="https://linktr.ee/ecell.medicaps" target="_blank" rel="noopener noreferrer">Register Now</a>
        </p>
      </div>

      <div className="footer-center"></div>

      <div className="footer-right">
        <p className="footer-company-about">
          E-cell, founded in 2008, empowers students with entrepreneurial skills, fostering innovation, and prepping them for industrial challenges. Established as a club in 2018.
        </p>
        <div className="footer-icons">
          <a href="https://goo.gl/maps/febYS8gU1YjHS7hb8" aria-label="Location"><FaMapMarkedAlt /></a>
          <a href="https://www.instagram.com/medicaps_ecell/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/e-cell-medi-caps-university" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
