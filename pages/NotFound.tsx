
import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 space-y-8 text-center">
      <div className="relative">
         <span className="text-[180px] font-black text-slate-100 leading-none">404</span>
         <Ghost className="w-24 h-24 text-indigo-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-slate-900">Page Lost in Style</h1>
        <p className="text-slate-500 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      <Link 
        to="/" 
        className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
      >
        <Home className="mr-2 w-5 h-5" /> Back to Safety
      </Link>
    </div>
  );
};

export default NotFound;
