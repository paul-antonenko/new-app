import React from "react";

import styles from "./button.module.scss";
import classNames from "classnames";

const Button = ({ type = "primary", disabled = false, children, className }) => {
  const buttonClass = classNames(styles.button, className, {
    [styles.primary]: type === "primary",
    [styles.secondary]: type === "secondary",
    [styles.disabled]: disabled,
  });

  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
