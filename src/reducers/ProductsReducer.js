// constants
import {} from '../constants';

// initial state of the reducer
const initialState = {
  products: [],
  loading: false,
  error: null
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
