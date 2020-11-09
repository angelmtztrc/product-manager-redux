import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-8 w-full bg-primary">
      <div className="items-ce container flex items-center justify-between mx-auto text-white">
        <h1 className="text-4xl font-bold">
          <Link to={'/'}>Product Manager - Redux</Link>
        </h1>
        <Link
          className="px-6 py-3 font-bold bg-secondary rounded-lg uppercase"
          to={'/products/new'}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default Header;
