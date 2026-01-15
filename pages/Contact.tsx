
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold text-slate-900">Get in Touch</h1>
            <p className="text-slate-500 text-lg">Have a question? Our team is here to help you find the perfect fit.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-500 mt-1">support@boyszone.com</p>
                <p className="text-slate-500">press@boyszone.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-500 mt-1">+44 20 7946 0958</p>
                <p className="text-slate-500">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Visit Us</h4>
                <p className="text-slate-500 mt-1">123 Fashion Street, Suite 456</p>
                <p className="text-slate-500">London, EC1A 1BB, UK</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">Your Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
               </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase">Subject</label>
                <input type="text" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Product Inquiry" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase">Message</label>
                <textarea rows={5} className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none" placeholder="Tell us what's on your mind..."></textarea>
            </div>
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
