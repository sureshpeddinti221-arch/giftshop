import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';

export default function Categories() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-5xl font-serif font-bold">Gift Categories</h1>
          <p className="text-text/60 max-w-xl mx-auto">
            Browse our curated collections of premium gifts, each designed to make your special moments unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-10 space-y-4">
                <h3 className="text-3xl font-serif font-bold text-white">{category.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                  Discover our exclusive range of {category.name.toLowerCase()} crafted with precision and love.
                </p>
                <Link
                  to={`/shop?category=${category.name.toLowerCase()}`}
                  className="inline-flex items-center space-x-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-primary transition-colors"
                >
                  <span>Browse Collection</span>
                  <div className="w-8 h-px bg-white/40 group-hover:bg-primary group-hover:w-12 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
