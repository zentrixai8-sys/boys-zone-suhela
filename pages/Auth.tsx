
import React, { useState } from 'react';
import { User, Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-slate-500 font-medium">
            {isLogin ? 'Enter your details to access your account' : 'Join our fashion community today'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center group">
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="my-8 flex items-center text-slate-300">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="px-4 text-xs font-bold uppercase tracking-widest text-slate-400">Or continue with</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="flex items-center justify-center py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors">
              <Chrome className="w-5 h-5 text-rose-500 mr-2" />
              <span className="text-sm font-bold text-slate-700">Google</span>
           </button>
           <button className="flex items-center justify-center py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors">
              <Github className="w-5 h-5 text-slate-900 mr-2" />
              <span className="text-sm font-bold text-slate-700">Github</span>
           </button>
        </div>

        <p className="text-center mt-10 text-slate-500 font-medium">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-indigo-600 font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
