import React from 'react';
import classNames from "classnames";

import Button from '../components/button/button';

import LogoImg from '../assets/images/logo.svg'
import styles from './header.module.scss';
import varStyles from '../variables.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <a href="#">
              <img src={LogoImg} alt="Logotype 'Abstractly'" />
            </a>
          </div>
          <ul className={styles.nav}>
            <li>
              <a className={classNames(styles.navLink, varStyles.links)} href="#">Home</a>
            </li>
            <li>
              <a className={classNames(styles.navLink, varStyles.links)} href="#">Features</a>
            </li>
            <li>
              <a className={classNames(styles.navLink, varStyles.links)} href="#">Pricing</a>
            </li>
            <li>
              <a className={classNames(styles.navLink, varStyles.links)} href="#">About us</a>
            </li>
            <li>
              <a className={classNames(styles.navLink, varStyles.links)} href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.btnWrap}>
            <Button type='secondary'>Learn more</Button>
            <Button type='primary'>See pricing</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;