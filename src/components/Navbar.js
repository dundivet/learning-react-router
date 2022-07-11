import { NavLink } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/users"
          >
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            Sobre nosotros
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
