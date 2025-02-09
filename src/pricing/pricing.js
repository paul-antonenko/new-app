import React from "react";

import "./pricing.scss";

function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h3 className="pricing__title">Pricing Tiers</h3>
        <div className="pricing__header">
          <h2 className="pricing__header-title">Fit for all your needs</h2>
          <p className="pricing__header-subtitle">Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.</p>
        </div>
        <div className="pricing__content">
          <div className="pricing__toggle">
            <button className="pricing__toggle-btn active">Monthly</button>
            <button className="pricing__toggle-btn">Annually</button>
          </div>
          <div className="pricing__cards">
            <div className="pricing__card">
              <div className="pricing__header-hover">
                <p className="pricing__header-hover-text">Most Popular</p>
              </div>
              <div className="pricing__card-wrapper">
                <div className="pricing__card-header">
                  <h4 className="pricing__card-title">Basic Plan</h4>
                  <p className="pricing__card-subtitle">Access to a curated selection of abstract images</p>
                  <div className="pricing__card-price">
                    <span className="pricing__card-price-value">$9.99</span>
                    <span className="pricing__card-price-period">/month</span>
                  </div>
                  <p className="pricing__billed">Billed monthly</p>
                </div>
                <div className="pricing__card-content">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Standard quality images</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Limited to personal use</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Email support</p>
                      </span>
                    </li>
                  </ul>
                  <button className="pricing__card-btn secondary-btn">Buy now</button>
                </div>
              </div>
            </div>
            <div className="pricing__card">
              <div className="pricing__header-hover">
                <p className="pricing__header-hover-text">Most Popular</p>
              </div>
              <div className="pricing__card-wrapper">
                <div className="pricing__card-header">
                  <h4 className="pricing__card-title">Standard Plan</h4>
                  <p className="pricing__card-subtitle">Next-level Integrations, priced economically</p>
                  <div className="pricing__card-price">
                    <span className="pricing__card-price-value">$19.99</span>
                    <span className="pricing__card-price-period">/month</span>
                  </div>
                  <p className="pricing__billed">Billed monthly</p>
                </div>
                <div className="pricing__card-content">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Expanded library with more diverse abstract images</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">High-resolution images available</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Suitable for commercial use</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Priority email support</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Advanced analytics</p>
                      </span>
                    </li>
                  </ul>
                  <button className="pricing__card-btn secondary-btn">Buy now</button>
                </div>
              </div>
            </div>
            <div className="pricing__card">
              <div className="pricing__header-hover">
                <p className="pricing__header-hover-text">Most Popular</p>
              </div>
              <div className="pricing__card-wrapper">
                <div className="pricing__card-header">
                  <h4 className="pricing__card-title">Basic Plan</h4>
                  <p className="pricing__card-subtitle">Access to a curated selection of abstract images</p>
                  <div className="pricing__card-price">
                    <span className="pricing__card-price-value">$29.99</span>
                    <span className="pricing__card-price-period">/month</span>
                  </div>
                  <p className="pricing__billed">Billed monthly</p>
                </div>
                <div className="pricing__card-content">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Full access to the entire image library, including exclusive content</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Highest quality images, including premium collections</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Commercial and resale rights</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Dedicated customer support line</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">24/7 support response time</p>
                      </span>
                    </li>
                    <li className="pricing__card-item">
                      <span className="pricing__card-icon">
                        <img src="/images/icons/check.svg" alt="Icon Checked" />
                        <p className="pricing__card-text">Advanced analytics and insights</p>
                      </span>
                    </li>
                  </ul>
                  <button className="pricing__card-btn secondary-btn">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;