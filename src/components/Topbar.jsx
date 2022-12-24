import React from "react";
import search from "../assets/icos/strong_search_g.svg";
import Login from "./Login";
import useLogin from "../hooks/useLogin";
import bell from "../assets/icos/bell.svg";
import user_no_photo from "../assets/icos/user_no_photo.svg";

const Topbar = () => {
  const { isLogged, loginForm, setLoginForm, user, logout } = useLogin();

  return (
    <div className="topbar">
      <div id="search">
        <input type="search" placeholder="Search..." />
        <img src={search} alt="search" />
      </div>
      <div id="user">
        {isLogged ? (
          <div className="user-loged">
            <img src={user_no_photo} alt="user_no_photo" />
            <strong>{user.nombre}</strong>
            <img src={bell} alt="bell" />
            <a href="#!" onClick={() => logout()}>
              Salir
            </a>
          </div>
        ) : (
          <a
            href="#!"
            className="btn-primary login"
            onClick={() => setLoginForm(true)}
          >
            Login
          </a>
        )}

        {loginForm && <Login />}
      </div>
    </div>
  );
};

export default Topbar;
