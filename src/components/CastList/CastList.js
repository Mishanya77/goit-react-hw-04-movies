// Core
import React from "react";
// Styles
import styles from "./CastList.module.css";
// Images
import blankAvatar from "./blank-avatar.jpg";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const CastList = ({ cast }) => (
  <ul className={styles.castList}>
    {cast.map(({ cast_id, profile_path, name, character }) => {
      const profileImg = profile_path ? IMG_URL + profile_path : blankAvatar;

      return (
        <li className={styles.castListItem} key={cast_id}>
          <img src={profileImg} alt={name} className={styles.profileImg} />
          <h3 className={styles.profileName}>{name}</h3>
          <p className={styles.profileCharacter}>
            Character:
            {character}
          </p>
        </li>
      );
    })}
  </ul>
);

export default CastList;
