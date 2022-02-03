import React from "react";
import logo from "../../../Assets/header-logo.png";
import "./SignUp.css";

export const SignUp = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="Header Logo" />
          </div>
          <div className="header-nav">
            <a href="#">Employer Sign Up</a>
          </div>
        </div>
      </div>
      <div className="login-form-container">
        <div className="card-container">
          <h1>Employer Log In</h1>
          <div className="lf-inner-container">
            <div className="login-form-fields">
              <div className="input-group">
                <label>Email Address</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="text" />
              </div>
            </div>
            <div className="login-btn">
              <div className="login-btn-inner">
                <div className="lb-holder">
                  <button>Login</button>
                  <p>Forgot Password?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
