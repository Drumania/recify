import React from "react";
import search from "../assets/icos/icon_ios7_search_strong_strong_search.svg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div id="search">
        <img src={search} alt="search" />
        <input type="search" placeholder="Search..." />
      </div>
      <div id="user">Login</div>
    </div>
  );
};

export default Topbar;
