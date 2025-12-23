import React from 'react';
import { ShieldCheck, Sparkles, Activity, Dumbbell } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      title: 'Healthy Digestion', 
      desc: 'Enriched with prebiotics for optimal gut health and nutrient absorption.',
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      color: 'bg-orange-50',
      borderColor: 'border-orange-100'
    },
    { 
      title: 'Shiny Coat', 
      desc: 'Packed with Omega-3 & 6 fatty acids for a soft, lustrous fur.',
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    { 
      title: 'Strong Muscles', 
      desc: 'High-quality real meat protein to support lean muscle maintenance.',
      icon: <Dumbbell className="w-8 h-8 text-rose-600" />,
      color: 'bg-rose-50',
      borderColor: 'border-rose-100'
    },
    { 
      title: 'Immune Support', 
      desc: 'Essential antioxidant blend including Vitamins E and C.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      color: 'bg-emerald-50',
      borderColor: 'border-emerald-100'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4A2C2A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
           <span className="text-pawtrot-red font-bold tracking-[0.2em] text-xs uppercase mb-3 block">The Pawtrot Standard</span>
           <h2 className="font-serif text-5xl md:text-6xl text-pawtrot-brown font-medium tracking-tight mb-6">
             Why Choose <span className="italic text-pawtrot-nav">Pawtrot?</span>
           </h2>
           <div className="w-16 h-1 bg-pawtrot-nav mx-auto rounded-full opacity-20"></div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-4 rounded-3xl transition-all duration-300 hover:bg-gray-50/80">
              
              {/* Icon Container */}
              <div className={`w-24 h-24 rounded-full ${item.color} ${item.borderColor} border flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                 {item.icon}
              </div>

              {/* Text */}
              <h3 className="font-serif text-2xl text-pawtrot-brown mb-3 font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-7 font-sans max-w-[240px] opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;