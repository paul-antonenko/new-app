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
    </div>
  );
}

export default App;