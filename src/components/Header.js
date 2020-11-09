const Header = () => {
  return (
    <nav className="py-8 w-full bg-primary">
      <div className="items-ce container flex items-center justify-between mx-auto text-white">
        <h1 className="text-4xl font-bold">Product Manager - Redux</h1>
        <a
          className="px-6 py-3 font-bold bg-secondary rounded-lg"
          href="/products/new"
        >
          Add Product
        </a>
      </div>
    </nav>
  );
};

export default Header;
