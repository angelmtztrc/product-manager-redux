import PropTypes from 'prop-types';

const Product = ({ product, idx }) => {
  const { id, name, price } = product;

  return (
    <tr className={idx % 2 ? 'bg-gray-100' : ''}>
      <td className="px-4 py-3 w-1/3 text-left">{name}</td>
      <td className="px-4 py-3 w-1/3 text-left">$ {price}</td>
      <td className="px-4 py-3 w-1/3 text-left">actions</td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};

export default Product;
