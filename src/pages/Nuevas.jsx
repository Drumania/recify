import React from "react";

//Fake Api
import { movies } from "../API/api_movie";

const Nuevas = () => {
  return (
    <>
      <h3>
        Nuevas <span>Peliculas</span>
      </h3>
      <ul className="list-movies">
        {movies.map(
          (element) =>
            element.nuevas && (
              <li key={element.id}>
                <div
                  style={{
                    float: "right",
                    width: "400px",
                    height: "250px",
                    marginLeft: "50px",
                    backgroundImage: `url(./src/assets/${element.bigImg})`,
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  &nbsp;
                </div>
                <div>
                  <div className="card-nueva-header">
                    <h4>{element.title}</h4>
                    <label>
                      {element.year}, {element.director}
                    </label>
                    <span>{element.duration}</span> {element.category}
                  </div>
                  <p>{element.sinopsis}</p>
                  <br />
                  <a href={element.slug} className="btn-primary">
                    Ver
                  </a>
                </div>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default Nuevas;
