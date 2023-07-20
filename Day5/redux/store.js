import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer/index";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
// }
//  
// const persistedReducer = persistReducer(persistConfig, reducer)
const middleWareComposer =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

  // export default () => {
  //   const store = createStore(persistedReducer, middleWareComposer(applyMiddleware(thunk)));
  //   let persistor = persistStore(store)
  //   return { store, persistor }
  // }
const store = createStore(reducer, middleWareComposer(applyMiddleware(thunk)));
export default store;
