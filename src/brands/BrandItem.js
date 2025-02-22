import React from "react";
import styles from "./brandItem.module.scss";

function BrandItem({ name, logo }) {
  return (
    <div className={styles.brandItem}>
      <img src={logo} alt={name} />
    </div>
  );
}

export default BrandItem;
