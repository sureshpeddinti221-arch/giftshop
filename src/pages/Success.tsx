import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Success() {
  return (
    <div className="bg-background min-h-screen py-24 flex items-center justify-center">
      <div className="container max-w-2xl text-center space-y-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-100/50"
        >
          <CheckCircle2 size={64} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-bold">Order Successful!</h1>
          <p className="text-text/60 text-lg">
            Thank you for your purchase. Your gift is being crafted with love.
          </p>
          <div className="inline-block px-6 py-2 bg-accent text-primary rounded-full text-sm font-bold uppercase tracking-widest">
            Order ID: #GC-92834
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="p-6 bg-white rounded-3xl border border-border flex items-center space-x-4 hover:border-primary transition-all group">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Package size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold">Track Order</p>
              <p className="text-xs text-text/40">Real-time updates</p>
            </div>
          </button>
          <button className="p-6 bg-white rounded-3xl border border-border flex items-center space-x-4 hover:border-primary transition-all group">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Download size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold">Invoice</p>
              <p className="text-xs text-text/40">Download PDF</p>
            </div>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/shop" className="px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center space-x-3 shadow-xl shadow-primary/20 smooth-scale">
            <span>Continue Shopping</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/dashboard" className="text-sm font-bold text-text/60 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
