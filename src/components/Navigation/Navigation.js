// Core
import React from "react";
import { NavLink } from "react-router-dom";
// Styles
import styles from "./Navigation.module.css";

const activeLink = {
  color: "#01d277"
};

function Navigation() {
  return (
    <nav className={styles.pageNav}>
      <div className={[styles.wrapper, "container"].join(" ")}>
        <ul className={styles.siteNavList}>
          <li className={styles.siteNavListItem}>
            <NavLink to="/" exact activeStyle={activeLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.siteNavListItem}>
            <NavLink to="/movies" activeStyle={activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
