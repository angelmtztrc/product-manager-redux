import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: null,
    loading: false,
    hasError: false
  },
  reducers: {
    getProducts: state => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasError = false;
    },
    getProductsFailure: state => {
      state.loading = false;
      state.hasError = true;
    },
    addProduct: state => {
      state.loading = true;
    },
    addProductSuccess: (state, { payload }) => {
      state.products = [...state.products, payload];
      state.loading = false;
      state.hasError = false;
    },
    addProductFailure: state => {
      state.loading = false;
      state.hasError = true;
    },
    setProduct: (state, { payload }) => {
      state.product = state.products.find(product => product.id === payload);
    },
    updateProduct: state => {
      state.loading = true;
    },
    updateProductSuccess: (state, { payload }) => {
      state.products = [
        ...state.products.map(product =>
          product.id === payload.id ? payload : product
        )
      ];
      state.loading = false;
      state.hasError = false;
      state.product = null;
    },
    updateProductFailure: state => {
      state.loading = false;
      state.hasError = true;
    },
    removeProduct: state => {
      state.loading = true;
    },
    removeProductSuccess: (state, { payload }) => {
      state.products = [
        ...state.products.filter(product => product.id !== payload)
      ];
      state.loading = false;
      state.hasError = false;
    },
    removeProductAbort: state => {
      state.loading = false;
      state.hasError = false;
    },
    removeProductFailure: state => {
      state.loading = false;
      state.hasError = true;
    }
  }
});

// Actions in Slice
export const {
  getProducts,
  getProductsSuccess,
  getProductsFailure,
  addProduct,
  addProductSuccess,
  addProductFailure,
  setProduct,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  removeProduct,
  removeProductSuccess,
  removeProductAbort,
  removeProductFailure
} = ProductSlice.actions;

// Reducer
export default ProductSlice.reducer;
