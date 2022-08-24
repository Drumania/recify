import React from "react";
import { useParams } from "react-router-dom";

//Fake Api
import { movies } from "../API/api_movie";

const MovieDetail = () => {
  let { movieSlug } = useParams();
  const movie = movies.find((element) => element.slug == movieSlug);

  return (
    <>
      <div
        className="movie-back"
        style={{
          backgroundImage: `url(./src/assets/${movie.bigImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1>{movie.title}</h1>
          <span>{movie.duration}</span> - {movie.category}
          <br />
          <br />
          <p>{movie.sinopsis}</p>
          <a href="#!" className="btn-play">
            &#8227;
          </a>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
