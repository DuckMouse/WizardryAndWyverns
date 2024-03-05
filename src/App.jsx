import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";
import { AuthRoutes, StaticRoutes, DashboardRoutes } from './routes'
import { AuthContextProvider } from "./context/AuthContext";

export function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <nav>
            <Navbar />
          </nav>
          <div>
            <StaticRoutes />
            <AuthRoutes />
            <DashboardRoutes />
          </div>
        </div>
      </Router>
    </AuthContextProvider>
  );
}
