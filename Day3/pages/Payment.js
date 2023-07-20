/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Payment() {
  return (
    <Container>
      <div className="paymentSection">
        <Row>
          <Col md={4} className="order-md-2 mb-4">
            <h3 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h3>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">&#8377; 12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">&#8377; 8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">&#8377; 5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-&#8377; 5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (IND)</span>
                <strong>&#8377; 20</strong>
              </li>
            </ul>

            <Form className=" p-2">
              <div className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <Button variant="danger" type="submit">
                    Redeem
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={8} className="order-md-1">
            <h3 className="mb-3">Billing address</h3>
            <Form className="needs-validation" noValidate>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label htmlFor="firstName">First name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="John"
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label htmlFor="lastName">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Deo"
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </Col>
              </Row>

              <div className="mb-3">
                <Form.Label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="address">Address</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <Row>
                <Col md={5} className="mb-3">
                  <Form.Label htmlFor="country">Country</Form.Label>
                  <Form.Control
                    as="select"
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                  </Form.Control>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Label htmlFor="state">State</Form.Label>
                  <Form.Control
                    as="select"
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    <option>Andaman and Nicobar Islands</option>
                    <option>Chandigarh</option>
                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                    <option>Delhi</option>
                    <option>Ladakh</option>
                    <option>Lakshadweep</option>
                    <option>Puducherry</option>
                  </Form.Control>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <Form.Label htmlFor="zip">Zip</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </Col>
              </Row>
              <hr className="mb-4" />

              <h3 className="mb-3">Payment</h3>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked
                    required
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="cc-name">Name on card</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="cc-number">
                    Credit card number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <Form.Label htmlFor="cc-expiration">Expiration</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <Form.Label htmlFor="cc-cvv">CVV</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="d-grid mt-4 submitbtn">
                <button className="btn">Continue to Checkout</button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Payment;
