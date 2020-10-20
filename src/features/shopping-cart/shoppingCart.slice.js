import { Map } from "immutable";

const initialState = {
  items: Map(),
  totalAmount: 0,
  totalCost: 0,
};

const ADD_ITEM = "shopping-cart/add";
const REMOVE_ITEM = "shopping-cart/remove";
const REMOVE_ALL_ITEMS = "shopping-cart/remove-all-items";

export default (state = initialState, action) => {
  const currentAmount = ('payload' in action)? state.items.getIn([action.payload.id, "amount"], 0) : 0;

  switch (action.type) {
    case ADD_ITEM:
      return {
        items: state.items.set(action.payload.id, {
          ...action.payload,
          amount: currentAmount + 1,
        }),
        totalAmount: state.totalAmount + 1,
        totalCost: state.totalCost + action.payload.price,
      };

    case REMOVE_ITEM:
      if (currentAmount > 1) {
        return {
          items: state.items.setIn(
            [action.payload.id, "amount"],
            currentAmount - 1
          ),
          totalAmount: state.totalAmount - 1,
          totalCost: state.totalCost - action.payload.price,
        };
      } else if (currentAmount === 1) {
        return {
          items: state.items.remove(action.payload.id),
          totalAmount: state.totalAmount - 1,
          totalCost: state.totalCost - action.payload.price,
        };
      } else {
        return state;
      }

    case REMOVE_ALL_ITEMS:
      return {
        items: state.items.remove(action.payload.id),
        totalAmount: state.totalAmount - currentAmount,
        totalCost: state.totalCost - action.payload.price * currentAmount,
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
