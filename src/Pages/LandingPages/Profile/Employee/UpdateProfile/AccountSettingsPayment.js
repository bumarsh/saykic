import React from "react";
import "./AccountSettingsPayment.css";

export default function AccountSettingsPayment() {
  return (
    <>
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
          <div className="as-number-holder">
            <input
              className="form-input as-number-left"
              type="text"
              value="+63"
              disabled
              style={{
                backgroundColor: "#e9ecef",
                marginRight: 10,
              }}
            />
            <input
              className="form-input as-number-right"
              type="text"
              value="9216442944"
              disabled
              style={{ backgroundColor: "#e9ecef" }}
            />
          </div>
        </div>
        <div
          className="form-group"
          style={{ marginTop: 50, borderBottom: "1px solid #f4f4f4" }}
        >
          <p className="field-title"></p>
          <button className="back as-change-password">Change Password</button>
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
          <p className="field-title" style={{ marginTop: 0 }}>
            Account Type<span style={{ color: "red" }}>*</span>
          </p>
          <div className="as-radio-buttons">
            <label className="radio radios_label">
              Savings Account
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="Yes"
              />
              <span class="checkRound"></span>
            </label>
            <label className="radio radios_label">
              Current Account
              <input
                className="form-radio"
                type="radio"
                name="own-transport"
                value="No"
              />
              <span class="checkRound"></span>
            </label>
          </div>
          {/* <div>
            <input className="form-radio" type="radio" value="111111111" />
            <label>Savings Account</label>
          </div>
          <div>
            <input className="form-radio" type="radio" value="111111111" />
            <label>Savings Account</label>
          </div> */}
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
          <button className="back as-btn">View Income Statement</button>
        </div>
        <div className="form-group" style={{ marginTop: 50 }}>
          <p className="field-title">Job History</p>
          <button className="back as-btn">View Job History</button>
        </div>
        <div className="form-buttons">
          <button className="back as-back">Back</button>
          <button className="save">Save {"&"} Complete</button>
        </div>
      </div>
    </>
  );
}
