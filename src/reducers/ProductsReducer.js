// constants
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_INIT,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS
} from '../constants';

// initial state of the reducer
const initialState = {
  products: [],
  loading: false
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_INIT:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false
      };
    case GET_PRODUCTS_INIT:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
