import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const FETCH_START = "product-list/loading-start";
const FETCH_SUCCESS = "product-list/loading-succes";
const FETCH_FAILURE = "product-list/loading-failure";

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return { items: action.payload, loading: false, error: null };

    case FETCH_FAILURE:
      return { items: [], loading: false, error: action.payload };

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
