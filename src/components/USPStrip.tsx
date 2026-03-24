import React from 'react';
import { Truck, ShieldCheck, Heart, Clock } from 'lucide-react';

export default function USPStrip() {
  const usps = [
    { icon: <ShieldCheck size={20} />, text: "Premium Packaging" },
    { icon: <Heart size={20} />, text: "Easy Customization" },
    { icon: <Clock size={20} />, text: "24/7 Support" }
  ];

  return (
    <div className="bg-text text-white py-4">
      <div className="container flex flex-wrap justify-center md:justify-between items-center gap-8">
        {usps.map((usp, index) => (
          <div key={index} className="flex items-center space-x-3 text-xs font-bold tracking-widest uppercase">
            <span className="text-primary">{usp.icon}</span>
            <span>{usp.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
