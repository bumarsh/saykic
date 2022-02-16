import React from "react";
import logo from "../../../../Assets/header-logo.png";
import eProfile from "../../../../Assets/ep.jpeg";
import profile from "../../../../Assets/profile.jpeg";

import "./employeeProfile.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EmployeeProfile = () => {
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
      <div className="ep-container">
        <div className="ep-container-inner">
          <div className="ep-head-container">
            <div className="ep-img">
              <img src={eProfile} alt="Employer Profile" />
            </div>
            <div className="ep-info">
              <h1>Alde Hyde</h1>
              <div className="ep-info-text">
                <p className="ep-location">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Location: Bukit Bintang</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faStar} />
                  <span>0/5 on 0 Ratings</span>
                </p>
              </div>
            </div>
            <div className="ep-info-right">
              <div className="ep-verified-user">
                <p>Verified User: No</p>
              </div>
              <p className="upload-image">Upload Front Image of IC</p>
              <button className="ep-edit-profile">Edit Profile</button>
            </div>
          </div>
          <div className="profile-main">
            <div className="ep-about-me">
              <h4>About me</h4>
              <p className="pm-text">Hi</p>
            </div>
            <div className="ep-skills">
              <h4>Skills</h4>
              <span className="pm-skill">QA</span>
            </div>

            <div className="ep-skills">
              <h4>Personal Details</h4>

              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="table_greycell">Gender</td>
                      <td className="table_blackcell">male</td>
                      <td className="table_greycell">Age</td>
                      <td className="table_blackcell">24</td>
                    </tr>
                    <tr>
                      <td className="table_greycell">Height (cm)</td>
                      <td className="table_blackcell">0</td>
                      <td className="table_greycell">Weight (kg)</td>
                      <td className="table_blackcell">0</td>
                    </tr>
                    <tr>
                      <td className="table_greycell">Clothing Size</td>
                      <td className="table_blackcell">XL</td>
                      <td className="table_greycell">Bust</td>
                      <td className="table_blackcell">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_greycell">Current Hair Color</td>
                      <td className="table_blackcell">Black</td>
                      <td className="table_greycell">Waist</td>
                      <td className="table_blackcell">0.0</td>
                    </tr>
                    <tr>
                      <td className="table_greycell">Shoe Size</td>
                      <td className="table_blackcell">2.0</td>
                      <td className="table_greycell">Hips</td>
                      <td className="table_blackcell">0.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="ep-portfolio-pictures">
              <h4>Portfolio Pictures</h4>
              <div>
                <img src={profile} alt="Profile" width={100} height={100} />
              </div>
            </div>

            <div className="ep-jobs-rating">
              <h4>Jobs Rating</h4>
              <p className="jobs-rating-text">Not Rated yet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
