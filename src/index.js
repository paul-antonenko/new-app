import React from 'react';
import ReactDOM from 'react-dom/client';
import classNames from "classnames";

import './index.scss';
import './variables.module.scss';

import Header from './header/header';
import Hero from './hero/hero';
import Brands from './brands/brands';
import Propose from './propose/propose';
import FeaturesLeft from './featuresLeft/featuresLeft';
import FeaturesRight from './featuresRight/featuresRight';
import Pricing from './pricing/pricing';
import Faq from './faq/faq';
import Answers from './answers/answers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main className='main'>
      <Hero />
      <Brands />
      <Propose />
      <FeaturesLeft />
      <FeaturesRight />
      <Pricing />
      <Faq />
      <Answers />
    </main>
  </React.StrictMode>
);