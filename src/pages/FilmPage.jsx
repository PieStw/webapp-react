import React from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../contex/MovieContext";
import styles from "../assets/css/FilmPage.module.css";
import { useState, useEffect } from "react";

export default function FilmPage() {
  const { movie, showMovie, reviewList, storeReview, showReview } =
    useMovieContext();
  const { id } = useParams();

  useEffect(() => {
    showMovie(id);
    showReview(id);
  }, []);

  const reviewDefault = {
    name: "",
    text: "",
    vote: 1,
    movie_id: id,
  };

  const [review, setReview] = useState(reviewDefault);

  function handleSubmit(event) {
    event.preventDefault();
    storeReview(review);
    setReview(reviewDefault);
  }

  function handleFormData(e) {
    setReview((review) => ({
      ...review,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  }

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
          <div className={styles.reviewForm}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>Insert Review</h2>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control "
                  placeholder="Insert your name"
                  value={review.name}
                  onChange={(e) => handleFormData(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Text</label>
                <textarea
                  name="text"
                  type="text"
                  className="form-control"
                  placeholder="Insert your review"
                  value={review.text}
                  onChange={(e) => handleFormData(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Vote</label>
                <input
                  name="vote"
                  type="number"
                  className="form-control "
                  placeholder="Insert your vote"
                  value={review.vote}
                  onChange={(e) => handleFormData(e)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.reviewsSection}>
          <h2>Reviews</h2>
          <ul>
            {reviewList.map((review) => (
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
