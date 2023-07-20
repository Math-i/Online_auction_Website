import { Action_Type } from "../constant/Action-Type";

//BIDLIST REDUCER
export const bidListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_BID_LIST:
      return {
        ...state,
        bidList: payload,
      };
    default:
      return state;
  }
};

//BIDBYID REDUCER
export const bidByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_BID_LIST_BY_ID:
      return {
        ...state,
        bid: payload,
      };
    default:
      return state;
  }
};
