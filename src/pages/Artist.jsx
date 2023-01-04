import React from "react";
import { useParams } from "react-router-dom";
import ThumbContent from "../components/ThumbContent";

//Fake Api
import { artist } from "../API/api_artist";
import { contents } from "../API/api_content";

const Artist = () => {
  let { artistSlug } = useParams();

  const artistCont = artist.find((idslug) => idslug.slug === artistSlug);

  const artistContent = contents.find(
    (content) => content.slugArtist === artistSlug
  );
  console.log(artistContent);
  return (
    <>
      <h3>{artistCont.title}</h3>

      <div className="artist">
        <div className="col">
          {artistCont.id}
          <br />
          <br />
          {artistCont.logo}
          <br />
          <br />
          {artistCont.sinopsis}
          <br />
          <br />
          {artistCont.title}
          <br />
          <br />
          {artistCont.slug}
          <br />
          <br />
          {artistCont.category}
          <br />
          <br />
        </div>
        <div className="wrap-thumbs">
          <ThumbContent
            key={artistContent.id}
            id={artistContent.id}
            bigImg={artistContent.bigImg}
            slug={artistContent.slug}
            title={artistContent.title}
            artist={artistContent.artist}
            duration={artistContent.duration}
            year={artistContent.year}
          />
        </div>
      </div>
    </>
  );
};

export default Artist;
