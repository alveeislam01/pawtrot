import React from 'react';
import { Heart, ShieldCheck, Users, Info } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in-up pb-20">
      <div className="bg-pawtrot-nav text-white py-20 text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pawtrot-red/20 rounded-full blur-xl"></div>
        
        <h1 className="font-display text-5xl md:text-6xl mb-4 relative z-10">Our Story</h1>
        <p className="font-serif text-xl opacity-90 italic relative z-10">Cherish Good Health.</p>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        {/* Brand Intro Block */}
        <div className="bg-pawtrot-yellow border-2 border-pawtrot-brown/10 rounded-3xl p-8 md:p-12 mb-16 shadow-lg relative">
           <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-pawtrot-brown/20 shadow-sm">
              <span className="font-display text-pawtrot-brown uppercase tracking-widest text-lg">Brand Intro</span>
           </div>
           
           <div className="prose prose-lg mx-auto text-center text-pawtrot-brown">
              <p className="font-medium text-xl leading-relaxed mb-6">
                Welcome to <span className="font-display font-bold">PAWTROT</span> — the home of happy meows and easy feeding! Made with real, tasty ingredients and complete nutrition, our food keeps your kitty healthy and excited for every meal.
              </p>
              <p className="text-base opacity-80">
                Plus, our convenient portion sizes, mess-free bags, and quick-pour design mean feeding your cat fits perfectly into your busy day. More purrs, less effort.
              </p>
           </div>
           
           <div className="flex justify-center gap-4 mt-8">
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 font-bold text-xs uppercase tracking-wider text-green-600">
                Vet Approved
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 font-bold text-xs uppercase tracking-wider text-pawtrot-brown">
                Grain Free
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 font-bold text-xs uppercase tracking-wider text-blue-600">
                100% Real Meat
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-orange-50 rounded-3xl group hover:bg-orange-100 transition-colors">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-orange-500 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-pawtrot-brown mb-2">Made with Love</h3>
            <p className="text-sm text-gray-600">We treat every batch as if it were for our own pets.</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-3xl group hover:bg-blue-100 transition-colors">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-500 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-pawtrot-brown mb-2">Safety First</h3>
            <p className="text-sm text-gray-600">Rigorously tested for quality and safety standards.</p>
          </div>
          <div className="p-8 bg-pink-50 rounded-3xl group hover:bg-pink-100 transition-colors">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-pink-500 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-pawtrot-brown mb-2">Community</h3>
            <p className="text-sm text-gray-600">We support local shelters with every purchase.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;