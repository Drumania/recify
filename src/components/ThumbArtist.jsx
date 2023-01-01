import React from "react";

const ThumbArtist = ({ id, title, slug, logo }) => {
  return (
    <a href={slug} className="thumb-artist" data-id={id}>
      <div
        className="img"
        style={{
          backgroundImage: `url(./src/assets/artist/${logo})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        &nbsp;
      </div>
      <div className="name">{title}</div>
    </a>
  );
};

export default ThumbArtist;
