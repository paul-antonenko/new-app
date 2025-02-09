import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import './variables.scss';

import App from './components/app/app';
import Header from './header/header';
import Hero from './hero/hero';
import Marquee from './marquee/marquee';
import Features from './features/features';
import FeaturesImg from './features-img/features-img';
import Info from './info/info';
import Pricing from './pricing/pricing';
import Faq from './faq/faq';
import Answers from './answers/answers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main className='main'>
      <Hero />
      <Marquee />
      <Features />
      <FeaturesImg />
      <Info />
      <Pricing />
      <Faq />
      <Answers />
    </main>
    {/* <App /> */}
  </React.StrictMode>
);