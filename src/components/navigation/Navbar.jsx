import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Navbar.css";
import { UseHandleSignOut } from "../auth/utilities";
import { routes } from "../../routes/AppRoutes";

export const TopNavBar = () => {
  const { user } = UserAuth();
  const handleSignOut = UseHandleSignOut();

  const NavBarItem = ({ route }) => {
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
            return (<NavBarItem key={i} route={r} />)
          } else if (!user?.isAnonymous && r.isMenu) {
            return (<NavBarItem key={i} route={r} />)
          }
          else return false
        })}
        {
          !!user?.isAnonymous ?
            <li className="auth-link"><Link to={'#'} onClick={handleSignOut}>Log out</Link></li> :
            <li className="auth-link"><Link to={'signin'}>Sign In</Link></li>
        }
      </ul>
    </nav>
  )

}