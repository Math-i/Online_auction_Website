import { Action_Type } from "../constant/Action-Type";

//PRODUCT LIST REDUCER
export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

export const productByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action_Type.READ_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

export const sellModalReducer = (
  state = { isSell: false },
  { type, payload }
) => {
  switch (type) {
    case Action_Type.ROUTER:
      return {
        ...state,
        isSell: payload,
      };
    default:
      return state;
  }
};