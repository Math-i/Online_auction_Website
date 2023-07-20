/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="FooterCopyright">
        <div className="footerSection">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="footerContent">
                <h6 className="FooterHeading">Follow Us</h6>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <span>
                        <i className="fas fa-globe-africa"></i>
                      </span>
                      www.auction.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      +91 ****
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      +91 ****
                    </p>
                  </li>
                </ul>
                <div className="social-icons">
                  <a href="#" title="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" title="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" title="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" title="youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" title="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="footerContent">
                <h6 className="FooterHeading">Auction Categories</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Ending Now</a>
                  </li>
                  <li>
                    <a href="#">Vehicles</a>
                  </li>
                  <li>
                    <a href="#">Watches</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Real Estate</a>
                  </li>
                  <li>
                    <a href="#">Jewelry</a>
                  </li>
                  <li>
                    <a href="#">Art</a>
                  </li>
                  <li>
                    <a href="#">Sports &amp; Outdoor</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="footerContent">
                <h6 className="FooterHeading">We're Here to Help</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#HomePage">Home</a>
                  </li>
                  <li>
                    <a href="#ContactusSection">Contact Us</a>
                  </li>
                  <li>
                    <a href="#AuctionPage">Services</a>
                  </li>
                  <li>
                    <a href="#MyAccountPage">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="footerContent">
                <h6 className="FooterHeading">Subscribe to our Newsletter</h6>
                <div className="newsletter-footer">
                  <input
                    className="email"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    required=""
                  />
                  <input className="submit" type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CopyrightSection">
          <p>
            <span>
              <i className="far fa-copyright"> </i>
            </span>
            2023 RapidRise Auction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
