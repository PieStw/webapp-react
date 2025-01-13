import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: "",
    created_at: "",
    updated_at: "",
    reviews: [],
  });
  const [movieList, setMovieList] = useState([]);

  const indexMovies = () => {
    fetch(`http://localhost:3000/movies`)
      .then((res) => res.json())
      .then((res) => setMovieList(res));
  };

  const showMovie = async (id) => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((res) => setMovie(res));
  };

  useEffect(() => {
    indexMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movie, movieList, showMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
