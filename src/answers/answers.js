import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import "./answers.scss";

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
    <section className="answers">
      <div className="container">
        <div className="answers__content">
          <div className="answers__info">
            <h2 className="answers__title">Get the finest curated abstracts delivered weekly to your inbox</h2>
            <ul className="answers__list">
              <li className="answers__item">
                <span className="answers__icon">
                  <img src="/images/icons/check.svg" alt="Icon Checked" />
                  <p className="answers__text">Exclusive access to new abstract images and collections</p>
                </span>
              </li>
              <li className="answers__item">
                <span className="answers__icon">
                  <img src="/images/icons/check.svg" alt="Icon Checked" />
                  <p className="answers__text">Unlock special promotions only for subscribers</p>
                </span>
              </li>
              <li className="answers__item">
                <span className="answers__icon">
                  <img src="/images/icons/check.svg" alt="Icon Checked" />
                  <p className="answers__text">Regular doses of artistic inspiration</p>
                </span>
              </li>
            </ul>
            <div className="answers__forms">
              <form className="answers__form" action="email">
                <div className="answers__form-input-wrap">
                  <input
                    className={`input ${hasError ? "error" : isFocused ? "focused" : isFilled ? "filled" : ""}`}
                    type="email"
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    name="email"
                    placeholder="name@email.com"
                  />
                  <FontAwesomeIcon icon={faCircleQuestion} className={`input-icon ${hasError ? "icon-error" : "icon-normal"}`} />
                </div>
                {isFocused && !hasError && <span className="hint-text">This is a hint text.</span>}
                {hasError && <span className="error-message">This is an error message.</span>}
                <button className="answers__btn primary-btn" type="submit">Subscribe</button>
              </form>
              <p className="answers__form-safely-text">We only send you the best! No spam.</p>
            </div>
          </div>
          <div className="answers__img">
            <img src="/images/answer.png" alt="Answer images" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Answers;