import React from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Protected } from "./Protected";

export const protectedRoutes = [{
  path: "/dashboard", name: "Dashboard", element: <Protected><Dashboard /></Protected>, isMenu: true, isAuthenticated: true
},
]