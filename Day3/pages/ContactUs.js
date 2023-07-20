/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div id="ContactusSection">
      <div className="container">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#x3e;
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="Contactus-Page">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>Get In Touch</h4>
              <div className="Auth-form-content">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Full Name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="abc@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control productDescription"
                      rows="11"
                      cols="30"
                      placeholder="Enter product description"
                      required
                    />
                  </div>
                  <div className="d-grid mb-3 submitbtn">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <ul className="list-unstyled">
                  <li className="Heading">
                    <h6>Address</h6>
                  </li>
                  <li className="Heading-Content">
                    <p>
                      <span>
                        <i className="fas fa-location-arrow"></i>
                      </span>
                      D-8, Noida Sector 3, Pincode:201301
                    </p>
                  </li>
                  <li className="Heading">
                    <h6>Phone</h6>
                  </li>
                  <li className="Heading-Content">
                    <p>
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      +91 8318464600
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      +91 7905782562
                    </p>
                  </li>
                  <li className="Heading">
                    <h6>Email Address</h6>
                  </li>
                  <li className="Heading-Content">
                    <p>
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      www.rapidrise.co.in
                    </p>
                  </li>
                </ul>
                <div className="MapSection">
                  <iframe
                    className="gmap_iframe"
                    frameBorder="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.7755804083628!2d83.26960216562418!3d26.741110676749802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147484fce688b%3A0x81196201753b1789!2skipm-college%20of%20engineering%20and%20technology!5e0!3m2!1sen!2sin!4v1684833683983!5m2!1sen!2sin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
