import { GET_PRODUCTS, GET_FILTER, GET_POINTS } from "../types";

const initialState = {
  products: [],
  points: 0,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_FILTER:
      return {
        ...state,
        products: action.payload,
      };
    case GET_POINTS:
      return {
        ...state,
        points: action.payload,
      };
    default:
      return state;
  }
}
