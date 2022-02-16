import React from "react";
import logo from "../../../../Assets/header-logo.png";
import "./updateProfile.css";
import eProfile from "../../../../Assets/up-logo.png";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorUp from "./EditorUp";
import DropZone from "./DropZone";

export const UpdateProfile = () => {
  return (
    <>
      <div className="header ep-head">
        <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="Header Logo" />
          </div>

          <div className="header-nav">
            <a href="#">Update Profile</a>
          </div>
        </div>
      </div>
      <div className="up-cover-image"></div>
      <div className="up-container">
        <div className="up-container-inner">
          <div className="up-top">
            <div className="up-holder-logo">
              <FontAwesomeIcon icon={faPencil} className="up-pencil" />
              <img src={eProfile} alt="Company Logo" />
              <a href="#" className="up-remove-image">
                Remove Image
              </a>
            </div>
            <div className="naming-profile">
              <h1>Rakan Digital Selangor</h1>
            </div>
          </div>
          <div className="up-main">
            <div className="up-about-us">
              <h4>About Us</h4>
              <p className="up-label">Company Description*</p>
              <EditorUp />

              <p className="up-label">Website Url*</p>
              <input type="text" />

              <div className="up-ci">
                <div>
                  <p className="up-label">Company Size*</p>
                  <select>
                    <option>Less Than 15</option>
                    <option>Less THan 5</option>
                  </select>
                </div>
                <div>
                  <p className="up-label">Industry*</p>
                  <select>
                    <option>Furniture</option>
                    <option>Farming</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="up-location">
              <h4>Location</h4>
              <p className="up-label">Address</p>
              <input type="text" />
            </div>
            <div className="up-company-pictures">
              <h4>Company Pictures</h4>
              <div className="up-drop-zone">
                <DropZone />
              </div>
            </div>
            <div className="up-add-video">
              <h4 style={{ marginBottom: 10 }}>Add Video</h4>

              <input type="text" />
              <p className="up-label" style={{ marginTop: 5 }}>
                Paste the link to Youtube video here
              </p>
            </div>
            <div className="up-btn-holder">
              <button className="up-save-button">Save Page</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
