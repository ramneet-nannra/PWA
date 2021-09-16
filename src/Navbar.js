import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/table" activeStyle>
            Table
          </NavLink>
          <NavLink to="/graph" activeStyle>
            Graph
          </NavLink>
          <NavLink to="/pie-chart" activeStyle>
            Pie Chart
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
