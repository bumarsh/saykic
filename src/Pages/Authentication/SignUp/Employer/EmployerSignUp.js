import React from "react";
import logo from "../../../../Assets/header-logo.png";
import "./EmployerSignUp.css";

export const EmployerSignUp = () => {
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
      <div className="employer-sign-up login-form-container">
        <div className="card-container">
          <h1>Employer Sign Up</h1>
          <p className="esu-desc">
            Start hiring soon! We will grant you access once we verify your
            company and contact person
          </p>

          <div className="esu-field-container">
            <div className="fields-container">
              <label>Company Email</label>
              <input />
            </div>
            <div className="fields-container">
              <label>Company Name</label>
              <input />
            </div>
            <div className="fields-container">
              <label>Contact Person</label>
              <input />
            </div>
            <div className="fields-container">
              <label>Contact Number</label>
              <div className="esu-contact-number">
                <div>
                  <select className="esu-select">
                    <option>Philippines (+63)</option>
                    <option>Malaysia (+60)</option>
                  </select>
                </div>
                <div>
                  <input className="esu-select-input" />
                </div>
              </div>
            </div>
            <div className="fields-container">
              <label>Password</label>
              <input />
            </div>
            <div className="fields-container">
              <label>Re-enter Password</label>
              <input />
            </div>
          </div>
          <div className="esu-sbt-container">
            <div className="esu-sbt-container-inner">
              <div className="tac">
                <input type="checkbox" />
                <span>
                  I agree to Cidekick <a href="#">Terms and Conditions</a>
                </span>
              </div>

              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
