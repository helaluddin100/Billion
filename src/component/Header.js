import React from "react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
            <div
              className={
                isOpen ? "navigation-timer active" : "navigation-timer"
              }
            >
              <div className="nav-close" onClick={toggle}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 591 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M504.95 6.60087C440.55 72.1009 376.05 137.801 310.75 204.201C302.15 212.901 288.35 213.001 279.75 204.201C214.75 138.201 150.05 72.4009 85.2502 6.60087C76.6502 -2.09913 62.8502 -1.99914 54.3502 6.70086C38.6502 22.9009 23.2502 39.0009 7.25023 55.5009C-1.24977 64.3009 -1.04977 78.5009 7.45023 87.2009C70.5502 151.401 135.35 217.301 201.05 284.201C209.65 292.901 209.55 307.001 201.05 315.801C135.85 382.201 70.8502 448.301 6.35022 513.901C-2.14978 522.601 -2.14978 536.701 6.55022 545.301L54.3502 593.201C62.9502 601.801 76.9502 601.801 85.4502 593.101L279.65 395.801C288.25 387.101 302.05 387.101 310.65 395.801C375.35 461.601 439.85 527.201 504.85 593.301C513.45 602.001 527.35 602.101 535.85 593.401C551.85 577.201 567.55 561.201 583.45 545.101C592.05 536.401 592.05 522.201 583.55 513.501C519.75 448.501 455.05 382.601 389.35 315.701C380.75 307.001 380.75 292.801 389.35 284.101C454.55 217.701 519.45 151.601 583.85 85.9009C592.45 77.2009 592.35 63.1009 583.75 54.4009L535.95 6.30087C527.45 -2.19913 513.55 -2.09913 504.95 6.60087Z"
                    fill="white"
                  />
                </svg>
              </div>
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
              <a href="" className="custom-btn">
                Connect Wallet
              </a>
            </div>
            <div className="nav-open" onClick={toggle}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 875 695"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 68.6V93C0 130.9 30.7 161.6 68.6 161.6H806.3C844.2 161.6 874.9 130.9 874.9 93V68.6C874.9 30.7 844.2 0 806.3 0H68.6C30.7 0 0 30.7 0 68.6ZM68.6 428H806.3C844.2 428 874.9 397.3 874.9 359.4V334.9C874.9 297 844.2 266.3 806.3 266.3H68.6C30.7 266.3 0 297 0 334.9V359.3C0 397.3 30.7 428 68.6 428ZM68.6 694.3H806.3C844.2 694.3 874.9 663.6 874.9 625.7V601.3C874.9 563.4 844.2 532.7 806.3 532.7H68.6C30.7 532.7 0 563.4 0 601.3V625.7C0 663.6 30.7 694.3 68.6 694.3Z"
                  fill="white"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
