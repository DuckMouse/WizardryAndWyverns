import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Navbar.css";
import { routes } from "../../routes/AppRoutes";

export const TopNavBar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = logOut;

  const NavBarItem = ({ route }: any) => {
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
          } else if (!user?.isAnonymous && user && r.isMenu) {
            return (<NavBarItem key={i} route={r} />)
          }
          else return false
        })}
        {
          !!user && !user?.isAnonymous ?
            <li className="auth-link"><Link to={'#'} onClick={handleSignOut}>Log out</Link></li> :
            <li className="auth-link"><Link to={'signin'}>Sign In</Link></li>
        }
      </ul>
    </nav>
  )

}