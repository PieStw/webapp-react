import React from "react";
import { useMovieContext } from "../contex/MovieContext";
import styles from "../assets/css/HomePage.module.css";

export default function HomePage() {
  const { movie, movieList, showMovie } = useMovieContext();
  return (
    <>
      <div className={styles.cardContainer}>
        {movieList.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.image} class={styles.image} />
            <div className="card-body">
              <h5 className="card-title">Title: {movie.title}</h5>
              <p className="card-text">Abstract: {movie.abstract}</p>
              <p className="card-text">Release Year: {movie.release_year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
