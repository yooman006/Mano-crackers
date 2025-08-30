import React from 'react';
import { Star, Plus, Minus } from 'lucide-react';

const ProductCard = ({ product, cart, addToCart, removeFromCart, discountPercentage = 0.75 }) => {
  const cartItem = cart.find(item => item.id === product.id);
  
  // Calculate discounted price
  const originalPrice = product.price;
  const discountedPrice = originalPrice - (originalPrice * discountPercentage);

  return (
    <div className="bg-purple-900/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-sm border border-purple-400/20 transition-all duration-200 group hover:border-yellow-400/40">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 xs:h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-1 right-1 bg-purple-900/70 backdrop-blur-sm rounded-full p-1 flex items-center border border-purple-400/30">
          <Star className="h-2 w-2 text-yellow-400 fill-current" />
          <span className="text-white text-[8px] ml-0.5">{product.rating}</span>
        </div>
        {/* Discount Badge */}
        <div className="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded">
          {Math.round(discountPercentage * 100)}% OFF
        </div>
      </div>
      <div className="p-2 xs:p-3">
        <h3 className="text-[10px] xs:text-xs font-bold text-white mb-1 line-clamp-2 leading-tight min-h-[2.5rem]">{product.name}</h3>
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            {/* Discounted Price */}
            <span className="text-[20px] xs:text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ₹{Math.round(discountedPrice)}
            </span>
            {/* Original Price with strikethrough */}
            <span className="text-[10px] xs:text-[10px] text-gray-400 line-through">
              ₹{Math.round(originalPrice)}
            </span>
          </div>

          {cartItem ? (
            <div className="flex items-center bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 overflow-hidden">
              <button
                onClick={() => removeFromCart(product.id)}
                className="w-5 h-5 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <Minus className="w-2 h-2 stroke-2" />
              </button>
              <span className="px-1 text-white font-semibold text-[10px] min-w-[1rem] text-center">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="w-5 h-5 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
              >
                <Plus className="w-2 h-2 stroke-2" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-1.5 py-0.5 rounded-full text-[18px] xs:text-xs flex items-center transition-all"
            >
              <Plus className="h-2 w-2 mr-0.5" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;