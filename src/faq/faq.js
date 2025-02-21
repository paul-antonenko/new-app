import React, { useState } from "react";
import classNames from "classnames";
import Button from '../components/button/button';

import plusIcon from "../assets/images/icons/plus.svg";
import minusIcon from "../assets/images/icons/minus.svg";

import styles from "./faq.module.scss";
import varStyles from '../variables.module.scss'

const faqs = [
  {
    question: "What types of images are available on your platform?",
    answer: "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes."
  },
  {
    question: "How can I access and download images from your platform?",
    answer: "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks."
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer: "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs."
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer: "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users."
  },
  {
    question: "Can I cancel or modify my subscription at any time?",
    answer: "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences."
  },
  {
    question: "How frequently do you update your image collection?",
    answer: "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform."
  }
];

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}>
      <button className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <img className={styles.icon} src={isOpen ? minusIcon : plusIcon} />
      </button>
      {isOpen && <div className={styles.accordionContent}>{answer}</div>}
    </div>
  );
};

function Faq() {
  return (
    <section className={styles.faq}>
      <div className={classNames(varStyles.container)}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fit for all your needs</h2>
          <p className={styles.subtitle}>
            Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <Accordion key={index} {...faq} />
            ))}
          </div>
          <div className={styles.supportWrapper}>
            <div className={styles.support}>
              <h4 className={styles.supportTitle}>Can’t find the answer you’re looking for?</h4>
              <p className={styles.supportDescription}>
                Reach out to our&nbsp;
                <a className={styles.supportLink} href="#">customer support</a>
                &nbsp;team.
              </p>
            </div>
            <Button type='primary'>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;