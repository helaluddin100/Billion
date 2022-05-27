import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <div className="navigation__logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="logo" />
              </a>
            </div>
            <div className="navigation-timer">
              <div className="navigation-timer-text">
                <p className="time-text">FIRST MILLION HIT COUNTDOWN:</p>
                <div className="timer-area">
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                  <div className="timer-area-item">
                    <p>9</p>
                  </div>
                </div>
                <a href="" className="info-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 11V16"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9502 8H12.0502V8.1H11.9502V8Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <a href="" className="menu-link">
                Gallery
              </a>
            </div>

            <a href="" className="custom-btn">
              Connect Wallet
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
