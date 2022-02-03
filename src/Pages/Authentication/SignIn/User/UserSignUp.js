import React from "react";
import logo from "../../../../Assets/header-logo.png";
import "./UserSignUp.css";
import GoogleLogin from "react-google-login";

export const UserSignUp = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

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
      <div className="user-signup-container">
        <div className="card-container">
          <h1>Cidekick Sign Up</h1>
          <p className="esu-desc">
            Be a Cidekick Gig Worker and start working in helping companies and
            brands while earning income and experience!
          </p>

          <div className="esu-field-container">
            <div className="fields-container">
              <label>Email Address</label>
              <input />
            </div>
            <div className="fields-container">
              <label>Phone Number</label>
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
              <p className="or-login">OR </p>
            </div>
          </div>
          <div className="google-holder">
            <div className="lb-holder-google">
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="my-google"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
