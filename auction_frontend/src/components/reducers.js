// reducers.js
import { combineReducers } from 'redux';
// import { ADD_TO_CART } from './actions';

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, { ...action.payload }];
//     default:
//       return state;
//   }
// };
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { ...action.payload }];
    case REMOVE_FROM_CART:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};


// You can combine multiple reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;


