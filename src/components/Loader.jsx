import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LoginButton from "../shared/loginButton/LoginButton";
import RegisterButton from "../shared/registerButton/RegisterButton";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Simulated Loading for us to add animation or logo before login and registraton
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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="buttons">
            <LoginButton to="/login" onClick={handleLoginClick}>
              Login
            </LoginButton>
            <RegisterButton to="/register" onClick={handleRegisterClick}>
              Register
            </RegisterButton>
          </div>

          {showLogin && (
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          )}

          {showRegister && (
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
          )}
        </div>
      )}
    </div>
  );
};

export default Loader;
