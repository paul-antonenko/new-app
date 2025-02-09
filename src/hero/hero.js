import React from "react";

import "./hero.scss";
import '../variables.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__info">
            <h1 className="hero__title">Well crafted abstract images</h1>
            <p className="hero__description">High quality abstract images for your projects, wallpaper and presentations.</p>
            <div className="hero__btns">
              <button className="hero__btn secondary-btn">Learn more</button>
              <button className="hero__btn primary-btn">See pricing</button>
            </div>
          </div>
          <div className="hero__img">
            <img src="/images/hero-image.png" alt="Hero images" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;