
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search as SearchIcon, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { Category, Product } from '../types';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = (searchParams.get('category') as Category) || 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = currentCategory === 'All' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: Category) => {
    setSearchParams({ category: cat });
    setShowFilters(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold text-slate-900">Explore Collection</h1>
          <p className="text-slate-500 font-medium">Discover our premium range of boys' essentials</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow md:w-64">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors font-medium text-slate-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Sidebar */}
        <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-64 space-y-8 animate-in fade-in duration-300`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between lg:hidden">
               <h3 className="font-bold text-lg">Filters</h3>
               <button onClick={() => setShowFilters(false)}><X className="w-6 h-6"/></button>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-indigo-600 text-white">
              <h4 className="font-bold mb-2">Summer Sale!</h4>
              <p className="text-xs text-indigo-100 mb-4">Get up to 50% off on selected items this summer.</p>
              <button className="text-xs font-bold uppercase bg-white text-indigo-600 px-4 py-2 rounded-lg">Apply Now</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative bg-white rounded-2xl p-4 transition-all hover:shadow-xl border border-slate-100">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.discount > 0 && (
                      <span className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{product.category}</span>
                    <h3 className="font-semibold text-slate-800 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Link 
                    to={`/product/${product.id}`}
                    className="absolute inset-0 z-10"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
               <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <SearchIcon className="w-8 h-8 text-slate-400" />
               </div>
               <h3 className="text-xl font-bold text-slate-900">No items found</h3>
               <p className="text-slate-500">Try adjusting your filters or search query.</p>
               <button 
                  onClick={() => {setSearchQuery(''); handleCategoryChange('All');}}
                  className="px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold"
               >
                 Clear all filters
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
