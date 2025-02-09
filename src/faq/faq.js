import React from "react";

import "./faq.scss";

function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__header-title">Fit for all your needs</h2>
          <p className="faq__header-subtitle">Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.</p>
        </div>
        <div className="faq__wrapper">
          <div className="faq__something"></div>
          <div className="faq__accordion">
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">What types of images are available on your platform?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.
                </p>
              </div>
            </details>
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">How can I access and download images from your platform?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.
                </p>
              </div>
            </details>
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">Do you offer free images, or is there a subscription required?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.
                </p>
              </div>
            </details>
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">What payment methods do you accept for subscriptions?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.
                </p>
              </div>
            </details>
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">Can I cancel or modify my subscription at any time?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.
                </p>
              </div>
            </details>
            <details className="faq__accordion-item">
              <summary className="faq__accordion-summary">
                <span className="faq__accordion-title">How frequently do you update your image collection?</span>
              </summary>
              <div className="faq__accordion-content">
                <p>
                  We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.
                </p>
              </div>
            </details>
          </div>
          <div className="faq__support-wrapper">
            <div className="faq__support-info">
              <h4 className="faq__support-title">Can’t find the answer you’re looking for?</h4>
              <p className="faq__support-description">
                Reach out to our&nbsp;
                <a className="aq__support-description-link" href="#">customer support</a>
                &nbsp;team.
              </p>
            </div>
            <button className="faq__support-btn primary-btn">Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;