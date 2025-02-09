import React from "react";

import "./features.scss";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h3 className="features__title">Premium abstract images</h3>
        <div className="features__header">
          <h2 className="features__header-title">Easy access to top quality images</h2>
          <p className="features__header-subtitle">In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
        </div>
        <div className="features__content-wrap">
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon2.svg" alt="Icon Download" />
            <h4 className="features__content-title">Infinite Download</h4>
            <p className="features__content-description">
              Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.
            </p>
          </div>
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon1.svg" alt="Icon Handcrafted" />
            <h4 className="features__content-title">Purely Handcrafted</h4>
            <p className="features__content-description">
              No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.
            </p>
          </div>
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon3.svg" alt="Icon Mark" />
            <h4 className="features__content-title">All Are Under licensed</h4>
            <p className="features__content-description">
              The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).
            </p>
          </div>
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon4.svg" alt="Icon Recycling" />
            <h4 className="features__content-title">Cancel Anytime</h4>
            <p className="features__content-description">
              Subscribe at your own pace, and cancel when you feel it's enough.
            </p>
          </div>
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon5.svg" alt="Icon Team" />
            <h4 className="features__content-title">Empowering For Team</h4>
            <p className="features__content-description">
              We support multiple seats at once, requiring only a single payment.
            </p>
          </div>
          <div className="features__content">
            <img className="features__content-logo" src="/images/icons/icon6.svg" alt="Icon infinity" />
            <h4 className="features__content-title">No Limitations</h4>
            <p className="features__content-description">
              Use as many as you want, from Dribbble presentations to PowerPoint presentations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;