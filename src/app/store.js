import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import products from "../components/products/products.slice";
import currency from "../features/currency/currency.slice";
import sorting from "../features/sorting/sorting.slice";
import shoppingCart from "../features/shopping-cart/shoppingCart.slice";

const composeFunc =
  process.env.NODE_ENV === "production" ? compose : composeWithDevTools;

const rootReducer = combineReducers({
  products,
  currency,
  sorting,
  shoppingCart,
});

const middleware = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeFunc(applyMiddleware(...middleware))
);

export default store;
