import React from "react";

const LinkRrss = ({ url, nameRss, slug }) => {
  return (
    <li>
      <a href={`${url}${slug}`}>
        {nameRss}
        <span>/{slug}</span>
      </a>
    </li>
  );
};

export default LinkRrss;
