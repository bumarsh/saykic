import React from "react";
import logo from "../../../../Assets/header-logo.png";
import companyLogo from "../../../../Assets/company-profile.png";
import "./employerProfile.css";

import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const EmployerProfile = () => {
  return (
    <>
      <div className="header ep-head">
        <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="Header Logo" />
          </div>

          <div className="header-nav">
            <a href="#">Profile</a>
          </div>
        </div>
      </div>
      <div className="company-profile-container">
        <div className="company-profile-container-inner">
          <div className="cp-holder">
            <div className="cp-logo">
              <img src={companyLogo} alt="Company Logo" />
            </div>
            <div className="cp-info">
              <h1 className="cp-name">Rakan Digital Selangor</h1>
              <div className="cp-info-info">
                <p>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Less Than 15</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Government Administration</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faStar} />
                  <span> 3.1/5 on 38 Ratings</span>
                </p>
                <div className="cp-website">
                  <a href="#" target="_blank">
                    www.rakandigitalselangor.com.my{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="cp-link-button">
              <a href="#">Update Profile</a>
              <a href="#" className="mt-36">
                See All Jobs (3)
              </a>
            </div>
          </div>

          <div className="profile-main">
            <div className="cp-about-us">
              <h4>About us</h4>
              <p className="cp-about-us-text">
                nisiatif Rakan Digital Selangor - Kerajaan negeri Selangor akan
                melantik Duta Rakan Digital Selangor untuk membantu perniagaan
                mikro (penjaja dan peruncit) mendaftarkan perniagaan mereka ke
                dalam talian , direktori Kerajaan Negeri Selangor iaitu PLATS
                dan platform sosial media untuk meningkatkan pendedahan dan
                pendapatan dengan mendapatkan pelanggan baru.
              </p>
            </div>
            <div className="cp-our-company">
              <h4>Our Company</h4>
            </div>
            <div className="cp-our-location">
              <h4>Our Location</h4>
              <div className="location-google-map">
                <iFrame
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9331222993055!2d101.63752801413462!3d3.1123971542469633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bdff395fa4f%3A0xd8f07fa7741aeaf9!2sCidekick%20Sdn%20Bhd!5e0!3m2!1sen!2sph!4v1644495851828!5m2!1sen!2sph"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
