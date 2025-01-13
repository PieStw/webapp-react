import React from "react";
import { useMovieContext } from "../contex/MovieContext";
import styles from "../assets/css/HomePage.module.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const { movieList } = useMovieContext();
  return (
    <>
      <div className={styles.cardContainer}>
        {movieList.map((movie) => (
          <NavLink
            key={movie.id}
            className={styles.card}
            to={`/movie/${movie.id}`}
          >
            <img src={movie.image} class={styles.image} />
            <div className="card-body">
              <h3 className="card-title">Title: {movie.title}</h3>
              <p>
                <strong>Director:</strong> {movie.director}
              </p>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p>
                <strong>Release Year:</strong> {movie.release_year}
              </p>
              <p>
                <strong>Abstract:</strong> {movie.abstract}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
