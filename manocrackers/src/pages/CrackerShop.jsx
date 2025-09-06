import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { products } from './productsData';

// Import components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProductsGrid from '../components/ProductsGrid';
import CartSidebar from '../components/CartSidebar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingArrowButton from '../components/FloatingArrowButton';
import FloatingWhatsApp from '../components/FloatingWhatsApp'; // Add this import

// Import CartContext instead of custom hook
import { useCart } from '../context/CartContext';
import { scrollToProducts, scrollToFooter } from '../utils/scrollUtils';
import { CATEGORIES } from '../constants/appConstants';

const CrackerShop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use CartContext - this provides all cart functionality with persistence
  const {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  // Helper function to get unique product count (similar to your previous implementation)
  const getUniqueProductCount = () => {
    return cart.length;
  };

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set smooth scrolling behavior
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (html) {
        html.style.scrollBehavior = 'auto';
      }
    };
  }, []);

  const getAvailableCategories = () => {
    const availableCategories = new Set();
    products.forEach(product => {
      availableCategories.add(product.category);
    });

    return [
      { id: 'all', name: 'All' },
      ...CATEGORIES.filter(category => availableCategories.has(category.id))
    ];
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <AnimatedBackground isMobile={isMobile} />
      
      {/* Header */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToProducts={scrollToProducts}
        scrollToFooter={scrollToFooter}
      />
      
      {/* Hero Section */}
      <HeroSection scrollToProducts={scrollToProducts} />

      {/* Category Filter Section */}
      <CategoryFilter
        availableCategories={getAvailableCategories()}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Products Section */}
      <ProductsGrid
        filteredProducts={filteredProducts}
        setActiveCategory={setActiveCategory}
      />

      {/* Footer */}
      <Footer
        scrollToProducts={scrollToProducts}
        scrollToFooter={scrollToFooter}
      />

      {/* Cart Sidebar - Now managed by CartContext */}
      <CartSidebar />

      {/* Floating Arrow Button */}
      <FloatingArrowButton />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp 
        phoneNumber="+919962814577" 
        message="Hi! I'm interested in your crackers collection. Can you help me?" 
      />
    </div>
  );
};

export default CrackerShop;