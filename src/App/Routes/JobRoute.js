import React from "react";
import { Route } from "react-router-dom";
import { Jobs } from "../../Pages";
import { AuthRequired } from "./components";

export const JobRoute = () => {
  return (
    <React.Fragment>
      <Route path={"jobs"} element={<Jobs />}></Route>
      <Route
        path={"jobs/manage"}
        element={
          <AuthRequired>
            <Jobs />
          </AuthRequired>
        }
      />
    </React.Fragment>
  );
};
