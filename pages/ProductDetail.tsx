
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, Star, Heart, Share2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-serif font-bold">Product not found</h2>
        <Link to="/shop" className="text-indigo-600 font-bold">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors mb-8 font-medium text-sm"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
            <img 
              src={product.image} 
              className="w-full h-full object-cover" 
              alt={product.name} 
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
             {[1,2,3].map(i => (
               <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
               </div>
             ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-600">{product.category}</span>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-slate-900">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-amber-500">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                <span className="ml-2 text-sm text-slate-500 font-medium">(124 Reviews)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-slate-400 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed font-medium">
            {product.description}
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Select Size</h3>
              <button className="text-xs font-bold text-indigo-600 underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 flex items-center justify-center rounded-xl font-bold border-2 transition-all ${
                    selectedSize === size 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-indigo-200 ${
              isAdded 
                ? 'bg-emerald-600 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            {isAdded ? (
              <span>Successfully Added!</span>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
             <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Fast Delivery</span>
             </div>
             <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">1 Year Warranty</span>
             </div>
             <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">30-Day Returns</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
