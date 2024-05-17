import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="custom-nav">
        <ul className="cont-ul">
          <li className="develop">
            <li className="front">
              Usuarios
              <ul className="ul-third">
                <li className="back"><NavLink to="/social/cargar-persona">Cargar  </NavLink></li>
                <li className="back"><NavLink to="/social/lista-persona">Ver  </NavLink></li>
              </ul>
            </li>
          </li>
          <li className="develop">


            <li className="front">
              Manuales
              <ul className="ul-third">
                <li className="back"><NavLink to="/social/guardar-manual">Cargar</NavLink></li>
                <li className="back"><NavLink to="/social/ver-manual">Ver</NavLink></li>
              </ul>
            </li>
          </li>

          <li className="develop">
            <NavLink aria-current="page" to="/social/salir">Salir</NavLink>
          </li>
        </ul>

      </nav>

    </>
  );
};

export default Nav;