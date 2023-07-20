import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { mybidList, updateBid } from "../redux/action/bidList";
import ProfileNavbar from "../component/Navbar/ProfileNavbar";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const MyAccount = () => {
  //REDUX STATE FOR MYBID LIST AND LOADER
  const bidList = useSelector((state) => state?.bidList?.bidList?.result);
  const isApiLoading = useSelector((state) => state.apiIsLoading.loading);

  const dispatch = useDispatch();

  //FUNCTION FOR MY MYBID LIST
  useEffect(() => {
    dispatch(mybidList());
  }, []);

  //STATE TO UPDATE BIDS
  const bidDetails = { my_bid: "" };
  const [myBid, setMyBid] = useState(bidDetails);

  //FINDING ID FOR UPDATING BIDS
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");

  //FUNCTION FOR MODAL
  const navigate = useNavigate();
  const openModal = (id) => {
    navigate(`/buy/product?bidId=${id}`);
  };
  const onSubmit = (id) => {
    dispatch(updateBid(id, myBid));
  };
  return (
    <>
      <div className="MyAccount">
        <div className="container">
          <div className="MyBidsTab">
            <div className="Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#x3e;
                <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#x3e;
                <Breadcrumb.Item active>My Bids</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                {/* USER PANEL */}
                <ProfileNavbar />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="rightMenu" id="myBids">
                  <div className="mybidSection">
                    <h4>My Bids</h4>
                  </div>
                  <div className="mybidSection-content" id>
                    <div className="tab-content">
                      <div id="home" className="tab-pane active">
                        {/* API LOADER */}
                        {isApiLoading ? (
                          <div className="loader">
                            <img
                              src="/images/loading.png"
                              alt="loading"
                              width={"100px"}
                            />
                          </div>
                        ) : (
                          <div className="row">
                            {/* MYBID LIST */}
                            {bidList?.map((bid) => {
                              const {
                                _id,
                                name,
                                description,
                                price,
                                my_bid,
                                image,
                                expireBid,
                              } = bid;
                              const newDate = new Date(expireBid);
                              const expireDate = newDate.toLocaleTimeString();
                              return (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                  <Card>
                                    <Card.Img src={image} />
                                    <Card.Body>
                                      <h4 className="card-title">{name}</h4>
                                      <div className="bidstimer">
                                        <p className="peoplebids">
                                          <span>
                                            <i className="fas fa-gavel"></i>
                                          </span>
                                          250 Bids
                                        </p>
                                        <span className="card-timer">
                                          {expireDate.slice(0, 2) +
                                            "hrs" +
                                            " " +
                                            expireDate.slice(3, 4) +
                                            "mins" +
                                            " " +
                                            expireDate.slice(6) +
                                            "sec"}
                                        </span>
                                      </div>
                                      <div className="cardtext">
                                        <span>
                                          {description.slice(0, 110)}...
                                        </span>
                                      </div>
                                      <div className="PriceSubmit">
                                        <div className="cardRate">
                                          <span>&#8377;{my_bid}</span>
                                        </div>
                                        <div className="Cardbidbtn">
                                          <Button
                                            className="Bidbtn"
                                            onClick={() => openModal(_id)}
                                          >
                                            Update Bid
                                          </Button>
                                        </div>
                                      </div>
                                    </Card.Body>
                                  </Card>
                                </div>
                              );
                            })}
                            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src={image} />
                              <Card.Body>
                                <h4 className="card-title">{name}</h4>
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
                                    {description}
                                  </span>
                                </div>
                                <div className="PriceSubmit">
                                  <div className="cardRate">
                                    <span>&#8377;{my_bid}</span>
                                  </div>
                                  <div className="Cardbidbtn">
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src="images/card_two.jpg" />
                              <Card.Body>
                                <h4 className="card-title">Heading 2</h4>
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
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src="images/card_three.jpg" />
                              <Card.Body>
                                <h4 className="card-title">Heading 3</h4>
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
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src="images/card_four.jpg" />
                              <Card.Body>
                                <h4 className="card-title">Heading 4</h4>
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
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src="images/card_five.jpg" />
                              <Card.Body>
                                <h4 className="card-title">Heading 5</h4>
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
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Card>
                              <Card.Img src="images/card_six.jpg" />
                              <Card.Body>
                                <h4 className="card-title">Heading 6</h4>
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
                                    <Button className="Bidbtn">
                                      Update Bid
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </div> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
