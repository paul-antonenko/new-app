import React from "react";
import classNames from "classnames";

import styles from './footer.module.scss'
import varStyles from '../variables.module.scss';

import Youtube from "../assets/images/socialLink/youtube.svg";
import Instagram from "../assets/images/socialLink/instagram.svg";
import Facebook from "../assets/images/socialLink/facebook.svg";
import Github from "../assets/images/socialLink/github.svg";
import TwitterX from "../assets/images/socialLink/twitterX.svg";

const icons = [
  { name: "youtube", logo: Youtube, href: "https://www.youtube.com" },
  { name: "instagram", logo: Instagram, href: "https://www.instagram.com" },
  { name: "facebook", logo: Facebook, href: "https://www.facebook.com" },
  { name: "github", logo: Github, href: "https://github.com" },
  { name: "twitterX", logo: TwitterX, href: "https://x.com" }
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.wrapper}>
          <ul className={styles.nav}>
            <li>
              <a className={styles.navLink} href="#">Features</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">Pricing</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">About us</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.socialItem}>
            {icons.map((icon, index) => (
              <a key={index} href={icon.href} target="_blank">
                <img src={icon.logo} alt={icon.name} />
              </a>
            ))}
          </div>
          <p className={styles.text}>© 2024 Abstractly, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;