import React from "react";
import "../style/Team.style.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Particles from "./Particles.js";
const Team = () => {
  return (
    <div id="Team">
      <div className="team-container">
        <div className="team-txt">
          <h2>Our Battalion</h2>
          <p>
            Our team is the voltage that powers the entrepreneurial ecosystem,
            sparking new ideas and ventures
          </p>
        </div>
        <div className="team-card-container">
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back">
              <div className="card-socials">
                <a href="">
                  <FaSquareXTwitter />
                </a>
                <a>
                  <FaSquareInstagram />
                </a>
                <a>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
          <div className="team-card">
            <div className="card-front"></div>
            <div className="card-back"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
