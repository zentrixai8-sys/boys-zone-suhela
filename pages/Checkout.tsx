
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { useCart } from '../CartContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h2 className="text-4xl font-serif font-bold text-slate-900">Order Placed!</h2>
        <p className="text-slate-500 text-lg">Thank you for shopping with The Boys Zone. Your order is being processed and will be shipped soon.</p>
        <button 
          onClick={() => navigate('/')}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors mb-12 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Return to Cart
        </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-serif font-bold text-slate-900">Final Step</h1>
            <p className="text-slate-500 font-medium">Please fill in your shipping and payment details.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm mr-3">1</span>
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase">Address</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Street name and number" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">City</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">Postal Code</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold text-slate-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm mr-3">2</span>
                  Payment Method
                </h3>
                <div className="flex items-center text-emerald-600 text-xs font-bold uppercase tracking-widest">
                   <Lock className="w-3 h-3 mr-1" /> Secure
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50 border-2 border-indigo-200 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center">
                       <CreditCard className="w-6 h-6 text-indigo-600 mr-3" />
                       <div>
                          <p className="font-bold text-slate-900">Advanced Payment Only</p>
                          <p className="text-xs text-indigo-700">Safe & Insured</p>
                       </div>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Card Number</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="0000 0000 0000 0000" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Expiry</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">CVC</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
                    </div>
                 </div>
              </div>
            </section>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>Complete Order - ${cartTotal.toFixed(2)}</span>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-32 space-y-8 h-fit">
          <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Your Order</h3>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex items-center space-x-4">
                  <div className="w-16 h-20 bg-white rounded-xl overflow-hidden border border-slate-100 shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">Qty: {item.quantity} • Size: {item.selectedSize}</p>
                  </div>
                  <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Shipping</span>
                <span className="text-emerald-600 font-bold uppercase text-xs">Free</span>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Grand Total</span>
                <span className="text-2xl font-bold text-indigo-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="text-center space-y-2 px-8">
             <ShieldCheck className="w-8 h-8 text-indigo-600 mx-auto" />
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">30-Day Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
