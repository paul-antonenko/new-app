import React, { useState } from 'react';
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import Button from '../components/button/button';

import styles from './contact.module.scss'
import varStyles from '../variables.module.scss'

import icon13 from "../assets/images/icons/icon13.svg";
import icon14 from "../assets/images/icons/icon14.svg";
import icon15 from "../assets/images/icons/icon15.svg";

const contactSection = {
  title: "Talk to our team",
  subtitle: "We're committed to delivering the support you require to make your experience as smooth as possible.",
  items: [
    {
      icon: icon13,
      alt: "Icon Building",
      text: "123 Maple Street, Springfield, IL, USA"
    },
    {
      icon: icon14,
      alt: "Icon Call us",
      text: "+1 (650) 555-0198"
    },
    {
      icon: icon15,
      alt: "Icon Mail",
      text: "hello@abstractly.com"
    },
  ],
};

const MAX_LENGTH = 500;

function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [nameFilled, setNameFilled] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [emailFocused, setEmailFocused] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [textFocused, setTextFocused] = useState(false);
  const [textHasError, setTextHasError] = useState(false);
  const [textIsFilled, setTextIsFilled] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleBlur = (event, setFocused, setFilled, setError) => {
    setFocused(false);
    setFilled(event.target.value.trim() !== "");
    setError(event.target.value.trim() === "");
  };

  const handleTextAreaChange = (event) => {
    const text = event.target.value;
    if (text.length <= MAX_LENGTH) {
      setTextValue(text);
      setTextIsFilled(text.trim() !== "");
      setTextHasError(text.trim() === "");
    }
  };

  const handleTextAreaBlur = () => {
    setTextFocused(false);
  };

  return (
    <section className={styles.contact}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3 className={styles.title}>{contactSection.title}</h3>
            <p className={styles.subtitle}>{contactSection.subtitle}</p>
            <div className={styles.links}>
              {contactSection.items.map((item, index) => {
                let href = "#";
                if (item.alt.includes("Building")) {
                  href = `https://www.google.com/maps/search/123+Maple+Street,+Springfield,+IL,+USA/@39.7636743,-89.7527208,27409m/data=!3m2!1e3!4b1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D`;
                } else if (item.alt.includes("Call")) {
                  href = `tel:${item.text.replace(/\s+/g, "")}`;
                } else if (item.alt.includes("Mail")) {
                  href = `mailto:${item.text}`;
                }
                return (
                  <a key={index} href={href} className={styles.item} target="_blank" rel="noopener noreferrer">
                    <img className={styles.logo} src={item.icon} alt={item.alt} />
                    <p className={styles.text}>{item.text}</p>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.formInner}>
                <div className={styles.inputWrap} data-label="Name">
                  <input
                    className={`${styles.input} ${nameError ? styles.error : nameFocused ? styles.focused : nameFilled ? styles.filled : ""}`}
                    type="text"
                    onFocus={() => setNameFocused(true)}
                    onBlur={(e) => handleBlur(e, setNameFocused, setNameFilled, setNameError)}
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.inputWrap} data-label="Email">
                  <input
                    className={`${styles.input} ${emailError ? styles.error : emailFocused ? styles.focused : emailFilled ? styles.filled : ""}`}
                    type="email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={(e) => handleBlur(e, setEmailFocused, setEmailFilled, setEmailError)}
                    name="email"
                    placeholder="example@example.com"
                  />
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className={`${styles.inputIcon} ${emailError ? styles.iconError : styles.iconNormal}`}
                  />
                </div>
              </div>
              <div className={styles.textareaWrap} data-label="Message">
                <textarea
                  className={`${styles.textarea} ${textHasError ? styles.error : textFocused ? styles.focused : textIsFilled ? styles.filled : ""}`}
                  onFocus={() => setTextFocused(true)}
                  onBlur={handleTextAreaBlur}
                  onChange={handleTextAreaChange}
                  name="message"
                  placeholder="Write your message..."
                  value={textValue}
                  maxLength={MAX_LENGTH}
                />
                {textFocused && !textHasError && (
                  <span className={styles.hintText}></span>
                )}
                {textHasError && (
                  <span className={styles.errorMessage}>This field is required.</span>
                )}
              </div>
              <div className={`${styles.charCounter} ${textValue.length === MAX_LENGTH ? styles.charLimit : ""}`}>
                {textValue.length}/{MAX_LENGTH}
              </div>
              <Button type='primary' className={styles.btn}>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;