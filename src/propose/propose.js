import React from "react";
import classNames from "classnames";
import FeatureItem from "./FeautureItem";

import styles from "./propose.module.scss";
import varStyles from "../variables.module.scss";

import Download from "../assets/images/icons/icon2.svg";
import Handcrafted from "../assets/images/icons/icon1.svg";
import Mark from "../assets/images/icons/icon3.svg";
import Recycling from "../assets/images/icons/icon4.svg";
import Team from "../assets/images/icons/icon5.svg";
import Infinity from "../assets/images/icons/icon6.svg";

const features = [
  {
    icon: Download,
    title: "Infinite Download",
    description: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
  },
  {
    icon: Handcrafted,
    title: "Purely Handcrafted",
    description: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
  },
  {
    icon: Mark,
    title: "All Are Under Licensed",
    description: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
  },
  {
    icon: Recycling,
    title: "Cancel Anytime",
    description: "Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    icon: Team,
    title: "Empowering For Team",
    description: "We support multiple seats at once, requiring only a single payment."
  },
  {
    icon: Infinity,
    title: "No Limitations",
    description: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
  }
];

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
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Propose;
