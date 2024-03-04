import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
        )}
        {!user && (
          <>
            <li>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={handleSignOut}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;