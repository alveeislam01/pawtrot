import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import ProductList from './ProductList';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="animate-fade-in-up">
      <Hero />
      <Benefits />
      <ProductList onAddToCart={onAddToCart} />
      
      {/* Newsletter Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-pawtrot-nav font-bold tracking-widest text-xs uppercase mb-2 block">Stay Connected</span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-pawtrot-brown mb-6">Join the Pawtrot Pack!</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Subscribe for exclusive treats, health tips, and adorable cat content delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="px-6 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:border-pawtrot-nav transition-all w-full"
            />
            <button className="bg-pawtrot-nav text-white font-bold px-8 py-3 rounded-full hover:bg-blue-900 transition-colors shadow-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;