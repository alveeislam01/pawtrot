import React, { useState, useEffect } from 'react';
import { Plus, Star, Check } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<{ product: Product; onAddToCart: (p: Product) => void }> = ({ product, onAddToCart }) => {
  // Initialize with the 1.5kg variant if available, or the first one
  const defaultVariant = product.variants?.find(v => v.weight === '1.5 kg') || product.variants?.[0] || null;
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentWeight = selectedVariant ? selectedVariant.weight : product.weight;

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      price: currentPrice,
      weight: currentWeight,
      sku: selectedVariant?.sku || product.sku
    };
    onAddToCart(productToAdd);
  };

  return (
    <div className="group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
      {/* Poster Card Container */}
      <div className={`relative ${product.imageColor} bg-grid-poster overflow-hidden rounded-3xl border-2 border-pawtrot-brown/10 shadow-lg flex-1 flex flex-col`}>

        {/* Poster Header Content */}
        <div className="p-4 relative z-20">
          {/* Top Row: Logo & Grain Free Badge */}
          <div className="flex items-start justify-between mb-4">
            {/* Logo Circle */}
            <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full border border-pawtrot-brown/20 shadow-sm w-12 h-12 flex flex-col items-center justify-center leading-none">
              {/* Simple Paw Icon constructed with divs/circles */}
              <div className="relative w-6 h-5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="absolute top-1 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="absolute top-1 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <span className="font-display text-[8px] text-pawtrot-brown mt-0.5">PAWTROT</span>
            </div>

            {/* Grain Free Badge */}
            {product.isGrainFree && (
              <div className="bg-pawtrot-brown text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest transform -rotate-3 shadow-md border border-white/20">
                Grain Free
              </div>
            )}
          </div>

          {/* Slogan */}
          <h3 className="font-sans font-bold text-pawtrot-brown text-lg leading-tight mb-2 pr-8 relative z-20">
            {product.slogan}
          </h3>

          {/* #1 Ingredient Claim Badge */}
          <div className="flex items-center gap-2 mb-4 relative z-20">
            <span className="font-serif italic text-sm text-pawtrot-brown">Real {product.flavor} as</span>

            {/* Starburst Badge */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className={`absolute inset-0 ${product.starburstColor || 'bg-yellow-400'}`}
                style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
              </div>
              <span className="relative font-display text-2xl text-pawtrot-brown z-10 -mt-0.5">#1</span>
            </div>

            <span className="font-serif italic text-sm text-pawtrot-brown">Ingredient</span>
          </div>
        </div>

        {/* Hand Drawn Heart Doodle - Background Layer */}
        <div className="absolute top-[35%] left-4 w-16 h-16 opacity-70 text-pawtrot-brown/80 pointer-events-none z-10 transform -rotate-12">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 85 C10 60, 0 30, 25 10 C40 -5, 50 15, 50 15 C50 15, 60 -5, 75 10 C100 30, 90 60, 50 85 Z" />
          </svg>
        </div>

        {/* Imagery Composition */}
        <div className="relative flex-1 min-h-[300px]">

          {/* Jagged Flavor Sticker */}
          <div className="absolute top-4 left-0 z-30 transform -rotate-6 filter drop-shadow-xl">
            <div className="relative bg-pawtrot-brown p-3 min-w-[140px]"
              style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
              <div className="text-center leading-none px-2">
                <span className="font-display text-3xl uppercase block text-gray-200 tracking-wide" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                  {product.flavor}
                </span>
                <span className="font-serif text-[10px] tracking-[0.3em] uppercase block text-white/80 mt-1">
                  FLAVOUR
                </span>
              </div>
            </div>
          </div>

          {/* Main Product Image - Full Size */}
          <div className="absolute inset-0 flex items-center justify-center z-10 p-3">
            <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
              <img
                src={product.foodImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl border-[5px] border-white shadow-2xl"
                style={{ filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))' }}
              />
              {/* Decorative Checkmark */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                <Check className="w-5 h-5 text-green-600 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Weight Label on Poster */}
          <div className="absolute bottom-3 left-6 z-10 font-display text-pawtrot-brown/60 text-xl tracking-wider">
            {currentWeight}
          </div>

          {/* Hover Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-40 bg-pawtrot-red text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-90 border-4 border-white"
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Bottom Details Panel */}
      <div className="mt-4 px-2">
        <div className="flex justify-between items-baseline mb-3">
          <h4 className="font-bold text-lg text-pawtrot-brown leading-tight">{product.name}</h4>
          <span className="font-display text-2xl text-pawtrot-red">৳{currentPrice}</span>
        </div>

        {/* Variant Selection */}
        {product.variants && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.variants.map((v) => (
              <button
                key={v.weight}
                onClick={() => setSelectedVariant(v)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${selectedVariant?.weight === v.weight
                  ? 'bg-pawtrot-brown text-white border-pawtrot-brown shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-pawtrot-brown hover:text-pawtrot-brown'
                  }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
            ))}
          </div>
          <span>({product.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pawtrot-red font-bold tracking-widest text-xs uppercase mb-2 block">Our Menu</span>
          <h2 className="font-display text-5xl font-black text-pawtrot-brown mt-2">
            Flavors They'll <span className="font-script text-pawtrot-accent text-6xl ml-2">Love</span>
          </h2>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {['Chicken', 'Beef', 'Tuna', 'Salmon', 'Shrimp'].map(f => (
              <span key={f} className="px-5 py-2 rounded-full border-2 border-gray-100 text-sm font-bold text-gray-500 hover:bg-pawtrot-brown hover:text-white hover:border-pawtrot-brown cursor-pointer transition-all shadow-sm">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;