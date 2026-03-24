import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CategoryScroll() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-primary">
              <span className="w-12 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Curated Collections</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text">Shop by <span className="text-primary italic">Category</span></h2>
          </div>
          <Link to="/shop" className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest hover:text-primary transition-all">
            <span>View All Categories</span>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.slice(0, 6).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[40px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <Link to={`/shop?category=${category.name.toLowerCase()}`} className="block w-full h-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Collection</p>
                    <h3 className="text-2xl md:text-3xl text-white font-serif font-bold leading-tight">
                      {category.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-white/80 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Explore Collection</span>
                      <span className="w-8 h-px bg-white/40" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

