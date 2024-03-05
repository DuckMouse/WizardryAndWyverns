import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import AuthRoutes from "./routes/AuthRoutes"; 
import StaticRoutes from "./routes/StaticRoutes";
import DashboardRoutes from "./routes/DashboardRoutes"; 
import { AuthContextProvider } from "./context/AuthContext";

function App() {
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

export default App;