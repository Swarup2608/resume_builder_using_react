import React from "react";

import headers from "./header.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Make A <span>Resume</span> that looks out of the box...
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={headers} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
