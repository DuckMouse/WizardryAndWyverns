import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
