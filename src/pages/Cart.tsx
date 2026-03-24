import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { BEST_SELLERS } from '../constants';

export default function Cart() {
  const cartItems = BEST_SELLERS.slice(0, 2);

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container">
        <h1 className="text-4xl font-serif font-bold mb-12">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl border border-border flex items-center space-x-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-border shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-lg">{item.title}</h3>
                    <button className="text-text/40 hover:text-primary transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-text/40 font-bold uppercase tracking-widest">{item.category}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 bg-background px-3 py-1.5 rounded-full border border-border">
                      <button className="text-text/60 hover:text-primary transition-colors"><Minus size={14} /></button>
                      <span className="text-sm font-bold">1</span>
                      <button className="text-text/60 hover:text-primary transition-colors"><Plus size={14} /></button>
                    </div>
                    <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-20 space-y-6 bg-white rounded-3xl border border-border border-dashed">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary mx-auto">
                  <ShoppingBag size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold">Your cart is empty</h3>
                  <p className="text-text/60">Looks like you haven't added any gifts yet.</p>
                </div>
                <Link to="/shop" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold smooth-scale">
                  Start Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-2xl border-b border-border pb-6">Order Summary</h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-text/60">Subtotal</span>
                  <span>$118.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/60">Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/60">Tax</span>
                  <span>$9.52</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">$128.51</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 smooth-scale"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Promo Code */}
            <div className="bg-accent/30 p-8 rounded-3xl space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest">Promo Code</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="px-6 py-3 bg-text text-white rounded-xl font-bold text-xs uppercase tracking-widest smooth-scale">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
