import React from "react";
import styles from "./featureItem.module.scss";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className={styles.featureItem}>
      <img src={icon} alt={`Icon ${title}`} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
