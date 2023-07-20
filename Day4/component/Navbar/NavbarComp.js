/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInModal,
  routerChanging,
} from "../../redux/action/SigninAction";
import { Link } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import Signin from "../../pages/Signin";
import SellForm from "../../pages/SellForm";
import SignInSuccess from "../../pages/SignInSuccessModal";
// import Success from "../Form/Success";

function NavbarComp() {
  const dispatch = useDispatch();
  const isSign = useSelector((state) => state?.isSignIn?.isOpen);

  const token = localStorage.getItem("token");
  const [isSignIn, setIsSignin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isLoginSuccessModal, setLoginSuccessModal] = useState(false);

  const changeAuthMode = () => {
    dispatch(openSignInModal(true));
    // setAuthMode(authMode === "Signin" ? "Signup" : "Signin");
  };

  const signOut = () => {
    localStorage.clear();
    setIsSignin(false);
    dispatch(routerChanging(false));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const userDetails= JSON.parse(localStorage.getItem("user")) 
  useEffect(() => {
    if (token) {
      setIsSignin(true);
      
      const loginSuccessModalShown = JSON.parse(
        localStorage.getItem("is-login-success-modal-shown")
      );

      console.log(loginSuccessModalShown);

      if (!loginSuccessModalShown) {
        setLoginSuccessModal(true);

        JSON.stringify(
          localStorage.setItem("is-login-success-modal-shown", true)
        );
      }
    }
  }, [token]);

  const closeModal = () => {
    // const timer = setTimeout(()=>setLoginSuccessModal(false),1000)
    setLoginSuccessModal(false);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1>AUCTION</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {isSign ? (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </Link>
                    <ul className="dropdown-menu underlinks">
                      <li>
                        <Link className="dropdown-item" onClick={openModal}>
                          Sell Items
                        </Link>
                        <SellForm
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/buy">
                          Buy Items
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/account">
                      My Account
                    </Link>
                  </li>
                </>
              ) : null}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              {isSignIn ? (
                <li className="nav-item">
                  <div className="avtar d-flex">
                    <img
                      className="rounded-circle"
                      src="images/user.png"
                      alt="avatar-image"
                    />
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle-grey"
                        data-bs-toggle="dropdown"
                      >
                      {userDetails?.name}  <i className="fas fa-chevron-down"></i>
                      </a>
                      <div className="dropdown-menu">
                        <Link className="nav-link" to="/" onClick={signOut}>
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={changeAuthMode}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Signin />
      <SignUp />
      {isLoginSuccessModal && <SignInSuccess closeModal={closeModal} />}
      {/* <Success /> */}
    </header>
  );
}

export default NavbarComp;
