import React from "react";

const ThumbContent = ({ id, bigImg, slug, title, director }) => {
  return (
    <>
      <div className="thumb-content" data-link={slug} data-id={id}>
        <div
          className="thumb-img"
          style={{
            backgroundImage: `url(./src/assets/${bigImg})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
        <label className="name-session">{title}</label>
        <span className="name-artist">{director}</span>
      </div>
    </>
  );
};

export default ThumbContent;
