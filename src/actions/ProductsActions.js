import Swal from 'sweetalert2';
import AxiosInstance from '../config/axios';

// actions in slice
import {
  addProduct,
  addProductSuccess,
  addProductFailure,
  getProducts,
  getProductsFailure,
  getProductsSuccess,
  setProduct,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  removeProduct,
  removeProductSuccess,
  removeProductAbort,
  removeProductFailure
} from '../reducers/ProductsReducer';

export const getProductsAction = () => {
  return async dispatch => {
    // initialize the action
    dispatch(getProducts());
    try {
      // fetch all of the products from the API
      const response = await AxiosInstance.get('/products');

      // save in the store
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      // if something went wrong
      dispatch(getProductsFailure());

      // display an error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, try later!'
      });
    }
  };
};

export const addProductAction = product => {
  return async dispatch => {
    // initialize the action
    dispatch(addProduct());
    try {
      // send the request to the API
      await AxiosInstance.post('/products', product);

      // product successfully created
      dispatch(addProductSuccess(product));

      // display a success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product created successfully'
      });
    } catch (error) {
      // if something went wrong
      dispatch(addProductFailure());

      // display an error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, try later!'
      });
    }
  };
};

export const setProductAction = id => {
  return dispatch => {
    dispatch(setProduct(id));
  };
};

export const updateProductAction = (id, values) => {
  return async dispatch => {
    dispatch(updateProduct());
    try {
      // send request for update a product
      const response = await AxiosInstance.put(`/products/${id}`, values);

      // save the edited product in store
      dispatch(updateProductSuccess(response.data));

      // display a success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product updated successfully'
      });
    } catch (error) {
      // if something went wrong
      dispatch(updateProductFailure());

      // display an error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, try later!'
      });
    }
  };
};

export const removeProductAction = id => {
  return async dispatch => {
    dispatch(removeProduct());

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
          // send request for delete a product
          await AxiosInstance.delete(`/products/${id}`);

          // remove from the store
          dispatch(removeProductSuccess(id));

          // show alert
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } catch (error) {
          // if something went wrong
          dispatch(removeProductFailure());

          // display an error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, try later!'
          });
        }
      } else {
        dispatch(removeProductAbort());
      }
    });
  };
};
