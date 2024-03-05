import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Protected } from "./Protected";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
    </Routes>
  );
};
