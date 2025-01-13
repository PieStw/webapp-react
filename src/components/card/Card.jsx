import React from "react";
import styles from "../../assets/css/Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <>
      <NavLink className={styles.card} to={`/movie/${movie.id}`}>
        <img src={movie.image} className={styles.image} />
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
    </>
  );
}
