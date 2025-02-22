import React from "react";
import classNames from "classnames";
import Marquee from "react-fast-marquee";

import styles from "./brands.module.scss";
import varStyles from '../variables.module.scss'

import BrandItem from "./BrandItem";

import WanNain from "../assets/images/brands/brand1.svg";
import Robinwood from "../assets/images/brands/brand2.svg";
import Swapdo from "../assets/images/brands/brand3.svg";
import Diamond from "../assets/images/brands/brand4.svg";
import AirCar from "../assets/images/brands/brand5.svg";
import MakroHard from "../assets/images/brands/brand6.svg";
import Wirang from "../assets/images/brands/brand7.svg";
import BitterFly from "../assets/images/brands/brand8.svg";

const brands = [
  { name: "WanNain", logo: WanNain },
  { name: "Robinwood", logo: Robinwood },
  { name: "Swapdo", logo: Swapdo },
  { name: "Diamond", logo: Diamond },
  { name: "AirCar", logo: AirCar },
  { name: "MakroHard", logo: MakroHard },
  { name: "Wirang", logo: Wirang },
  { name: "BitterFly", logo: BitterFly }
];

function Brands() {

  return (
    <section className={styles.brands}>
      <div className={classNames(varStyles.container)}>
        <h3 className={styles.title}>Used by teams that you love</h3>
        <div className={styles.brandsWrap}>
          <Marquee speed={50} gradient={false} className={styles.marquee}>
            {brands.map((brand, index) => (
              <BrandItem key={index} name={brand.name} logo={brand.logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Brands;