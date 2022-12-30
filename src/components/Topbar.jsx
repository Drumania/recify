import React from "react";
import Login from "./Login";
import useLogin from "../hooks/useLogin";
import user_no_photo from "../assets/icos/user_no_photo.svg";

const Topbar = () => {
  const { isLogged, loginForm, setLoginForm, user, logout } = useLogin();

  return (
    <div className="topbar">
      <div className="arrow-nav">
        <button>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div id="search">
        <input type="search" placeholder="Search..." />
        <span class="material-symbols-outlined">search</span>
      </div>
      <div id="user">
        {isLogged ? (
          <div className="user-loged">
            <button>
              <span class="material-symbols-outlined">notifications</span>
            </button>
            <img src={user_no_photo} alt="user_no_photo" />
            <strong>{user.nombre}</strong>

            <button>
              <span class="material-symbols-outlined">expand_more</span>
            </button>
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
