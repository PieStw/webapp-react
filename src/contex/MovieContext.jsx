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
  const [reviewList, setReviewList] = useState([]);

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

  const showReview = async (id) => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then((res) => res.json())
      .then((res) => setReviewList(res));
  };

  const storeReview = (review) => {
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: review.name,
        vote: review.vote,
        text: review.text,
        movie_id: review.movie_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => showReview(review.movie_id));
  };

  useEffect(() => {
    indexMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movie,
        movieList,
        showMovie,
        reviewList,
        storeReview,
        showReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
