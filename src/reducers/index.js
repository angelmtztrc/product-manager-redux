import { combineReducers } from 'redux';

// reducers
import ProductsReducer from './ProductsReducer';

// combine reducers
export default combineReducers({
  products: ProductsReducer
});
