
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Start exploring our premium collection.</p>
        <Link 
          to="/shop" 
          className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Browse Shop <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
              <div className="w-24 h-32 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
              </div>
              <div className="flex-grow space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">Size: {item.selectedSize}</p>
                  </div>
                  <p className="text-lg font-bold text-slate-900 mt-2 sm:mt-0">${item.price}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
                  <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:text-indigo-600 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:text-indigo-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="flex items-center text-rose-500 hover:text-rose-600 transition-colors text-xs font-bold uppercase tracking-wider mt-4 sm:mt-0"
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Order Summary</h3>
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Shipping</span>
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">Free</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-indigo-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link 
              to="/checkout"
              className="block w-full py-5 bg-indigo-600 text-white text-center rounded-2xl font-bold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all"
            >
              Go to Checkout
            </Link>
          </div>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
             <p className="text-xs text-indigo-700 font-bold uppercase tracking-widest mb-2">Member Special</p>
             <p className="text-sm text-indigo-900 font-medium mb-4">Log in to your account and get an extra 5% off on your first order.</p>
             <Link to="/auth" className="text-indigo-600 text-sm font-bold underline">Login / Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
