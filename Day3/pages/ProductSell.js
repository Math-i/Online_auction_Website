import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, productById } from "../redux/action/ProductListAction";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myBidById, submitBid, updateBid } from "../redux/action/bidList";
// eslint-disable-next-line no-unused-vars
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
// import { debounce } from "debounce";

function ProductSell() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");
  const bidId = search.get("bidId");
  const bidDetails = {
    my_bid: "",
  };
  const [myBid, setMyBid] = useState(bidDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyBid({ ...myBid, [name]: value });
  };

  //REDUX STATE
  const product = useSelector((state) => state?.productById.product?.product);
  const myBidDetails = useSelector(
    (state) => state?.bidById?.bid?.myBidDetails
  );
  const dispatch = useDispatch();
  //FUCTION TO BID DATE
  useEffect(() => {
    if (id) {
      dispatch(productById(id));
      return;
    }
    if (bidId) {
      dispatch(myBidById(bidId));
      dispatch(getProductById(null));
      return;
    }
  }, [id, bidId]);

  //FUNCTION TO SUBMIT BID
  const submit = () => {
    dispatch(submitBid(id, myBid));
  };

  //FUCTION TO UPDATE BID
  const updateBidById = () => {
    dispatch(updateBid(bidId, myBid));
  };
  // const placeBid = debounce(handleChange, 1000);

  const onSubmit = () => {
    if (id && myBid.my_bid !== "" && myBid.my_bid > product.price) {
      submit(myBid);
    }
    if (bidId && myBid.my_bid !== "" && myBid.my_bid > myBidDetails.my_bid) {
      updateBidById(myBid);
    }
  };

  return (
    <div className="container">
      <div id="ProductSell">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#x3e;
            <Breadcrumb.Item active>Place Bids</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ProductSell-Section">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="slider text-center">
                <Slider {...settings}>
                  <div className="slider-section">
                    <div className="slider-image">
                      <img
                        src={`/${product?.image ?? myBidDetails?.image}`}
                        alt="product_image"
                      />
                    </div>
                  </div>
                  <div className="slider-content">
                    <div className="slider-image">
                      <img
                        src={`/${product?.image ?? myBidDetails?.image}`}
                        alt="product_image"
                      />
                    </div>
                  </div>
                  <div className="slider-content">
                    <div className="slider-image">
                      <img
                        src={`/${product?.image ?? myBidDetails?.image}`}
                        alt="product_image"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="slider-content">
                <h2>{product?.name ?? myBidDetails?.name}</h2>
                <p>{product?.description ?? myBidDetails?.description}</p>
                <ul className="price-table list-unstyled">
                  <li className="header">
                    <span className="details">
                      {bidId ? "Bid Price" : "Current Price"}
                    </span>
                    <h5 className="info">
                      &#8377;{product?.price ?? myBidDetails?.my_bid}
                    </h5>
                  </li>
                  <li className="header">
                    <span className="details">Buyer's Premium</span>
                    <h5 className="info">10.00%</h5>
                  </li>
                  <li className="header">
                    <span className="details">Bid Increment (US)</span>
                    <h5 className="info">&#8377;50.00</h5>
                  </li>
                </ul>
                <div className="amountpay">
                  <div className="form-outline">
                    <input
                      type="number"
                      id="form1"
                      placeholder="&#8377; Enter the Amount"
                      className="form-control"
                      name="my_bid"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="Cardbidbtn">
                    <Button className="Bidbtn" onClick={onSubmit}>
                      {bidId ? "Update Bid" : "Submit Bid"}
                    </Button>
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

export default ProductSell;
