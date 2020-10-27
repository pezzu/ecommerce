import axios from "axios";

import { SORT_BY_NAME, SORT_BY_PRICE } from "../sorting/sorting.slice";

const initialState = {
  items: [],
  loading: false,
  error: null,
  comparator: sortByName(),
};

const FETCH_START = "product-list/loading-start";
const FETCH_SUCCESS = "product-list/loading-succes";
const FETCH_FAILURE = "product-list/loading-failure";

function sortByName(ascending = true) {
  const direction = ascending ? 1 : -1;
  return (left, right) => left.title.localeCompare(right.title) * direction;
}

function sortByPrice(ascending = true) {
  const direction = ascending ? 1 : -1;
  return (left, right) => (left.price - right.price) * direction;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return {
        ...state,
        items: [...action.payload].sort(state.comparator),
        loading: false,
        error: null,
      };

    case FETCH_FAILURE:
      return { ...state, items: [], loading: false, error: action.payload };

    case SORT_BY_NAME:
      const byName = sortByName(action.payload);
      return {
        ...state,
        comparator: byName,
        items: [...state.items].sort(byName),
      };

    case SORT_BY_PRICE:
      const byPrice = sortByPrice(action.payload);
      return {
        ...state,
        comparator: byPrice,
        items: [...state.items].sort(byPrice),
      };

    default:
      return state;
  }
};

export const productsLoadingSuccess = (products) => {
  return { type: FETCH_SUCCESS, payload: products };
};

export const productsLoadingFailure = (error) => {
  return { type: FETCH_FAILURE, payload: error };
};

export const productsLoadingStart = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("/api/v1/products")
    .then(({ data }) => dispatch(productsLoadingSuccess(data)))
    .catch((err) => dispatch(productsLoadingFailure(err)));
};
