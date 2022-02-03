import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AuthRequired = ({ children }) => {
  const location = useLocation();
  const { loggedIn } = useSelector((state) => state.authReducer);
  console.log("ssss",loggedIn)

  if(!loggedIn){
    return <Navigate to="/signin" state={{ from: location }} />
  }

  return children
};
