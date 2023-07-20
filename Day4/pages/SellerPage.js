import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { mybidList, updateBid } from "../redux/action/bidList";
import ProfileNavbar from "../component/Navbar/ProfileNavbar";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SellerPage = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (id) => {
    navigate(`/account?id=${id}`);
    setIsOpen(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyBid({ ...myBid, [name]: value });
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
                <div className="rightMenu">
                  <div className="mybidSection">
                    <h4>My Bids</h4>
                  </div>
                  <div className="mybidSection-content">
                    <div className="tab-content">
                      <div id="home" className="container tab-pane active">
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
                            {bidList?.map((mybid) => {
                              const {
                                _id,
                                description,
                                image,
                                location,
                                my_bid,
                                name,
                                price,
                              } = mybid;
                              return (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                  <Card>
                                    <Card.Img src={image} />
                                    <Card.Body>
                                      <Card.Title>{name}</Card.Title>
                                      <Card.Text>{description}</Card.Text>
                                      <div className="Cardbidbtn">
                                        <span>&#8377;{price}</span>
                                        <Button
                                          className="Bidbtn"
                                          onClick={() => openModal(_id)}
                                        >
                                          Update a Bid
                                        </Button>
                                      </div>
                                    </Card.Body>
                                    <div className="cardRate">
                                      <span>&#8377;{my_bid}</span>
                                    </div>
                                  </Card>
                                </div>
                              );
                            })}{" "}
                            <Modal show={isOpen}>
                              <Modal.Header
                                style={{ justifyContent: "center" }}
                              >
                                <form>
                                  <div className="form-control">
                                    <label>My Bid</label>
                                    <input
                                      type="text"
                                      name="my_bid"
                                      value={myBid.my_bid}
                                      onChange={(e) => handleChange(e)}
                                    />
                                    <button
                                      type="button"
                                      className="Bidbtn mt-5"
                                      style={{ alignContent: "center" }}
                                      onClick={() => onSubmit(id)}
                                    >
                                      Place Bid
                                    </button>
                                  </div>
                                </form>
                                <h1>Place a bid</h1>
                              </Modal.Header>
                            </Modal>
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

export default SellerPage;
