import React from "react";
import Button from "../components/button/button";
import classNames from "classnames";

import HeroImg from '../assets/images/hero-image.png'
import styles from "./hero.module.scss";
import varStyles from '../variables.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Well crafted abstract images</h1>
            <p className={styles.description}>High quality abstract images for your projects, wallpaper and presentations.</p>
            <div className={styles.btnWrap}>
              <Button type='secondary'>Learn more</Button>
              <Button type='primary'>See pricing</Button>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <img src={HeroImg} alt="Hero images" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;