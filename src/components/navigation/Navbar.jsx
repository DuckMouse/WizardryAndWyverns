import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Navbar.css";
import { UseHandleSignOut } from "../auth/utilities";
import { routes } from "../../routes/AppRoutes";

export function Navbar() {
  const { user } = UserAuth();
  const handleSignOut = UseHandleSignOut();

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

export const TopNavBar = () => {
  const { user } = UserAuth();
  const handleSignOut = UseHandleSignOut();

  const NabBarItem = ({ route }) => {
    return (
      <li>
        <NavLink to={route.path}>{route.name}</NavLink>
      </li>
    )
  }

  return (
    <nav>
      <ul className="navbar">
        {routes.map((r, i) => {
          if (!r.isAuthenticated && r.isMenu) {
            return (<NabBarItem key={i} route={r} />)
          } else if (!user.isAnonymous && r.isMenu) {
            return (<NabBarItem key={i} route={r} />)
          }
          else return false
        })}
        {
          !user.isAnonymous ?
            <li className="auth-link"><Link to={'#'} onClick={handleSignOut}>Log out</Link></li> :
            <li className="auth-link"><Link to={'signin'}>Sign In</Link></li>
        }
      </ul>
    </nav>
  )

}