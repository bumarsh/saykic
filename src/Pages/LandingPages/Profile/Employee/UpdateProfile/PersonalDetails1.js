import React from "react";
import EditorPD1 from "./EditorPD1";
import "./PersonalDetails1.css";

export default function PersonalDetails1() {
  return (
    <>
      <div className="ep-update-info">
        <h2 className="ep-personal-title">Personal Details (1/2)</h2>
        <p className="ep-desc">
          This is kept private for Cidekick team to Contact you.
        </p>
        <div className="form-group">
          <p className="field-title">Cidekick Account</p>
          <div className="pd1-form-holder">
            <input
              className="form-input"
              type="text"
              value="Malaysia"
              disabled
              style={{ backgroundColor: "#e9ecef" }}
            />
            <p style={{ color: "#6c757d", fontSize: 12 }}>
              This is the country based on your phone numbers. And can not be
              changed
            </p>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">
            Current State <span style={{ color: "Red" }}>*</span>
          </p>
          <div className="pd1-form-holder">
            <select className="form-input" style={{ width: "100%" }}>
              <option>Select State</option>
            </select>
            <p style={{ color: "#6c757d", fontSize: 12, width: "auto" }}>
              Please select the state and you will see the cities of it bottom
            </p>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">
            City <span style={{ color: "Red" }}>*</span>
          </p>
          <select className="form-input">
            <option>Bukit Bintang</option>
          </select>
        </div>
        <div className="form-group">
          <p className="field-title">Post Code</p>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <p className="field-title">
            Name to be displayed <span style={{ color: "Red" }}>*</span>
          </p>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <p className="field-title">
            Nationality <span style={{ color: "Red" }}>*</span>
          </p>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <p className="field-title">Own Transport</p>
          <div className="pd-1-radio-buttons">
            <label className="radio radios_label">
              Yes
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="Yes"
              />
              <span class="checkRound"></span>
            </label>
            <label className="radio radios_label">
              No
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="No"
              />
              <span class="checkRound"></span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Gender</p>
          <div className="pd-1-radio-buttons">
            <label className="radio radios_label">
              Male
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="Yes"
              />
              <span class="checkRound"></span>
            </label>
            <label className="radio radios_label">
              Female
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="No"
              />
              <span class="checkRound"></span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Height (CM)</p>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <p className="field-title">Weight (KG)</p>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <p className="field-title">
            Date of Birth <span style={{ color: "Red" }}>*</span>
          </p>
          <div className="dob-pd1">
            <select className="form-input form-date">
              <option>Day</option>
            </select>
            <select className="form-input form-date">
              <option>Month</option>
            </select>
            <select className="form-input form-date">
              <option>Year</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Total Age</p>
          <p>24 years</p>
        </div>
        <div className="form-group" id="tiny-editor">
          <p className="field-title">About Me</p>
          <EditorPD1 />
        </div>
        <div className="form-buttons">
          <button className="back">Back</button>
          <button className="save">Save {"&"} Continue</button>
        </div>
      </div>
    </>
  );
}
