const initialState = {
  items: [],
  cost: 0,
};

const ADD_ITEM = "shopping-cart/add";
const REMOVE_ITEM = "shopping-cart/remove";
const REMOVE_ALL_ITEMS = "shopping-cart/remove-all-items";

export default (state = initialState, action) => {
  const currentIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  const currentAmount =
    currentIndex === -1 ? 0 : state.items[currentIndex].amount;
  const items = [...state.items];

  switch (action.type) {
    case ADD_ITEM:
      if (currentIndex === -1) {
        return {
          items: [...state.items, { ...action.payload, amount: 1 }],
          cost: state.cost + action.payload.price,
        };
      } else {
        items[currentIndex] = {
          ...items[currentIndex],
          amount: currentAmount + 1,
        };
        return {
          items,
          cost: state.cost + action.payload.price,
        };
      }

    case REMOVE_ITEM:
      if (currentIndex === -1) return state;

      if (currentAmount > 1) {
        items[currentIndex] = {
          ...items[currentIndex],
          amount: currentAmount - 1,
        };
      } else {
        items.splice(currentIndex, 1);
      }
      return {
        items,
        cost: state.cost - action.payload.price,
      };

    case REMOVE_ALL_ITEMS:
      if (currentIndex === -1) return state;

      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
        cost: state.cost - currentAmount * action.payload.price,
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
