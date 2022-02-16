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
            <select className="countryCodes pi-input-25" type="text">
              <option>+63</option>
              <option>+12</option>
            </select>
            <input
              type="text"
              className="form-input pi-input-75"
              placeholder="e.g 12323121"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <p className="field-title">Name of Emergency Contact</p>
          <input className="form-input" type="text" value="Emergency"></input>
        </div>
        <div className="form-group">
          <p className="field-title">
            Name (As per IC )<span className="pi-required">*</span>
          </p>
          <input className="form-input" type="text"></input>
        </div>
        <div className="form-group">
          <p className="field-title">Handphone no.</p>
          <div>
            <input
              className="form-input disabled-bg pi-input-25 pi-mrgn-rght"
              value="+63"
              type="text"
              disabled
            />
            <input
              type="text"
              value="9216442944"
              className="form-input disabled-bg pi-input-75"
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
