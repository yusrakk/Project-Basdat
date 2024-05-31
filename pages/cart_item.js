const CartItem = ({ product }) => {
    return (
      <div className="flex items-center justify-between p-4 border-b">
        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
        <div className="flex-1 ml-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">Size: {product.size}</p>
          <p className="text-sm text-gray-600">Color: {product.color}</p>
          <p className="mt-2 text-lg font-bold">${product.price}</p>
        </div>
        <div className="flex items-center">
          <button className="p-2 border rounded">-</button>
          <span className="px-4">{product.quantity}</span>
          <button className="p-2 border rounded">+</button>
        </div>
        <button className="ml-4 text-red-500">Delete</button>
      </div>
    );
  };
  
  export default CartItem;
  