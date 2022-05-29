import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  AOS.init();

  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="container-inner">
            <div className="row-2">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="hero-section-left">
                  <p>
                    Is the world prepared to see ONE BILLION LGBTTQQIAAP unique
                    cards out there? Well... it should because we are just...
                  </p>

                  <img
                    src="assets/img/icon/hero-title.png"
                    alt=""
                    className="hero-"
                  />

                  <a href="" className="custom-btn">
                    Get yours
                  </a>

                  <p className="hero-price">FIXED PRICE ONLY: $3.99 EACH</p>

                  <div className="social-follow">
                    <ul className="social-ul">
                      <li>
                        <a href="" className="social-link">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5627 29.1254C22.6054 29.1254 29.1254 22.6054 29.1254 14.5627C29.1254 6.51994 22.6054 0 14.5627 0C6.51994 0 0 6.51994 0 14.5627C0 22.6054 6.51994 29.1254 14.5627 29.1254ZM17.4334 6.29954C18.9334 6.55318 20.3677 6.99923 21.7059 7.60271C21.7175 7.60736 21.7272 7.61605 21.733 7.6272C24.104 11.0574 25.2743 14.9284 24.837 19.3837C24.8359 19.3931 24.8329 19.4022 24.8281 19.4103C24.8232 19.4185 24.8167 19.4255 24.809 19.4309C23.2186 20.5896 21.4438 21.4711 19.5596 22.0381C19.5463 22.0421 19.5321 22.0419 19.519 22.0375C19.5058 22.0331 19.4943 22.0248 19.4861 22.0136C19.0899 21.4705 18.7296 20.8985 18.4147 20.2977C18.4104 20.2894 18.4079 20.2803 18.4075 20.2709C18.407 20.2616 18.4085 20.2523 18.4119 20.2436C18.4152 20.2349 18.4205 20.2271 18.4271 20.2205C18.4338 20.214 18.4418 20.209 18.4506 20.2058C19.0217 19.9942 19.5657 19.7397 20.0887 19.4388C20.098 19.4333 20.1058 19.4255 20.1114 19.4162C20.117 19.4069 20.1202 19.3964 20.1207 19.3855C20.1213 19.3747 20.1191 19.3639 20.1144 19.3541C20.1097 19.3443 20.1027 19.3359 20.094 19.3295C19.9829 19.2481 19.8736 19.1633 19.7686 19.0776C19.759 19.0699 19.7474 19.0651 19.7352 19.0637C19.723 19.0623 19.7106 19.0644 19.6995 19.0697C16.3052 20.6125 12.5854 20.6125 9.15086 19.0697C9.1398 19.0647 9.12756 19.0629 9.11551 19.0644C9.10347 19.066 9.09209 19.0708 9.08264 19.0785C8.97769 19.1633 8.86749 19.2481 8.75729 19.3295C8.74862 19.336 8.74171 19.3446 8.73718 19.3545C8.73265 19.3643 8.73065 19.3752 8.73134 19.386C8.73203 19.3968 8.73541 19.4073 8.74116 19.4166C8.74691 19.4258 8.75485 19.4334 8.76428 19.4388C9.28912 19.7372 9.83656 19.9939 10.4016 20.2067C10.4383 20.2207 10.4558 20.2627 10.4374 20.2977C10.1295 20.8994 9.76921 21.4723 9.36514 22.0145C9.3566 22.0253 9.34502 22.0332 9.33192 22.0372C9.31881 22.0413 9.30479 22.0413 9.29167 22.0373C7.41068 21.4686 5.63878 20.5875 4.05014 19.4309C4.0426 19.4252 4.0363 19.4179 4.03164 19.4097C4.02698 19.4014 4.02405 19.3923 4.02303 19.3828C3.65657 15.5293 4.40261 11.6268 7.12439 7.62545C7.13109 7.61491 7.14086 7.60667 7.15238 7.60184C8.49141 6.99748 9.92577 6.55143 11.4248 6.29779C11.4384 6.29565 11.4522 6.29768 11.4646 6.30362C11.4769 6.30956 11.4872 6.31912 11.4939 6.33103C11.6937 6.67932 11.8738 7.03847 12.0336 7.4068C13.6244 7.16911 15.2417 7.16911 16.8325 7.4068C16.976 7.07445 17.1806 6.65376 17.3643 6.33103C17.3711 6.31926 17.3815 6.30991 17.3938 6.30427C17.4062 6.29863 17.42 6.29698 17.4334 6.29954ZM9.06427 14.9547C9.06427 16.1013 9.91702 17.0362 10.9508 17.0362C12.0012 17.0362 12.8373 16.1022 12.8373 14.9547C12.854 13.8151 12.0091 12.8731 10.9508 12.8731C9.9004 12.8731 9.06427 13.8072 9.06427 14.9547ZM16.0393 14.9547C16.0393 16.1013 16.8911 17.0362 17.9258 17.0362C18.985 17.0362 19.8123 16.1022 19.8123 14.9547C19.829 13.8151 18.9841 12.8731 17.9258 12.8731C16.8745 12.8731 16.0393 13.8072 16.0393 14.9547Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="" className="social-link">
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5 0C6.49263 0 0 6.49263 0 14.5C0 22.5074 6.49263 29 14.5 29C22.5074 29 29 22.5074 29 14.5C29 6.49263 22.5074 0 14.5 0ZM21.4684 10.93C21.4781 11.0821 21.4781 11.2407 21.4781 11.3961C21.4781 16.1474 17.8596 21.6205 11.2472 21.6205C9.20815 21.6205 7.31797 21.0282 5.72556 20.0087C6.01685 20.0411 6.2952 20.054 6.59297 20.054C8.276 20.054 9.8231 19.4844 11.0562 18.5199C9.47679 18.4875 8.14978 17.4518 7.69665 16.0277C8.25011 16.1086 8.74855 16.1086 9.31819 15.9629C8.50492 15.7977 7.77393 15.356 7.24941 14.7129C6.72488 14.0698 6.43919 13.2649 6.44085 12.435V12.3897C6.91663 12.6584 7.47656 12.8234 8.06239 12.8461C7.56991 12.5179 7.16604 12.0732 6.88657 11.5515C6.60709 11.0299 6.46067 10.4473 6.46027 9.85547C6.46027 9.18549 6.63505 8.57377 6.949 8.04297C7.85169 9.15421 8.97812 10.0631 10.2551 10.7105C11.532 11.3579 12.9309 11.7293 14.3608 11.8007C13.8527 9.35703 15.6781 7.37946 17.8725 7.37946C18.9083 7.37946 19.8404 7.81317 20.4974 8.51228C21.3098 8.36016 22.0866 8.05591 22.7792 7.6481C22.5106 8.47991 21.9474 9.18225 21.1998 9.62567C21.9248 9.54799 22.6239 9.34732 23.2712 9.06574C22.7825 9.78426 22.1708 10.4219 21.4684 10.93Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="" className="social-link">
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M29 14.5C29 22.5077 22.5077 29 14.5 29C6.49232 29 0 22.5077 0 14.5C0 6.49232 6.49232 0 14.5 0C22.5094 0 29 6.49232 29 14.5ZM7.15369 14.9872L7.21624 14.8889L10.9883 8.98803C11.0434 8.90164 11.173 8.91057 11.2147 9.00441C11.8449 10.4167 12.3886 12.1731 12.1339 13.2666C12.0251 13.7165 11.7272 14.3258 11.392 14.8889C11.3488 14.9708 11.3011 15.0513 11.2505 15.1287C11.2266 15.1645 11.1864 15.1854 11.1432 15.1854H7.26392C7.15964 15.1854 7.09856 15.0721 7.15369 14.9872ZM23.9669 17.0177V16.0837C23.9669 15.9973 23.8835 15.9347 23.8015 15.9586L19.3904 17.2338C19.3666 17.2397 19.3457 17.2531 19.3293 17.271C18.8569 17.7929 18.4553 18.1431 18.349 18.2359L18.3416 18.2423C18.0675 18.4747 17.7278 18.6014 17.3703 18.6014H15.7733V16.9731H17.0426C17.0753 16.9731 17.1066 16.9611 17.1305 16.9403L17.2943 16.7898C17.3644 16.7257 17.4478 16.6483 17.5476 16.5485C17.5561 16.54 17.5647 16.5314 17.5734 16.5227C17.6258 16.4705 17.6819 16.4146 17.7368 16.3533C17.8023 16.2893 17.8664 16.2178 17.926 16.1478C18.0258 16.0405 18.1211 15.9287 18.221 15.8111C18.2925 15.7336 18.358 15.6457 18.4221 15.5578C18.4936 15.4744 18.5636 15.3805 18.6291 15.2911C18.6535 15.2553 18.6795 15.2191 18.706 15.182C18.7313 15.1467 18.7571 15.1107 18.7826 15.0736C18.8303 15.0021 18.8779 14.9262 18.9181 14.8546C19.0433 14.661 19.1491 14.4539 19.2385 14.2468C19.2795 14.1581 19.3123 14.0648 19.3442 13.974C19.3482 13.9626 19.3521 13.9512 19.3561 13.94C19.3919 13.8342 19.4217 13.7344 19.444 13.6286C19.4977 13.3798 19.5096 13.1325 19.4857 12.8852C19.4798 12.8077 19.4738 12.7318 19.456 12.6603V12.6483C19.45 12.5977 19.4381 12.5411 19.4217 12.4889C19.3681 12.2476 19.2846 12.0063 19.1789 11.7694C19.1431 11.6815 19.1014 11.5921 19.0612 11.5102C18.9658 11.3329 18.866 11.1556 18.7528 10.9843C18.7301 10.9481 18.705 10.9115 18.6799 10.8749C18.6606 10.8467 18.6413 10.8185 18.6232 10.7906C18.5515 10.68 18.4709 10.5734 18.3926 10.47C18.375 10.4466 18.3574 10.4234 18.3401 10.4003C18.2939 10.3397 18.2434 10.2791 18.1925 10.218C18.1646 10.1846 18.1366 10.151 18.1092 10.1173C18.0318 10.0234 17.9558 9.93404 17.8783 9.84614C17.6012 9.53329 17.3107 9.25025 17.0515 9.00891C17.0038 8.96123 16.9517 8.91356 16.8981 8.86739C16.697 8.68414 16.5137 8.52472 16.3603 8.4011C16.3142 8.36563 16.2728 8.33068 16.2343 8.29816C16.2081 8.27603 16.1833 8.25503 16.1591 8.23574C16.1126 8.20106 16.0723 8.17031 16.0384 8.14449C16.0169 8.12814 15.998 8.11377 15.9819 8.10164C15.97 8.09271 15.9566 8.08677 15.9432 8.08227L15.7733 8.03462V6.6283C15.7733 6.39888 15.6809 6.1933 15.5335 6.04282C15.386 5.89236 15.1804 5.8 14.954 5.8C14.5011 5.8 14.1346 6.17094 14.1346 6.6283V7.57576L14.0497 7.55195L13.8188 7.48638L13.6087 7.42829C13.6081 7.42829 13.6075 7.42803 13.6068 7.42773C13.6057 7.4273 13.6045 7.42678 13.6028 7.42678H13.5983L12.0043 6.99477C11.9343 6.9754 11.8747 7.05138 11.9104 7.11544L12.1652 7.5862C12.1796 7.62238 12.1979 7.65856 12.2168 7.69573C12.229 7.7198 12.2413 7.74428 12.253 7.76945C12.2948 7.85285 12.3365 7.94075 12.3767 8.02865C12.4125 8.10611 12.4482 8.18209 12.4899 8.26552C12.5075 8.30473 12.5253 8.34442 12.5435 8.38468C12.61 8.53254 12.6801 8.68802 12.7491 8.85547C12.8087 8.99699 12.8683 9.13851 12.9205 9.286C13.0635 9.65694 13.199 10.0532 13.3167 10.4599C13.346 10.5509 13.3694 10.639 13.3932 10.7283C13.4032 10.7661 13.4133 10.8042 13.424 10.8428L13.4404 10.9143C13.488 11.1035 13.5298 11.2912 13.5596 11.4804C13.5834 11.61 13.6057 11.7336 13.6176 11.8588C13.6355 12.0003 13.6534 12.1418 13.6594 12.2834C13.6713 12.413 13.6772 12.5485 13.6772 12.6781C13.6772 13.0088 13.6475 13.3276 13.5774 13.6286C13.573 13.6448 13.5686 13.6611 13.5642 13.6776C13.5446 13.7509 13.5243 13.8268 13.5 13.8997C13.478 13.9778 13.4495 14.056 13.4198 14.1371C13.4094 14.1658 13.3987 14.1949 13.3882 14.2245C13.3863 14.2297 13.3843 14.235 13.3823 14.2403C13.3604 14.2993 13.3381 14.3594 13.3108 14.4182C13.1633 14.7727 12.9801 15.1258 12.7909 15.4565C12.5138 15.9466 12.2352 16.3772 12.04 16.6543C12.0281 16.6722 12.0164 16.6892 12.0052 16.7056C11.9913 16.726 11.9779 16.7455 11.9655 16.7645C11.9045 16.8509 11.967 16.9731 12.0728 16.9731H14.1346V18.6014H12.0489C11.4888 18.6014 10.9704 18.284 10.7201 17.776C10.5905 17.5213 10.5398 17.2412 10.5697 16.9671C10.5771 16.8852 10.516 16.8077 10.4326 16.8077H6.2196C6.14809 16.8077 6.09 16.8658 6.09 16.9373V17.0237C6.09 19.7112 8.26056 21.8892 10.9391 21.8892H18.4965C19.9132 21.8892 20.7176 20.5983 21.5082 19.3294C21.7286 18.9757 21.948 18.6237 22.1792 18.3019C22.5948 17.7239 23.5945 17.265 23.8864 17.1399C23.9341 17.119 23.9669 17.0714 23.9669 17.0177Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="" className="social-link">
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5 29C22.5077 29 29 22.5077 29 14.5C29 6.49232 22.5094 0 14.5 0C6.49232 0 0 6.49232 0 14.5C0 22.5077 6.49232 29 14.5 29ZM10.6038 19.7409C13.3885 19.7409 15.6459 17.4834 15.6459 14.6987C15.6459 11.914 13.3885 9.65658 10.6038 9.65658C7.81908 9.65658 5.56163 11.914 5.56163 14.6987C5.56163 17.4834 7.81908 19.7409 10.6038 19.7409ZM20.352 14.6987C20.352 17.4834 19.449 19.7409 18.3351 19.7409C17.2213 19.7409 16.3183 17.4834 16.3183 14.6987C16.3183 11.914 17.2213 9.65658 18.3351 9.65658C19.449 9.65658 20.352 11.914 20.352 14.6987ZM22.0325 19.7409C22.5895 19.7409 23.041 17.4834 23.041 14.6987C23.041 11.914 22.5895 9.65658 22.0325 9.65658C21.4756 9.65658 21.0241 11.914 21.0241 14.6987C21.0241 17.4834 21.4756 19.7409 22.0325 19.7409Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="" className="follow-more">
                          FOLLOW US
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="hero-img">
                  <img src="assets/img/hero.png" alt="" />
                </div>
              </div>
            </div>
            <div className="gift-area" data-aos="fade-up">
              <p>
                GIFT YOUR FRIEND <br /> OR <br /> EDUCATE SOME “OTHER FRIENDS”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================about ================== */}
      <section>
        <div className="about-sec cpy-6">
          <div className="container">
            <div className="row-46">
              <div
                className="col-md-40"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-img">
                  <img src="assets/img/about.png" alt="" />
                </div>
              </div>
              <div
                className="col-md-60"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-content">
                  <img
                    src="assets/img/icon/about-title.png"
                    alt=""
                    className="about-title"
                  />
                  <div className="about-des">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut elit tellus, luctus nec
                      ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Ut elit tellus,
                      luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                      <br />
                      <br />
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================about end ================== */}

      {/* ====================our collection =============== */}
      <section>
        <div className="collection-area">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="assets/img/icon/our-collection.png"
                alt=""
                className="title-img"
              />
              <p>
                Here I believe we could use a larger thumb to show the cards a
                little better - not sure if we have to have those colors when
                showing the card - perhaps we have to use rectangles here, and
                when user passes the mouse, the card turns (flips) to one
                picture (like the eye or any other) and then, yes, we use the
                rainbow colors (so we have to have Red, Orange, Yellow, Green,
                Blue and Violet - six thumbs total.
              </p>
            </div>

            <div className="collection-content">
              <div className="row-4">
                <div
                  className="collection-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/box1.png" alt="" />
                </div>
                <div
                  className="collection-item"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img src="assets/img/box2.png" alt="" />
                </div>
                <div
                  className="collection-item"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="assets/img/box3.png" alt="" />
                </div>
                <div
                  className="collection-item"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <img src="assets/img/box4.png" alt="" />
                </div>
              </div>

              <a href="" className="more-view">
                CLICK TO CHECK THE FULL GALLERY
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ====================our collection end  =============== */}

      {/* =======================discover area ================== */}
      <section>
        <div
          className="discover-area cmy-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="discover-btn">
            <a href="" className="custom-btn">
              DISCOVER US
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
                    fill="#2081E2"
                  />
                  <path
                    d="M9.62053 20.1552L9.70477 20.023L14.7771 12.0873C14.794 12.061 14.8176 12.0397 14.8456 12.0258C14.8735 12.0118 14.9047 12.0056 14.9358 12.0079C14.967 12.0102 14.9969 12.0208 15.0225 12.0387C15.0481 12.0566 15.0684 12.081 15.0813 12.1095C15.9288 14.0088 16.66 16.3706 16.3176 17.8413C16.1714 18.4462 15.7708 19.2656 15.32 20.023C15.2615 20.1334 15.1975 20.2414 15.1297 20.3455C15.1138 20.3691 15.0923 20.3884 15.0671 20.4017C15.0419 20.415 15.0138 20.4218 14.9854 20.4216H9.76873C9.62833 20.4216 9.54643 20.2695 9.62053 20.1552Z"
                    fill="white"
                  />
                  <path
                    d="M32.2312 21.6298V22.8856C32.2312 22.9582 32.1871 23.0221 32.1231 23.0502C31.7304 23.2187 30.3861 23.8357 29.8272 24.6129C28.4006 26.598 27.3109 29.4373 24.8746 29.4373H14.7112C11.1092 29.4373 8.19 26.5083 8.19 22.8938V22.778C8.19 22.6817 8.268 22.6037 8.36433 22.6037H14.0303C14.1422 22.6037 14.2245 22.7078 14.2143 22.8182C14.1744 23.1927 14.2448 23.5708 14.4167 23.9059C14.5815 24.2391 14.8361 24.5196 15.1519 24.7158C15.4677 24.9119 15.832 25.0158 16.2037 25.0158H19.0086V22.826H16.2357C16.2032 22.8256 16.1715 22.8163 16.1439 22.7992C16.1163 22.7822 16.0939 22.7579 16.079 22.729C16.0642 22.7001 16.0575 22.6678 16.0597 22.6354C16.0619 22.603 16.0728 22.5718 16.0914 22.5452C16.1218 22.4991 16.1558 22.4516 16.1916 22.397C16.5534 21.8762 16.8905 21.3387 17.2017 20.7863C17.456 20.3417 17.7025 19.8666 17.9006 19.3901C17.9408 19.3039 17.9728 19.2157 18.0047 19.1295C18.059 18.9774 18.1151 18.8351 18.1553 18.6927C18.1951 18.5726 18.2274 18.4463 18.2594 18.3281C18.3534 17.9233 18.3936 17.4947 18.3936 17.0501C18.3936 16.8757 18.3858 16.6932 18.3694 16.5189C18.3616 16.3286 18.3374 16.1382 18.3132 15.9479C18.2946 15.7772 18.2686 15.6074 18.2352 15.439C18.1935 15.1829 18.1401 14.9289 18.0753 14.6777L18.0531 14.5818C18.0047 14.4074 17.965 14.2413 17.9088 14.067C17.7538 13.5333 17.5759 13.0066 17.3757 12.4882C17.3055 12.2897 17.2255 12.0994 17.1456 11.9091C17.0274 11.6224 16.9069 11.3623 16.7969 11.1158C16.7408 11.0035 16.6928 10.9013 16.6448 10.7972C16.5913 10.68 16.5358 10.5638 16.4783 10.4485C16.4381 10.3627 16.3921 10.2824 16.3601 10.2021L16.0173 9.56909C16.0066 9.54993 16.0017 9.52804 16.0034 9.50614C16.005 9.48424 16.0131 9.46332 16.0266 9.446C16.0401 9.42867 16.0584 9.41571 16.0792 9.40875C16.1 9.40179 16.1225 9.40113 16.1437 9.40685L18.2875 9.98795H18.2933C18.2972 9.98795 18.2996 9.9899 18.3011 9.9899L18.5839 10.0679L18.8943 10.156L19.0086 10.188V8.91389C19.0086 8.29886 19.5016 7.80005 20.1104 7.80005C20.4149 7.80005 20.6915 7.92407 20.89 8.12648C21.0881 8.32928 21.2125 8.6054 21.2125 8.91428V10.8054L21.4406 10.8693C21.4594 10.8752 21.477 10.884 21.4929 10.8955C21.5491 10.9376 21.6294 10.9996 21.7312 11.0757C21.8115 11.1396 21.8977 11.218 22.0019 11.298C22.2082 11.4645 22.4543 11.6786 22.7249 11.9251C22.7971 11.9875 22.8673 12.0514 22.9316 12.1154C23.3199 12.4727 23.6908 12.8485 24.0431 13.2413C24.1476 13.3595 24.2498 13.4796 24.3539 13.606C24.4581 13.7343 24.5684 13.8603 24.6644 13.9866C24.7907 14.1551 24.9269 14.3294 25.045 14.5116C25.1012 14.5977 25.1651 14.6859 25.2194 14.7721C25.3715 15.0022 25.5056 15.2409 25.6339 15.4791C25.6881 15.5895 25.7443 15.7096 25.7923 15.8278C25.9346 16.1464 26.0465 16.4713 26.1187 16.7954C26.1409 16.8656 26.1569 16.9416 26.1647 17.0099V17.0259C26.1889 17.1222 26.1971 17.2244 26.2049 17.3285C26.2381 17.6626 26.2192 17.9998 26.1487 18.3281C26.1177 18.4699 26.0783 18.6098 26.0306 18.747C25.9826 18.8835 25.9346 19.0254 25.8722 19.1596C25.7515 19.4435 25.6075 19.7169 25.4417 19.977C25.3874 20.073 25.3235 20.1751 25.2591 20.2715C25.1889 20.3736 25.1172 20.47 25.0528 20.564C24.9647 20.6841 24.8707 20.8104 24.7744 20.9228C24.6886 21.0409 24.6 21.1591 24.5041 21.2632C24.3754 21.4171 24.2431 21.5679 24.1075 21.7156C24.0271 21.81 23.9409 21.9063 23.8528 21.9925C23.767 22.0885 23.6785 22.1747 23.5985 22.255C23.4644 22.3892 23.352 22.4933 23.258 22.5795L23.0377 22.7819C23.0049 22.8104 22.9629 22.826 22.9195 22.826H21.2121V25.0158H23.3598C23.8389 25.0156 24.3021 24.8442 24.6659 24.5326C24.7923 24.4226 25.343 23.9457 25.9943 23.2265C26.0161 23.2022 26.0446 23.1848 26.0762 23.1766L32.0085 21.4614C32.0345 21.4541 32.0618 21.4529 32.0884 21.458C32.1149 21.463 32.1399 21.4741 32.1614 21.4904C32.183 21.5067 32.2004 21.5278 32.2125 21.552C32.2245 21.5762 32.2307 21.6028 32.2308 21.6298H32.2312Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* =======================discover area end ================== */}

      {/* ======================institutes================== */}
      <section>
        <div className="institutes-area">
          <img src="assets/img/shape3.png" alt="" className="world-c" />
          <img src="assets/img/shape1.png" alt="" className="world-d" />
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="assets/img/icon/institutes.png"
                alt=""
                className="title-img"
              />
              <p>
                250 Hundred Thousand Dollars will be donated to the following
                institutes, every thime our <br /> counter hits 1 million cards.
              </p>
            </div>

            <div
              className="institutes-timer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="navigation-timer-text">
                <p className="time-text-black">FIRST MILLION HIT COUNTDOWN:</p>
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
              </div>
            </div>
            <div
              className="institution-item bg-red"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 1</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>

            <div
              className="institution-item bg-yellow"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 2</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
            <div
              className="institution-item bg-green"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 2</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
            <div
              className="institution-item bg-purple"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 3</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
            <div
              className="institution-item bg-blue"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 4</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
            <div
              className="institution-item bg-blue-light"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 5</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
            <div
              className="institution-item bg-yellow-light "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="institution-item-number">
                <p>INSTITUTION - 6</p>
              </div>
              <div className="institution-part-amount">
                <div className="part">
                  <p>PART: 20%</p>
                </div>
                <div className="amount">
                  <p>AMOUNT: 20,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================institutes end ================== */}
      {/* =========================road map============== */}
      <section>
        <div className="roadmap cpy-6">
          <div className="container">
            <div className="section-title">
              <img
                src="assets/img/icon/roadmap.png"
                alt=""
                className="title-img"
              />
            </div>

            <div className="roadmap-area">
              <div
                className="roadmap-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="roadmap-item-inner">
                  <h3>stage 1</h3>
                  <p>
                    Creating a low-cost NFT where each member of the LGBTQIA+
                    community can have their unique card
                  </p>
                </div>
                <img
                  src="assets/img/lips.png"
                  className="right-road-map"
                  alt=""
                />
              </div>

              <div
                className="roadmap-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="roadmap-item-inner">
                  <h3>stage 2</h3>
                  <p>
                    Cards with sequential numbers will be sold in order, meaning
                    that the higher is the number, more spreaded in the world
                    will be another LGBTQIA+ message
                  </p>
                </div>
                <img
                  src="assets/img/driv.png"
                  className="left-road-map"
                  alt=""
                />
              </div>

              <div
                className="roadmap-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="roadmap-item-inner">
                  <h3>stage 3</h3>
                  <p>
                    Spreading peace, love and some knowledge to the world that
                    still have some unacceptable gender bias
                  </p>
                </div>
                <img
                  src="assets/img/eye.png"
                  className="right-road-map"
                  alt=""
                />
              </div>

              <div
                className="roadmap-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="roadmap-item-inner">
                  <h3>stage 4</h3>
                  <p>
                    Hitting the first million NFTs, guaranteeing a huge donation
                    of 250 Thousand dollars to the LGBT cause (check beneficiary
                    instit
                  </p>
                </div>
                <img
                  src="assets/img/stage4.png"
                  className="left-road-map"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="road-map-shape">
            <img src="assets/img/shape2.png" alt="" className="shape1" />
            <img src="assets/img/shape3.png" alt="" className="shape2" />
            <img src="assets/img/shape4.png" alt="" className="shape3" />
            <img src="assets/img/shape1.png" alt="" className="shape4" />
          </div>
        </div>
      </section>
      {/* =========================road map end============== */}

      {/* ======================team section ============= */}
      <section>
        <div className="team-sec">
          <div className="container">
            <div className="section-title">
              <img
                src="assets/img/icon/team.png"
                alt=""
                className="title-img"
              />
              <p>
                I believe we will not have a TEAM - do you believe it will be a
                very weak point if we dont show a team? (It has to be seen by
                the community as something "institutional" you know?
              </p>
            </div>

            <div className="team-content">
              <div className="row-3">
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="assets/img/1.png" alt="" />
                    </div>
                    <div className="team-name-content">
                      <h3>John doe</h3>
                      <p>SOFTWARE ENGINEER</p>
                      <div className="social-follow">
                        <ul className="social-ul">
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5627 29.1254C22.6054 29.1254 29.1254 22.6054 29.1254 14.5627C29.1254 6.51994 22.6054 0 14.5627 0C6.51994 0 0 6.51994 0 14.5627C0 22.6054 6.51994 29.1254 14.5627 29.1254ZM17.4334 6.29954C18.9334 6.55318 20.3677 6.99923 21.7059 7.60271C21.7175 7.60736 21.7272 7.61605 21.733 7.6272C24.104 11.0574 25.2743 14.9284 24.837 19.3837C24.8359 19.3931 24.8329 19.4022 24.8281 19.4103C24.8232 19.4185 24.8167 19.4255 24.809 19.4309C23.2186 20.5896 21.4438 21.4711 19.5596 22.0381C19.5463 22.0421 19.5321 22.0419 19.519 22.0375C19.5058 22.0331 19.4943 22.0248 19.4861 22.0136C19.0899 21.4705 18.7296 20.8985 18.4147 20.2977C18.4104 20.2894 18.4079 20.2803 18.4075 20.2709C18.407 20.2616 18.4085 20.2523 18.4119 20.2436C18.4152 20.2349 18.4205 20.2271 18.4271 20.2205C18.4338 20.214 18.4418 20.209 18.4506 20.2058C19.0217 19.9942 19.5657 19.7397 20.0887 19.4388C20.098 19.4333 20.1058 19.4255 20.1114 19.4162C20.117 19.4069 20.1202 19.3964 20.1207 19.3855C20.1213 19.3747 20.1191 19.3639 20.1144 19.3541C20.1097 19.3443 20.1027 19.3359 20.094 19.3295C19.9829 19.2481 19.8736 19.1633 19.7686 19.0776C19.759 19.0699 19.7474 19.0651 19.7352 19.0637C19.723 19.0623 19.7106 19.0644 19.6995 19.0697C16.3052 20.6125 12.5854 20.6125 9.15086 19.0697C9.1398 19.0647 9.12756 19.0629 9.11551 19.0644C9.10347 19.066 9.09209 19.0708 9.08264 19.0785C8.97769 19.1633 8.86749 19.2481 8.75729 19.3295C8.74862 19.336 8.74171 19.3446 8.73718 19.3545C8.73265 19.3643 8.73065 19.3752 8.73134 19.386C8.73203 19.3968 8.73541 19.4073 8.74116 19.4166C8.74691 19.4258 8.75485 19.4334 8.76428 19.4388C9.28912 19.7372 9.83656 19.9939 10.4016 20.2067C10.4383 20.2207 10.4558 20.2627 10.4374 20.2977C10.1295 20.8994 9.76921 21.4723 9.36514 22.0145C9.3566 22.0253 9.34502 22.0332 9.33192 22.0372C9.31881 22.0413 9.30479 22.0413 9.29167 22.0373C7.41068 21.4686 5.63878 20.5875 4.05014 19.4309C4.0426 19.4252 4.0363 19.4179 4.03164 19.4097C4.02698 19.4014 4.02405 19.3923 4.02303 19.3828C3.65657 15.5293 4.40261 11.6268 7.12439 7.62545C7.13109 7.61491 7.14086 7.60667 7.15238 7.60184C8.49141 6.99748 9.92577 6.55143 11.4248 6.29779C11.4384 6.29565 11.4522 6.29768 11.4646 6.30362C11.4769 6.30956 11.4872 6.31912 11.4939 6.33103C11.6937 6.67932 11.8738 7.03847 12.0336 7.4068C13.6244 7.16911 15.2417 7.16911 16.8325 7.4068C16.976 7.07445 17.1806 6.65376 17.3643 6.33103C17.3711 6.31926 17.3815 6.30991 17.3938 6.30427C17.4062 6.29863 17.42 6.29698 17.4334 6.29954ZM9.06427 14.9547C9.06427 16.1013 9.91702 17.0362 10.9508 17.0362C12.0012 17.0362 12.8373 16.1022 12.8373 14.9547C12.854 13.8151 12.0091 12.8731 10.9508 12.8731C9.9004 12.8731 9.06427 13.8072 9.06427 14.9547ZM16.0393 14.9547C16.0393 16.1013 16.8911 17.0362 17.9258 17.0362C18.985 17.0362 19.8123 16.1022 19.8123 14.9547C19.829 13.8151 18.9841 12.8731 17.9258 12.8731C16.8745 12.8731 16.0393 13.8072 16.0393 14.9547Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.5 0C6.49263 0 0 6.49263 0 14.5C0 22.5074 6.49263 29 14.5 29C22.5074 29 29 22.5074 29 14.5C29 6.49263 22.5074 0 14.5 0ZM21.4684 10.93C21.4781 11.0821 21.4781 11.2407 21.4781 11.3961C21.4781 16.1474 17.8596 21.6205 11.2472 21.6205C9.20815 21.6205 7.31797 21.0282 5.72556 20.0087C6.01685 20.0411 6.2952 20.054 6.59297 20.054C8.276 20.054 9.8231 19.4844 11.0562 18.5199C9.47679 18.4875 8.14978 17.4518 7.69665 16.0277C8.25011 16.1086 8.74855 16.1086 9.31819 15.9629C8.50492 15.7977 7.77393 15.356 7.24941 14.7129C6.72488 14.0698 6.43919 13.2649 6.44085 12.435V12.3897C6.91663 12.6584 7.47656 12.8234 8.06239 12.8461C7.56991 12.5179 7.16604 12.0732 6.88657 11.5515C6.60709 11.0299 6.46067 10.4473 6.46027 9.85547C6.46027 9.18549 6.63505 8.57377 6.949 8.04297C7.85169 9.15421 8.97812 10.0631 10.2551 10.7105C11.532 11.3579 12.9309 11.7293 14.3608 11.8007C13.8527 9.35703 15.6781 7.37946 17.8725 7.37946C18.9083 7.37946 19.8404 7.81317 20.4974 8.51228C21.3098 8.36016 22.0866 8.05591 22.7792 7.6481C22.5106 8.47991 21.9474 9.18225 21.1998 9.62567C21.9248 9.54799 22.6239 9.34732 23.2712 9.06574C22.7825 9.78426 22.1708 10.4219 21.4684 10.93Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29 14.5C29 22.5077 22.5077 29 14.5 29C6.49232 29 0 22.5077 0 14.5C0 6.49232 6.49232 0 14.5 0C22.5094 0 29 6.49232 29 14.5ZM7.15369 14.9872L7.21624 14.8889L10.9883 8.98803C11.0434 8.90164 11.173 8.91057 11.2147 9.00441C11.8449 10.4167 12.3886 12.1731 12.1339 13.2666C12.0251 13.7165 11.7272 14.3258 11.392 14.8889C11.3488 14.9708 11.3011 15.0513 11.2505 15.1287C11.2266 15.1645 11.1864 15.1854 11.1432 15.1854H7.26392C7.15964 15.1854 7.09856 15.0721 7.15369 14.9872ZM23.9669 17.0177V16.0837C23.9669 15.9973 23.8835 15.9347 23.8015 15.9586L19.3904 17.2338C19.3666 17.2397 19.3457 17.2531 19.3293 17.271C18.8569 17.7929 18.4553 18.1431 18.349 18.2359L18.3416 18.2423C18.0675 18.4747 17.7278 18.6014 17.3703 18.6014H15.7733V16.9731H17.0426C17.0753 16.9731 17.1066 16.9611 17.1305 16.9403L17.2943 16.7898C17.3644 16.7257 17.4478 16.6483 17.5476 16.5485C17.5561 16.54 17.5647 16.5314 17.5734 16.5227C17.6258 16.4705 17.6819 16.4146 17.7368 16.3533C17.8023 16.2893 17.8664 16.2178 17.926 16.1478C18.0258 16.0405 18.1211 15.9287 18.221 15.8111C18.2925 15.7336 18.358 15.6457 18.4221 15.5578C18.4936 15.4744 18.5636 15.3805 18.6291 15.2911C18.6535 15.2553 18.6795 15.2191 18.706 15.182C18.7313 15.1467 18.7571 15.1107 18.7826 15.0736C18.8303 15.0021 18.8779 14.9262 18.9181 14.8546C19.0433 14.661 19.1491 14.4539 19.2385 14.2468C19.2795 14.1581 19.3123 14.0648 19.3442 13.974C19.3482 13.9626 19.3521 13.9512 19.3561 13.94C19.3919 13.8342 19.4217 13.7344 19.444 13.6286C19.4977 13.3798 19.5096 13.1325 19.4857 12.8852C19.4798 12.8077 19.4738 12.7318 19.456 12.6603V12.6483C19.45 12.5977 19.4381 12.5411 19.4217 12.4889C19.3681 12.2476 19.2846 12.0063 19.1789 11.7694C19.1431 11.6815 19.1014 11.5921 19.0612 11.5102C18.9658 11.3329 18.866 11.1556 18.7528 10.9843C18.7301 10.9481 18.705 10.9115 18.6799 10.8749C18.6606 10.8467 18.6413 10.8185 18.6232 10.7906C18.5515 10.68 18.4709 10.5734 18.3926 10.47C18.375 10.4466 18.3574 10.4234 18.3401 10.4003C18.2939 10.3397 18.2434 10.2791 18.1925 10.218C18.1646 10.1846 18.1366 10.151 18.1092 10.1173C18.0318 10.0234 17.9558 9.93404 17.8783 9.84614C17.6012 9.53329 17.3107 9.25025 17.0515 9.00891C17.0038 8.96123 16.9517 8.91356 16.8981 8.86739C16.697 8.68414 16.5137 8.52472 16.3603 8.4011C16.3142 8.36563 16.2728 8.33068 16.2343 8.29816C16.2081 8.27603 16.1833 8.25503 16.1591 8.23574C16.1126 8.20106 16.0723 8.17031 16.0384 8.14449C16.0169 8.12814 15.998 8.11377 15.9819 8.10164C15.97 8.09271 15.9566 8.08677 15.9432 8.08227L15.7733 8.03462V6.6283C15.7733 6.39888 15.6809 6.1933 15.5335 6.04282C15.386 5.89236 15.1804 5.8 14.954 5.8C14.5011 5.8 14.1346 6.17094 14.1346 6.6283V7.57576L14.0497 7.55195L13.8188 7.48638L13.6087 7.42829C13.6081 7.42829 13.6075 7.42803 13.6068 7.42773C13.6057 7.4273 13.6045 7.42678 13.6028 7.42678H13.5983L12.0043 6.99477C11.9343 6.9754 11.8747 7.05138 11.9104 7.11544L12.1652 7.5862C12.1796 7.62238 12.1979 7.65856 12.2168 7.69573C12.229 7.7198 12.2413 7.74428 12.253 7.76945C12.2948 7.85285 12.3365 7.94075 12.3767 8.02865C12.4125 8.10611 12.4482 8.18209 12.4899 8.26552C12.5075 8.30473 12.5253 8.34442 12.5435 8.38468C12.61 8.53254 12.6801 8.68802 12.7491 8.85547C12.8087 8.99699 12.8683 9.13851 12.9205 9.286C13.0635 9.65694 13.199 10.0532 13.3167 10.4599C13.346 10.5509 13.3694 10.639 13.3932 10.7283C13.4032 10.7661 13.4133 10.8042 13.424 10.8428L13.4404 10.9143C13.488 11.1035 13.5298 11.2912 13.5596 11.4804C13.5834 11.61 13.6057 11.7336 13.6176 11.8588C13.6355 12.0003 13.6534 12.1418 13.6594 12.2834C13.6713 12.413 13.6772 12.5485 13.6772 12.6781C13.6772 13.0088 13.6475 13.3276 13.5774 13.6286C13.573 13.6448 13.5686 13.6611 13.5642 13.6776C13.5446 13.7509 13.5243 13.8268 13.5 13.8997C13.478 13.9778 13.4495 14.056 13.4198 14.1371C13.4094 14.1658 13.3987 14.1949 13.3882 14.2245C13.3863 14.2297 13.3843 14.235 13.3823 14.2403C13.3604 14.2993 13.3381 14.3594 13.3108 14.4182C13.1633 14.7727 12.9801 15.1258 12.7909 15.4565C12.5138 15.9466 12.2352 16.3772 12.04 16.6543C12.0281 16.6722 12.0164 16.6892 12.0052 16.7056C11.9913 16.726 11.9779 16.7455 11.9655 16.7645C11.9045 16.8509 11.967 16.9731 12.0728 16.9731H14.1346V18.6014H12.0489C11.4888 18.6014 10.9704 18.284 10.7201 17.776C10.5905 17.5213 10.5398 17.2412 10.5697 16.9671C10.5771 16.8852 10.516 16.8077 10.4326 16.8077H6.2196C6.14809 16.8077 6.09 16.8658 6.09 16.9373V17.0237C6.09 19.7112 8.26056 21.8892 10.9391 21.8892H18.4965C19.9132 21.8892 20.7176 20.5983 21.5082 19.3294C21.7286 18.9757 21.948 18.6237 22.1792 18.3019C22.5948 17.7239 23.5945 17.265 23.8864 17.1399C23.9341 17.119 23.9669 17.0714 23.9669 17.0177Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 29C22.5077 29 29 22.5077 29 14.5C29 6.49232 22.5094 0 14.5 0C6.49232 0 0 6.49232 0 14.5C0 22.5077 6.49232 29 14.5 29ZM10.6038 19.7409C13.3885 19.7409 15.6459 17.4834 15.6459 14.6987C15.6459 11.914 13.3885 9.65658 10.6038 9.65658C7.81908 9.65658 5.56163 11.914 5.56163 14.6987C5.56163 17.4834 7.81908 19.7409 10.6038 19.7409ZM20.352 14.6987C20.352 17.4834 19.449 19.7409 18.3351 19.7409C17.2213 19.7409 16.3183 17.4834 16.3183 14.6987C16.3183 11.914 17.2213 9.65658 18.3351 9.65658C19.449 9.65658 20.352 11.914 20.352 14.6987ZM22.0325 19.7409C22.5895 19.7409 23.041 17.4834 23.041 14.6987C23.041 11.914 22.5895 9.65658 22.0325 9.65658C21.4756 9.65658 21.0241 11.914 21.0241 14.6987C21.0241 17.4834 21.4756 19.7409 22.0325 19.7409Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="assets/img/2.png" alt="" />
                    </div>
                    <div className="team-name-content">
                      <h3>John doe</h3>
                      <p>SOFTWARE ENGINEER</p>
                      <div className="social-follow">
                        <ul className="social-ul">
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5627 29.1254C22.6054 29.1254 29.1254 22.6054 29.1254 14.5627C29.1254 6.51994 22.6054 0 14.5627 0C6.51994 0 0 6.51994 0 14.5627C0 22.6054 6.51994 29.1254 14.5627 29.1254ZM17.4334 6.29954C18.9334 6.55318 20.3677 6.99923 21.7059 7.60271C21.7175 7.60736 21.7272 7.61605 21.733 7.6272C24.104 11.0574 25.2743 14.9284 24.837 19.3837C24.8359 19.3931 24.8329 19.4022 24.8281 19.4103C24.8232 19.4185 24.8167 19.4255 24.809 19.4309C23.2186 20.5896 21.4438 21.4711 19.5596 22.0381C19.5463 22.0421 19.5321 22.0419 19.519 22.0375C19.5058 22.0331 19.4943 22.0248 19.4861 22.0136C19.0899 21.4705 18.7296 20.8985 18.4147 20.2977C18.4104 20.2894 18.4079 20.2803 18.4075 20.2709C18.407 20.2616 18.4085 20.2523 18.4119 20.2436C18.4152 20.2349 18.4205 20.2271 18.4271 20.2205C18.4338 20.214 18.4418 20.209 18.4506 20.2058C19.0217 19.9942 19.5657 19.7397 20.0887 19.4388C20.098 19.4333 20.1058 19.4255 20.1114 19.4162C20.117 19.4069 20.1202 19.3964 20.1207 19.3855C20.1213 19.3747 20.1191 19.3639 20.1144 19.3541C20.1097 19.3443 20.1027 19.3359 20.094 19.3295C19.9829 19.2481 19.8736 19.1633 19.7686 19.0776C19.759 19.0699 19.7474 19.0651 19.7352 19.0637C19.723 19.0623 19.7106 19.0644 19.6995 19.0697C16.3052 20.6125 12.5854 20.6125 9.15086 19.0697C9.1398 19.0647 9.12756 19.0629 9.11551 19.0644C9.10347 19.066 9.09209 19.0708 9.08264 19.0785C8.97769 19.1633 8.86749 19.2481 8.75729 19.3295C8.74862 19.336 8.74171 19.3446 8.73718 19.3545C8.73265 19.3643 8.73065 19.3752 8.73134 19.386C8.73203 19.3968 8.73541 19.4073 8.74116 19.4166C8.74691 19.4258 8.75485 19.4334 8.76428 19.4388C9.28912 19.7372 9.83656 19.9939 10.4016 20.2067C10.4383 20.2207 10.4558 20.2627 10.4374 20.2977C10.1295 20.8994 9.76921 21.4723 9.36514 22.0145C9.3566 22.0253 9.34502 22.0332 9.33192 22.0372C9.31881 22.0413 9.30479 22.0413 9.29167 22.0373C7.41068 21.4686 5.63878 20.5875 4.05014 19.4309C4.0426 19.4252 4.0363 19.4179 4.03164 19.4097C4.02698 19.4014 4.02405 19.3923 4.02303 19.3828C3.65657 15.5293 4.40261 11.6268 7.12439 7.62545C7.13109 7.61491 7.14086 7.60667 7.15238 7.60184C8.49141 6.99748 9.92577 6.55143 11.4248 6.29779C11.4384 6.29565 11.4522 6.29768 11.4646 6.30362C11.4769 6.30956 11.4872 6.31912 11.4939 6.33103C11.6937 6.67932 11.8738 7.03847 12.0336 7.4068C13.6244 7.16911 15.2417 7.16911 16.8325 7.4068C16.976 7.07445 17.1806 6.65376 17.3643 6.33103C17.3711 6.31926 17.3815 6.30991 17.3938 6.30427C17.4062 6.29863 17.42 6.29698 17.4334 6.29954ZM9.06427 14.9547C9.06427 16.1013 9.91702 17.0362 10.9508 17.0362C12.0012 17.0362 12.8373 16.1022 12.8373 14.9547C12.854 13.8151 12.0091 12.8731 10.9508 12.8731C9.9004 12.8731 9.06427 13.8072 9.06427 14.9547ZM16.0393 14.9547C16.0393 16.1013 16.8911 17.0362 17.9258 17.0362C18.985 17.0362 19.8123 16.1022 19.8123 14.9547C19.829 13.8151 18.9841 12.8731 17.9258 12.8731C16.8745 12.8731 16.0393 13.8072 16.0393 14.9547Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.5 0C6.49263 0 0 6.49263 0 14.5C0 22.5074 6.49263 29 14.5 29C22.5074 29 29 22.5074 29 14.5C29 6.49263 22.5074 0 14.5 0ZM21.4684 10.93C21.4781 11.0821 21.4781 11.2407 21.4781 11.3961C21.4781 16.1474 17.8596 21.6205 11.2472 21.6205C9.20815 21.6205 7.31797 21.0282 5.72556 20.0087C6.01685 20.0411 6.2952 20.054 6.59297 20.054C8.276 20.054 9.8231 19.4844 11.0562 18.5199C9.47679 18.4875 8.14978 17.4518 7.69665 16.0277C8.25011 16.1086 8.74855 16.1086 9.31819 15.9629C8.50492 15.7977 7.77393 15.356 7.24941 14.7129C6.72488 14.0698 6.43919 13.2649 6.44085 12.435V12.3897C6.91663 12.6584 7.47656 12.8234 8.06239 12.8461C7.56991 12.5179 7.16604 12.0732 6.88657 11.5515C6.60709 11.0299 6.46067 10.4473 6.46027 9.85547C6.46027 9.18549 6.63505 8.57377 6.949 8.04297C7.85169 9.15421 8.97812 10.0631 10.2551 10.7105C11.532 11.3579 12.9309 11.7293 14.3608 11.8007C13.8527 9.35703 15.6781 7.37946 17.8725 7.37946C18.9083 7.37946 19.8404 7.81317 20.4974 8.51228C21.3098 8.36016 22.0866 8.05591 22.7792 7.6481C22.5106 8.47991 21.9474 9.18225 21.1998 9.62567C21.9248 9.54799 22.6239 9.34732 23.2712 9.06574C22.7825 9.78426 22.1708 10.4219 21.4684 10.93Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29 14.5C29 22.5077 22.5077 29 14.5 29C6.49232 29 0 22.5077 0 14.5C0 6.49232 6.49232 0 14.5 0C22.5094 0 29 6.49232 29 14.5ZM7.15369 14.9872L7.21624 14.8889L10.9883 8.98803C11.0434 8.90164 11.173 8.91057 11.2147 9.00441C11.8449 10.4167 12.3886 12.1731 12.1339 13.2666C12.0251 13.7165 11.7272 14.3258 11.392 14.8889C11.3488 14.9708 11.3011 15.0513 11.2505 15.1287C11.2266 15.1645 11.1864 15.1854 11.1432 15.1854H7.26392C7.15964 15.1854 7.09856 15.0721 7.15369 14.9872ZM23.9669 17.0177V16.0837C23.9669 15.9973 23.8835 15.9347 23.8015 15.9586L19.3904 17.2338C19.3666 17.2397 19.3457 17.2531 19.3293 17.271C18.8569 17.7929 18.4553 18.1431 18.349 18.2359L18.3416 18.2423C18.0675 18.4747 17.7278 18.6014 17.3703 18.6014H15.7733V16.9731H17.0426C17.0753 16.9731 17.1066 16.9611 17.1305 16.9403L17.2943 16.7898C17.3644 16.7257 17.4478 16.6483 17.5476 16.5485C17.5561 16.54 17.5647 16.5314 17.5734 16.5227C17.6258 16.4705 17.6819 16.4146 17.7368 16.3533C17.8023 16.2893 17.8664 16.2178 17.926 16.1478C18.0258 16.0405 18.1211 15.9287 18.221 15.8111C18.2925 15.7336 18.358 15.6457 18.4221 15.5578C18.4936 15.4744 18.5636 15.3805 18.6291 15.2911C18.6535 15.2553 18.6795 15.2191 18.706 15.182C18.7313 15.1467 18.7571 15.1107 18.7826 15.0736C18.8303 15.0021 18.8779 14.9262 18.9181 14.8546C19.0433 14.661 19.1491 14.4539 19.2385 14.2468C19.2795 14.1581 19.3123 14.0648 19.3442 13.974C19.3482 13.9626 19.3521 13.9512 19.3561 13.94C19.3919 13.8342 19.4217 13.7344 19.444 13.6286C19.4977 13.3798 19.5096 13.1325 19.4857 12.8852C19.4798 12.8077 19.4738 12.7318 19.456 12.6603V12.6483C19.45 12.5977 19.4381 12.5411 19.4217 12.4889C19.3681 12.2476 19.2846 12.0063 19.1789 11.7694C19.1431 11.6815 19.1014 11.5921 19.0612 11.5102C18.9658 11.3329 18.866 11.1556 18.7528 10.9843C18.7301 10.9481 18.705 10.9115 18.6799 10.8749C18.6606 10.8467 18.6413 10.8185 18.6232 10.7906C18.5515 10.68 18.4709 10.5734 18.3926 10.47C18.375 10.4466 18.3574 10.4234 18.3401 10.4003C18.2939 10.3397 18.2434 10.2791 18.1925 10.218C18.1646 10.1846 18.1366 10.151 18.1092 10.1173C18.0318 10.0234 17.9558 9.93404 17.8783 9.84614C17.6012 9.53329 17.3107 9.25025 17.0515 9.00891C17.0038 8.96123 16.9517 8.91356 16.8981 8.86739C16.697 8.68414 16.5137 8.52472 16.3603 8.4011C16.3142 8.36563 16.2728 8.33068 16.2343 8.29816C16.2081 8.27603 16.1833 8.25503 16.1591 8.23574C16.1126 8.20106 16.0723 8.17031 16.0384 8.14449C16.0169 8.12814 15.998 8.11377 15.9819 8.10164C15.97 8.09271 15.9566 8.08677 15.9432 8.08227L15.7733 8.03462V6.6283C15.7733 6.39888 15.6809 6.1933 15.5335 6.04282C15.386 5.89236 15.1804 5.8 14.954 5.8C14.5011 5.8 14.1346 6.17094 14.1346 6.6283V7.57576L14.0497 7.55195L13.8188 7.48638L13.6087 7.42829C13.6081 7.42829 13.6075 7.42803 13.6068 7.42773C13.6057 7.4273 13.6045 7.42678 13.6028 7.42678H13.5983L12.0043 6.99477C11.9343 6.9754 11.8747 7.05138 11.9104 7.11544L12.1652 7.5862C12.1796 7.62238 12.1979 7.65856 12.2168 7.69573C12.229 7.7198 12.2413 7.74428 12.253 7.76945C12.2948 7.85285 12.3365 7.94075 12.3767 8.02865C12.4125 8.10611 12.4482 8.18209 12.4899 8.26552C12.5075 8.30473 12.5253 8.34442 12.5435 8.38468C12.61 8.53254 12.6801 8.68802 12.7491 8.85547C12.8087 8.99699 12.8683 9.13851 12.9205 9.286C13.0635 9.65694 13.199 10.0532 13.3167 10.4599C13.346 10.5509 13.3694 10.639 13.3932 10.7283C13.4032 10.7661 13.4133 10.8042 13.424 10.8428L13.4404 10.9143C13.488 11.1035 13.5298 11.2912 13.5596 11.4804C13.5834 11.61 13.6057 11.7336 13.6176 11.8588C13.6355 12.0003 13.6534 12.1418 13.6594 12.2834C13.6713 12.413 13.6772 12.5485 13.6772 12.6781C13.6772 13.0088 13.6475 13.3276 13.5774 13.6286C13.573 13.6448 13.5686 13.6611 13.5642 13.6776C13.5446 13.7509 13.5243 13.8268 13.5 13.8997C13.478 13.9778 13.4495 14.056 13.4198 14.1371C13.4094 14.1658 13.3987 14.1949 13.3882 14.2245C13.3863 14.2297 13.3843 14.235 13.3823 14.2403C13.3604 14.2993 13.3381 14.3594 13.3108 14.4182C13.1633 14.7727 12.9801 15.1258 12.7909 15.4565C12.5138 15.9466 12.2352 16.3772 12.04 16.6543C12.0281 16.6722 12.0164 16.6892 12.0052 16.7056C11.9913 16.726 11.9779 16.7455 11.9655 16.7645C11.9045 16.8509 11.967 16.9731 12.0728 16.9731H14.1346V18.6014H12.0489C11.4888 18.6014 10.9704 18.284 10.7201 17.776C10.5905 17.5213 10.5398 17.2412 10.5697 16.9671C10.5771 16.8852 10.516 16.8077 10.4326 16.8077H6.2196C6.14809 16.8077 6.09 16.8658 6.09 16.9373V17.0237C6.09 19.7112 8.26056 21.8892 10.9391 21.8892H18.4965C19.9132 21.8892 20.7176 20.5983 21.5082 19.3294C21.7286 18.9757 21.948 18.6237 22.1792 18.3019C22.5948 17.7239 23.5945 17.265 23.8864 17.1399C23.9341 17.119 23.9669 17.0714 23.9669 17.0177Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 29C22.5077 29 29 22.5077 29 14.5C29 6.49232 22.5094 0 14.5 0C6.49232 0 0 6.49232 0 14.5C0 22.5077 6.49232 29 14.5 29ZM10.6038 19.7409C13.3885 19.7409 15.6459 17.4834 15.6459 14.6987C15.6459 11.914 13.3885 9.65658 10.6038 9.65658C7.81908 9.65658 5.56163 11.914 5.56163 14.6987C5.56163 17.4834 7.81908 19.7409 10.6038 19.7409ZM20.352 14.6987C20.352 17.4834 19.449 19.7409 18.3351 19.7409C17.2213 19.7409 16.3183 17.4834 16.3183 14.6987C16.3183 11.914 17.2213 9.65658 18.3351 9.65658C19.449 9.65658 20.352 11.914 20.352 14.6987ZM22.0325 19.7409C22.5895 19.7409 23.041 17.4834 23.041 14.6987C23.041 11.914 22.5895 9.65658 22.0325 9.65658C21.4756 9.65658 21.0241 11.914 21.0241 14.6987C21.0241 17.4834 21.4756 19.7409 22.0325 19.7409Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="assets/img/3.png" alt="" />
                    </div>
                    <div className="team-name-content">
                      <h3>John doe</h3>
                      <p>SOFTWARE ENGINEER</p>
                      <div className="social-follow">
                        <ul className="social-ul">
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5627 29.1254C22.6054 29.1254 29.1254 22.6054 29.1254 14.5627C29.1254 6.51994 22.6054 0 14.5627 0C6.51994 0 0 6.51994 0 14.5627C0 22.6054 6.51994 29.1254 14.5627 29.1254ZM17.4334 6.29954C18.9334 6.55318 20.3677 6.99923 21.7059 7.60271C21.7175 7.60736 21.7272 7.61605 21.733 7.6272C24.104 11.0574 25.2743 14.9284 24.837 19.3837C24.8359 19.3931 24.8329 19.4022 24.8281 19.4103C24.8232 19.4185 24.8167 19.4255 24.809 19.4309C23.2186 20.5896 21.4438 21.4711 19.5596 22.0381C19.5463 22.0421 19.5321 22.0419 19.519 22.0375C19.5058 22.0331 19.4943 22.0248 19.4861 22.0136C19.0899 21.4705 18.7296 20.8985 18.4147 20.2977C18.4104 20.2894 18.4079 20.2803 18.4075 20.2709C18.407 20.2616 18.4085 20.2523 18.4119 20.2436C18.4152 20.2349 18.4205 20.2271 18.4271 20.2205C18.4338 20.214 18.4418 20.209 18.4506 20.2058C19.0217 19.9942 19.5657 19.7397 20.0887 19.4388C20.098 19.4333 20.1058 19.4255 20.1114 19.4162C20.117 19.4069 20.1202 19.3964 20.1207 19.3855C20.1213 19.3747 20.1191 19.3639 20.1144 19.3541C20.1097 19.3443 20.1027 19.3359 20.094 19.3295C19.9829 19.2481 19.8736 19.1633 19.7686 19.0776C19.759 19.0699 19.7474 19.0651 19.7352 19.0637C19.723 19.0623 19.7106 19.0644 19.6995 19.0697C16.3052 20.6125 12.5854 20.6125 9.15086 19.0697C9.1398 19.0647 9.12756 19.0629 9.11551 19.0644C9.10347 19.066 9.09209 19.0708 9.08264 19.0785C8.97769 19.1633 8.86749 19.2481 8.75729 19.3295C8.74862 19.336 8.74171 19.3446 8.73718 19.3545C8.73265 19.3643 8.73065 19.3752 8.73134 19.386C8.73203 19.3968 8.73541 19.4073 8.74116 19.4166C8.74691 19.4258 8.75485 19.4334 8.76428 19.4388C9.28912 19.7372 9.83656 19.9939 10.4016 20.2067C10.4383 20.2207 10.4558 20.2627 10.4374 20.2977C10.1295 20.8994 9.76921 21.4723 9.36514 22.0145C9.3566 22.0253 9.34502 22.0332 9.33192 22.0372C9.31881 22.0413 9.30479 22.0413 9.29167 22.0373C7.41068 21.4686 5.63878 20.5875 4.05014 19.4309C4.0426 19.4252 4.0363 19.4179 4.03164 19.4097C4.02698 19.4014 4.02405 19.3923 4.02303 19.3828C3.65657 15.5293 4.40261 11.6268 7.12439 7.62545C7.13109 7.61491 7.14086 7.60667 7.15238 7.60184C8.49141 6.99748 9.92577 6.55143 11.4248 6.29779C11.4384 6.29565 11.4522 6.29768 11.4646 6.30362C11.4769 6.30956 11.4872 6.31912 11.4939 6.33103C11.6937 6.67932 11.8738 7.03847 12.0336 7.4068C13.6244 7.16911 15.2417 7.16911 16.8325 7.4068C16.976 7.07445 17.1806 6.65376 17.3643 6.33103C17.3711 6.31926 17.3815 6.30991 17.3938 6.30427C17.4062 6.29863 17.42 6.29698 17.4334 6.29954ZM9.06427 14.9547C9.06427 16.1013 9.91702 17.0362 10.9508 17.0362C12.0012 17.0362 12.8373 16.1022 12.8373 14.9547C12.854 13.8151 12.0091 12.8731 10.9508 12.8731C9.9004 12.8731 9.06427 13.8072 9.06427 14.9547ZM16.0393 14.9547C16.0393 16.1013 16.8911 17.0362 17.9258 17.0362C18.985 17.0362 19.8123 16.1022 19.8123 14.9547C19.829 13.8151 18.9841 12.8731 17.9258 12.8731C16.8745 12.8731 16.0393 13.8072 16.0393 14.9547Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.5 0C6.49263 0 0 6.49263 0 14.5C0 22.5074 6.49263 29 14.5 29C22.5074 29 29 22.5074 29 14.5C29 6.49263 22.5074 0 14.5 0ZM21.4684 10.93C21.4781 11.0821 21.4781 11.2407 21.4781 11.3961C21.4781 16.1474 17.8596 21.6205 11.2472 21.6205C9.20815 21.6205 7.31797 21.0282 5.72556 20.0087C6.01685 20.0411 6.2952 20.054 6.59297 20.054C8.276 20.054 9.8231 19.4844 11.0562 18.5199C9.47679 18.4875 8.14978 17.4518 7.69665 16.0277C8.25011 16.1086 8.74855 16.1086 9.31819 15.9629C8.50492 15.7977 7.77393 15.356 7.24941 14.7129C6.72488 14.0698 6.43919 13.2649 6.44085 12.435V12.3897C6.91663 12.6584 7.47656 12.8234 8.06239 12.8461C7.56991 12.5179 7.16604 12.0732 6.88657 11.5515C6.60709 11.0299 6.46067 10.4473 6.46027 9.85547C6.46027 9.18549 6.63505 8.57377 6.949 8.04297C7.85169 9.15421 8.97812 10.0631 10.2551 10.7105C11.532 11.3579 12.9309 11.7293 14.3608 11.8007C13.8527 9.35703 15.6781 7.37946 17.8725 7.37946C18.9083 7.37946 19.8404 7.81317 20.4974 8.51228C21.3098 8.36016 22.0866 8.05591 22.7792 7.6481C22.5106 8.47991 21.9474 9.18225 21.1998 9.62567C21.9248 9.54799 22.6239 9.34732 23.2712 9.06574C22.7825 9.78426 22.1708 10.4219 21.4684 10.93Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29 14.5C29 22.5077 22.5077 29 14.5 29C6.49232 29 0 22.5077 0 14.5C0 6.49232 6.49232 0 14.5 0C22.5094 0 29 6.49232 29 14.5ZM7.15369 14.9872L7.21624 14.8889L10.9883 8.98803C11.0434 8.90164 11.173 8.91057 11.2147 9.00441C11.8449 10.4167 12.3886 12.1731 12.1339 13.2666C12.0251 13.7165 11.7272 14.3258 11.392 14.8889C11.3488 14.9708 11.3011 15.0513 11.2505 15.1287C11.2266 15.1645 11.1864 15.1854 11.1432 15.1854H7.26392C7.15964 15.1854 7.09856 15.0721 7.15369 14.9872ZM23.9669 17.0177V16.0837C23.9669 15.9973 23.8835 15.9347 23.8015 15.9586L19.3904 17.2338C19.3666 17.2397 19.3457 17.2531 19.3293 17.271C18.8569 17.7929 18.4553 18.1431 18.349 18.2359L18.3416 18.2423C18.0675 18.4747 17.7278 18.6014 17.3703 18.6014H15.7733V16.9731H17.0426C17.0753 16.9731 17.1066 16.9611 17.1305 16.9403L17.2943 16.7898C17.3644 16.7257 17.4478 16.6483 17.5476 16.5485C17.5561 16.54 17.5647 16.5314 17.5734 16.5227C17.6258 16.4705 17.6819 16.4146 17.7368 16.3533C17.8023 16.2893 17.8664 16.2178 17.926 16.1478C18.0258 16.0405 18.1211 15.9287 18.221 15.8111C18.2925 15.7336 18.358 15.6457 18.4221 15.5578C18.4936 15.4744 18.5636 15.3805 18.6291 15.2911C18.6535 15.2553 18.6795 15.2191 18.706 15.182C18.7313 15.1467 18.7571 15.1107 18.7826 15.0736C18.8303 15.0021 18.8779 14.9262 18.9181 14.8546C19.0433 14.661 19.1491 14.4539 19.2385 14.2468C19.2795 14.1581 19.3123 14.0648 19.3442 13.974C19.3482 13.9626 19.3521 13.9512 19.3561 13.94C19.3919 13.8342 19.4217 13.7344 19.444 13.6286C19.4977 13.3798 19.5096 13.1325 19.4857 12.8852C19.4798 12.8077 19.4738 12.7318 19.456 12.6603V12.6483C19.45 12.5977 19.4381 12.5411 19.4217 12.4889C19.3681 12.2476 19.2846 12.0063 19.1789 11.7694C19.1431 11.6815 19.1014 11.5921 19.0612 11.5102C18.9658 11.3329 18.866 11.1556 18.7528 10.9843C18.7301 10.9481 18.705 10.9115 18.6799 10.8749C18.6606 10.8467 18.6413 10.8185 18.6232 10.7906C18.5515 10.68 18.4709 10.5734 18.3926 10.47C18.375 10.4466 18.3574 10.4234 18.3401 10.4003C18.2939 10.3397 18.2434 10.2791 18.1925 10.218C18.1646 10.1846 18.1366 10.151 18.1092 10.1173C18.0318 10.0234 17.9558 9.93404 17.8783 9.84614C17.6012 9.53329 17.3107 9.25025 17.0515 9.00891C17.0038 8.96123 16.9517 8.91356 16.8981 8.86739C16.697 8.68414 16.5137 8.52472 16.3603 8.4011C16.3142 8.36563 16.2728 8.33068 16.2343 8.29816C16.2081 8.27603 16.1833 8.25503 16.1591 8.23574C16.1126 8.20106 16.0723 8.17031 16.0384 8.14449C16.0169 8.12814 15.998 8.11377 15.9819 8.10164C15.97 8.09271 15.9566 8.08677 15.9432 8.08227L15.7733 8.03462V6.6283C15.7733 6.39888 15.6809 6.1933 15.5335 6.04282C15.386 5.89236 15.1804 5.8 14.954 5.8C14.5011 5.8 14.1346 6.17094 14.1346 6.6283V7.57576L14.0497 7.55195L13.8188 7.48638L13.6087 7.42829C13.6081 7.42829 13.6075 7.42803 13.6068 7.42773C13.6057 7.4273 13.6045 7.42678 13.6028 7.42678H13.5983L12.0043 6.99477C11.9343 6.9754 11.8747 7.05138 11.9104 7.11544L12.1652 7.5862C12.1796 7.62238 12.1979 7.65856 12.2168 7.69573C12.229 7.7198 12.2413 7.74428 12.253 7.76945C12.2948 7.85285 12.3365 7.94075 12.3767 8.02865C12.4125 8.10611 12.4482 8.18209 12.4899 8.26552C12.5075 8.30473 12.5253 8.34442 12.5435 8.38468C12.61 8.53254 12.6801 8.68802 12.7491 8.85547C12.8087 8.99699 12.8683 9.13851 12.9205 9.286C13.0635 9.65694 13.199 10.0532 13.3167 10.4599C13.346 10.5509 13.3694 10.639 13.3932 10.7283C13.4032 10.7661 13.4133 10.8042 13.424 10.8428L13.4404 10.9143C13.488 11.1035 13.5298 11.2912 13.5596 11.4804C13.5834 11.61 13.6057 11.7336 13.6176 11.8588C13.6355 12.0003 13.6534 12.1418 13.6594 12.2834C13.6713 12.413 13.6772 12.5485 13.6772 12.6781C13.6772 13.0088 13.6475 13.3276 13.5774 13.6286C13.573 13.6448 13.5686 13.6611 13.5642 13.6776C13.5446 13.7509 13.5243 13.8268 13.5 13.8997C13.478 13.9778 13.4495 14.056 13.4198 14.1371C13.4094 14.1658 13.3987 14.1949 13.3882 14.2245C13.3863 14.2297 13.3843 14.235 13.3823 14.2403C13.3604 14.2993 13.3381 14.3594 13.3108 14.4182C13.1633 14.7727 12.9801 15.1258 12.7909 15.4565C12.5138 15.9466 12.2352 16.3772 12.04 16.6543C12.0281 16.6722 12.0164 16.6892 12.0052 16.7056C11.9913 16.726 11.9779 16.7455 11.9655 16.7645C11.9045 16.8509 11.967 16.9731 12.0728 16.9731H14.1346V18.6014H12.0489C11.4888 18.6014 10.9704 18.284 10.7201 17.776C10.5905 17.5213 10.5398 17.2412 10.5697 16.9671C10.5771 16.8852 10.516 16.8077 10.4326 16.8077H6.2196C6.14809 16.8077 6.09 16.8658 6.09 16.9373V17.0237C6.09 19.7112 8.26056 21.8892 10.9391 21.8892H18.4965C19.9132 21.8892 20.7176 20.5983 21.5082 19.3294C21.7286 18.9757 21.948 18.6237 22.1792 18.3019C22.5948 17.7239 23.5945 17.265 23.8864 17.1399C23.9341 17.119 23.9669 17.0714 23.9669 17.0177Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="" className="social-link">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.5 29C22.5077 29 29 22.5077 29 14.5C29 6.49232 22.5094 0 14.5 0C6.49232 0 0 6.49232 0 14.5C0 22.5077 6.49232 29 14.5 29ZM10.6038 19.7409C13.3885 19.7409 15.6459 17.4834 15.6459 14.6987C15.6459 11.914 13.3885 9.65658 10.6038 9.65658C7.81908 9.65658 5.56163 11.914 5.56163 14.6987C5.56163 17.4834 7.81908 19.7409 10.6038 19.7409ZM20.352 14.6987C20.352 17.4834 19.449 19.7409 18.3351 19.7409C17.2213 19.7409 16.3183 17.4834 16.3183 14.6987C16.3183 11.914 17.2213 9.65658 18.3351 9.65658C19.449 9.65658 20.352 11.914 20.352 14.6987ZM22.0325 19.7409C22.5895 19.7409 23.041 17.4834 23.041 14.6987C23.041 11.914 22.5895 9.65658 22.0325 9.65658C21.4756 9.65658 21.0241 11.914 21.0241 14.6987C21.0241 17.4834 21.4756 19.7409 22.0325 19.7409Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="assets/img/shape4.png" alt="" className="shape-5" />
        </div>
      </section>
      {/* ======================team section end ============= */}
      {/* =====================contact area ============== */}
      <section>
        <div
          className="contact-area cmy-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="assets/img/shape2.png" alt="" className="shape-6" />
          <div className="contact-btn-content">
            <a href="" className="custom-btn">
              Contact Us
            </a>
            <p>contact.lgbtqplus@gmail.com</p>
          </div>
        </div>
      </section>
      {/* =====================contact area end  ============== */}
      <div className="bg-area">
        {/* ===================faq=============== */}
        <section>
          <div className="faq-area">
            <div className="container">
              <div className="section-title">
                <img src="assets/img/icon/faq.png" alt="" />
              </div>

              <div className="faq-content">
                <div
                  class="faq-div"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <input
                    type="checkbox"
                    id="question1"
                    name="q"
                    class="questions"
                  />
                  <div class="qustion">
                    <label for="question1" class="question">
                      WHAT ARE LGBTQ NFT?
                    </label>
                    <div class="plus">+</div>
                  </div>
                  <div class="answers">
                    <p>
                      Block Explorers provide a visually appealing and intuitive
                      way to navigate a cryptocurrency ' s. Our Block Explorer
                      launched in August 2011. It began as a way for anyone to
                      study bitcoin transactions, along with a variety of
                      helpful charts and statistics about activity on the
                      network.
                    </p>
                  </div>
                </div>
                <div
                  class="faq-div"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <input
                    type="checkbox"
                    id="question2"
                    name="q"
                    class="questions"
                  />
                  <div class="qustion">
                    <label for="question2" class="question">
                      WHAT ARE LGBTQ NFT?
                    </label>
                    <div class="plus">+</div>
                  </div>
                  <div class="answers">
                    <p>
                      Block Explorers provide a visually appealing and intuitive
                      way to navigate a cryptocurrency ' s. Our Block Explorer
                      launched in August 2011. It began as a way for anyone to
                      study bitcoin transactions, along with a variety of
                      helpful charts and statistics about activity on the
                      network.
                    </p>
                  </div>
                </div>
                <div
                  class="faq-div"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <input
                    type="checkbox"
                    id="question3"
                    name="q"
                    class="questions"
                  />
                  <div class="qustion">
                    <label for="question3" class="question">
                      WHAT ARE LGBTQ NFT?
                    </label>
                    <div class="plus">+</div>
                  </div>
                  <div class="answers">
                    <p>
                      Block Explorers provide a visually appealing and intuitive
                      way to navigate a cryptocurrency ' s. Our Block Explorer
                      launched in August 2011. It began as a way for anyone to
                      study bitcoin transactions, along with a variety of
                      helpful charts and statistics about activity on the
                      network.
                    </p>
                  </div>
                </div>
                <div
                  class="faq-div"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <input
                    type="checkbox"
                    id="question4"
                    name="q"
                    class="questions"
                  />
                  <div class="qustion">
                    <label for="question4" class="question">
                      WHAT ARE LGBTQ NFT?
                    </label>
                    <div class="plus">+</div>
                  </div>
                  <div class="answers">
                    <p>
                      Block Explorers provide a visually appealing and intuitive
                      way to navigate a cryptocurrency ' s. Our Block Explorer
                      launched in August 2011. It began as a way for anyone to
                      study bitcoin transactions, along with a variety of
                      helpful charts and statistics about activity on the
                      network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================faq end=============== */}

        {/* ================================footer=================== */}
        <footer>
          <div className="footer-area">
            <div className="container">
              <div className="footer-inner">
                <img src="assets/img/logo.png" alt="" />
                <p className="copy">© 2022 - All Rights Reserved LGBTQ</p>
              </div>
            </div>
          </div>
        </footer>
        {/* ================================footer=================== */}

        <div className="shap-area">
          <img src="assets/img/shape6.png" className="shape-7" alt="" />
          <img src="assets/img/shape1.png" className="shape-8" alt="" />
        </div>
      </div>
    </>
  );
}
export default Home;
