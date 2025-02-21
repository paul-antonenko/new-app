import React from "react";
import classNames from "classnames";

import styles from "./propose.module.scss";
import varStyles from '../variables.module.scss'

import Download from "../assets/images/icons/icon2.svg";
import Handcrafted from "../assets/images/icons/icon1.svg";
import Mark from "../assets/images/icons/icon3.svg";
import Recycling from "../assets/images/icons/icon4.svg";
import Team from "../assets/images/icons/icon5.svg";
import infinity from "../assets/images/icons/icon6.svg";

function Propose() {
  return (
    <section className={styles.propose}>
      <div className={classNames(varStyles.container)}>
        <h3 className={styles.title}>Premium abstract images</h3>
        <div className={styles.header}>
          <h2>Easy access to top quality images</h2>
          <p>In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <img src={Download} alt="Icon Download" />
            <h4>Infinite Download</h4>
            <p>Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.</p>
          </div>
          <div className={styles.content}>
            <img src={Handcrafted} alt="Icon Handcrafted" />
            <h4>Purely Handcrafted</h4>
            <p>No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.</p>
          </div>
          <div className={styles.content}>
            <img src={Mark} alt="Icon Mark" />
            <h4>All Are Under licensed</h4>
            <p>The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).</p>
          </div>
          <div className={styles.content}>
            <img src={Recycling} alt="Icon Recycling" />
            <h4>Cancel Anytime</h4>
            <p>Subscribe at your own pace, and cancel when you feel it's enough.</p>
          </div>
          <div className={styles.content}>
            <img src={Team} alt="Icon Team" />
            <h4>Empowering For Team</h4>
            <p>We support multiple seats at once, requiring only a single payment.</p>
          </div>
          <div className={styles.content}>
            <img src={infinity} alt="Icon infinity" />
            <h4>No Limitations</h4>
            <p>Use as many as you want, from Dribbble presentations to PowerPoint presentations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Propose;