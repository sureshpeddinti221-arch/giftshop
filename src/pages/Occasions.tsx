import React from 'react';
import { Link } from 'react-router-dom';
import { OCCASIONS } from '../constants';
import { motion } from 'motion/react';

export default function Occasions() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-5xl font-serif font-bold">Shop by Occasion</h1>
          <p className="text-text/60 max-w-xl mx-auto">
            Find the perfect gift for every milestone. From birthdays to weddings, we have something special for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {OCCASIONS.map((occasion, i) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-xl"
            >
              <img
                src={occasion.image}
                alt={occasion.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 space-y-4">
                <h3 className="text-4xl font-serif font-bold text-white drop-shadow-lg">{occasion.name}</h3>
                <Link
                  to={`/shop?occasion=${occasion.name.toLowerCase()}`}
                  className="px-8 py-3 bg-white text-text rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all smooth-scale shadow-lg"
                >
                  Explore Gifts
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
