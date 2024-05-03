import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="custom-nav">
        <ul className="cont-ul">
       

          <li className="develop">
            <NavLink aria-current="page" to="/social/salir">Salir</NavLink>
          </li>
        </ul>

      </nav>

    </>
  );
};

export default Nav;