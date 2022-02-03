import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "../Provider/ReduxProvider";
import { LandingRoute } from "./Routes/LandingRoute";

const App = () => {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <LandingRoute />
      </ReduxProvider>
    </BrowserRouter>
  );
};

export default App;
