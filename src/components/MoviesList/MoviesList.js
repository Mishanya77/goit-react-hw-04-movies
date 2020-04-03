// Core
import React from "react";
import { withRouter } from "react-router-dom";
// Components
import MoviesListItem from "../MovieListItem/MovieListItem";
// Style
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies }) => (
  <div>
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <MoviesListItem key={movie.id} {...movie} />
      ))}
    </ul>
  </div>
);

export default withRouter(MoviesList);
