import React from 'react';
import { Activity, Check } from 'lucide-react';
import { Product } from '../types';

interface PrescriptionDietProps {
    onAddToCart: (product: Product) => void;
}

const PrescriptionDiet: React.FC<PrescriptionDietProps> = ({ onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in-up">
       <div className="bg-white py-16 text-center border-b border-gray-100">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
             <Activity className="w-4 h-4" /> Veterinarian Recommended
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-pawtrot-brown mb-4">Prescription Diet</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Therapeutic nutrition tailored to manage specific health conditions. Please consult your veterinarian before purchasing.</p>
       </div>

       <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
                 { name: "Urinary Care c/d", desc: "Dissolves struvite stones", color: "bg-blue-500" },
                 { name: "Digestive Care i/d", desc: "Highly digestible protein", color: "bg-orange-500" },
                 { name: "Kidney Care k/d", desc: "Controlled phosphorus", color: "bg-green-500" }
             ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
                    <div className={`h-48 ${item.color} relative p-6 flex items-center justify-center`}>
                        <div className="text-white text-center">
                            <h3 className="font-display text-3xl">{item.name}</h3>
                            <p className="opacity-90">{item.desc}</p>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                                Clinical nutrition
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                                S+OXSHIELD Support
                            </li>
                        </ul>
                        <button className="w-full border-2 border-pawtrot-brown text-pawtrot-brown font-bold py-3 rounded-xl hover:bg-pawtrot-brown hover:text-white transition-colors">
                            VIEW DETAILS
                        </button>
                    </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default PrescriptionDiet;