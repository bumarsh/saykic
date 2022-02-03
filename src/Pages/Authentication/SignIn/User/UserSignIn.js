import React from "react";
import "./UserSignIn.css";
import logo from "../../../../Assets/header-logo.png";
import GoogleLogin from "react-google-login";

export function UserSignIn() {
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
        </div>
      </div>
      <div className="login-form-container">
        <div className="card-container">
          <h1>Cidekick Log In</h1>
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
                  <p className="or-login">OR </p>
                </div>
              </div>
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
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
