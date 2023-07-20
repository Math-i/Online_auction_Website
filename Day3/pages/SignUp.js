import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInModal,
  openSignUpModal,
  signUpUser,
} from "../redux/action/SigninAction";
import { Modal } from "react-bootstrap";
import Form from "../component/Form/Form";

function SignUp() {
  //STATE TO SAVE USER
  const [userDetails, setUserDetails] = useState("");

  //FEILD FOR CREATING FORM
  const formField = [
    { fieldName: "Full Name", placeholder: "John Deo", name: "name" },
    {
      fieldName: "Email Address",
      placeholder: "john@example.com",
      name: "email",
    },
    { fieldName: "Password", placeholder: "Password", name: "password" },
    { fieldName: "Mobile Number", placeholder: "+91", name: "mobile" },
  ];
  //FUNCTION TO HANDLE INPUT
  const handleChange = (e) => {
    console.log("first", userDetails);
    console.log(e.target);
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  //REDUX STATE
  const isSign = useSelector((state) => state.isSignupModal.isSign);
  const isSignIn = useSelector((state) => state.isSigninModal.inSign);
  const dispatch = useDispatch();
  //FUNCTION TO REGISTER USER

  const signUp = () => {
    dispatch(signUpUser(userDetails));
    dispatch(openSignInModal(true));
    dispatch(openSignUpModal(false));
  };

  //FUNCTON TO NAVIGATE SIGNIN PAGE
  const changeAuthMode = () => {
    dispatch(openSignInModal(isSignIn === true ? false : true));
    dispatch(openSignUpModal(isSign === true ? false : true));
  };
  const closeModal = () => {
    dispatch(openSignUpModal(isSign === true ? false : true));
  };
  return (
    <Modal show={isSign} onHide={closeModal}>
      {/* <div className="Auth-form-container"> */}
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center Auth-form-text">
            Already registered? <span onClick={changeAuthMode}>Login</span>
          </div>
          <Form field={formField} handleChange={handleChange} />
          <div className="d-grid mt-4 submitbtn">
            <button type="button" className="btn" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SignUp;
