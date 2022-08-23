import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo125.png";

const Navbar = () => {
  return (
    <nav>
      <Link className="wrap-logo" to="/">
        <img src={logo} alt="logo" />
      </Link>

      <ul className="nav-item">
        <li>
          <Link className="nav-link active" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Nuevas
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/category">
            Categorias
          </Link>

          <ul>
            <li>
              <a href="#!">Terror</a>
            </li>
            <li>
              <a href="#!">Drama</a>
            </li>
            <li>
              <a href="#!">Comedia</a>
            </li>
            <li>
              <a href="#!">Documental</a>
            </li>
            <li>
              <a href="#!">Ciencia ficción</a>
            </li>
          </ul>
        </li>
      </ul>
      <a href="#!" className="btn-primary login">
        Login
      </a>
    </nav>
  );
};

export default Navbar;
