// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
