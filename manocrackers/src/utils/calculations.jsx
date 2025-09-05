export const calculateOrderTotals = (cartItems, discountPercentage = 0.75) => {
  let subtotal = 0;
  let discountAmount = 0;
  
  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    // Only apply discount if it's not a Gift Box item
    if (item.category !== 'Gift Box') {
      discountAmount += itemTotal * discountPercentage;
    }
  });
  
  const deliveryFee = 0;
  const total = subtotal + deliveryFee - discountAmount;

  return {
    subtotal,
    deliveryFee,
    discountAmount,
    total
  };
};