import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-gray-500">${item.price} c/u</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 px-2 py-1 rounded-l"
        >
          -
        </button>
        <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded-r"
        >
          +
        </button>
        <button 
          onClick={() => onRemove(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;