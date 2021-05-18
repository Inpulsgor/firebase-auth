import React from "react";
import styles from "../scss/pages/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.container}>
        <div className={styles.error}>
          <h2 className={styles.title}>Oops! Page not found</h2>
          <h3>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h3>
        </div>
        <p className={styles.description}>
          we are sorry, but the page you requested was not found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
