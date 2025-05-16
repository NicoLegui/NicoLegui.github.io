export const getCart = () => {
  const cart = localStorage.getItem('foodCart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('foodCart', JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem('foodCart');
};