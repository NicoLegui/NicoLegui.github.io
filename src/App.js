import React, { useState, useEffect } from 'react';
import products from './mock/products';
import desserts from './mock/desserts';
import FoodProductCard from './components/FoodProductCard';
import CartModal from './components/CartModal';
import FoodHeader from './components/FoodHeader';
import { getCart, saveCart, clearCart } from './utils/storage';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    let newCart;
    if (existingItem) {
      newCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity }];
    }
    
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    saveCart(newCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const newCart = cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    );
    
    setCart(newCart);
    saveCart(newCart);
  };

  const handleCheckout = (paymentMethod) => {
    const phoneNumber = '1173644188'; // Cambia este número por el tuyo
    const message = `¡Hola! Quiero hacer un pedido:%0A%0A${cart.map(item => 
      `- ${item.name} x${item.quantity} ($${item.price * item.quantity})`
    ).join('%0A')}%0A%0ATotal: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}%0A%0AMétodo de pago: ${paymentMethod === 'transferencia' ? 'Transferencia' : 'Efectivo'}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    clearCart();
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <FoodHeader 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-extrabold mb-8 text-black border-b-4 border-green-200 pb-2 inline-block">
          Nuestro Menú
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <FoodProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <h2 className="text-3xl font-extrabold mt-16 mb-8 text-black border-b-4 border-green-200 pb-2 inline-block">
          Postres
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {desserts.map(dessert => (
            <FoodProductCard 
              key={dessert.id} 
              product={dessert} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
      
      {isCartOpen && (
        <CartModal 
          cart={cart} 
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default App;

// DONE