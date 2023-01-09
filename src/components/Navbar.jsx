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
          <Link className="nav-link" to="/followedartists">
            Artists
          </Link>
        </li>
        <li>
          <h5 className="divider">Playlists</h5>
        </li>
        <li>
          <Link className="nav-link create-playlist" to="/playlist">
            <span className="material-symbols-outlined">post_add</span>
            Create Playlist
          </Link>
          <Link className="nav-link" to="/playlist/rockfortheday">
            Rock for the day
          </Link>
          <Link className="nav-link" to="/playlist/chill-rock">
            Chill Rock
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <a href="#" onClick={onLogout}>Logout</a> */
}
