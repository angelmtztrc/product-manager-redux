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

/**
 * Create a product
 * @param object product
 */
export function addProduct(product) {
  return async dispatch => {
    // initialize the action
    dispatch(() => ({
      type: ADD_PRODUCT_INIT
    }));

    try {
      // send request to the api
      await AxiosInstance.post('/products', product);

      // successfully product created
      dispatch(() => ({
        type: ADD_PRODUCT_SUCCESS,
        payload: product
      }));

      // display an alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product created successfully'
      });
    } catch (error) {
      // if something went wrong
      dispatch(() => ({
        type: ADD_PRODUCT_FAIL
      }));

      // display an alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
  };
}

/**
 * Get all of the products
 */
export function getProducts() {
  return async dispatch => {
    // initialize the action
    dispatch({
      type: GET_PRODUCTS_INIT
    });

    try {
      // request to get all products
      const response = await AxiosInstance.get('/products');
      console.log(response);
      // save products in the state
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      // if something went wrong
      dispatch({
        type: GET_PRODUCTS_FAIL
      });

      // display an alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, try later!'
      });
    }
  };
}

/**
 * Delete a product by id
 * @param string id
 */
export function removeProduct(id) {
  return async dispatch => {
    // initialize the action
    dispatch(() => ({
      type: REMOVE_PRODUCT_INIT
    }));

    // display an Swal Alert for confirmation
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

          // remove product from the store
          dispatch(() => ({
            type: REMOVE_PRODUCT_SUCCESS,
            payload: id
          }));

          // display a success alert
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } catch (error) {
          // if something went wrong
          dispatch(() => ({
            type: REMOVE_PRODUCT_FAIL
          }));
          // display an alert
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
        }
      } else {
        // if the user abort the operation
        dispatch(() => ({
          type: REMOVE_PRODUCT_ABORT
        }));
      }
    });
  };
}

/**
 * Update a product by id
 * @param string id
 * @param object values
 */
export function updateProduct(id, values) {
  return async dispatch => {
    // initialize the action
    dispatch(() => ({
      type: EDIT_PRODUCTS_INIT
    }));

    try {
      // send request
      const response = await AxiosInstance.put(`/products/${id}`, values);

      // save edited product in store
      dispatch(() => ({
        type: EDIT_PRODUCTS_SUCCESS,
        payload: response.data
      }));

      // display a success alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product updated successfully'
      });
    } catch (error) {
      // if something went wrong
      dispatch(() => ({
        type: EDIT_PRODUCTS_FAIL
      }));

      // display an alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
  };
}

/**
 * Set a active product in the store
 * @param string id
 */
export function setActiveProduct(id) {
  return dispatch => {
    dispatch(() => ({
      type: SET_ACTIVE_INIT,
      payload: id
    }));
  };
}
