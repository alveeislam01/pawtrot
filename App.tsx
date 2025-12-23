import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import StoreLocator from './components/StoreLocator';
import PrescriptionDiet from './components/PrescriptionDiet';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AiAssistant from './components/AiAssistant';
import { Product, CartItem } from './types';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('HOME');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      // Check if product with same ID AND same Weight (SKU) exists
      const existing = prev.find(item => item.sku === product.sku);
      if (existing) {
        return prev.map(item => 
          item.sku === product.sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (sku: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.sku === sku) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (sku: string) => {
    setCartItems(prev => prev.filter(item => item.sku !== sku));
  };
  
  const clearCart = () => {
    setCartItems([]);
    setCurrentPage('HOME');
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const onNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'HOME': return <Home onAddToCart={addToCart} />;
      case 'ABOUT US': return <About />;
      case 'FOR CATS': return <Home onAddToCart={addToCart} />; 
      case 'PRESCRIPTION DIET': return <PrescriptionDiet onAddToCart={addToCart} />;
      case 'BLOGS': return <Blogs />;
      case 'STORE LOCATOR': return <StoreLocator />;
      case 'DONATION': return <Donation />;
      case 'CONTACT US': return <Contact />;
      case 'CHECKOUT': return <Checkout items={cartItems} total={cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)} onBack={() => onNavigate('HOME')} onPlaceOrder={clearCart} />;
      default: return <Home onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen font-body text-gray-800 antialiased selection:bg-pawtrot-yellow selection:text-pawtrot-brown flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Improved Footer */}
      {currentPage !== 'CHECKOUT' && (
        <footer className="bg-pawtrot-nav text-white pt-20 pb-10 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               {/* Brand Column */}
               <div className="space-y-6">
                 <div className="flex items-center gap-2">
                    <div className="bg-white p-1.5 rounded-full">
                      {/* Simple Paw Icon */}
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-pawtrot-nav fill-current" stroke="currentColor" strokeWidth="0">
                        <path d="M12,14c-2.5,0-4.5-1.5-4.5-3.5S9.5,7,12,7s4.5,1.5,4.5,3.5S14.5,14,12,14z M6,6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2 S7.1,6,6,6z M18,6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,6,18,6z M12,16c-3,0-5.5-1.5-6-3.5C5.5,13.5,4,14.5,4,16 c0,2.5,3,4.5,8,4.5s8-2,8-4.5c0-1.5-1.5-2.5-2-3.5C17.5,14.5,15,16,12,16z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl uppercase tracking-wider leading-none">PAWTROT</h3>
                      <p className="font-script text-white/80 text-sm">Fetch Good Health</p>
                    </div>
                 </div>
                 <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                   Premium nutrition tailored for the unique needs of your feline friends. Because every purr matters.
                 </p>
                 <div className="flex gap-4">
                   <button onClick={() => {}} className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-white hover:text-pawtrot-nav transition-all border border-blue-700/50"><Facebook className="w-5 h-5" /></button>
                   <button onClick={() => {}} className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-white hover:text-pawtrot-nav transition-all border border-blue-700/50"><Instagram className="w-5 h-5" /></button>
                   <button onClick={() => {}} className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-white hover:text-pawtrot-nav transition-all border border-blue-700/50"><Twitter className="w-5 h-5" /></button>
                 </div>
               </div>
               
               {/* Shop Column */}
               <div>
                 <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-pawtrot-red inline-block pb-1">Shop</h4>
                 <ul className="space-y-3 text-sm text-gray-300">
                   <li><button onClick={() => onNavigate('FOR CATS')} className="hover:text-white hover:pl-2 transition-all block">Dry Food</button></li>
                   <li><button onClick={() => onNavigate('FOR CATS')} className="hover:text-white hover:pl-2 transition-all block">Wet Food</button></li>
                   <li><button onClick={() => onNavigate('FOR CATS')} className="hover:text-white hover:pl-2 transition-all block">Kitten Formula</button></li>
                   <li><button onClick={() => onNavigate('PRESCRIPTION DIET')} className="hover:text-white hover:pl-2 transition-all block">Senior Diet</button></li>
                   <li><button onClick={() => onNavigate('FOR CATS')} className="hover:text-white hover:pl-2 transition-all block">Treats & Toys</button></li>
                 </ul>
               </div>

               {/* Support Column */}
               <div>
                 <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-pawtrot-red inline-block pb-1">Support</h4>
                 <ul className="space-y-3 text-sm text-gray-300">
                   <li><button onClick={() => {}} className="hover:text-white hover:pl-2 transition-all block">Track Order</button></li>
                   <li><button onClick={() => {}} className="hover:text-white hover:pl-2 transition-all block">Shipping Policy</button></li>
                   <li><button onClick={() => {}} className="hover:text-white hover:pl-2 transition-all block">Returns & Refunds</button></li>
                   <li><button onClick={() => {}} className="hover:text-white hover:pl-2 transition-all block">FAQs</button></li>
                   <li><button onClick={() => {}} className="hover:text-white hover:pl-2 transition-all block">Privacy Policy</button></li>
                 </ul>
               </div>

               {/* Contact Column */}
               <div>
                 <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-pawtrot-red inline-block pb-1">Contact</h4>
                 <ul className="space-y-4 text-sm text-gray-300">
                   <li className="flex items-start gap-3">
                     <MapPin className="w-5 h-5 text-pawtrot-red shrink-0" />
                     <span>123 Purrfect Lane,<br/>Dhaka, Bangladesh 1212</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Phone className="w-5 h-5 text-pawtrot-red shrink-0" />
                     <span>+880 1712-345678</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Mail className="w-5 h-5 text-pawtrot-red shrink-0" />
                     <span>contact@pawtrot.com</span>
                   </li>
                 </ul>
               </div>
            </div>

            <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
               <p>© 2024 Pawtrot Inc. All rights reserved.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                 <button className="hover:text-white transition-colors">Terms of Service</button>
                 <button className="hover:text-white transition-colors">Privacy Policy</button>
                 <button className="hover:text-white transition-colors">Cookie Policy</button>
               </div>
            </div>
          </div>
        </footer>
      )}

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        onCheckout={() => {
          setIsCartOpen(false);
          onNavigate('CHECKOUT');
        }}
      />
      
      <AiAssistant />
    </div>
  );
}

export default App;