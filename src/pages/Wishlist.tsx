import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { BEST_SELLERS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const wishlistItems = BEST_SELLERS.slice(0, 3);

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold">My Wishlist</h1>
            <p className="text-text/60">Your favorite items saved for later.</p>
          </div>
          <Link to="/shop" className="px-8 py-4 bg-primary text-white rounded-full font-bold smooth-scale">
            Continue Shopping
          </Link>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative group">
                <ProductCard product={product} />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-text/40 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 space-y-8 bg-white rounded-[40px] border border-border border-dashed">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-primary mx-auto">
              <Heart size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-serif font-bold">Your wishlist is empty</h3>
              <p className="text-text/60">Save items you love to find them easily later.</p>
            </div>
            <Link to="/shop" className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold smooth-scale">
              Explore Gifts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
