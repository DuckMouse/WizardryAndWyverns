import React from "react";
import "./SigninButton.css";
import { Link } from "react-router-dom";

const SigninButton = ({ to, onClick, children }) => {
  return (
    <Link to={to}>
      <button className="signin-button" onClick={onClick}>Sign In
        {children}
      </button>
    </Link>
  );
};

export default SigninButton;
