import React from "react";
import styles from "./headerOverlay.module.css";

export const HeaderOverlay = ({ children }) => {
  return (
    <>
      <div className={styles.overlayContainer}>
        <div className={styles.overlayHeader}>
          <div className={styles.overlay}></div>
          <p className={`${styles.child} drop-in`}>{children}</p>
        </div>
      </div>
    </>
  );
};
