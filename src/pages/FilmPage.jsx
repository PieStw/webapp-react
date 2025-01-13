import React from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../contex/MovieContext";
import styles from "../assets/css/FilmPage.module.css";
import { useState, useEffect } from "react";

export default function FilmPage() {
  const { movie, showMovie } = useMovieContext();
  const { id } = useParams();

  useEffect(() => {
    showMovie(id);
  }, []);

  return (
    <>
      <div className={styles.movieContainer}>
        <div className={styles.movieInfo}>
          <img src={movie.image} className={styles.image} />
          <div className={styles.movieInfoContainer}>
            <h1>{movie.title}</h1>
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
        </div>

        <div className={styles.reviewsSection}>
          <h2>Reviews</h2>
          <ul>
            {movie.reviews.map((review) => (
              <li key={review.id} className={styles.review}>
                <p>
                  <strong>{review.name},</strong> Vote: {review.vote}/5: (
                  {review.updated_at})
                </p>
                <p>{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
