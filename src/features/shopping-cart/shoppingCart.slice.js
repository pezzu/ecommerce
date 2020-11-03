import { selectProductById } from "../products/products.slice";

export const ADD_ITEM = "shopping-cart/add";
export const REMOVE_ITEM = "shopping-cart/remove";
export const REMOVE_ALL_ITEMS = "shopping-cart/remove-all-items";

const initialState = {
  quantityById: {},
};

const increaseQuantityById = (state, id) => {
  return { ...state, [id]: (state[id] || 0) + 1 };
};

const decreaseQuantityById = (state, id) => {
  const { [id]: current, ...rest } = state;
  if (current > 1) {
    return { ...rest, [id]: current - 1 };
  } else {
    return { ...rest };
  }
};

const dropAllById = (state, id) => {
  // eslint-disable-next-line
  const { [id]: _, ...rest } = state;
  return { ...rest };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        quantityById: increaseQuantityById(
          state.quantityById,
          action.payload.id
        ),
      };

    case REMOVE_ITEM:
      return {
        quantityById: decreaseQuantityById(
          state.quantityById,
          action.payload.id
        ),
      };

    case REMOVE_ALL_ITEMS:
      return {
        quantityById: dropAllById(state.quantityById, action.payload.id),
      };

    default:
      return state;
  }
};

export function addToShoppingCart(item) {
  return { type: ADD_ITEM, payload: item };
}

export function removeFromShoppingCart(item) {
  return { type: REMOVE_ITEM, payload: item };
}

export function removeAllFromShoppingCart(item) {
  return { type: REMOVE_ALL_ITEMS, payload: item };
}

export const selectTotalAmount = (state) =>
  Object.values(state.shoppingCart.quantityById).reduce((a, c) => a + c, 0);

export const selectTotalCost = (state) => {
  return Object.entries(state.shoppingCart.quantityById)
    .map(([id, amount]) => selectProductById(state, id).price * amount)
    .reduce((a, c) => a + c, 0);
}

export const selectItems = (state) =>
  Object.entries(state.shoppingCart.quantityById)
    .map(([id, amount]) => ({ ...selectProductById(state, id), amount }))
