import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Protected = ({ children }: any) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
