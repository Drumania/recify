import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ThumbContent from "../components/ThumbContent";

//Fake Api
import { artist } from "../API/api_artist";
import { contents } from "../API/api_content";

const Artist = () => {
  let { artistSlug } = useParams();
  const [donate, setDonate] = useState(25);

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
                backgroundImage: `url(./src/assets/artist/${artistElement.logo})`,
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

          <img
            className="big-img"
            src={`./src/assets/artist/big/${artistElement.bigpic}`}
          />
          {artistElement.sinopsis}

          {/* <h2> {artistElement.category}</h2> */}
          {artistElement.donate && (
            <ul className="artist-donate">
              <li>Donate for this artist:</li>
              <li className="artist-usd">
                <button
                  className={donate === 10 && "active"}
                  onClick={() => setDonate(10)}
                >
                  10 $
                </button>
                <button
                  className={donate === 25 && "active"}
                  onClick={() => setDonate(25)}
                >
                  25 $
                </button>
                <button
                  className={donate === 50 && "active"}
                  onClick={() => setDonate(50)}
                >
                  50 $
                </button>
                <button
                  className={donate === 100 && "active"}
                  onClick={() => setDonate(100)}
                >
                  100 $
                </button>
                <button
                  className={donate === 500 && "active"}
                  onClick={() => setDonate(500)}
                >
                  500 $
                </button>
                <button
                  className={donate === 1000 && "active"}
                  onClick={() => setDonate(1000)}
                >
                  1000 $
                </button>
              </li>
              <li>
                <a href="#" className="btn-primary-outline">
                  Send
                </a>
              </li>
            </ul>
          )}
          <ul className="artist-rrss">
            {artistElement.facebook && (
              <li>
                <a href={`http://www.facebook.com/${artistElement.facebook}`}>
                  facebook
                  <span>/{artistElement.facebook}</span>
                </a>
              </li>
            )}
            {artistElement.instagram && (
              <li>
                <a href={`http://www.instagram.com/${artistElement.instagram}`}>
                  instagram
                  <span>/{artistElement.instagram}</span>
                </a>
              </li>
            )}
            {artistElement.twitter && (
              <li>
                <a href={`http://www.twitter.com/${artistElement.twitter}`}>
                  twitter
                  <span>/{artistElement.twitter}</span>
                </a>
              </li>
            )}
            {artistElement.spotify && (
              <li>
                <a href={`http://www.spotify.com/${artistElement.spotify}`}>
                  spotify
                  <span>/{artistElement.spotify}</span>
                </a>
              </li>
            )}
            {artistElement.youtube && (
              <li>
                <a href={`http://www.youtube.com/${artistElement.youtube}`}>
                  youtube
                  <span>/{artistElement.youtube}</span>
                </a>
              </li>
            )}
          </ul>
        </div>

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
        </div>
      </div>
    </>
  );
};

export default Artist;
