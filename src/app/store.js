import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import currency from "../features/currency/currency.reducer";

const composeFunc =
  process.env.NODE_ENV === "production" ? compose : composeWithDevTools;

const rootReducer = combineReducers({
  currency,
});

const middleware = [thunk]

const initialState = {};
const store = createStore(rootReducer, initialState, composeFunc(applyMiddleware(...middleware)));

export default store;
