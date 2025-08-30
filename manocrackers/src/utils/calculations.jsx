export const calculateOrderTotals = (cartItems, discountPercentage = 0.75) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 0;
  const discountAmount = subtotal * discountPercentage;
  const total = subtotal + deliveryFee - discountAmount;

  return {
    subtotal,
    deliveryFee,
    discountAmount,
    total
  };
};
