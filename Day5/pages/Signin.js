import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInModal,
  openSignUpModal,
  signInUser,
} from "../redux/action/SigninAction";
import { Modal } from "react-bootstrap";
import Form from "../component/Form/Form";

const Signin = () => {
  //STATE

  const formField = [
    {
      fieldName: "Email address",
      placeholder: "john@example.com",
      name: "email",
    },
    {
      fieldName: "Password",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ];
  const [userDetails, setUserDetails] = useState("");

  //FUNCTION TO HANDLE INPUT FIELD
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  //TOKEN
  const token = localStorage.getItem("token");

  //REDUX STATE
  const dispatch = useDispatch();
  const isSign = useSelector((state) => state.isSigninModal.isSign);
  const isSignUp = useSelector((state) => state.isSignupModal.isSign);
  //FUNCTION FOR SIGNIN USER
  const signIn = (e) => {
    e.preventDefault();
    dispatch(signInUser(userDetails));
    if (token) {
      console.log("token", isSign);
      dispatch(openSignInModal(isSign === true ? false : true));
    }
  };

  //FUNCTION TO NAVIGATE SIGNUP PAGE
  // const navigate = useNavigate();
  const changeAuthMode = () => {
    dispatch(openSignUpModal(isSignUp === true ? false : true));
    dispatch(openSignInModal(isSign === true ? false : true));
  };
  const closeModal = () => {
    dispatch(openSignInModal(isSign === true ? false : true));
  };
  return (
    <Modal show={isSign} onHide={closeModal}>
      {isSign && (
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login In</h3>
            <div className="text-center Auth-form-text">
              <p>
                Not registered yet?{" "}
                <span onClick={changeAuthMode}>Sign Up</span>
              </p>
            </div>
            <Form field={formField} handleChange={handleChange} />
            <div className="d-grid mt-4 submitbtn">
              <button className="btn" onClick={signIn}>
                Login
              </button>
            </div>
            {/* forget password */}
            <p className="forgotlink mt-3">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default Signin;
