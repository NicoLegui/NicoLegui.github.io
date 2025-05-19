import React, { useState, useEffect } from 'react';

const FoodHeader = ({ cartCount, onOpenCart }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-b from-black to-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 text-3xl">🍔</div>
          <h1 
            className={`text-2xl font-bold text-white ${isBouncing ? 'animate-bounce' : ''}`}
          >
            Delicias Express
          </h1>
          <div className="ml-3 text-3xl animate-pulse">🍕</div>
        </div>
        
        <button 
          onClick={onOpenCart}
          className="relative p-2 text-white hover:text-green-300"
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