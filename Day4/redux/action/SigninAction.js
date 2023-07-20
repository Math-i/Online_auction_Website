import { config } from "../../utils/constant";
import { Action_Type } from "../constant/Action-Type";

//ACTION TO OPEN SIGN IN MODAL
export const openSignInModal = (isSign) => {
  return {
    type: Action_Type.IS_SIGN_SHOW,
    payload: isSign,
  };
};

//ACTION TO OPEN SIGNUP IN MODAL
export const openSignUpModal = (isSign) => {
  return {
    type: Action_Type.IS_SIGNUP_SHOW,
    payload: isSign,
  };
};

//ACTION TO OPEN SUCCESS MODAL

export const openSuccessModal = (isOpen) => {
  return {
    type: Action_Type.SUCCESS_MODAL,
    payload: isOpen,
  };
};

//ACTION FOR LOADER
export const apiIsLoading = (loading) => {
  return {
    type: Action_Type.API_LOADING,
    payload: loading,
  };
};
export const userDetails = (user) => {
  return {
    type: Action_Type.USER_DETAILS,
    payload: user,
  };
};

export const routerChanging = (isOpen) => {
  return {
    type: Action_Type.ROUTER,
    payload: isOpen,
  };
};

//TOKEN
const token = localStorage.getItem("token");
// API ROUTES

//FUNCTION FOR SIGNIN
export const signInUser = (user) => {
  return (dispatch) => {
    fetch(`${config.host}${config.auth.signin}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp?.success) {
          localStorage.setItem("token", resp?.token);
          localStorage.setItem("user", JSON.stringify(resp?.user));
          dispatch(userDetails(resp?.user));
          dispatch(routerChanging(true));
          dispatch(openSignInModal(false));
          dispatch(openSuccessModal(true));
          return;
        }
        alert(resp?.message);
      })
      .catch((err) => console.log(err));
  };
};
//FUNCTION FOR SIGNUP
export const signUpUser = (user) => {
  return (dispatch) => {
    fetch(`${config.host}${config.auth.signup}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    fetch(`${config.host}${config.auth.signout}`)
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  };
};
