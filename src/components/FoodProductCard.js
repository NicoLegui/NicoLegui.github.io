import React, { useState } from 'react';

const FoodProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <p className="text-lg font-semibold mb-3">${product.price}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded-l-lg"
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded-r-lg"
            >
              +
            </button>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodProductCard;