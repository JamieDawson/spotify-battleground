import React from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.styles.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Main Page</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
