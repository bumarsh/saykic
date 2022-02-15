import React from "react";
import "./PersonalInfo.css";

export const PersonalInfo = () => {
  return (
    <>
      <div className="ep-update-info">
        <h2 className="ep-personal-title">Personal Info</h2>
        <p className="ep-desc">
          All Personal Details Shared here will be for Cidekick use only
        </p>
        <div className="form-group">
          <p className="field-title">Identification Card No.</p>
          <input className="form-input" type="text"></input>
        </div>
        <div className="form-group">
          <p className="field-title">Emergency Contact Number</p>
          <div>
            <select
              className="countryCodes"
              type="text"
              style={{ width: "25%" }}
            >
              <option>+63</option>
              <option>+12</option>
            </select>
            <input
              type="text"
              className="form-input"
              placeholder="e.g 12323121"
              style={{ width: "75%" }}
            ></input>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Name of Emergency Contact</p>
          <input className="form-input" type="text" value="Emergency"></input>
        </div>
        <div className="form-group">
          <p className="field-title">
            Name (As per IC )<span style={{ color: "red" }}>*</span>
          </p>
          <input className="form-input" type="text"></input>
        </div>
        <div className="form-group">
          <p className="field-title">Handphone no.</p>
          <div>
            <input
              className="form-input disabled-bg"
              value="+63"
              type="text"
              style={{ width: "25%", marginRight: "10px" }}
              disabled
            />
            <input
              type="text"
              value="9216442944"
              className="form-input disabled-bg"
              style={{ width: "75%" }}
              placeholder="e.g 12323121"
              disabled
            ></input>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Home Address</p>
          <input className="form-input" type="text"></input>
        </div>
        <div className="form-group">
          <p className="field-title"></p>
          <button className="save">Save {"&"} Continue</button>
        </div>
      </div>
    </>
  );
};
