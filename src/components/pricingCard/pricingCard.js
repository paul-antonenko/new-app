import React, { useState } from "react";
import Button from "../button/button";

import Icon from "../../assets/images/icons/check.svg";
import styles from "./pricingCard.module.scss";

export const plans = [
  {
    title: "Basic Plan",
    subtitle: "Access to a curated selection of abstract images",
    price: "$9.99",
    period: "/month",
    billed: "Billed monthly",
    features: [
      "Standard quality images",
      "Limited to personal use",
      "Email support"
    ]
  },
  {
    title: "Standard Plan",
    subtitle: "Next-level Integrations, priced economically",
    price: "$19.99",
    period: "/month",
    billed: "Billed monthly",
    features: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics"
    ]
  },
  {
    title: "Premium Plan",
    subtitle: "Full access to the entire image library, including exclusive content",
    price: "$29.99",
    period: "/month",
    billed: "Billed monthly",
    features: [
      "Highest quality images, including premium collections",
      "Commercial and resale rights",
      "Dedicated customer support line",
      "24/7 support response time",
      "Advanced analytics and insights"
    ]
  }
];

const PricingCard = ({ title, subtitle, price, period, billed, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.headerHover}>
        <p className={styles.headerHoverText}>Most Popular</p>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <p className={styles.cardSubtitle}>{subtitle}</p>
          <div className={styles.cardPrice}>
            <span className={styles.cardPriceValue}>{price}</span>
            <span className={styles.cardPricePeriod}>{period}</span>
          </div>
          <p className={styles.billed}>{billed}</p>
        </div>
        <div className={styles.cardContent}>
          <ul className={styles.cardList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.cardItem}>
                <img src={Icon} alt="Checked Icon" className={styles.cardIcon} />
                <p className={styles.cardText}>{feature}</p>
              </li>
            ))}
          </ul>
          <Button type={isHovered ? "primary" : "secondary"} className={styles.cardBtn}>
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
