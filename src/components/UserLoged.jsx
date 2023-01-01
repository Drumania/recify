import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import userPhoto from "../assets/martinperfil.jpg";

const UserLoged = () => {
  const { user, logout } = useLogin();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="user-loged">
      <button>
        <span className="material-symbols-outlined">notifications</span>
      </button>
      <div className="user" onClick={() => setOpenDropdown((open) => !open)}>
        <div
          className="user-photo"
          style={{
            backgroundImage: `url(${userPhoto})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
        <strong>{user.nombre}</strong>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      {openDropdown && (
        <div className="user-dropdown">
          <a href="#!">Profile</a>
          <a href="#!">Setting</a>
          <a href="#!" onClick={() => logout()}>
            logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserLoged;
