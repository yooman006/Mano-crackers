import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const ProductsGrid = ({ filteredProducts, setActiveCategory }) => {
  // Get cart functionality from CartContext
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <section id="products" className="py-8 xs:py-10 sm:py-12 md:py-16 relative z-20">
      <div className="container mx-auto px-2 xs:px-3">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-white text-lg">No products found in this category</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;