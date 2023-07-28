// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // You will define the rootReducer in the next step

const store = createStore(rootReducer);

export default store;
