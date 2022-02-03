import React from "react";
import logo from "../../../../Assets/header-logo.png";
import "./ForgotPassword.css";

export const ForgotPassword = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="Header Logo" />
          </div>
          <div className="header-nav">
            Already have an account? <a href="#">Login</a>
          </div>
        </div>
      </div>
      <div className="forgot-password-container">
        <div className="card-container">
          <p className="esu-desc">
            No worries! Enter your email address or username and we'll send you
            the instructions to reset your password.
          </p>

          <div className="esu-field-container">
            <div className="fields-container">
              <label>Email Address</label>
              <input />
            </div>
          </div>
          <div className="esu-sbt-container">
            <div className="esu-sbt-container-inner">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
