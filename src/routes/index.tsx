import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TimeTrackingPage } from "../pages/time-tracking-page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimeTrackingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
