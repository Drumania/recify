import React from "react";

const ThumbPlaylist = () => {
  return (
    <div className="thumb-playlist">
      <div className="thumb-img">
        <div
          className="img"
          style={{
            backgroundImage: `url(radio2.jpg)`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(radio1.jpg)`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(tamaimpa.png)`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(ff.jpg)`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          &nbsp;
        </div>
      </div>
      <div className="name">
        <span>Chill-Rock</span>
        <div className="duration">
          <label>1 hour</label>
        </div>
      </div>
    </div>
  );
};

export default ThumbPlaylist;
