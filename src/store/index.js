import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from '../reducers/ProductsReducer';

const store = configureStore({
  reducer: {
    products: ProductsReducer
  }
});

export default store;
