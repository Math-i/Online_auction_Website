import { config } from "../../utils/constant";
import { Action_Type } from "../constant/Action-Type";
import { apiIsLoading } from "./SigninAction";

//ACTION TO GET PRODUCT LIST
export const getAllProduct = (product) => {
  return {
    type: Action_Type.READ_PRODUCT,
    payload: product,
  };
};

//ACTION TO GET PRODUCT BY ID
export const getProductById = (product) => {
  return {
    type: Action_Type.READ_PRODUCT_BY_ID,
    payload: product,
  };
};

export const openSellModal = (isSell) => {
  return {
    type: Action_Type.OPEN_SELL_MODAL,
    isSell: isSell,
  };
};
//USERID
const userId = JSON.parse(localStorage.getItem("user"));

//FUNCTION TO FETCH PRODUCTLIST
export const productList = () => {
  return (dispatch) => {
    fetch(`${config.host}${config.product.getALlProduct}`)
      .then((resp) => resp.json())
      // .then((resp)=>console.log(resp))
      .then((resp) => dispatch(getAllProduct(resp)))
      .then(() => dispatch(apiIsLoading(false)))
      .catch((err) => console.log(err));
  };
};

export const productById = (id) => {
  return (dispatch) => {
    fetch(`${config.host}${config.product.getProductById}/${id}`)
      .then((resp) => resp.json())
      .then((resp) => dispatch(getProductById(resp)))
      .catch((error) => console.log(error));
  };
};
//FUNCTION TO SELL A PRODUCT
export const sellerProduct = (product) => {
  return (dispatch) => {
    fetch(`${config.host}${config.product.createProduct}/${userId._id}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((resp) => dispatch(openSellModal(false)))
      .catch((error) => console.log(error));
  };
};
