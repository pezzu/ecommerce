import { selectProductById } from "../products/products.slice";

export const ADD_ITEM = "shopping-cart/add";
export const REMOVE_ITEM = "shopping-cart/remove";
export const REMOVE_ALL_ITEMS = "shopping-cart/remove-all-items";

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addById = (state, id) => {
  return state.indexOf(id) !== -1 ? state : [...state, id];
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

const removeById = (state, id) => {
  return state.filter((storedId) => storedId !== id);
};

const dropAllQuantityById = (state, id) => {
  // eslint-disable-next-line
  const { [id]: _, ...rest } = state;
  return { ...rest };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        addedIds: addById(state.addedIds, action.payload.id),
        quantityById: increaseQuantityById(
          state.quantityById,
          action.payload.id
        ),
      };

    case REMOVE_ITEM:
      const newQuantityById = decreaseQuantityById(
        state.quantityById,
        action.payload.id
      );
      return {
        addedIds:
          newQuantityById[action.payload.id] > 0
            ? state.addedIds
            : removeById(state.addedIds, action.payload.id),
        quantityById: newQuantityById,
      };

    case REMOVE_ALL_ITEMS:
      return {
        addedIds: removeById(state.addedIds, action.payload.id),
        quantityById: dropAllQuantityById(
          state.quantityById,
          action.payload.id
        ),
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
};

export const selectItems = (state) =>
  state.shoppingCart.addedIds.map((id) => ({
    ...selectProductById(state, id),
    amount: state.shoppingCart.quantityById[id],
  }));
