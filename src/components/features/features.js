import React from "react";
import classNames from "classnames";

import styles from "./features.module.scss";
import varStyles from '../../variables.module.scss'

const Features = ({ title, headerTitle, headerSubtitle, imageSrc, items, reverse = false }) => {
  return (
    <section className={styles.featuresImg}>
      <div className={classNames(varStyles.container)}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{headerTitle}</h2>
          <p className={styles.headerSubtitle}>{headerSubtitle}</p>
          <div className={classNames(styles.wrapper, { [styles.reverse]: reverse })}>
            <div className={styles.aside}>
              {items.map((item, index) => (
                <div key={index} className={styles.item}>
                  <img className={styles.logo} src={item.icon} alt={item.alt} />
                  <div className={styles.textInfo}>
                    <p className={styles.textTitle}>{item.title}</p>
                    <p className={styles.textSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.imageWrap}>
              <img src={imageSrc} alt={headerTitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;