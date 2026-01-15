
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Zap, ChevronRight, PlayCircle, MoveDown } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group relative bg-white rounded-3xl p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-slate-50 relative">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      {product.discount > 0 && (
        <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
          {product.discount}% OFF
        </span>
      )}
      <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
        <ArrowRight className="w-4 h-4 text-slate-900" />
      </button>
    </div>
    <div className="px-2 pb-2">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{product.name}</h3>
        <span className="text-sm font-bold text-slate-900">${product.price}</span>
      </div>
      <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">{product.category}</p>
    </div>
    <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />
  </div>
);

const Home = () => {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section - Luxury Editorial Style */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#fdfcfb]">
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcfb] via-[#fdfcfb]/20 to-transparent z-10 hidden lg:block" />
          <img 
            src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1500&q=80" 
            className="w-full h-full object-cover object-top"
            alt="Hero Fashion"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
          <div className="max-w-xl space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-indigo-600">
                <span className="w-8 h-[1px] bg-indigo-600"></span>
                <span>Established 2024</span>
              </span>
              <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[1.1] text-slate-900 tracking-tight">
                Refining <br />
                <span className="italic font-light text-slate-400">Modern</span> Masculinity
              </h1>
            </div>

            <p className="text-lg text-slate-500 max-w-sm leading-relaxed font-medium">
              A curated collection of contemporary essentials designed for the ambitious young man.
            </p>

            <div className="flex items-center space-x-6">
              <Link 
                to="/shop" 
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-2xl hover:shadow-indigo-200"
              >
                Shop Collection
              </Link>
              <button className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                  <PlayCircle className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-sm font-bold text-slate-900 tracking-tight">Our Film</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 animate-bounce">
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Explore</span>
           <MoveDown className="w-4 h-4 text-slate-400" />
        </div>
      </section>

      {/* Trust Badges - Refined */}
      <section className="py-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Truck, title: 'Complimentary Shipping', desc: 'On all orders over $150' },
              { icon: ShieldCheck, title: 'Lifetime Guarantee', desc: 'Quality that endures' },
              { icon: Star, title: 'Curated Selection', desc: 'Only the finest materials' },
              { icon: Zap, title: 'Immediate Dispatch', desc: 'Worldwide tracking' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <item.icon className="w-5 h-5 text-slate-400" />
                <h4 className="font-bold text-slate-900 text-sm tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Bento Box Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Collections</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Crafted for Movement</h2>
          </div>
          <Link to="/shop" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all">
            View All Series
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <Link 
            to="/shop?category=Jackets" 
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem]"
          >
            <img 
              src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Jackets"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-serif font-bold mb-2">Heritage Outerwear</h3>
              <p className="text-sm font-medium text-white/70">Built for the elements</p>
            </div>
          </Link>

          <Link 
            to="/shop?category=T-Shirts" 
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem]"
          >
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="T-Shirts"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-serif font-bold mb-2">Essential Basics</h3>
              <p className="text-sm font-medium text-white/70">Comfort in simplicity</p>
            </div>
          </Link>

          <Link 
            to="/shop?category=Jeans" 
            className="md:col-span-1 group relative overflow-hidden rounded-[2rem]"
          >
            <img 
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Jeans"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-xl font-bold">Denim</h3>
            </div>
          </Link>

          <Link 
            to="/shop?category=Hoodies" 
            className="md:col-span-1 group relative overflow-hidden rounded-[2rem]"
          >
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Hoodies"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-xl font-bold">Luxe Fleece</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products - Minimal Grid */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Seasonal Favorites</h2>
            <p className="text-slate-500 font-medium">Items that define our signature aesthetic</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook / Lifestyle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-serif font-bold text-slate-900 leading-snug">
            "We create for the boy who knows that true style isn't about being noticed, it's about being remembered."
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <span className="w-10 h-[2px] bg-slate-900"></span>
            <span className="text-sm font-black uppercase tracking-widest text-slate-900">The Boys Zone Founder</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&w=600&q=80",
             "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80",
             "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
             "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
           ].map((img, i) => (
             <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm">
                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Lookbook" />
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
