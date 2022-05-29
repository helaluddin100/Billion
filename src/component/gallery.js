import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  AOS.init();
  return (
    <>
      <div className="bg-area">
        <div className="gallery">
          <div className="container">
            <div className="section-title">
              <img src="assets/img/icon/gallery.png" alt="" />
            </div>

            <div className="gallery-content">
              <div className="row-4">
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-4"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <div className="gallery-item">
                    <img src="assets/img/gallery/1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
