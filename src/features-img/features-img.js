import React from "react";

import "./features-img.scss";

function FeaturesImg() {
  return (
    <section className="features-img">
      <div className="container">
        <h3 className="features-img__title">High quality images</h3>
        <div className="features-img__header">
          <h2 className="features-img__header-title">For designers, by designers</h2>
          <p className="features-img__header-subtitle">Unleash boundless creativity with a large repository of images optimized for designers</p>
          <div className="features-img__content-wrap">
            <div className="features-img__aside">
              <div className="features-img__item">
                <img className="features-img__logo" src="/images/icons/icon7.svg" alt="Icon Hight quality" />
                <div className="features-img__text-info">
                  <p className="features-img__text-title">5K resolution support</p>
                  <p className="features-img__text-subtitle">All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.</p>
                </div>
              </div>
              <div className="features-img__item">
                <img className="features-img__logo" src="/images/icons/icon8.svg" alt="Icon Water" />
                <div className="features-img__text-info">
                  <p className="features-img__text-title">From water to glass</p>
                  <p className="features-img__text-subtitle">We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.</p>
                </div>
              </div>
              <div className="features-img__item">
                <img className="features-img__logo" src="/images/icons/icon9.svg" alt="Icon Rainbow" />
                <div className="features-img__text-info">
                  <p className="features-img__text-title">Portrait or landscape</p>
                  <p className="features-img__text-subtitle">Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.</p>
                </div>
              </div>
            </div>
            <div className="features-img__image-wrap">
              <img className="features-img__image" src="/images/feature-img.png" alt="High quality images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesImg;