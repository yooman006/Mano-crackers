import React, { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';

export const OrderSummary = ({ cartItems, totals, discountPercentage }) => {
  const [showAllItems, setShowAllItems] = useState(false);
  
  // Calculate discounted price for individual items
  const getDiscountedPrice = (originalPrice, category) => {
    // No discount for Gift Box items
    if (category === 'Gift Box') {
      return originalPrice;
    }
    return originalPrice - (originalPrice * (discountPercentage / 100));
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 h-fit">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6 text-emerald-600" />
        Order Summary
      </h2>

      <div className="mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <p className="text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Special Offer: {Math.round(discountPercentage)}% discount applied to eligible orders! (Excludes Gift Box)
        </p>
      </div>

      <div className="max-h-[300px] overflow-y-auto pr-2 mb-4 custom-scrollbar">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-gray-200">
              <th className="text-left pb-3 text-sm font-medium text-gray-500 w-[50%]">Item</th>
              <th className="text-right pb-3 text-sm font-medium text-gray-500">Price</th>
              <th className="text-right pb-3 text-sm font-medium text-gray-500">Qty</th>
              <th className="text-right pb-3 text-sm font-medium text-gray-500">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cartItems.slice(0, showAllItems ? cartItems.length : 3).map((item) => {
              const isGiftBox = item.category === 'Gift Box';
              const discountedPrice = getDiscountedPrice(item.price, item.category);
              
              return (
                <tr key={`item-${item.id}`} className="hover:bg-gray-50">
                  <td className="py-3">
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      {isGiftBox ? (
                        // Gift Box - show original price only
                        <span className="text-emerald-600 font-medium">₹{Math.round(item.price)} (No discount)</span>
                      ) : (
                        // Regular items - show original and discounted price
                        <>
                          <span className="line-through">₹{Math.round(item.price)}</span>
                          <span className="ml-2 text-emerald-600 font-medium">₹{Math.round(discountedPrice)}</span>
                        </>
                      )}
                    </div>
                    {isGiftBox && (
                      <div className="text-xs text-purple-600 font-medium mt-1">
                        Special Item
                      </div>
                    )}
                  </td>
                  <td className="text-right text-sm text-emerald-600 font-semibold">₹{Math.round(discountedPrice)}</td>
                  <td className="text-right text-sm text-gray-600">{item.quantity}</td>
                  <td className="text-right font-medium text-gray-800">
                    ₹{Math.round(discountedPrice * item.quantity)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {cartItems.length > 3 && (
          <div className="text-center mt-3">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="text-emerald-600 text-sm font-medium hover:underline focus:outline-none"
            >
              {showAllItems ? 'Show less' : `Show ${cartItems.length - 3} more items`}
            </button>
          </div>
        )}
      </div>

      {/* Totals section */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Original Subtotal</span>
            <span className="text-gray-500 line-through">₹{Math.round(totals.subtotal)}</span>
          </div>
          <div className="flex justify-between items-center text-emerald-600">
            <span>Discount ({Math.round(discountPercentage)}%)</span>
            <span>-₹{Math.round(totals.discountAmount)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Discounted Subtotal</span>
            <span className="text-gray-800 font-medium">₹{Math.round(totals.total)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">Final Total</span>
              <span className="text-xl font-bold text-emerald-600">₹{Math.round(totals.total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Total Savings Highlight */}
      <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg text-white text-center">
        <p className="text-sm font-medium">
          🎉 Total Savings: ₹{Math.round(totals.discountAmount)}
        </p>
        <p className="text-xs opacity-90 mt-1">
          You saved {Math.round(discountPercentage)}% on eligible items!
        </p>
      </div>

      {/* Important notes */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Important Notes:
        </h3>
        <ul className="text-sm text-emerald-700 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>All crackers are tested for quality</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Safe handling instructions included</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>24/7 customer support available</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Gift Box items are sold at original prices</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Discount applied only to eligible items</span>
          </li>
        </ul>
      </div>
    </div>
  );
};