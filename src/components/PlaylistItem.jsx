import React from "react";

const PlaylistItem = ({
  id,
  bigImg,
  slug,
  title,
  artist,
  slugArtist,
  duration,
  year,
}) => {
  return (
    <div className="playlist-content" data-id={id}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${bigImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        &nbsp;
      </div>

      <span className="title">
        <strong>{title}</strong> ({year})
      </span>
      <a href={slugArtist} className="artist">
        {artist}
      </a>
      <div className="duration">
        <label>{duration}</label> <sup></sup>
      </div>
    </div>
  );
};

export default PlaylistItem;
