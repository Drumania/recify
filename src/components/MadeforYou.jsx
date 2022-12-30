import React from "react";
import ThumbContent from "./ThumbContent";

//Fake Api
import { contents } from "../API/api_content";

const MadeforYou = () => {
  return (
    <div className="made-for-you">
      <h2>Made for you</h2>
      <div className="wrap-thumbs">
        {contents.map(
          (element) =>
            element.trending && (
              <ThumbContent
                key={element.id}
                id={element.id}
                bigImg={element.bigImg}
                slug={element.slug}
                title={element.title}
                artist={element.artist}
                duration={element.duration}
                year={element.year}
              />
            )
        )}
      </div>
    </div>
  );
};

export default MadeforYou;
