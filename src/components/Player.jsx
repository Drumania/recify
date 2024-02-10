import React, { useRef, useState } from "react";

const Player = () => {
  const videoRef = useRef();
  const [stop, setStop] = useState(false);
  const [volume, setVolume] = useState(true);

  const [playerFull, setPlayerFull] = useState(false);

  const handleVideo = () => {
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleVolume = () => {
    setVolume(!volume);
    if (volume === true) {
      videoRef.current.defaultMuted == true;
      videoRef.current.muted == true;
    } else {
      videoRef.current.defaultMuted == false;
      videoRef.current.muted == false;
    }
  };

  return (
    <div className={playerFull ? "player-full" : "player"}>
      <div className="video">
        <video
          width="100%"
          height="100%"
          poster={`../src/assets/radio2.jpg`}
          ref={videoRef}
        >
          <source
            src={`../src/assets/videos/Radiohead - Bloom.mp4`}
            type="video/mp4"
            controls
          />
        </video>
        <span
          class="maximize-video material-symbols-outlined"
          onClick={() => setPlayerFull((open) => !open)}
        >
          open_in_new
        </span>
      </div>
      <div className="player-wrapper">
        <div>
          <span className="title">
            The King Of Limbs From The Basement <br />
          </span>
          <a href="#" className="artist">
            Radiohead
          </a>
        </div>
        <div>
          <span className="material-symbols-outlined">skip_previous</span>
          <span
            className="material-symbols-outlined"
            onClick={() => handleVideo()}
          >
            {stop ? "pause" : "play_circle"}
          </span>
          <span className="material-symbols-outlined">skip_next</span>
        </div>
        <div>
          <span
            className="material-symbols-outlined"
            onClick={() => handleVolume()}
          >
            volume_up
          </span>
          <span className="material-symbols-outlined">queue_music</span>
          {/* <span className="material-symbols-outlined">cast</span> */}
          <span
            className="material-symbols-outlined"
            onClick={() => setPlayerFull((open) => !open)}
          >
            expand_less
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
