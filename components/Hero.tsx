import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-grid-poster py-8 md:py-16 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Typography & Badges */}
          <div className="md:col-span-5 relative z-20 text-center md:text-left pt-8 md:pt-0">
            
            {/* Logo Area */}
            <div className="inline-flex items-center gap-3 mb-6 group cursor-pointer">
               <div className="flex flex-col items-start">
                 <h2 className="font-display text-5xl text-pawtrot-brown uppercase tracking-normal leading-none">PAWTROT</h2>
                 <span className="font-script text-3xl text-pawtrot-brown -mt-2 ml-1">Fetch Good Health</span>
               </div>
            </div>

            {/* Headline Block */}
            <div className="relative mb-8">
               <div className="absolute -top-8 -left-8 text-yellow-400 animate-pulse hidden md:block">
                 <Star className="w-12 h-12 fill-current" />
               </div>
               
               <h1 className="font-sans font-black text-pawtrot-brown text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tight mb-4">
                 Tender<br/>
                 <span className="font-script text-pawtrot-red text-6xl md:text-7xl capitalize block my-2 transform -rotate-2">Chicken</span>
                 Delight
               </h1>

               <div className="h-1 w-24 bg-pawtrot-brown mb-6 mx-auto md:mx-0"></div>

               <p className="font-sans font-bold text-pawtrot-brown text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 leading-tight">
                 The purr-fect blend of nutrition and taste. <br/>
                 <span className="bg-yellow-200 px-1">Made for Picky Kitties!</span>
               </p>

               {/* #1 Ingredient Badge Line */}
               <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                  <span className="font-serif italic text-2xl md:text-3xl text-pawtrot-brown">Real Chicken as</span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Yellow Starburst */}
                    <div className="absolute inset-0 bg-[#FCD34D] animate-spin-slow" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
                    <span className="relative font-display text-4xl text-pawtrot-brown z-10">#1</span>
                  </div>
                  <span className="font-serif italic text-2xl md:text-3xl text-pawtrot-brown">Ingredient</span>
               </div>

               {/* Sticker: Chicken Flavour */}
               <div className="absolute top-[40%] -right-4 md:-right-20 lg:-right-32 z-30 transform rotate-12 hidden md:block">
                  <div className="relative w-48 h-32 bg-[#EC4899] flex flex-col items-center justify-center p-4 shadow-lg" 
                       style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                       {/* Dotted border inside */}
                       <div className="absolute inset-1 border-2 border-dashed border-white/50" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}></div>
                       <span className="font-display text-3xl text-pawtrot-brown uppercase drop-shadow-sm transform -rotate-6">CHICKEN</span>
                       <span className="font-serif text-white text-lg tracking-widest uppercase transform -rotate-6">FLAVOUR</span>
                  </div>
               </div>

               {/* Mobile visible sticker */}
               <div className="md:hidden relative w-40 h-24 mx-auto bg-[#EC4899] flex flex-col items-center justify-center p-2 shadow-lg mb-6 transform -rotate-3" 
                       style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                   <div className="absolute inset-1 border-2 border-dashed border-white/50"></div>
                   <span className="font-display text-2xl text-pawtrot-brown uppercase -rotate-2">CHICKEN</span>
                   <span className="font-serif text-white text-sm tracking-widest uppercase -rotate-2">FLAVOUR</span>
               </div>
            </div>

            <button className="bg-pawtrot-brown text-white font-display text-2xl tracking-widest uppercase px-12 py-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-white/20">
              SHOP NOW
            </button>
          </div>

          {/* Right Column: Image Composition */}
          <div className="md:col-span-7 relative h-[400px] md:h-[600px] w-full mt-8 md:mt-0">
            
            {/* The Blue Frame */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] border-4 border-[#60A5FA] z-0 rounded-sm transform translate-x-4 translate-y-4"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-0 w-[90%] h-[90%] bg-emerald-700 overflow-hidden shadow-2xl z-10 rounded-sm">
               {/* Background Cat Image - UPDATED to ensure it is a CAT */}
               <img 
                 src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" 
                 alt="Tuxedo Cat" 
                 className="w-full h-full object-cover object-center"
               />
               
               {/* Overlay Badge on Image */}
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-lg max-w-[200px]">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🍗</div>
                  <div>
                    <div className="font-bold text-xs text-pawtrot-brown uppercase">100% Real</div>
                    <div className="text-[10px] text-gray-500">Chicken Breast</div>
                  </div>
               </div>
            </div>

            {/* Floating Food Bowl - Breaking the frame - UPDATED to ensure it is FOOD */}
            <div className="absolute -bottom-8 left-4 md:-left-12 w-48 md:w-64 z-20">
               <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=500&auto=format&fit=crop" 
                   alt="Chicken Bowl" 
                   className="w-full h-full object-contain drop-shadow-2xl rounded-full border-4 border-white"
                 />
                 {/* Decorative herb */}
                 <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-md">
                    <span className="text-2xl">🌿</span>
                 </div>
               </div>
            </div>
            
            {/* Another decorative element - Blue squiggle */}
            <svg className="absolute -bottom-10 -right-10 w-48 h-48 text-[#60A5FA] z-0 opacity-50" viewBox="0 0 100 100">
               <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;