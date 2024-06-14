import React from 'react'

function Footer() {
  return (
    <div>



<>
  {/* main-footer */}
  <footer className="main-footer">
    <div className="pattern-layer">
      <div
        className="pattern-1"
        style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
      />
      <div
        className="pattern-2"
        style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}
      />
      <div
        className="pattern-3"
        style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
      />
    </div>
    <div className="auto-container">
      <div className="footer-top clearfix">
        <div
          className="line-shape"
          style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}
        />
        <div className="text pull-left">
          <h2>
            Please <span>Call Us</span> to Take an Extraordinary Service
          </h2>
        </div>
        <div className="support-box pull-right">
          <a href="tel:7732253523">
            <i className="fas fa-phone" />
            (773) 225-3523
          </a>
        </div>
      </div>
      <div className="widget-section">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
              <figure className="footer-logo">
                <a href="index.html">
                  <img src="assets/images/footer-logo.png" alt="" />
                </a>
              </figure>
              <div className="text">
                <p>
                  Nostrud exertation ullamco labor nisi aliquip commodo duis.
                </p>
              </div>
              <div className="schedule-box">
                <h6>Open Hours:</h6>
                <ul className="list clearfix">
                  <li>Mon - Sat: 9AM - 6PM.</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget contact-widget ml-70">
              <div className="widget-title">
                <h4>Address</h4>
              </div>
              <div className="widget-content">
                <ul className="info-list clearfix">
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    Flat 20, Reynolds Neck, FV77 8WS
                  </li>
                  <li>
                    <i className="fal fa-phone" />
                    Call Us: <a href="tel:3336660001">333-666-0001</a>
                  </li>
                  <li>
                    <i className="fal fa-envelope-open-text" />
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml-70">
              <div className="widget-title">
                <h4>Usefull Link</h4>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li>
                    <a href="index.html">About Company</a>
                  </li>
                  <li>
                    <a href="index.html">Services</a>
                  </li>
                  <li>
                    <a href="index.html">How It Works</a>
                  </li>
                  <li>
                    <a href="index.html">Our Blog</a>
                  </li>
                  <li>
                    <a href="index.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget subscribe-widget">
              <div className="widget-title">
                <h4>Subscribe</h4>
              </div>
              <div className="widget-content">
                <p>
                  Lorem ipsum dolor sit amet, consect adipisicing elit sed do
                  eiusmod.
                </p>
                <div className="form-inner">
                  <form action="contact.html" method="post">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                      <button type="submit">
                        <i className="far fa-long-arrow-alt-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="bottom-inner">
          <div className="copyright">
            <p>
              <a href="index.html">Acuasafe</a> © 2021 All Right Reserved
            </p>
          </div>
          <ul className="social-links clearfix">
            <li>
              <a href="index.html">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
          <ul className="footer-nav clearfix">
            <li>
              <a href="index.html">Terms of Service</a>
            </li>
            <li>
              <a href="index.html">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* main-footer end */}
</>






    </div>
  )
}

export default Footer