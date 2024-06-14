import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Contact() {





  return (
    <div>


        <Navbar/>


        <div>




        <>
  <section
    className="page-title centred"
    style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
  >
    <div
      className="shape"
      style={{ backgroundImage: "url(assets/images/shape/banner-shap.png)" }}
    />
    <div className="auto-container">
      <div className="content-box">
        <h1>Contact Us</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </section>
  {/* End Page Title */}
  {/* contact-style-two */}
  <section className="contact-style-two">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-5 col-md-12 col-sm-12 info-column">
          <div className="info-inner">
            <div
              className="shape"
              style={{
                backgroundImage: "url(assets/images/shape/shape-42.png)"
              }}
            />
            <h3>Contact Information</h3>
            <ul className="info-list clearfix">
              <li>
                <i className="fas fa-map-marker-alt" />
                <h5>Office Location</h5>
                <p>
                  629 12th St, Modesto, CA <br />
                  95354,United States
                </p>
              </li>
              <li>
                <i className="fas fa-envelope-open" />
                <h5>Email Drop Us</h5>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <br />
                  <a href="mailto:information@gmail.com">
                    information@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <i className="fas fa-phone" />
                <h5>Call for Help</h5>
                <p>
                  <a href="tel:11165458856">+(111) 65_458_856</a>
                  <br />
                  <a href="tel:11165458857">+(111) 65_458_857</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 form-column">
          <div className="form-inner">
            <h3>Leave a Comment</h3>
            <form
              method="post"
              action="sendemail.php"
              id="contact-form"
              className="default-form"
            >
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    required=""
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    name="subject"
                    required=""
                    placeholder="Subject"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="message"
                    placeholder="Leave A Comment"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                  <button
                    className="theme-btn btn-one"
                    type="submit"
                    name="submit-form"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact-style-two end */}
  {/* google-map-section */}
  {/* <section className="google-map-section">
    <div className="auto-container">
      <div className="map-inner">
        <div
          className="google-map"
          id="contact-google-map"
          data-map-lat="40.712776"
          data-map-lng="-74.005974"
          data-icon-path="assets/images/icons/map-marker.png"
          data-map-title="Brooklyn, New York, United Kingdom"
          data-map-zoom={12}
          data-markers='{
                      "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                  }'
        ></div>
      </div>
    </div>
  </section> */}
</>

        </div>
        <Footer/>
    </div>
  )
}

export default Contact