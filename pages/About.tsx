
import React from 'react';

const About = () => {
  return (
    <div className="pb-24">
      <section className="relative h-[60vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1500&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Our Story</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Founded with a passion for modern aesthetics and superior quality, we believe fashion is an extension of personality.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-slate-900">The Boys Zone Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Since our inception in 2021, The Boys Zone has been dedicated to redefining men's fashion. We started as a small boutique in the heart of London, driven by the desire to create garments that we ourselves would want to wear.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every piece in our collection is meticulously crafted with attention to detail, fabric selection, and fit. We don't just sell clothes; we provide the building blocks for your confidence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div>
                  <h4 className="text-3xl font-bold text-indigo-600">50k+</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Happy Customers</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-indigo-600">200+</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Unique Styles</p>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-12 rounded-[32px] hidden lg:block">
                <p className="text-xl font-serif italic">"Style is a way to say who you are without having to speak."</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
