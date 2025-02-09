import React from "react";

import "./marquee.scss";

function Marquee() {
  return (
    <section className="marquee">
      <div className="container">
        <h3 className="marquee__title">Used by teams that you love</h3>
        <div className="marquee__container">
          <div className="marquee__content scroll">
            <img src="/images/brands/brand1.svg" alt="Brand Wan Nain" />
            <img src="/images/brands/brand2.svg" alt="Brand Robinwood" />
            <img src="/images/brands/brand3.svg" alt="Brand Swapdo" />
            <img src="/images/brands/brand4.svg" alt="Brand Diamond" />
            <img src="/images/brands/brand5.svg" alt="Brand Air Car" />
            <img src="/images/brands/brand6.svg" alt="Brand Makro Hard" />
            <img src="/images/brands/brand7.svg" alt="Brand Wirang" />
            <img src="/images/brands/brand8.svg" alt="Brand Bitter Fly" />

            <img src="/images/brands/brand1.svg" alt="Brand Wan Nain" />
            <img src="/images/brands/brand2.svg" alt="Brand Robinwood" />
            <img src="/images/brands/brand3.svg" alt="Brand Swapdo" />
            <img src="/images/brands/brand4.svg" alt="Brand Diamond" />
            <img src="/images/brands/brand5.svg" alt="Brand Air Car" />
            <img src="/images/brands/brand6.svg" alt="Brand Makro Hard" />
            <img src="/images/brands/brand7.svg" alt="Brand Wirang" />
            <img src="/images/brands/brand8.svg" alt="Brand Bitter Fly" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marquee;