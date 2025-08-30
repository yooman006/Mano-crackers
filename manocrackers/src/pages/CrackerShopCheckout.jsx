import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { OrderSummary } from '../components/OrderSummary';
import { CustomerForm } from '../components/CustomerForm';
import { SuccessModal } from '../components/SuccessModel';
import { useCheckoutForm } from '../hooks/useCheckoutForm';
import { submitOrder } from '../services/orderServices';
import { generateReceipt } from '../utils/pdfGenerator';
import { calculateOrderTotals } from '../utils/calculations';
import { useCart } from '../context/CartContext';

const DISCOUNT_PERCENTAGE = 0.75;

export default function CrackerShopCheckout() {
  const navigate = useNavigate();
  const { cart: cartItems, clearCart } = useCart();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    formData,
    errors,
    handleInputChange,
    validate
  } = useCheckoutForm();

  // Calculate order totals
  const totals = calculateOrderTotals(cartItems, DISCOUNT_PERCENTAGE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const orderData = {
        customer: formData,
        items: cartItems.map(item => ({
          productId: item.id.toString(),
          name: item.name,
          brand: item.brand,
          price: item.price,
          quantity: item.quantity
        })),
        totals: {
          ...totals,
          discountPercentage: DISCOUNT_PERCENTAGE * 100
        },
      };

      const responseData = await submitOrder(orderData);

      setShowSuccess(true);

      // Generate PDF receipt
      generateReceipt({
        ...orderData,
        _id: responseData.order._id,
        orderDate: responseData.order.orderDate
      });

    } catch (error) {
      console.error('Order submission error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Clear the cart after successful order
    clearCart();
    navigate('/');
  };

  const handleGoBack = () => {
    // Cart is preserved automatically through context
    navigate(-1);
  };

  const handleContinueShopping = () => {
    // Cart is preserved automatically through context
    navigate('/');
  };

  // If no cart items, redirect back
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to your cart before proceeding to checkout.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8 px-4 relative">
      <SuccessModal 
        showSuccess={showSuccess} 
        onClose={handleSuccessClose} 
      />

      <div className="max-w-6xl mx-auto">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">🎆 MANO Crackers</h1>
              <p className="text-gray-600">Complete your festive order</p>
            </div>
          </div>
          
          <button
            onClick={handleContinueShopping}
            className="bg-white/50 hover:bg-white/70 text-gray-700 px-4 py-2 rounded-lg transition-all border border-gray-200"
          >
            Continue Shopping
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-8">
            <OrderSummary 
              cartItems={cartItems}
              totals={totals}
              discountPercentage={DISCOUNT_PERCENTAGE * 100}
            />
            
            <CustomerForm 
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}