const initialState = {
  items: [],
};

const ADD_ITEM = "shopping-cart/add";
const REMOVE_ITEM = "shopping-cart/remove";

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return { ...state };
  }
};

export function addToShoppingCart(item) {
  return { type: ADD_ITEM, payload: item };
}

export function removeFromShoppingCart(item) {
  return { type: REMOVE_ITEM, payload: item };
}
