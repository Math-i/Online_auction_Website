/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpModal } from "../redux/action/SigninAction";

function Heros() {
  //REDUX STATE
  const dispatch = useDispatch();
  const isSignUp = useSelector((state) => state.isSignupModal.isSign);
  //FUNCTION TO OPEN SIGNUP
  // const con = useSelector((state) => console.log(state));
  const [isSign, setIsSign] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setIsSign(false);
    }
  }, []);
  const openSignUp = () => {
    dispatch(openSignUpModal(isSignUp === true ? false : true));
  };
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-wrapper-image">
          <img src="images/bg_one.jpg" />
        </div>
        <div className="hero-wrapper-content">
          <h1>Find Your Next Deal!</h1>
          <p>
            Online Auction is where everyone goes to shop, sell,and give, while
            discovering variety and affordability.
          </p>
          {isSign ? (
            <a onClick={openSignUp} className="btn Registerbtn" role="button">
              Register
            </a>
          ) : null}
        </div>
      </div>
      <ProductList />
    </>
  );
}

export default Heros;
