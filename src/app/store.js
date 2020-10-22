import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import logger from "../features/logs/logger.middleware";

import products from "../features/products/products.slice";
import currency from "../features/currency/currency.slice";
import sorting from "../features/sorting/sorting.slice";
import shoppingCart from "../features/shopping-cart/shoppingCart.slice";
import logs from "../features/logs/logger.slice";

const composeFunc =
  process.env.NODE_ENV === "production"
    ? compose
    : composeWithDevTools({ trace: true, traceLimit: 25 });

export const history = createBrowserHistory();

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    currency,
    sorting,
    shoppingCart,
    logs,
  });

const middleware = [routerMiddleware(history), thunk, logger];

const initialState = {};
const store = createStore(
  createRootReducer(history),
  initialState,
  composeFunc(applyMiddleware(...middleware))
);

export default store;
