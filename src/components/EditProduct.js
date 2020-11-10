const EditProduct = () => {
  return (
    <div className="mx-auto p-8 w-full max-w-lg border border-gray-100 rounded-lg shadow">
      <h2 className="text-center text-3xl font-semibold">Edit Product</h2>
      <form className="mt-5 w-full">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Product name:</label>
          <input
            name="name"
            type="text"
            placeholder="Product name"
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
              className="block pl-8 pr-4 py-2 w-full rounded-lg focus:outline-none shadow focus:shadow-outline appearance-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 w-full text-white font-bold bg-primary rounded-lg uppercase"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
