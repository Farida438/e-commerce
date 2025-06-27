import React from "react";
import styles from "./Button.module.css";


const Button = () => {
  return (
    <div className={styles.container}>
    <div className={styles.btn}>
      Start Shopping
    </div>

    <div className={styles.btn}>
      Ask Question
    </div>
    </div>
  );
};

export default Button;
