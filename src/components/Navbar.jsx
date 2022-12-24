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
          <h5 className="divider">Menu</h5>
        </li>
        <li>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/nuevas">
            Discover
          </Link>
        </li>
        <li className="last-link">
          <Link className="nav-link" to="/nuevas">
            New
          </Link>
        </li>
        <li>
          <h5 className="divider">User</h5>
        </li>
        <li>
          <Link className="nav-link" to="/nuevas">
            Favorites
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/nuevas">
            Artists
          </Link>
        </li>
        {/* <li>
          <details>
            <summary className="nav-link">Categorias</summary>
            <ul>
              <li>
                <Link to="/category/Terror">Terror</Link>
              </li>
              <li>
                <Link to="/category/Drama">Drama</Link>
              </li>
              <li>
                <Link to="/category/Comedia">Comedia</Link>
              </li>
              <li>
                <Link to="/category/Documental">Documental</Link>
              </li>
              <li>
                <Link to="/category/Ciencia ficción">Ciencia ficción</Link>
              </li>
            </ul>
          </details>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <a href="#" onClick={onLogout}>Logout</a> */
}
