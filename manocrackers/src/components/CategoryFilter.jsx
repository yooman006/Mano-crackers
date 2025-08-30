import React, { useState } from 'react';

const CategoryFilter = ({ 
  availableCategories, 
  activeCategory, 
  setActiveCategory
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const categoriesToShow = showAll 
    ? availableCategories 
    : availableCategories.slice(0, 15);

  return (
    <section id="category-section" className="py-4 xs:py-5 sm:py-6 md:py-8 bg-purple-900/30 backdrop-blur-md">
      <div className="container mx-auto px-3 xs:px-4">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
          Choose Your Category
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 xs:gap-3">
          {categoriesToShow.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-2 py-1.5 xs:px-3 xs:py-2 rounded-lg transition-all duration-300 text-xs xs:text-sm text-center break-words min-h-[40px] flex items-center justify-center ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg transform scale-105'
                  : 'bg-white/10 text-white hover:bg-purple-500/20 hover:scale-105 border border-purple-400/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          {availableCategories.length > 15 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
            >
              {showAll ? 'Show Less Categories' : 'Show All Categories'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;