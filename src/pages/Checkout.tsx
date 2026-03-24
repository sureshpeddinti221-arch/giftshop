import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, Truck, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: 'Shipping', icon: <MapPin size={18} /> },
    { id: 2, name: 'Delivery', icon: <Truck size={18} /> },
    { id: 3, name: 'Payment', icon: <CreditCard size={18} /> },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/success');
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/cart" className="flex items-center space-x-2 text-sm font-bold text-text/60 hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl font-serif font-bold">Checkout</h1>
          <div className="w-24" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-16">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center space-y-2 relative">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                  step >= s.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border border-border text-text/40"
                )}>
                  {step > s.id ? <CheckCircle2 size={20} /> : s.icon}
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  step >= s.id ? "text-primary" : "text-text/40"
                )}>
                  {s.name}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-20 h-px bg-border mx-4 -mt-6" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-3xl border border-border shadow-sm space-y-8"
            >
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text/40">First Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text/40">Last Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text/40">Address</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text/40">City</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text/40">Zip Code</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold">Delivery Method</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Standard Delivery', price: 'FREE', time: '5-7 Business Days' },
                      { name: 'Express Delivery', price: '$15.00', time: '2-3 Business Days' },
                      { name: 'Same Day Delivery', price: '$25.00', time: 'Today by 8 PM' },
                    ].map((method, i) => (
                      <label key={i} className="flex items-center justify-between p-6 rounded-2xl border border-border cursor-pointer hover:border-primary transition-all group">
                        <div className="flex items-center space-x-4">
                          <input type="radio" name="delivery" className="w-5 h-5 accent-primary" defaultChecked={i === 0} />
                          <div>
                            <p className="font-bold">{method.name}</p>
                            <p className="text-xs text-text/40">{method.time}</p>
                          </div>
                        </div>
                        <span className="font-bold text-primary">{method.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold">Payment Details</h3>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl border-2 border-primary bg-accent/10 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="text-primary" />
                        <span className="font-bold">Credit / Debit Card</span>
                      </div>
                      <CheckCircle2 className="text-primary" size={20} />
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text/40">Card Number</label>
                        <input type="text" placeholder="**** **** **** ****" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text/40">Expiry Date</label>
                          <input type="text" placeholder="MM/YY" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text/40">CVV</label>
                          <input type="text" placeholder="***" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleNext}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 smooth-scale"
              >
                <span>{step === 3 ? 'Place Order' : 'Continue to ' + steps[step].name}</span>
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl border-b border-border pb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg border border-border overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=100" alt="Product" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">Customized Photo Frame</p>
                    <p className="text-[10px] text-text/40 font-bold uppercase">Qty: 1</p>
                  </div>
                  <span className="text-sm font-bold">$29.99</span>
                </div>
              </div>
              <div className="pt-6 border-t border-border space-y-3 text-sm font-medium">
                <div className="flex justify-between text-text/60">
                  <span>Subtotal</span>
                  <span>$29.99</span>
                </div>
                <div className="flex justify-between text-text/60">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3">
                  <span>Total</span>
                  <span className="text-primary">$29.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
