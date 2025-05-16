import React, { useState } from 'react';
import CartItem from './CartItem';

const CartModal = ({ cart, onClose, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const [paymentMethod, setPaymentMethod] = useState('transferencia');

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleFinalizeCheckout = () => {
    onCheckout(paymentMethod);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Tu Carrito</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-center py-8">Tu carrito está vacío</p>
          ) : (
            <>
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={onRemoveItem}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
              
              <div className="mt-6 pt-4 border-t">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Método de pago:</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handlePaymentChange('transferencia')}
                      className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'transferencia' ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200'}`}
                    >
                      Transferencia
                    </button>
                    <button
                      onClick={() => handlePaymentChange('efectivo')}
                      className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'efectivo' ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200'}`}
                    >
                      Efectivo
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                
                <button 
                  onClick={handleFinalizeCheckout}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;