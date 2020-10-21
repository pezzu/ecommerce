import axios from "axios";

import { CHANGE_CURRENCY } from "../currency/currency.slice";
import { ADD_ITEM, REMOVE_ITEM } from "../shopping-cart/shoppingCart.slice";
import { SORT_BY_NAME, SORT_BY_PRICE } from "../sorting/sorting.slice";

const logger = (store) => (next) => (action) => {
  const state = store.getState();
  let log = "";

  switch (action.type) {
    case CHANGE_CURRENCY:
      log = `change currency from ${state.currency.name} to ${action.payload.name}`;
      axios.post("/api/v1/logs", { action: action.type, log });
      break;

    case ADD_ITEM:
      log = `add ${action.payload.title} to the basket`;
      axios.post("/api/v1/logs", { action: action.type, log });
      break;

    case REMOVE_ITEM:
      log = `remove ${action.payload.title} from the basket`;
      axios.post("/api/v1/logs", { action: action.type, log });
      break;

    case SORT_BY_NAME:
      log = `Sort by name`;
      axios.post("/api/v1/logs", { action: action.type, log });
      break;

    case SORT_BY_PRICE:
      log = `Sort by price`;
      axios.post("/api/v1/logs", { action: action.type, log });
      break;

    default:
      break;
  }

  return next(action);
};

export default logger;
