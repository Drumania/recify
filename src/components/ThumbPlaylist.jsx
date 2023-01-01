import React from "react";

const ThumbPlaylist = () => {
  return (
    <div className="thumb-playlist">
      <div className="thumb-img">
        <div
          className="img"
          style={{
            backgroundImage: `url(../src/assets/radio2.jpg)`,
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
            backgroundImage: `url(../src/assets/radio1.jpg)`,
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
            backgroundImage: `url(../src/assets/tamaimpa.png)`,
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
            backgroundImage: `url(../src/assets/ff.jpg)`,
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
