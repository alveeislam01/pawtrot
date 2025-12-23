import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, PawPrint, X, Phone, Mail, ChevronDown } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated menu items
  const menuItems = [
    { label: 'ABOUT US' },
    { label: 'FOR CATS' },
    { label: 'PRESCRIPTION DIET' },
    { label: 'BLOGS' },
    { label: 'STORE LOCATOR' },
    { label: 'DONATION', highlight: true },
    { label: 'CONTACT US' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 font-sans shadow-xl">
        {/* Top utility bar - RED */}
        <div className="bg-pawtrot-red px-4 py-2 text-[10px] sm:text-xs font-bold tracking-wider flex justify-between items-center text-white">
          <div className="flex gap-4 md:gap-6">
             <span className="flex items-center gap-1"><Phone className="w-3 h-3 fill-white" /> +880 1712-345678</span>
             <span className="flex items-center gap-1 hidden sm:flex"><Mail className="w-3 h-3" /> contact@pawtrot.com</span>
          </div>
          <span className="uppercase text-right sm:text-center flex-1 sm:flex-none ml-2">FREE SHIPPING ON ORDERS OVER ৳1500 | 100% REAL MEAT GUARANTEE</span>
        </div>

        {/* Main Navbar - NAVY BLUE */}
        <div className="bg-pawtrot-nav text-white py-3 md:py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-1 mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Logo Section */}
            <div 
              className="flex items-center gap-2 flex-1 lg:flex-none justify-center lg:justify-start cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleNavClick('HOME')}
            >
              <div className="bg-white rounded-full p-1.5 flex-shrink-0">
                 <PawPrint className="w-6 h-6 sm:w-8 sm:h-8 text-pawtrot-nav fill-pawtrot-nav" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-display text-2xl sm:text-3xl font-black tracking-wide text-white uppercase transform scale-y-110">PAWTROT</span>
                <span className="font-script text-sm sm:text-lg text-white ml-0.5">Fetch Good Health</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-bold text-xs tracking-widest ml-4 xl:ml-8">
              {menuItems.map((link) => (
                <button 
                  key={link.label} 
                  onClick={() => handleNavClick(link.label)}
                  className={`py-2 border-b-2 whitespace-nowrap transition-colors ${
                    currentPage === link.label 
                      ? 'text-yellow-300 border-yellow-300' 
                      : 'border-transparent hover:text-yellow-300 hover:border-yellow-300'
                  } ${link.highlight ? 'text-green-400' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-5 ml-auto lg:ml-8">
              <button className="hover:text-yellow-300 transition-colors">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button 
                className="relative hover:text-yellow-300 transition-transform hover:scale-105"
                onClick={onCartClick}
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Matching Screenshot */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex font-sans">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          {/* Drawer Content */}
          <div className="relative w-full max-w-[320px] bg-pawtrot-nav h-full shadow-2xl flex flex-col animate-slide-in-left">
            
            {/* Drawer Header - Red Bar */}
            <div className="h-16 bg-pawtrot-red flex justify-between items-center px-4 relative z-10 shrink-0">
               <div className="flex items-center gap-2">
                 <div className="bg-white p-1 rounded-full">
                   <PawPrint className="w-5 h-5 text-pawtrot-red fill-current" />
                 </div>
                 <span className="font-display text-2xl text-white tracking-wide">PAWTROT</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)}>
                 <X className="w-6 h-6 text-white" />
               </button>
            </div>

            {/* Links List - Specific styling */}
            <div className="flex-1 overflow-y-auto py-2">
              {menuItems.map((link, idx) => (
                <button 
                  key={idx}
                  className={`group relative w-full text-left px-8 py-5 text-[13px] font-bold text-white border-b border-blue-800/50 hover:bg-blue-800 transition-colors tracking-wider ${currentPage === link.label ? 'bg-blue-900' : ''}`}
                  onClick={() => handleNavClick(link.label)}
                >
                  <div className="flex justify-between items-center">
                    <span>{link.label}</span>
                    {/* Placeholder for expansion arrows if needed */}
                    {['FOR CATS'].includes(link.label) && <ChevronDown className="w-4 h-4 opacity-50" />}
                  </div>

                  {/* Green Highlight Brush Stroke for Donation */}
                  {link.highlight && (
                    <div className="absolute bottom-3 left-8 w-24 h-1.5 bg-green-400 rounded-full opacity-80" style={{
                      clipPath: 'polygon(0% 0%, 100% 10%, 98% 100%, 2% 90%)'
                    }}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Tagline - Red Bar */}
            <div className="h-14 bg-pawtrot-red flex items-center justify-center text-white text-xs font-bold tracking-wide shrink-0">
              Only Real Chicken. No By-Products
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;