import React from "react";

const Player = () => {
  return (
    <div className="player">
      <div className="video">
        <video width="200px" poster={`../src/assets/radio2.jpg`}>
          <source
            src={`../src/assets/videos/Radiohead - Bloom.mp4`}
            type="video/mp4"
          />
        </video>
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
          <span class="material-symbols-outlined">skip_previous</span>
          <span class="material-symbols-outlined">play_circle</span>
          <span class="material-symbols-outlined">pause</span>
          <span class="material-symbols-outlined">skip_next</span>
        </div>
        <div>
          <span class="material-symbols-outlined">volume_up</span>
          <span class="material-symbols-outlined">queue_music</span>
          {/* <span class="material-symbols-outlined">cast</span> */}
          <span class="material-symbols-outlined">expand_less</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
