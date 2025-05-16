import React from 'react';

const FoodHeader = ({ cartCount, onOpenCart }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Delicias Express</h1>
        
        <button 
          onClick={onOpenCart}
          className="relative p-2 text-gray-700 hover:text-green-600"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default FoodHeader;

// DONE