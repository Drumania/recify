import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ThumbContent from "../components/ThumbContent";
import Donate from "../components/Donate";

//Fake Api
import { artist } from "../API/api_artist";
import { contents } from "../API/api_content";
import LinkRrss from "../components/LinkRrss";
import Timeline from "../components/Timeline";

const Artist = () => {
  let { artistSlug } = useParams();

  const artistElement = artist.find(
    (idArtistBySlug) => idArtistBySlug.slug === artistSlug
  );

  const artistContent = contents.filter(
    (content) => content.slugArtist === artistSlug
  );

  return (
    <>
      <div className="artist">
        <div>
          <div className="page-artist">
            <div
              className="img"
              style={{
                backgroundImage: `url(artist/${artistElement.logo})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              &nbsp;
            </div>
            <h1 className="name">
              {artistElement.title}
              <span>/{artistElement.slug}</span>
            </h1>
            <button className="btn-primary-outline">Follow</button>
          </div>

          <img className="big-img" src={`artist/big/${artistElement.bigpic}`} />
          {artistElement.sinopsis}

          {/* <h2> {artistElement.category}</h2> */}
          {artistElement.donate && <Donate />}

          <ul className="artist-rrss">
            {artistElement.facebook && (
              <LinkRrss
                url={`http://www.facebook.com/`}
                nameRss={"facebook"}
                slug={artistElement.facebook}
              />
            )}

            {artistElement.instagram && (
              <LinkRrss
                url={`http://www.instagram.com/`}
                nameRss={"instagram"}
                slug={artistElement.instagram}
              />
            )}
            {artistElement.twitter && (
              <LinkRrss
                url={`http://www.twitter.com/`}
                nameRss={"twitter"}
                slug={artistElement.twitter}
              />
            )}
            {artistElement.spotify && (
              <LinkRrss
                url={`http://www.spotify.com/`}
                nameRss={"spotify"}
                slug={artistElement.spotify}
              />
            )}
            {artistElement.youtube && (
              <LinkRrss
                url={`http://www.youtube.com/`}
                nameRss={"youtube"}
                slug={artistElement.youtube}
              />
            )}
          </ul>
        </div>

        <Timeline />
        {/*
         <div className="wrap-thumbs">
          {artistContent.map((element) => (
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
          ))} 
        </div>*/}
      </div>
    </>
  );
};

export default Artist;
