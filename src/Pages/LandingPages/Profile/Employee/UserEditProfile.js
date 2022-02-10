import React from "react";
import logo from "../../../../Assets/header-logo.png";
import "./employeeProfile.css";
import profile from "../../../../Assets/ep.jpeg";

export const UserEditProfile = () => {
  return (
    <div style={{ width: "100%" }}>
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
      <div className="personal-info">
        {/* PERSONAL INFO */}
        {/* <div className="ep-update-nav">
          <p className="ep-update ep-update-active">Personal Info</p>
          <p className="ep-update">Personal Details (1/2)</p>
          <p className="ep-update">Personal Details (2/2)</p>
          <p className="ep-update">Account Settings/Payment</p>
        </div>
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
            <div style={{ display: "flex" }}>
              <input className="countryCodes" type="text"></input>
              <input
                type="text"
                className="form-input"
                placeholder="e.g 12323121"
                style={{ width: "54%" }}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <p className="field-title">Name of Emergency Contact</p>
            <input className="form-input" type="text"></input>
          </div>
          <div className="form-group">
            <p className="field-title">
              Name (As per IC )<span style={{ color: "red" }}>*</span>
            </p>
            <input className="form-input" type="text"></input>
          </div>
          <div className="form-group">
            <p className="field-title">Handphone no.</p>
            <div style={{ display: "flex" }}>
              <input className="countryCodes" type="text"></input>
              <input
                type="text"
                className="form-input"
                style={{ width: "54%" }}
                placeholder="e.g 12323121"
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
        </div> */}

        {/* PERSONAL DETAILS (1/2)  */}
        {/* <div className="ep-update-nav">
          <p className="ep-update ep-update-active">Personal Info</p>
          <p className="ep-update ep-update-active">Personal Details (1/2)</p>
          <p className="ep-update">Personal Details (2/2)</p>
          <p className="ep-update">Account Settings/Payment</p>
        </div>
        <div className="ep-update-info">
          <h2 className="ep-personal-title">Personal Details (1/2)</h2>
          <p className="ep-desc">
            This is kept private for Cidekick team to Contact you.
          </p>
          <div className="form-group">
            <p className="field-title">Cidekick Account</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                className="form-input"
                type="text"
                value="Malaysia"
                disabled
                style={{ backgroundColor: "#e9ecef", width: "82%" }}
              />
              <p style={{ color: "#6c757d", fontSize: 12, width: "82%" }}>
                This is the country based on your phone numbers. And can not be
                changed
              </p>
            </div>
          </div>
          <div className="form-group">
            <p className="field-title">
              Current State <span style={{ color: "Red" }}>*</span>
            </p>
            <div>
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
              <option>Select Size</option>
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
            <div>
              <input className="form-radio" type="radio" value="Yes" />
              <span className="radio-label">Yes</span>
            </div>
            <div>
              <input className="form-radio" type="radio" value="Yes" />
              <span className="radio-label">No</span>
            </div>
          </div>
          <div className="form-group">
            <p className="field-title">Gender</p>
            <div>
              <input className="form-radio" type="radio" value="Male" />
              <span className="radio-label">Male</span>
            </div>
            <div>
              <input className="form-radio" type="radio" value="Female" />
              <span className="radio-label">Female</span>
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
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
          <div className="form-group">
            <p className="field-title">About Me</p>
            <textarea></textarea>
          </div>
          <div className="form-buttons">
            <button className="back">Back</button>
            <button className="save">Save {"&"} Continue</button>
          </div>
        </div> */}

        {/* PERSONAL DETAILS (2/2) */}
        {/* <div className="ep-update-nav">
          <p className="ep-update ep-update-active">Personal Info</p>
          <p className="ep-update ep-update-active">Personal Details (1/2)</p>
          <p className="ep-update ep-update-active">Personal Details (2/2)</p>
          <p className="ep-update">Account Settings/Payment</p>
        </div>
        <div className="ep-update-info">
          <h2 className="ep-personal-title">Personal Details (2/2)</h2>
          <p className="ep-desc">
            This is kept private for Cidekick team to Contact you.
          </p>
          <div className="form-group">
            <p className="field-title">Skill Set</p>
            <input
              className="form-input"
              style={{ width: "65%" }}
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <p className="field-title">Profile Picture</p>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
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
            <input className="form-input" type="text" />
          </div>
          <div className="form-group">
            <p className="field-title">Add Video</p>
            <input className="form-input" type="text" />
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
            <input
              className="form-input"
              type="text"
              maxLength={3}
              value="0.0"
            />
          </div>
          <div className="form-group">
            <p className="field-title">Waist (Inches)</p>
            <input
              className="form-input"
              type="text"
              maxLength={3}
              value="0.0"
            />
          </div>
          <div className="form-group">
            <p className="field-title">Hips (Inches)</p>
            <input
              className="form-input"
              type="text"
              maxLength={3}
              value="0.0"
            />
          </div>
        </div> */}

        {/* ACCOUNT SETTINGS/PAYMENT */}

        <div className="ep-update-nav">
          <p className="ep-update ep-update-active">Personal Info</p>
          <p className="ep-update ep-update-active">Personal Details (1/2)</p>
          <p className="ep-update ep-update-active">Personal Details (2/2)</p>
          <p className="ep-update ep-update-active">Account Settings/Payment</p>
        </div>
        <div className="ep-update-info">
          <h2 className="ep-personal-title">Account Settings/Payment</h2>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">Account Email</p>
            <input
              className="form-input"
              type="text"
              value="sample@gmail.com"
              disabled
              style={{ backgroundColor: "#e9ecef" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">Phone number</p>
            <input
              className="form-input"
              type="text"
              value="+63"
              disabled
              style={{
                backgroundColor: "#e9ecef",
                width: "9%",
                marginRight: 10,
              }}
            />
            <input
              className="form-input"
              type="text"
              value="9216442944"
              disabled
              style={{ backgroundColor: "#e9ecef", width: "30%" }}
            />
          </div>
          <div
            className="form-group"
            style={{ marginTop: 50, borderBottom: "1px solid #f4f4f4" }}
          >
            <p className="field-title"></p>
            <button className="back" style={{ width: "40%", marginBottom: 60 }}>
              Back
            </button>
          </div>
          <h2 className="ep-personal-title">Payment Details</h2>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">
              Bank Account<span style={{ color: "red" }}>*</span>
            </p>
            <select className="form-input">
              <option>Please Select Your Bank</option>
            </select>
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">
              Account Number<span style={{ color: "red" }}>*</span>
            </p>
            <input className="form-input" type="text" value="111111111" />
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">
              Account Holder Name<span style={{ color: "red" }}>*</span>
            </p>
            <input className="form-input" type="text" value="111111111" />
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">
              Account Type<span style={{ color: "red" }}>*</span>
            </p>
            <div>
              <input className="form-radio" type="radio" value="111111111" />
              <label>Savings Account</label>
            </div>
            <div>
              <input className="form-radio" type="radio" value="111111111" />
              <label>Savings Account</label>
            </div>
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">Pending Payment</p>
            <input
              className="form-input"
              type="text"
              value="sample@gmail.com"
              disabled
              style={{ backgroundColor: "#e9ecef" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">Payment History</p>
            <button className="back" style={{ width: "40%" }}>
              View Income Statement
            </button>
          </div>
          <div className="form-group" style={{ marginTop: 50 }}>
            <p className="field-title">Job History</p>
            <button className="back" style={{ width: "40%" }}>
              View Job History
            </button>
          </div>
          <div className="form-buttons">
            <button className="back" style={{ width: "30%" }}>
              Back
            </button>
            <button className="save">Save {"&"} Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
