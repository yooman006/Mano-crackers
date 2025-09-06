import React from 'react';
import { Star, Shield, Award, Sparkles, Phone, Mail,Tag } from 'lucide-react';

const HeroSection = ({ scrollToProducts }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-yellow-300 text-sm font-medium">Premium Quality Fireworks</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Light Up</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Your Dreams
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Experience the magic of celebrations with our premium collection of safe, eco-friendly fireworks that create unforgettable moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToProducts}
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>        
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Certified Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {/* Special Offer Card */}
            <div className="relative bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl border border-red-400/20 rounded-3xl p-6 lg:p-8 hover:border-red-400/40 transition-all duration-300">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                HOT DEAL
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-2xl">
                  <Tag className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">75% OFF Everything</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Limited time mega sale! Get massive discounts on our entire collection. 
                    Perfect time to stock up for the festival season.
                  </p>
                  <div className="mt-4 text-red-400 font-semibold text-sm">
                    Hurry! Offer ends soon
                  </div>
                </div>
              </div>
            </div>

            {/* Eco-Friendly Card */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-3xl p-6 lg:p-8 hover:border-emerald-400/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Green Certified</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    100% eco-friendly crackers made without harmful chemicals like Barium or Aluminum. 
                    Government-approved green formulas for guilt-free celebrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-6 lg:p-8 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-4">Bulk Orders Welcome</h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="tel:+916382737971"
                    className="flex items-center justify-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 9962814577</span>
                  </a>
                  <a 
                    href="mailto:mks_prithi@yahoo.co.in"
                    className="flex items-center justify-center space-x-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>mks_prithi@yahoo.co.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;