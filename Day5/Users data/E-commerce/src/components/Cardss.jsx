export function Cardss({ productId, productName, category, price, instock, rating, image }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300 m-4">
      <img
        src={image}
        alt={productName}
        className="h-60 w-full object-cover"
      />

    
      <div className="p-4">
        <h1 className="text-sm text-gray-400">ID: {productId}</h1>
        <h2 className="text-lg font-semibold text-gray-800">{productName}</h2>
        <p className="text-sm text-gray-500">{category}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-blue-600">₹{price}</p>
          <span 
            className={`text-xs font-semibold px-2 py-1 rounded-full ₹{
              instock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700 "
            }`}
          >
            {instock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <p className="mt-2 text-yellow-500 font-medium">⭐ {rating}/5</p>
      </div>
    </div>
  );
}
