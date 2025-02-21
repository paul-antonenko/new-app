import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import classNames from "classnames";
import Button from '../components/button/button';

import checkIcon from '../assets/images/icons/check.svg';
import asidePhoto from '../assets/images/answer.png';

import styles from "./answers.module.scss";
import varStyles from '../variables.module.scss'

function Answers() {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleBlur = (event) => {
    setIsFocused(false);
    setIsFilled(event.target.value.trim() !== '');
    setHasError(event.target.value.trim() === '');
  };
  return (
    <section className={styles.answers}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Get the finest curated abstracts delivered weekly to your inbox
            </h2>
            <ul className={styles.list}>
              {["Exclusive access to new abstract images and collections",
                "Unlock special promotions only for subscribers",
                "Regular doses of artistic inspiration"].map((text, index) => (
                  <li key={index} className={styles.item}>
                    <span className={styles.iconWrap}>
                      <img src={checkIcon} alt="Checked Icon" />
                      <p className={styles.text}>{text}</p>
                    </span>
                  </li>
                ))}
            </ul>
            <div className={styles.forms}>
              <form className={styles.form} action="email">
                <div className={styles.inputWrap}>
                  <input
                    className={`${styles.input} ${hasError ? styles.error : isFocused ? styles.focused : isFilled ? styles.filled : ""}`}
                    type="email"
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    name="email"
                    placeholder="name@email.com"
                  />
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className={`${styles.inputIcon} ${hasError ? styles.iconError : styles.iconNormal}`}
                  />
                </div>
                {isFocused && !hasError && (
                  <span className={styles.hintText}>This is a hint text.</span>
                )}
                {hasError && (
                  <span className={styles.errorMessage}>This is an error message.</span>
                )}
                <Button type='primary' className={styles.btn}>Subscribe</Button>
              </form>
              <p className={styles.safelyText}>We only send you the best! No spam.</p>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={asidePhoto} alt="Answer images" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Answers;