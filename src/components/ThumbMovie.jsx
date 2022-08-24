import React from "react";

const ThumbMovie = ({ id, bigImg, slug, title }) => {
  return (
    <>
      <div
        className="thumb-movie"
        key={id}
        style={{
          backgroundImage: `url(../src/assets/${bigImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <a href={slug} className="full-link" title={title}>
          <label>{title}</label>
        </a>
      </div>
    </>
  );
};

export default ThumbMovie;
