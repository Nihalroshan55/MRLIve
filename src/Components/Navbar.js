

import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Navbar() {


  // useEffect(() => {
  //   $('.mobile-nav-toggler').on('click', function() {
  //     $('body').toggleClass('mobile-menu-visible');
  //   });

  //   return () => {
  //     $('.mobile-nav-toggler').off('click');
  //   };
  // }, []);

  useEffect(() => {
    // Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
      $('.main-header .navigation li.dropdown').append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
      // Optional: Initialize custom scrollbar if required
      // $('.mobile-menu .menu-box').mCustomScrollbar();

      var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
      $('.sticky-header .main-menu').append(mobileMenuContent);

      // Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).prev('.megamenu').slideToggle(900);
      });

      // Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
      });

      // Menu Toggle Btn
      $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
        $('body').removeClass('mobile-menu-visible');
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      $('.mobile-menu li.dropdown .dropdown-btn').off('click');
      $('.mobile-nav-toggler').off('click');
      $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').off('click');
    };
  }, []);


  return (
    <div>

<>
  {/* main header */}
  <header className="main-header">
    {/* header-lower */}
    <div className="header-lower">
      <div
        className="shape"
        style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
      />
      <div className="outer-box">
        <div className="logo-box">
          <figure className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" />
            </a>
          </figure>
        </div>
        <div className="menu-area clearfix">
          {/*Mobile Navigation Toggler*/}
          <div className="mobile-nav-toggler">
            <i className="icon-bar" />
            <i className="icon-bar" />
            <i className="icon-bar" />
          </div>
          <nav className="main-menu navbar-expand-md navbar-light">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {/* <li className="dropdown">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home Page 01</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Page 02</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Page 03</a>
                    </li>
                    <li>
                      <a href="index-onepage.html">OnePage Home</a>
                    </li>
                    <li>
                      <a href="index-rtl.html">RTL Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">Header Style</a>
                      <ul>
                        <li>
                          <a href="index.html">Header Style 01</a>
                        </li>
                        <li>
                          <a href="index-3.html">Header Style 02</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                <li>
          <Link to="/">Home</Link>
        </li>
                <li className="dropdown">
                  <a href="index.html">Pages</a>
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq's</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery One</a>
                    </li>
                    <li>
                      <a href="gallery-2.html">Gallery Two</a>
                    </li>
                    <li>
                      <a href="error.html">404</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="index.html">Services</a>
                  <ul>
                    <li>
                      <a href="service.html">Our Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Project Planning</a>
                    </li>
                    <li>
                      <a href="service-details-2.html">Residential Waters</a>
                    </li>
                    <li>
                      <a href="service-details-3.html">Commercial Waters</a>
                    </li>
                    <li>
                      <a href="service-details-4.html">Filtration Plants</a>
                    </li>
                    <li>
                      <a href="service-details-5.html">Water Softening</a>
                    </li>
                    <li>
                      <a href="service-details-6.html">Market Research</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="index.html">Shop</a>
                  <ul>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="index.html">Elements</a>
                  <div className="megamenu">
                    <div className="row clearfix">
                      <div className="col-xl-6 column">
                        <ul>
                          <li>
                            <h4>Elements 1</h4>
                          </li>
                          <li>
                            <a href="feature-element-1.html">
                              Feature Block 01
                            </a>
                          </li>
                          <li>
                            <a href="feature-element-2.html">
                              Feature Block 02
                            </a>
                          </li>
                          <li>
                            <a href="about-element-1.html">About Block 01</a>
                          </li>
                          <li>
                            <a href="about-element-2.html">About Block 02</a>
                          </li>
                          <li>
                            <a href="service-element-1.html">
                              Service Block 01
                            </a>
                          </li>
                          <li>
                            <a href="service-element-2.html">
                              Service Block 02
                            </a>
                          </li>
                          <li>
                            <a href="service-element-3.html">
                              Service Block 03
                            </a>
                          </li>
                          <li>
                            <a href="service-element-4.html">
                              Service Block 04
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 column">
                        <ul>
                          <li>
                            <h4>Elements 2</h4>
                          </li>
                          <li>
                            <a href="news-element-1.html">News Block 01</a>
                          </li>
                          <li>
                            <a href="news-element-2.html">News Block 02</a>
                          </li>
                          <li>
                            <a href="team-element-1.html">Team Block 01</a>
                          </li>
                          <li>
                            <a href="team-element-2.html">Team Block 02</a>
                          </li>
                          <li>
                            <a href="cta-element-1.html">Cta Block 01</a>
                          </li>
                          <li>
                            <a href="cta-element-2.html">Cta Block 02</a>
                          </li>
                          <li>
                            <a href="pricing-element.html">Pricing Block</a>
                          </li>
                          <li>
                            <a href="chooseus-element.html">Chooseus Block</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="index.html">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-2.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="current">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="nav-right">
          <li className="search-box-outer">
            <div className="dropdown">
              <button
                className="search-box-btn"
                type="button"
                id="dropdownMenu3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-search" />
              </button>
              <div
                className="dropdown-menu search-panel"
                aria-labelledby="dropdownMenu3"
              >
                <div className="form-container">
                  <form method="post" action="blog.html">
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        defaultValue=""
                        placeholder="Search...."
                        required=""
                      />
                      <button type="submit" className="search-btn">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>
          <li className="cart-box">
            <a href="shop.html">
              <i className="fal fa-shopping-cart" />
              <span>3</span>
            </a>
          </li>
          <li className="btn-box">
            <a href="index.html" className="theme-btn btn-one">
              Request A Quote
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*sticky Header*/}
    <div className="sticky-header">
      <div className="outer-box">
        <div className="logo-box">
          <figure className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" />
            </a>
          </figure>
        </div>
        <div className="menu-area clearfix">
          <nav className="main-menu clearfix">
            {/*Keep This Empty / Menu will come through Javascript*/}
          </nav>
        </div>
        <ul className="nav-right">
          <li className="search-box-outer">
            <div className="dropdown">
              <button
                className="search-box-btn"
                type="button"
                id="dropdownMenu4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-search" />
              </button>
              <div
                className="dropdown-menu search-panel"
                aria-labelledby="dropdownMenu4"
              >
                <div className="form-container">
                  <form method="post" action="blog.html">
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        defaultValue=""
                        placeholder="Search...."
                        required=""
                      />
                      <button type="submit" className="search-btn">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>
          <li className="cart-box">
            <a href="shop.html">
              <i className="fal fa-shopping-cart" />
              <span>3</span>
            </a>
          </li>
          <li className="btn-box">
            <a href="index.html" className="theme-btn btn-one">
              Request A Quote
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  {/* main-header end */}
  {/* Mobile Menu  */}
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="index.html">
          <img src="assets/images/logo-2.png" alt="" title="" />
        </a>
      </div>
      <div className="menu-outer">
        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
      </div>
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Chicago 12, Melborne City, USA</li>
          <li>
            <a href="tel:+8801682648101">+88 01682648101</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="index.html">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  {/* End Mobile Menu */}
</>


</div>
  )
}

export default Navbar