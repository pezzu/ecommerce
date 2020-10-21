import axios from "axios";

const signs = {
  USD: "$",
  EUR: "€",
  CAD: "C$",
};

const initialState = {
  name: "USD",
  sign: "$",
  rate: 1.0,
};

export const CHANGE_CURRENCY = "currency/change";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export function changeCurrency(name) {
  return (dispatch) => {
    axios
      .get("api/v1/exchangerates")
      .then(({ data }) => {
        dispatch({
          type: CHANGE_CURRENCY,
          payload: { name: name, sign: signs[name], rate: data[name] },
        });
      });
  };
}
