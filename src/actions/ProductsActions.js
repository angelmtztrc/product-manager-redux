// constants
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_INIT,
  ADD_PRODUCT_SUCCESS
} from '../constants';

export function addProductAction(product) {
  return dispatch => {
    // initialize the action
    dispatch(createProductInit());

    try {
      // when a product is successfully created
      dispatch(createProductSuccess(product));
    } catch (error) {
      // when something is wrong
      dispatch(createProductFail);
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
