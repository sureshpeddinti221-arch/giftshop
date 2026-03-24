import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#F9E6E6]/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">× Join Our Newsletter ×</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Get 10% Off Your First Order</h2>
            <p className="text-text/60 max-w-lg mx-auto leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-primary/20 transition-all smooth-scale">
              <span>Subscribe</span>
              <Send size={18} />
            </button>
          </form>
          
          <p className="text-[10px] text-text/40 uppercase tracking-widest font-bold">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
