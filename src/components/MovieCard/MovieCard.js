// Core
import React from "react";
// Components
import MovieCardMenu from "../MovieCardMenu/MovieCardMenu";
// Styles
import styles from "./MovieCard.module.css";
// Images
import blankTitle from "./blankMovieTitle.jpg";
// Constants
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, onGoBack }) {
  const { id, title, poster_path, overview, genres, vote_average } = movie;
  const titleImg = poster_path ? IMG_URL + poster_path : blankTitle;
  return (
    <>
      <div className={styles.movieCard}>
        <img src={titleImg} alt={title} />
        <div className={styles.infoContainer}>
          <h2>{title}</h2>
          <p>
            User score:
            <span>{vote_average * 10}%</span>
          </p>
          <h3>Overview: </h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p className={styles.genres}>
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
          <button type="button" onClick={onGoBack}>
            ← Go back
          </button>
        </div>
      </div>

      <MovieCardMenu id={id} />
    </>
  );
}
