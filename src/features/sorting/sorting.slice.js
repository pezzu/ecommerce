const initialState = {
  sortBy: "name",
  ascending: true,
};

export const SORT_BY_PRICE = "sort/by_price";
export const SORT_BY_NAME = "sort/by_name";

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return { sortBy: "name", ascending: action.payload };
    case SORT_BY_PRICE:
      return { sortBy: "price", ascending: action.payload };
    default:
      return state;
  }
};

export const sortByPrice = (ascending = true) => {
  return { type: SORT_BY_PRICE, payload: ascending };
};

export const sortByName = (ascending = true) => {
  return { type: SORT_BY_NAME, payload: ascending };
};
