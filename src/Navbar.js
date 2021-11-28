import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/table">
            Table
          </NavLink>
          <NavLink to="/graph">
            Graph
          </NavLink>
          <NavLink to="/pie-chart">
            Pie Chart
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

