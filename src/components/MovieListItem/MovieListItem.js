// Core
import React from "react";
import { Link, withRouter } from "react-router-dom";
// Styles
import styles from "./MovieListItem.module.css";
// Images
import ImgPlaceholder from "./placeholder.jpg";

const MovieListItem = ({
  id,
  title,
  location,
  backdrop_path,
  release_date
}) => {
  const movieImg = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : ImgPlaceholder;
  return (
    <li className={styles.movieListItem}>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { from: location }
        }}
        className={styles.movieLink}
      >
        <img src={movieImg} alt={title} />
        <p className={styles.description}>
          {title} ({release_date.split("-")[0]})
        </p>
      </Link>
    </li>
  );
};

export default withRouter(MovieListItem);
