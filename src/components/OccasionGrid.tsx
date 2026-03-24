import React from 'react';
import { motion } from 'motion/react';
import { OCCASIONS } from '../constants';
import { Link } from 'react-router-dom';

export default function OccasionGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Perfect For Every</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Shop by Occasion</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={occasion.image}
                alt={occasion.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{occasion.name}</h3>
                <Link
                  to={`/shop?occasion=${occasion.name.toLowerCase()}`}
                  className="text-white/80 text-xs font-bold tracking-widest uppercase flex items-center space-x-2 group-hover:text-white transition-colors"
                >
                  <span>Explore Gifts</span>
                  <div className="w-6 h-px bg-white/40 group-hover:w-10 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
