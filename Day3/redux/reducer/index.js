import { combineReducers } from "redux";
import {
  apiLoadingReducer,
  routerChangeReducer,
  signInReducer,
  signUpReducer,
  successModalReducer,
  userDetailsReducer,
} from "./SigninReducer";
import { productByIdReducer, productReducer, sellModalReducer } from "./ProductReducer";
import { bidByIdReducer, bidListReducer } from "./bidListReducer";

export const reducer = combineReducers({
  isSigninModal: signInReducer,
  isSignupModal: signUpReducer,
  apiIsLoading: apiLoadingReducer,
  isSignIn: routerChangeReducer,
  isSuccessModal: successModalReducer,
  productList: productReducer,
  userDetails: userDetailsReducer,
  productById: productByIdReducer,
  bidList: bidListReducer,
  bidById: bidByIdReducer,
  isSellModal: sellModalReducer,
});
