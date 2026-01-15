
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Menu, X, User, Search, 
  Heart, Facebook, Instagram, Twitter, 
  ArrowRight
} from 'lucide-react';
import { CartProvider, useCart } from './CartContext.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Auth from './pages/Auth.tsx';
import NotFound from './pages/NotFound.tsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold tracking-tighter text-slate-900">BOYS ZONE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/auth" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in fade-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-1">
        <span className="text-2xl font-serif font-bold tracking-tighter text-white block mb-6">BOYS ZONE</span>
        <p className="text-sm leading-relaxed mb-6">
          Premium boys fashion store delivering high-quality garments that blend street style with sophisticated tailoring.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Support</Link></li>
          <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Categories</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/shop?category=T-Shirts" className="hover:text-white transition-colors">T-Shirts</Link></li>
          <li><Link to="/shop?category=Jackets" className="hover:text-white transition-colors">Jackets</Link></li>
          <li><Link to="/shop?category=Hoodies" className="hover:text-white transition-colors">Hoodies</Link></li>
          <li><Link to="/shop?category=Jeans" className="hover:text-white transition-colors">Denim</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Newsletter</h4>
        <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <div className="flex space-x-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8 text-center text-xs">
      <p>&copy; {new Date().getFullYear()} The Boys Zone. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
