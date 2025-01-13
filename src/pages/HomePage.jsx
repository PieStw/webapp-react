import React from "react";
import { useMovieContext } from "../contex/MovieContext";
import styles from "../assets/css/HomePage.module.css";
import Card from "../components/card/Card";

export default function HomePage() {
  const { movieList } = useMovieContext();
  return (
    <>
      <div className={styles.cardContainer}>
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie}></Card>
        ))}
      </div>
    </>
  );
}
