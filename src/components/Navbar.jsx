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
            <span className="material-symbols-outlined">home</span> Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/discover">
            <span className="material-symbols-outlined">travel_explore</span>{" "}
            Discover
          </Link>
        </li>
        <li className="last-link">
          <Link className="nav-link" to="/nuevas">
            <span className="material-symbols-outlined">new_releases</span> New
          </Link>
        </li>
        <li>
          <h5 className="divider">Your library</h5>
        </li>
        <li>
          <Link className="nav-link" to="/RecentlyPlayed">
            Recently Played
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Favorites">
            Favorites
          </Link>
        </li>
        <li className="last-link">
          <Link className="nav-link" to="/Artists">
            Artists
          </Link>
        </li>
        <li>
          <h5 className="divider">Playlists</h5>
        </li>
        <li>
          <Link className="nav-link" to="/nuevas">
            Chill-Rock
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
