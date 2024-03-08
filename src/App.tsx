import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopNavBar } from "./components/navigation/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { RenderRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <nav>
            <TopNavBar />
          </nav>
          <div>
            {<RenderRoutes />}
          </div>
        </div>
      </Router>
    </AuthContextProvider>
  );
}
