import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// actions
import {
  setProductAction,
  removeProductAction
} from '../actions/ProductsActions';

const Product = ({ product, idx }) => {
  const { id, name, price } = product;

  // dispatch for call the action
  const dispatch = useDispatch();

  // access to the routing
  const history = useHistory();

  // update a product
  const handleUpdate = () => {
    dispatch(setProductAction(id));

    history.push(`/products/edit/${id}`);
  };

  // remove product
  const handleRemove = () => {
    dispatch(removeProductAction(id));
  };

  return (
    <tr className={idx % 2 ? 'bg-gray-100' : ''}>
      <td className="px-4 py-3 w-1/3 text-center">{name}</td>
      <td className="px-4 py-3 w-1/3 text-center">$ {price}</td>
      <td className="px-4 py-3 w-1/3 text-center">
        <div className="flex items-center justify-center">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-secondary rounded-l-lg"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button
            onClick={handleRemove}
            className="px-6 py-2 bg-red-500 rounded-r-lg"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};

export default Product;
