import React from "react";

const ThumbContent = ({
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
    <>
      <div className="thumb-content" data-id={id}>
        <div
          className="thumb-img"
          style={{
            backgroundImage: `url(./src/assets/${bigImg})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button>
            <a
              href={`/s/` + slug}
              class="btn-play-thumb material-symbols-outlined"
              title="Play"
            >
              play_circle
            </a>
          </button>
          <button>
            <span
              class="btn-add-queue material-symbols-outlined"
              title="Add to queued"
            >
              playlist_add
            </span>
          </button>
        </div>
        <div className="name">
          <div>
            <a href={`/s/` + slug} className="name-session">
              {title}
            </a>
            <a href={slugArtist} className="name-artist">
              {artist}
            </a>
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
