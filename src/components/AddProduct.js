import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { addProductAction } from '../actions/ProductsActions';

// components
import Alert from './Alert';

const AddProduct = () => {
  // local state
  const [values, setValues] = useState({
    name: '',
    price: 0
  });

  // dispatch to call the actions
  const dispatch = useDispatch();

  // access to the values of the store
  const [loading, error] = useSelector(state => [
    state.products.loading,
    state.products.error
  ]);

  // call the action
  const createProduct = product => dispatch(addProductAction(product));

  // handle data of the form
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.name === 'price' ? Number(e.target.value) : e.target.value
    });
  };

  // on submit the form
  const handleSubmit = e => {
    e.preventDefault();

    // validate form
    const { name, price } = values;
    if (name.trim() === '' || price <= 0 || isNaN(price)) {
      return;
    }

    // create new product
    createProduct({ ...values });
  };

  return (
    <div className="mx-auto p-8 w-full max-w-lg border border-gray-100 rounded-lg shadow">
      {error ? <Alert message="Something went wrong" type="fail" /> : null}
      <h2 className="text-center text-3xl font-semibold">Add New Product</h2>
      <form onSubmit={handleSubmit} className="mt-5 w-full">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Product name:</label>
          <input
            name="name"
            type="text"
            placeholder="Product name"
            value={values.name}
            onChange={handleChange}
            className="block px-4 py-2 w-full rounded-lg focus:outline-none shadow focus:shadow-outline appearance-none"
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-sm font-bold">Product price:</label>
          <div className="relative">
            <span className="absolute left-0 top-0 ml-4 mt-2">$</span>
            <input
              name="price"
              type="number"
              placeholder="Product price"
              value={values.price}
              onChange={handleChange}
              className="block pl-8 pr-4 py-2 w-full rounded-lg focus:outline-none shadow focus:shadow-outline appearance-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 w-full text-white font-bold bg-primary rounded-lg uppercase"
        >
          {loading ? (
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-5 h-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="ml-2">Processing</span>
            </div>
          ) : (
            'add product'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
