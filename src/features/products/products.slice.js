import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const LOADING_START = "product-list/loading-start";
const LOADING_SUCCESS = "product-list/loading-succes";
const LOADING_FAILURE = "product-list/loading-failure";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true, error: null };

    case LOADING_SUCCESS:
      return { items: action.payload, loading: false, error: null };

    case LOADING_FAILURE:
      return { items: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productsLoadingSuccess = (products) => {
  return { type: LOADING_SUCCESS, payload: products };
};

export const productsLoadingFailure = (error) => {
  return { type: LOADING_FAILURE, payload: error };
};

export const productsLoadingStart = () => (dispatch) => {
  dispatch({ type: LOADING_START });
  axios
    .get("/api/v1/products")
    .then(({ data }) => dispatch(productsLoadingSuccess(data)))
    .catch((err) => dispatch(productsLoadingFailure(err)));
};
