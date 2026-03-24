import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Eye, Gift, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import QuickView from './QuickView';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="group bg-white rounded-premium overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-shadow duration-500"
      >
        <div className="relative aspect-square overflow-hidden">
          <Link to={`/product/${product.id}`} className="block h-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.videoUrl && (
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm flex items-center space-x-1">
                <Play size={10} fill="currentColor" />
                <span>Video</span>
              </span>
            )}
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-text text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-border">
              Customizable
            </span>
            {product.options && product.options.length > 0 && (
              <span className="px-3 py-1 bg-accent text-text text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-border">
                Multiple Sizes
              </span>
            )}
            {product.id === 'p1' && (
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                Best Seller
              </span>
            )}
          </div>

          {/* Action Icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-md">
              <Heart size={18} />
            </button>
            <button 
              onClick={() => setIsQuickViewOpen(true)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-md"
            >
              <Eye size={18} />
            </button>
          </div>
          
          {/* Add to Cart Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/20 to-transparent">
            <Link to={`/product/${product.id}`} className="w-full bg-white text-text py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg hover:bg-primary hover:text-white transition-all">
              <Gift size={14} />
              <span>Personalize Now</span>
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{product.category}</p>
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif font-bold text-xl line-clamp-1 hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg font-bold text-text">₹{product.price}</span>
            <div className="flex items-center space-x-1 text-accent">
              <Star size={14} className="fill-accent" />
              <span className="text-xs font-bold text-text/60">{product.rating}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <QuickView 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  );
}

