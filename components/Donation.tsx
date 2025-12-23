import React from 'react';
import { Gift, HeartHandshake } from 'lucide-react';

const Donation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
       <div className="bg-emerald-600 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paw-prints.png')]"></div>
        <div className="relative z-10 container mx-auto px-4">
            <span className="bg-emerald-800 text-emerald-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Pawtrot Cares</span>
            <h1 className="font-display text-5xl md:text-7xl mb-6">Feed a Stray</h1>
            <p className="font-serif text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                "No bowl left empty." Help us provide nutritious meals to shelter cats and strays across the country.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
           <div>
              <h2 className="font-display text-4xl text-pawtrot-brown mb-6">Your Contribution Matters</h2>
              <p className="text-gray-600 mb-6 text-lg">
                For every ৳500 you donate, we provide 5 nutritious meals to local animal shelters. Last year, the Pawtrot community helped feed over 10,000 cats!
              </p>
              
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-8">
                <div className="flex items-start gap-4">
                   <HeartHandshake className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-lg text-pawtrot-brown">100% Transparency</h4>
                     <p className="text-sm text-gray-600">We publish monthly reports on how your donations are used. Every taka goes directly to food and medical supplies.</p>
                   </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4">
                   <Gift className="w-10 h-10 text-blue-500 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-lg text-pawtrot-brown">Tax Deductible</h4>
                     <p className="text-sm text-gray-600">Pawtrot Cares is a registered non-profit. You will receive a receipt for tax purposes.</p>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="font-display text-2xl text-pawtrot-brown mb-6 text-center">Make a Donation</h3>
              
              <div className="space-y-4">
                 <div className="grid grid-cols-3 gap-4 mb-4">
                    {['৳500', '৳1000', '৳2500'].map((amt) => (
                        <button key={amt} className="border-2 border-gray-200 py-3 rounded-xl font-bold text-gray-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                            {amt}
                        </button>
                    ))}
                 </div>
                 
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Custom Amount (৳)</label>
                    <input type="number" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors" placeholder="Enter amount" />
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                 </div>

                 <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-colors mt-4">
                    DONATE NOW
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;