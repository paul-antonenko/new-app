import React from "react";

import "./info.scss";

function Info() {
  return (
    <section className="info">
      <div className="container">
        <h3 className="info__title">Best-in-class support</h3>
        <div className="info__header">
          <h2 className="info__header-title">Convenience and licensing that empowers</h2>
          <p className="info__header-subtitle">In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.</p>
          <div className="info__content-wrap">
            <div className="info__image-wrap">
              <img className="info__image" src="/images/info-img.png" alt="High quality images" />
            </div>
            <div className="info__aside">
              <div className="info__item">
                <img className="info__logo" src="/images/icons/icon10.svg" alt="Icon Rocket" />
                <div className="info__text-info">
                  <p className="info__text-title">Faster downloads</p>
                  <p className="info__text-subtitle">Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.</p>
                </div>
              </div>
              <div className="info__item">
                <img className="info__logo" src="/images/icons/icon11.svg" alt="Icon Team" />
                <div className="info__text-info">
                  <p className="info__text-title">Convenience for teams</p>
                  <p className="info__text-subtitle">Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.</p>
                </div>
              </div>
              <div className="info__item">
                <img className="info__logo" src="/images/icons/icon12.svg" alt="Icon Watermark" />
                <div className="info__text-info">
                  <p className="info__text-title">Royalty-free licensing</p>
                  <p className="info__text-subtitle">Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info;