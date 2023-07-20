import { config } from "../../utils/constant";
import { Action_Type } from "../constant/Action-Type";
import { apiIsLoading } from "./SigninAction";

//TOKEN
const userId = JSON.parse(localStorage.getItem("user"));

//ACTION TO GET BIDLIST
export const getbidList = (bidList) => {
  return {
    type: Action_Type.READ_BID_LIST,
    payload: bidList,
  };
};
//ACTION TO GET BID BY ID

export const getBidById = (bid) => {
  return {
    type: Action_Type.READ_BID_LIST_BY_ID,
    payload: bid,
  };
};

//FUNCTION TO FETCH MY BIDLIST
export const mybidList = () => {
  return (dispatch) => {
    fetch(`${config.host}${config.bid.bidList}/${userId?._id}`)
      .then((resp) => resp.json())
      .then((resp) => dispatch(getbidList(resp)))
      .then(() => dispatch(apiIsLoading(false)))
      .catch((error) => console.log(error));
  };
};

export const myBidById = (id) => {
  return (dispatch) => {
    fetch(`${config.host}${config.bid.bidById}/${id}`)
      .then((resp) => resp.json())
      .then((resp) => dispatch(getBidById(resp)))
      .catch((error) => console.log(error));
  };
};

//FUNCTION TO SUBMIT A BID
export const submitBid = (productId, product) => {
  return (dispatch) => {
    fetch(`${config.host}${config.bid.createBid}/${userId?._id}/${productId}`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((resp) => alert(resp?.message))
      .then((resp) => dispatch(apiIsLoading(false)))
      .catch((error) => console.log(error));
  };
};

export const updateBid = (myBidId, bid) => {
  return (dispatch) => {
    fetch(`${config.host}${config.bid.updateBid}/${myBidId}`, {
      method: "PUT",
      headers: config.headers,
      body: JSON.stringify(bid),
    })
      .then((resp) => resp.json())
      .then((resp) => alert(resp?.message))
      .catch((error) => console.log(error));
  };
};
