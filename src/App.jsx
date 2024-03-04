import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import AuthRoutes from "./routes/AuthRoutes"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <AuthRoutes />
          <DashboardRoutes /> 
        </div>
      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;