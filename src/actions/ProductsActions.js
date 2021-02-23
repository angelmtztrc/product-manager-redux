import Swal from 'sweetalert2';

// config
import AxiosInstance from '../config/axios';

// constants
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_INIT,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCTS_FAIL,
  EDIT_PRODUCTS_INIT,
  EDIT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_ABORT,
  REMOVE_PRODUCT_FAIL,
  REMOVE_PRODUCT_INIT,
  REMOVE_PRODUCT_SUCCESS,
  SET_ACTIVE_INIT
} from '../constants';

//* Create new product
export function addProductAction(product) {
  return async dispatch => {
    // initialize the action
    dispatch(createProductInit());

    try {
      // save in api
      await AxiosInstance.post('/products', product);
      // when a product is successfully created
      dispatch(createProductSuccess(product));

      // show alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product created successfully'
      });
    } catch (error) {
      // when something is wrong
      dispatch(createProductFail());
      // show alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
  };
}

// initialize create product
const createProductInit = () => ({
  type: ADD_PRODUCT_INIT
});

// on product successfully created
const createProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

// on something went wrong when creating a product
const createProductFail = () => ({
  type: ADD_PRODUCT_FAIL
});

//* Get all products
export function getProductsAction() {
  return async dispatch => {
    dispatch(getProductsInit());

    try {
      // request to get all products
      const response = await AxiosInstance.get('/products');

      // save products in the state
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      // when something is wrong
      dispatch(getProductsFail());
      // show alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, try later!'
      });
    }
  };
}

// initialize get products
const getProductsInit = () => ({
  type: GET_PRODUCTS_INIT
});

// on request successfully
const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

// on something went wrong when creating a product
const getProductsFail = () => ({
  type: GET_PRODUCTS_FAIL
});

//* Remove a product
export function removeProductAction(id) {
  return async dispatch => {
    dispatch(removeProductInit());
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          // request to delete product
          await AxiosInstance.delete(`/products/${id}`);

          // remove from the store
          dispatch(removeProductSuccess(id));

          // show alert
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } catch (error) {
          // when something is wrong
          dispatch(removeProductFail());
          // show alert
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
        }
      } else {
        dispatch(removeProductAbort());
      }
    });
  };
}

// initialize delete product
const removeProductInit = () => ({
  type: REMOVE_PRODUCT_INIT
});

// on product successfully deleted
const removeProductSuccess = id => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: id
});

// on cancel the delete action
const removeProductAbort = () => ({
  type: REMOVE_PRODUCT_ABORT
});

// on something went wrong when deleting product
const removeProductFail = () => ({
  type: REMOVE_PRODUCT_FAIL
});

//* update a product
export function editProductAction(id, values) {
  return async dispatch => {
    dispatch(editProductInit());

    try {
      // send request
      const response = await AxiosInstance.put(`/products/${id}`, values);

      // save edited product in store
      dispatch(editProductSuccess(response.data));

      // show alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product updated successfully'
      });
    } catch (error) {
      // when something is wrong
      dispatch(editProductFail());
      // show alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
  };
}

// initialize update product
const editProductInit = () => ({
  type: EDIT_PRODUCTS_INIT
});

// on successfully updated
const editProductSuccess = product => ({
  type: EDIT_PRODUCTS_SUCCESS,
  payload: product
});

// on something went wrong on send request
const editProductFail = () => ({
  type: EDIT_PRODUCTS_FAIL
});

//* Set active product
export function setActiveProductAction(id) {
  return dispatch => {
    dispatch(setActiveProductInit(id));
  };
}

// set active product
const setActiveProductInit = id => ({
  type: SET_ACTIVE_INIT,
  payload: id
});
