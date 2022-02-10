import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Jobs,
  SignIn,
  UserSignIn,
  UserSignUp,
  EmployerSignUp,
  ForgotPassword,
  EmployeeProfile,
  EmployerProfile,
  UserEditProfile,
} from "../../Pages";
import { AuthRequired } from "./components";

export const LandingRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />

      {/* auth */}
      <Route path={"employer/login"} element={<SignIn />} />
      <Route path={"employer/signup"} element={<EmployerSignUp />} />

      <Route path={"user/login"} element={<UserSignIn />} />
      <Route path={"user/forgot_password"} element={<ForgotPassword />} />
      <Route path={"user/signup"} element={<UserSignUp />} />

      {/* Profile */}
      <Route path={"profile"} element={<EmployeeProfile />} />
      <Route path={"employee/update_profile"} element={<UserEditProfile />} />

      {/* Company */}
      <Route path={"company"} element={<EmployerProfile />} />

      {/* jobs */}
      <Route path={"jobs"} element={<Jobs />}></Route>
      <Route
        path={"jobs/manage"}
        element={
          <AuthRequired>
            <Jobs />
          </AuthRequired>
        }
      />
    </Routes>
  );
};
