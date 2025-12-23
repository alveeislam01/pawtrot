import React from 'react';
import { MapPin, Search } from 'lucide-react';

const StoreLocator: React.FC = () => {
  const stores = [
    { name: "Pawtrot Gulshan 2", address: "Road 71, Gulshan 2, Dhaka", status: "Open Now" },
    { name: "Pawtrot Banani", address: "Road 11, Banani, Dhaka", status: "Open Now" },
    { name: "Pawtrot Bashundhara", address: "Block D, Bashundhara R/A, Dhaka", status: "Closing Soon" },
    { name: "Pawtrot Uttara", address: "Sector 4, Uttara, Dhaka", status: "Open Now" },
    { name: "Pawtrot Chittagong", address: "GEC Circle, Chittagong", status: "Open Now" },
    { name: "Pawtrot Sylhet", address: "Zindabazar, Sylhet", status: "Open Now" },
  ];

  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
       <div className="bg-pawtrot-brown text-white py-12">
          <div className="container mx-auto px-4 text-center">
             <h1 className="font-display text-4xl mb-4">Find a Store</h1>
             <div className="max-w-xl mx-auto relative">
                <input 
                  type="text" 
                  placeholder="Enter zip code or city..." 
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
             </div>
          </div>
       </div>

       <div className="container mx-auto px-4 py-8 h-[600px] flex gap-6">
          <div className="w-1/3 hidden md:block overflow-y-auto pr-2 space-y-4 custom-scrollbar">
             {stores.map((store, idx) => (
                <div key={idx} className="border border-gray-200 p-6 rounded-2xl hover:border-pawtrot-brown hover:bg-yellow-50/50 cursor-pointer transition-colors group">
                   <h3 className="font-bold text-lg text-pawtrot-brown mb-1 group-hover:text-red-600 transition-colors">{store.name}</h3>
                   <p className="text-gray-500 text-sm mb-3">{store.address}</p>
                   <div className="flex items-center gap-2 text-sm text-green-600 font-bold">
                     <span className={`w-2 h-2 rounded-full ${store.status === 'Open Now' ? 'bg-green-500' : 'bg-orange-500'}`}></span> {store.status}
                   </div>
                </div>
             ))}
          </div>
          <div className="flex-1 bg-gray-200 rounded-3xl overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Map Placeholder" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
                   <MapPin className="w-6 h-6 text-red-500" />
                   <span className="font-bold text-pawtrot-brown">Select a store to view on map</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default StoreLocator;