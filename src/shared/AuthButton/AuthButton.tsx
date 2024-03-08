import React from "react";
import "./AuthButton.css";
import { Link } from "react-router-dom";

export const AuthButton = ({ to, onClick, children, displayText, color }) => {
  const buttonClassName = `auth-button ${color}-button`;

  return (
    <Link to={to}>
      <button className={buttonClassName} onClick={onClick}>
        {displayText}
        {children}
      </button>
    </Link>
  );
};
