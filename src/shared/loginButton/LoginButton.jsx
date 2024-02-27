import React from "react";
import "./LoginButton.css";
import { Link } from "react-router-dom";

const LoginButton = ({ to, onClick, children }) => {
  return (
    <Link to={to}>
      <button className="login-button" onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default LoginButton;
