const ProductsSkeleton = () => {
  return (
    <div className="mt-8">
      <div className="grid gap-4 grid-cols-1 animate-pulse">
        <div className="col-span-1 px-4 py-2 w-full h-12 bg-gray-300 rounded-lg"></div>
        <div className="grid gap-4 col-span-1 grid-cols-3">
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
          <div className="col-span-1 px-4 py-2 h-12 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
