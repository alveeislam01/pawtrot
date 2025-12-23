import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Truck, MapPin, Phone, User, Mail, Banknote } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onBack: () => void;
  onPlaceOrder: (details: any) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, total, onBack, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validation would go here
    setOrderPlaced(true);
    setTimeout(() => {
      onPlaceOrder(formData);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center animate-fade-in-up">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg mx-4">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="font-display text-4xl text-pawtrot-brown mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">Thank you, {formData.firstName}! We've received your order. You will pay <strong>৳{total + 60}</strong> upon delivery.</p>
          <button onClick={onBack} className="bg-pawtrot-nav text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-900 transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-fade-in-up">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-pawtrot-brown" />
          </button>
          <h1 className="font-display text-2xl text-pawtrot-brown">Checkout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shipping Details */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-display text-2xl text-pawtrot-brown mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-pawtrot-red" /> Shipping Address
              </h2>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                    <div className="relative">
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                    <div className="relative">
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Address</label>
                  <input required name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" placeholder="Street address, apartment, etc." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">City</label>
                    <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Zip Code</label>
                    <input required name="zip" value={formData.zip} onChange={handleInputChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pawtrot-nav transition-colors" />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method - COD ONLY */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-display text-2xl text-pawtrot-brown mb-6 flex items-center gap-2">
                <Banknote className="w-6 h-6 text-green-600" /> Payment Method
              </h2>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-center gap-4 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-200 text-green-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg">RECOMMENDED</div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-green-100 shadow-sm shrink-0">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pawtrot-brown">Cash on Delivery</h3>
                  <p className="text-sm text-gray-600">Pay directly to the courier when you receive your order.</p>
                </div>
                <div className="ml-auto">
                  <CheckCircle className="w-6 h-6 text-green-600 fill-green-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
              <h2 className="font-display text-2xl text-pawtrot-brown mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.sku} className="flex gap-4">
                    <div className={`w-16 h-16 ${item.imageColor} rounded-lg flex-shrink-0 border border-gray-100 overflow-hidden`}>
                      <img src={item.foodImage} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-pawtrot-brown line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.weight} x {item.quantity}</p>
                      <p className="text-[10px] text-gray-400 font-mono">SKU: {item.sku}</p>
                    </div>
                    <div className="font-bold text-sm">৳{item.price * item.quantity}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>৳{total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>৳60</span>
                </div>
                <div className="flex justify-between font-black text-xl text-pawtrot-brown pt-2 border-t border-gray-100 mt-2">
                  <span>Total</span>
                  <span>৳{total + 60}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full bg-pawtrot-brown text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                PLACE ORDER (COD)
              </button>

              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <CheckCircle className="w-3 h-3" /> Secure Checkout
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;