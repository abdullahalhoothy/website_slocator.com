import React from 'react';
import { Car, Building2, ShoppingCart, Pill, Monitor, Stethoscope, Factory } from 'lucide-react';

export const Customers: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl lg:text-4xl font-medium text-slate-900 mb-12">Our customers</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="/assets/images/wuerth-group.webp" alt="Wurth" className="h-10" />
          <img src="/assets/images/haleon.webp" alt="Haleon" className="h-8" />
          <img src="/assets/images/samsung.webp" alt="Samsung" className="h-6" />
          <img src="/assets/images/trupanion.webp" alt="Trupanion" className="h-8" />
          <img src="/assets/images/wd40.webp" alt="WD-40" className="h-12" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl mx-auto">
          {[
            { name: 'Automotive industry', icon: Car },
            { name: 'Building materials', icon: Building2 },
            { name: 'Consumer goods', icon: ShoppingCart },
            { name: 'Cosmetics', icon: Pill },
            { name: 'Electronic products', icon: Monitor },
            { name: 'Industrial goods', icon: Factory },
            { name: 'Medical devices', icon: Stethoscope },
          ].map((cat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <cat.icon className="w-4 h-4 text-purple-600" />
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};