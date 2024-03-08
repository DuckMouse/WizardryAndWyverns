import React from "react";
import "./AuthButton.css";
import { Link } from "react-router-dom";

export interface IAuthProperties {
  to: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: any;
  displayText?: string;
  color?: string
}

export const AuthButton = ({ to, onClick, children, displayText, color }: IAuthProperties) => {
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
