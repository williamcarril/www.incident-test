import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from 'history'
import thunk from "redux-thunk";

import createRootReducer from "./reducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  storeEnhancers(applyMiddleware(thunk))
);

export default store;