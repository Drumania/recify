import { useState, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

// API TRAGOS
// https://www.thecocktaildb.com/api.php

const MoviesProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [list, setList] = useState([]);

  const moviesSearch = async (filter) => {
    setLoader(true);
    axios
      .request(`https://movies-app1.p.rapidapi.com/api/genres/${filter}`)
      .then(function (response) {
        setList(response.data);
        setLoader(false);
      })
      .catch(function (error) {
        console.error("Error en el api:" + error);
      });
  };

  return (
    <MoviesContext.Provider
      value={{
        loader,
        setLoader,
        list,
        setList,
        moviesSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider };

export default MoviesContext;
