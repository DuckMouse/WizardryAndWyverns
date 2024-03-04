import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Dashboard from "../components/Dashboard/Dashboard";

export const Protected = () => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return <Dashboard />;
};
