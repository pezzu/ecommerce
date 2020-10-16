const initialState = {
  sortBy: "name",
  ascending: true,
};

const SORT_BY_PRICE = "sort/by_price";
const SORT_BY_NAME = "sort/by_name";

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return { sortBy: "name", ascending: !state.ascending };
    case SORT_BY_PRICE:
      return { sortBy: "price", ascending: !state.ascending };
    default:
      return { ...state };
  }
};

export function sortByPrice() {
  return { type: SORT_BY_PRICE };
}

export function sortByName() {
  return { type: SORT_BY_NAME };
}
