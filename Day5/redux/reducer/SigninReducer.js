import { Action_Type } from "../constant/Action-Type";

//SIGNIN REDUCER
export const signInReducer = (state = { isSign: false }, { type, payload }) => {
  switch (type) {
    case Action_Type.IS_SIGN_SHOW:
      return {
        ...state,
        isSign: payload,
      };
    default:
      return state;
  }
};

//SIGNOUT REDUCER
export const signUpReducer = (state = { isSign: false }, { type, payload }) => {
  switch (type) {
    case Action_Type.IS_SIGNUP_SHOW:
      return {
        ...state,
        isSign: payload,
      };
    default:
      return state;
  }
};

//SUCCESS MODAL REDUCER
export const successModalReducer = (
  state = { isOpen: false },
  { type, payload }
) => {
  switch (type) {
    case Action_Type.SUCCESS_MODAL:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};

//API LOADER REDUCER
export const apiLoadingReducer = (
  state = { loading: true },
  { type, payload }
) => {
  switch (type) {
    case Action_Type.API_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

//USER DETAILS REDUCER
export const userDetailsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    default:
      return state;
  }
};

//ROUTER CHANGER

export const routerChangeReducer = (
  state = { isOpen: false },
  { type, payload }
) => {
  switch (type) {
    case Action_Type.ROUTER:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};


