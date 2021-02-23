import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getProductsAction } from '../actions/ProductsActions';

// components
import Product from './Product';
import ProductsSkeleton from './ProductsSkeleton';

const Products = () => {
  // dispatch to call the actions
  const dispatch = useDispatch();

  // access to the values of the store
  const { loading, products } = useSelector(state => state.products);

  // call the action
  const getProducts = () => dispatch(getProductsAction());

  useEffect(() => {
    // fetch all products
    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-semibold">Product Listing</h2>
      {loading ? (
        <ProductsSkeleton />
      ) : (
        <div className="mt-8 border-b border-gray-200 rounded shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="text-white bg-primary">
              <tr>
                <th
                  className="px-4 py-3 w-1/3 text-center font-semibold uppercase"
                  scope="col"
                >
                  Name
                </th>
                <th
                  className="px-4 py-3 w-1/3 text-center font-semibold uppercase"
                  scope="col"
                >
                  Price
                </th>
                <th
                  className="px-4 py-3 w-1/3 text-center font-semibold uppercase"
                  scope="col"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                <>
                  {products.map((product, idx) => (
                    <Product key={product.id} product={product} idx={idx} />
                  ))}
                </>
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Products;
