import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productList } from "../redux/action/ProductListAction";
import { useDispatch, useSelector } from "react-redux";
import { submitBid } from "../redux/action/bidList";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  //REDUX STATE FOR PRODUCT LIST
  const productlist = useSelector(
    (state) => state.productList?.product?.products
  );
  //LOADER STATE
  const loading = useSelector((state) => state.apiIsLoading.loading);

  //LOCAL STATE FOR BID
  const bidDetails = {
    my_bid: "",
  };
  const [myBid, setMyBid] = useState(bidDetails);
  const dispatch = useDispatch();

  //FUNCTION FOR FETCHING PRODUCT LIST
  useEffect(() => {
    dispatch(productList());
  }, []);

  const navigate = useNavigate();

  //MODAL FOR PLACING BIDS
  const openModal = (id) => {
    navigate(`/buy/product?id=${id}`);
  };

  //FUNCTION FOR PLACING BIDS
  const onSubmit = (id) => {
    dispatch(submitBid(id, myBid));
  };
  //SHOWING REMAINING TIME
  useEffect(() => {
    // const getTime = productList?.forEach((element) => {
    //   const currentTime = new Date(element?.expireBid);
    //   return currentTime;
    // });
    // const remainingTime =
    //   ((currentTime) => {
    //     const remainTime = currentTime - Date.now();
    //     const newDate = new Date(remainTime);
    //     const expireDate = newDate.toLocaleTimeString();
    //   },
    //   1000);
  }, []);
  return (
    <>
      <div className="CardSection">
        {loading ? (
          <div className="loader">
            <img src="/images/loading.png" alt="loading" width={"100px"} />
          </div>
        ) : (
          <>
            <div className="Cardinfo-Wrapper text-center">
              <span>AUCTIONS</span>
              <h4>
                Current <span>Auctions</span>
              </h4>
            </div>
            <div className="Cardcontent-Wrapper">
              <Container>
                <Row>
                  {productlist &&
                    productlist?.map((product) => {
                      const {
                        _id,
                        name,
                        description,
                        location,
                        price,
                        image,
                        expireBid,
                      } = product;
                      const currentTime = new Date(expireBid).getTime();

                      return (
                        <Col
                          className="col-lg-3 col-md-6 col-sm-6 col-12"
                          key={product._id}
                        >
                          <Card>
                            <Card.Img src={image} width={"550px"} />
                            <Card.Body>
                              <h4 className="card-title">{name}</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                {/* <span className="card-timer">
                                  {expireDate.slice(0, 2) +
                                    "hrs" +
                                    " " +
                                    expireDate.slice(3, 4) +
                                    "mins" +
                                    " " +
                                    expireDate.slice(6) +
                                    "sec"}
                                </span> */}
                              </div>
                              <div className="cardtext">
                                <span>{description.slice(0, 110)}...</span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;{price}</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button
                                    className="Bidbtn"
                                    onClick={() => openModal(_id)}
                                  >
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>

                <Row>
                  {productlist &&
                    productlist?.map((product) => {
                      const {
                        _id,
                        name,
                        description,
                        location,
                        price,
                        image,
                        expireBid,
                      } = product;
                      const currentTime = new Date(expireBid).getTime();

                      return (
                        <Col
                          className="col-lg-3 col-md-6 col-sm-6 col-12"
                          key={product._id}
                        >
                          <Card>
                            <Card.Img src={image} width={"550px"} />
                            <Card.Body>
                              <h4 className="card-title">{name}</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                {/* <span className="card-timer">
                                  {expireDate.slice(0, 2) +
                                    "hrs" +
                                    " " +
                                    expireDate.slice(3, 4) +
                                    "mins" +
                                    " " +
                                    expireDate.slice(6) +
                                    "sec"}
                                </span> */}
                              </div>
                              <div className="cardtext">
                                <span>{description.slice(0, 110)}...</span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;{price}</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button
                                    className="Bidbtn"
                                    onClick={() => openModal(_id)}
                                  >
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
