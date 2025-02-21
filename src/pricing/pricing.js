import React, { useState } from "react";
import classNames from "classnames";
import PricingCard, { plans } from "../components/pricingCard/pricingCard";

import styles from "./pricing.module.scss";
import varStyles from '../variables.module.scss'

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className={styles.pricing}>
      <div className={classNames(varStyles.container)}>
        <h3 className={styles.title}>Pricing Tiers</h3>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Fit for all your needs</h2>
          <p className={styles.headerSubtitle}>
            Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${isMonthly ? styles.active : ""}`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${!isMonthly ? styles.active : ""}`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </button>
          </div>
          <div className={styles.cards}>
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;