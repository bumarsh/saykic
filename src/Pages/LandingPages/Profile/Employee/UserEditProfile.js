import React, { useState } from "react";
import logo from "../../../../Assets/header-logo.png";
import "./employeeProfile.css";
import { PersonalInfo } from "./UpdateProfile/PersonalInfo";
import PersonalDetails1 from "./UpdateProfile/PersonalDetails1";
import PersonalDetails2 from "./UpdateProfile/PersonalDetails2";
import AccountSettingsPayment from "./UpdateProfile/AccountSettingsPayment";

export const UserEditProfile = () => {
  const [active, setActive] = useState(1);

  const activePage = () => {
    switch (active) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <PersonalDetails1 />;
      case 3:
        return <PersonalDetails2 />;
      case 4:
        return <AccountSettingsPayment />;
      default:
        break;
    }
  };

  const handleView = (val) => {
    setActive(val);
  };

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
        <div className="ep-update-nav">
          <p
            onClick={() => handleView(1)}
            className={`ep-update ep-update-active`}
          >
            Personal Info
          </p>
          <p
            onClick={() => handleView(2)}
            className={`ep-update ${
              (active === 2 || active === 3 || active === 4) &&
              "ep-update-active"
            }`}
          >
            Personal Details (1/2)
          </p>
          <p
            onClick={() => handleView(3)}
            className={`ep-update ${
              (active === 3 || active === 4) && "ep-update-active"
            }`}
          >
            Personal Details (2/2)
          </p>
          <p
            onClick={() => handleView(4)}
            className={`ep-update ${active === 4 && "ep-update-active"}`}
          >
            Account Settings/Payment
          </p>
        </div>

        {activePage()}
      </div>
    </div>
  );
};
