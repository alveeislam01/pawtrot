import React from 'react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (sku: string, delta: number) => void;
  onRemove: (sku: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="p-6 bg-pawtrot-yellow flex items-center justify-between border-b-2 border-pawtrot-brown">
          <h2 className="font-display font-black text-2xl text-pawtrot-brown">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/50 rounded-full transition-colors">
            <X className="w-6 h-6 text-pawtrot-brown" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-10 h-10 opacity-30" />
              </div>
              <p className="font-medium">Your bowl is empty!</p>
              <button onClick={onClose} className="text-pawtrot-brown underline font-bold">Start Shopping</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.sku} className="flex gap-4 items-start">
                <div className={`w-20 h-20 ${item.imageColor} rounded-xl flex-shrink-0 border border-gray-100 overflow-hidden`}>
                  <img src={item.foodImage} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-pawtrot-brown line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{item.flavor} - {item.weight}</p>
                  <p className="text-[10px] text-gray-400 mb-2 font-mono">SKU: {item.sku}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1 border border-gray-100">
                      <button onClick={() => onUpdateQuantity(item.sku!, -1)} disabled={item.quantity <= 1} className="p-1 hover:text-red-500 disabled:opacity-30">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.sku!, 1)} className="p-1 hover:text-green-500">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold text-lg text-gray-800">৳{item.price * item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => onRemove(item.sku!)} className="text-gray-300 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-black text-2xl text-pawtrot-brown">৳{total}</span>
            </div>
            <p className="text-xs text-gray-400 mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <button
              onClick={onCheckout}
              className="w-full bg-pawtrot-brown text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              CHECKOUT <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;