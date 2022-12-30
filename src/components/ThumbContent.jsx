import React from "react";

const ThumbContent = ({ id, bigImg, slug, title, artist, duration, year }) => {
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
        <div className="name">
          <div>
            <label className="name-session">{title}</label>
            <span className="name-artist">{artist}</span>
          </div>
          <div className="duration">
            <label>{duration}</label> <sup>{year}</sup>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbContent;
