import React from "react";
import profile from "../../../../../Assets/ep.jpeg";
import DropFile from "./DropFile";
import "./PersonalDetails2.css";

export default function PersonalDetails2() {
  return (
    <>
      <div className="ep-update-info">
        <h2 className="ep-personal-title">Personal Details (2/2)</h2>
        <p className="ep-desc">
          This is kept private for Cidekick team to Contact you.
        </p>
        <div className="form-group">
          <p className="field-title">Skill Set</p>
          <input
            className="form-input input-tag-field"
            placeHolder="Enter Skill"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <p className="field-title">Profile Picture</p>
          <div className="pd-2-profile">
            <img
              src={profile}
              alt="sample"
              width={150}
              height={150}
              className="ep-profile-pic"
            />
            <button className="remove-pp">Remove Profile Pic</button>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Portfolio Pictures</p>
          <div className="pd2-drop-zone-container">
            <div className="pd2-drop-zone">
              <DropFile />
            </div>
            <p className="pd-2-reminder-red">
              IMPORTANT Please add multiple pictures of yourself so that client
              can view your photos (Recommended: Minimum 2 full length and 2
              Half body shots)
            </p>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Add Video</p>
          <div className="pd2-add-video">
            <input className="form-input" type="text" />
            <p className="pd-2-paste">Paste the link to Youtube video here</p>
            <p className="pd-2-reminder-green">
              Do note that fields below are entirely non compulsory and are
              usually applied for Cidekicks who are interested in the talent
              side such as models, acting talents etc.
            </p>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Clothing Size</p>
          <select className="form-input">
            <option>Select Size</option>
          </select>
        </div>
        <div className="form-group">
          <p className="field-title">Shoe Size (US)</p>
          <select className="form-input">
            <option>Select Size</option>
          </select>
        </div>
        <div className="form-group">
          <p className="field-title">Current Hair Color</p>
          <select className="form-input">
            <option>Select Color</option>
          </select>
        </div>
        <div className="form-group">
          <p className="field-title">Current Hair Length</p>
          <select className="form-input">
            <option>Select Size</option>
          </select>
        </div>
        <div className="form-group">
          <p className="field-title">Bust (Inches)</p>
          <input className="form-input" type="text" maxLength={3} value="0.0" />
        </div>
        <div className="form-group">
          <p className="field-title">Waist (Inches)</p>
          <input className="form-input" type="text" maxLength={3} value="0.0" />
        </div>
        <div className="form-group">
          <p className="field-title">Hips (Inches)</p>
          <input className="form-input" type="text" maxLength={3} value="0.0" />
        </div>
        <div className="form-buttons">
          <button className="back as-back pd-2-back">Back</button>
          <button className="save">Save {"&"} Complete</button>
        </div>
      </div>
    </>
  );
}
