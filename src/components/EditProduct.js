import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/ProductsActions';

const EditProduct = ({ history }) => {
  // get product
  const [product] = useSelector(state => [state.products.product]);

  // local state
  const [values, setValues] = useState({
    name: product.name,
    price: product.price
  });

  // dispatch to call the actions
  const dispatch = useDispatch();

  // actions
  const updateProduct = (id, values) => dispatch(editProductAction(id, values));

  // handle form values
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.name === 'price' ? Number(e.target.value) : e.target.value
    });
  };

  // submit edited product
  const handleSubmit = async e => {
    e.preventDefault();

    // validate form
    const { name, price } = values;
    if (name.trim() === '' || price <= 0 || isNaN(price)) {
      return;
    }

    // send request
    updateProduct(product.id, values);

    // redirrect user
    history.push('/');
  };

  return (
    <div className="mx-auto p-8 w-full max-w-lg border border-gray-100 rounded-lg shadow">
      {!product ? (
        <div className="flex flex-col items-center justify-center w-full">
          <p className="mb-4">Select a Product to edit</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 text-white font-bold bg-secondary rounded-lg uppercase"
          >
            Product list
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-center text-3xl font-semibold">Edit Product</h2>
          <form className="mt-5 w-full">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold">
                Product name:
              </label>
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
              <label className="block mb-2 text-sm font-bold">
                Product price:
              </label>
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
              onClick={handleSubmit}
              className="px-6 py-2 w-full text-white font-bold bg-primary rounded-lg uppercase"
            >
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditProduct;
