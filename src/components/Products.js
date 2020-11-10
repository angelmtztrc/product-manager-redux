const Products = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-semibold">Product Listing</h2>
      <div className="mt-8 border-b border-gray-200 rounded shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="text-white bg-primary">
            <tr>
              <th
                className="px-4 py-3 w-1/3 text-left font-semibold uppercase"
                scope="col"
              >
                Name
              </th>
              <th
                className="px-4 py-3 w-1/3 text-left font-semibold uppercase"
                scope="col"
              >
                Price
              </th>
              <th
                className="px-4 py-3 w-1/3 text-left font-semibold uppercase"
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Products;
