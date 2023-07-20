import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import ProfileNavbar from "../component/Navbar/ProfileNavbar";

function WinningList() {
  return (
    <div className="MyAccount">
      <div className="container">
        <div className="WinningBidsTab" id="winningBids">
          <div className="Breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#x3e;
              <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#x3e;
              <Breadcrumb.Item active>Winning Bids</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <ProfileNavbar />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="rightMenu">
                <div className="mybidSection winbidSection">
                  <h4>Winning Bids</h4>
                  <form>
                    <div className="input-group">
                      <div className="form-outline">
                        <input
                          type="search"
                          id="form1"
                          placeholder="Search"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="btn search">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mybidSection-content">
                  <div className="tab-content">
                    <div id="home" className="Wintab">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_five.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinningList;
