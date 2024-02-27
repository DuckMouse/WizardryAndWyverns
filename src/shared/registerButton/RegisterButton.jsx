import React from "react";
import "./RegisterButton.css";
import { Link } from "react-router-dom";

const RegisterButton = ({ to, onClick, children }) => {
  return (
    <Link to={to}>
      <button className="register-button" onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default RegisterButton;
