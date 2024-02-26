import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Loading delay if we want to add animation or logo later

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <Router>
      <div>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div>

            <div className="buttons">
              <button onClick={handleLoginClick}>Login</button>
              <button onClick={handleRegisterClick}>Register</button>
            </div>


            {showLogin && <Login />}
            {showRegister && <Register />}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;