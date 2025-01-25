import './app.scss';
import '../../variables.scss';

function App() {
  return (
    <div className='application'>
      <header className="header">
        <div className="container">
          <div className="header__nav-wrapper">
            <div className="header__logo">
              <a href="#" className="header__logo-link">
                <img className="header__logo-img" src="/images/logo.svg" alt="Logotype 'Abstractly'" />
              </a>
            </div>
            <ul className="header__nav">
              <li className="header__nav-item"><a className="header__nav-link links" href="#">Home</a></li>
              <li className="header__nav-item"><a className="header__nav-link links" href="#">Features</a></li>
              <li className="header__nav-item"><a className="header__nav-link links" href="#">Pricing</a></li>
              <li className="header__nav-item"><a className="header__nav-link links" href="#">About us</a></li>
              <li className="header__nav-item"><a className="header__nav-link links" href="#">Contact</a></li>
            </ul>
            <div className="header__buttons">
              <button className="header__btn secondary-btn">Learn more</button>
              <button className="header__btn primary-btn">See pricing</button>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <div className="hero__info">
                <h1 className="hero__title">Well crafted abstract images</h1>
                <p className="hero__description">High quality abstract images for your projects, wallpaper and presentations.</p>
                <div className="hero__btns">
                  <button className="hero__btn secondary-btn">Learn more</button>
                  <button className="hero__btn primary-btn">See pricing</button>
                </div>
              </div>
              <div className="hero__img">
                <img src="/images/hero-image.png" alt="Hero images" />
              </div>
            </div>
          </div>
        </section>
        <section className="marquee">
          <div className="container">
            <h3 className="marquee__title">Used by teams that you love</h3>
            <div className="marquee__container">
              <div className="marquee__content scroll">
                <img src="/images/brands/brand1.svg" alt="Brand Wan Nain" />
                <img src="/images/brands/brand2.svg" alt="Brand Robinwood" />
                <img src="/images/brands/brand3.svg" alt="Brand Swapdo" />
                <img src="/images/brands/brand4.svg" alt="Brand Diamond" />
                <img src="/images/brands/brand5.svg" alt="Brand Air Car" />
                <img src="/images/brands/brand6.svg" alt="Brand Makro Hard" />
                <img src="/images/brands/brand7.svg" alt="Brand Wirang" />
                <img src="/images/brands/brand8.svg" alt="Brand Bitter Fly" />

                <img src="/images/brands/brand1.svg" alt="Brand Wan Nain" />
                <img src="/images/brands/brand2.svg" alt="Brand Robinwood" />
                <img src="/images/brands/brand3.svg" alt="Brand Swapdo" />
                <img src="/images/brands/brand4.svg" alt="Brand Diamond" />
                <img src="/images/brands/brand5.svg" alt="Brand Air Car" />
                <img src="/images/brands/brand6.svg" alt="Brand Makro Hard" />
                <img src="/images/brands/brand7.svg" alt="Brand Wirang" />
                <img src="/images/brands/brand8.svg" alt="Brand Bitter Fly" />
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h3 className="features__title">Premium abstract images</h3>
            <div className="features__header">
              <h2 className="features__header-title">Easy access to top quality images</h2>
              <p className="features__header-subtitle">In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
            </div>
            <div className="features__content-wrap">
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon2.svg" alt="Icon Download" />
                <h4 className="features__content-title">Infinite Download</h4>
                <p className="features__content-description">
                  Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.
                </p>
              </div>
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon1.svg" alt="Icon Handcrafted" />
                <h4 className="features__content-title">Purely Handcrafted</h4>
                <p className="features__content-description">
                  No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.
                </p>
              </div>
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon3.svg" alt="Icon Mark" />
                <h4 className="features__content-title">All Are Under licensed</h4>
                <p className="features__content-description">
                  The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).
                </p>
              </div>
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon4.svg" alt="Icon Recycling" />
                <h4 className="features__content-title">Cancel Anytime</h4>
                <p className="features__content-description">
                  Subscribe at your own pace, and cancel when you feel it's enough.
                </p>
              </div>
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon5.svg" alt="Icon Team" />
                <h4 className="features__content-title">Empowering For Team</h4>
                <p className="features__content-description">
                  We support multiple seats at once, requiring only a single payment.
                </p>
              </div>
              <div className="features__content">
                <img className="features__content-logo" src="/images/icons/icon6.svg" alt="Icon infinity" />
                <h4 className="features__content-title">No Limitations</h4>
                <p className="features__content-description">
                  Use as many as you want, from Dribbble presentations to PowerPoint presentations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="features-img">
          <div className="container">
            <h3 className="features-img__title">High quality images</h3>
            <div className="features-img__header">
              <h2 className="features-img__header-title">For designers, by designers</h2>
              <p className="features-img__header-subtitle">Unleash boundless creativity with a large repository of images optimized for designers</p>
              <div className="features-img__content-wrap">
                <div className="features-img__aside">
                  <div className="features-img__item">
                    <img className="features-img__logo" src="/images/icons/icon7.svg" alt="Icon Hight quality" />
                    <div className="features-img__text-info">
                      <p className="features-img__text-title">5K resolution support</p>
                      <p className="features-img__text-subtitle">All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.</p>
                    </div>
                  </div>
                  <div className="features-img__item">
                    <img className="features-img__logo" src="/images/icons/icon8.svg" alt="Icon Water" />
                    <div className="features-img__text-info">
                      <p className="features-img__text-title">From water to glass</p>
                      <p className="features-img__text-subtitle">We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.</p>
                    </div>
                  </div>
                  <div className="features-img__item">
                    <img className="features-img__logo" src="/images/icons/icon9.svg" alt="Icon Rainbow" />
                    <div className="features-img__text-info">
                      <p className="features-img__text-title">Portrait or landscape</p>
                      <p className="features-img__text-subtitle">Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.</p>
                    </div>
                  </div>
                </div>
                <div className="features-img__image-wrap">
                  <img className="features-img__image" src="/images/feature-img.png" alt="High quality images" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="container">
            <h3 className="info__title">Best-in-class support</h3>
            <div className="info__header">
              <h2 className="info__header-title">Convenience and licensing that empowers</h2>
              <p className="info__header-subtitle">In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.</p>
              <div className="info__content-wrap">
                <div className="info__image-wrap">
                  <img className="info__image" src="/images/info-img.png" alt="High quality images" />
                </div>
                <div className="info__aside">
                  <div className="info__item">
                    <img className="info__logo" src="/images/icons/icon10.svg" alt="Icon Rocket" />
                    <div className="info__text-info">
                      <p className="info__text-title">Faster downloads</p>
                      <p className="info__text-subtitle">Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.</p>
                    </div>
                  </div>
                  <div className="info__item">
                    <img className="info__logo" src="/images/icons/icon11.svg" alt="Icon Team" />
                    <div className="info__text-info">
                      <p className="info__text-title">Convenience for teams</p>
                      <p className="info__text-subtitle">Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.</p>
                    </div>
                  </div>
                  <div className="info__item">
                    <img className="info__logo" src="/images/icons/icon12.svg" alt="Icon Watermark" />
                    <div className="info__text-info">
                      <p className="info__text-title">Royalty-free licensing</p>
                      <p className="info__text-subtitle">Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;