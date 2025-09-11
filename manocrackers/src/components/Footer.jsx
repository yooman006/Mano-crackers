import React from 'react';
import { Sparkles, Phone, Mail, Home } from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = ({ scrollToProducts, scrollToFooter }) => {
  return (
    <footer className="bg-purple-900/40 backdrop-blur-lg border-t border-purple-400/20 py-6 xs:py-8 sm:py-10 md:py-12 relative z-20">
      <div className="container mx-auto px-3 xs:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8">
          {/* Brand Section with Logo */}
          <div>
            <div className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4 group">
              {/* Stylish Logo Image */}
              <div className="relative flex-shrink-0">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Logo container */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1 xs:p-1.5 shadow-xl group-hover:shadow-yellow-400/20 transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={assets.logo} 
                    alt="4 Square Crackers Logo" 
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 object-contain filter drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                  />
                  
                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300"></div>
                </div>
                
                {/* Small floating effect */}
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
              </div>
              
              {/* Enhanced Sparkles */}
              <div className="relative">
                <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-yellow-400 animate-pulse drop-shadow-md" />
                <div className="absolute inset-0 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-yellow-400 animate-ping opacity-20">
                  <Sparkles className="h-full w-full" />
                </div>
              </div>
              
              {/* Stylized Brand Text */}
              <div className="relative">
                {/* Subtle text glow */}
                <div className="absolute inset-0 text-sm xs:text-base sm:text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent blur-sm opacity-30"></div>
                
                {/* Main text */}
                <h3 className="relative text-sm xs:text-base sm:text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300">
                  MANO Crackers Palace
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
              Your trusted partner for safe and spectacular celebrations.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-1 xs:space-y-2 text-gray-300 text-xs xs:text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProducts} 
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToFooter} 
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-white font-semibold mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-lg">
              Contact Info
            </h4>
            <div className="space-y-2 xs:space-y-3 text-gray-300 text-xs xs:text-sm sm:text-base">
              <div className="flex items-start space-x-2">
                <Phone className="h-3 w-3 xs:h-4 xs:w-4 flex-shrink-0 text-orange-400 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span>+91 9962814577</span>
                  <span>+91 9943860510</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 xs:h-4 xs:w-4 flex-shrink-0 text-blue-400" />
                <span className="break-all">mks_prithi@yahoo.co.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <Home className="h-3 w-3 xs:h-4 xs:w-4 flex-shrink-0 text-purple-400 mt-0.5" />
                <span className="leading-relaxed">
                  77Z/G, Gandhi Road, Sivakasi, Virudhunagar, TamilNadu - 626123
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-purple-400/20 mt-5 xs:mt-6 sm:mt-8 pt-5 xs:pt-6 sm:pt-8 text-center text-gray-400 text-xs xs:text-sm sm:text-base">
          <p>&copy; 2025 MANO Crackers Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;