import React from "react";
import Login from "./Login";
import useLogin from "../hooks/useLogin";
import UserLoged from "./UserLoged";

const Topbar = () => {
  const { isLogged, loginForm, setLoginForm, user, logout } = useLogin();

  return (
    <div className="topbar">
      <div className="arrow-nav">
        <button>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div id="search">
        <input type="search" placeholder="Search..." />
        <span className="material-symbols-outlined">search</span>
      </div>
      <div id="user">
        {isLogged ? (
          <UserLoged />
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
