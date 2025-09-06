import React from 'react';
import { ShoppingCart, Sparkles, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assets } from '../assets/assets';

const Header = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToProducts,
  scrollToFooter
}) => {
  // Get cart functionality from CartContext
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    getTotalItems 
  } = useCart();

  // Helper function to get unique product count
  const getUniqueProductCount = () => {
    return cart.length;
  };

  return (
    <header className="bg-purple-900/30 backdrop-blur-lg border-b border-purple-400/20 fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-none px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 py-2 xs:py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section with Group Hover */}
          <div className="flex items-center space-x-2 xs:space-x-3 flex-shrink-0 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Image */}
            <div className="relative flex-shrink-0">
              <img 
                src={assets.logo} 
                alt="4 Square Crackers Logo" 
                className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
              />
            </div>
            
            {/* Sparkles Animation */}
            <div className="relative">
              <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-yellow-400 animate-spin" />
              <div className="absolute inset-0 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-yellow-400 animate-ping opacity-25">
                <Sparkles className="h-full w-full" />
              </div>
            </div>

            {/* Brand Text */}
            <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent whitespace-nowrap">
              MANO Crackers
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex xl:space-x-8 lg:space-x-6 flex-1 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm lg:text-base font-medium"
            >
              Home
            </button>
            <button
              onClick={scrollToProducts}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm lg:text-base font-medium"
            >
              Products
            </button>
            <button
              onClick={scrollToFooter}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm lg:text-base font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Right Side - Cart & Menu */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 flex-shrink-0">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-2 xs:px-3 xs:py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ShoppingCart className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 xs:-top-1.5 xs:-right-1.5 sm:-top-2 sm:-right-2 bg-yellow-500 text-black text-[10px] xs:text-xs rounded-full h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 flex items-center justify-center animate-pulse font-bold">
                  {getUniqueProductCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-1.5 xs:p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
          <div className="py-2 xs:py-4 border-t border-purple-400/20 mt-3 xs:mt-4">
            <nav className="flex flex-col space-y-2 xs:space-y-3">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 py-1.5 xs:py-2 px-2 rounded-lg hover:bg-white/10 text-xs xs:text-sm sm:text-base text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToProducts();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 py-1.5 xs:py-2 px-2 rounded-lg hover:bg-white/10 text-xs xs:text-sm sm:text-base text-left"
              >
                Products
              </button>
              <button
                onClick={() => {
                  scrollToFooter();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 py-1.5 xs:py-2 px-2 rounded-lg hover:bg-white/10 text-xs xs:text-sm sm:text-base text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;