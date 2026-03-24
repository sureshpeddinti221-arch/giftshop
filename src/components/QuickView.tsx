import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingCart, Heart, Share2, Play, Camera } from 'lucide-react';
import { Product, ProductOption } from '../types';
import { cn } from '../lib/utils';

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Initialize selected options with the first option of each category
  const [selectedOptions, setSelectedOptions] = useState<Record<string, ProductOption>>({});

  useEffect(() => {
    if (product?.options) {
      const initialOptions: Record<string, ProductOption> = {};
      product.options.forEach(optGroup => {
        if (optGroup.values.length > 0) {
          initialOptions[optGroup.name] = optGroup.values[0];
        }
      });
      setSelectedOptions(initialOptions);
      setSelectedImage(product.image);
    } else {
      setSelectedOptions({});
      setSelectedImage(product?.image);
    }
  }, [product]);

  // Update selected image if an option has an associated image
  useEffect(() => {
    (Object.values(selectedOptions) as ProductOption[]).forEach(option => {
      if (option.image) {
        setSelectedImage(option.image);
      }
    });
  }, [selectedOptions]);

  // Calculate current price based on selected options
  const currentPrice = useMemo(() => {
    if (!product) return 0;
    let price = product.price;
    (Object.values(selectedOptions) as ProductOption[]).forEach(option => {
      price += option.priceAdjustment || 0;
    });
    return price;
  }, [product, selectedOptions]);

  const handleOptionChange = (groupName: string, option: ProductOption) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupName]: option
    }));
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Image Gallery */}
            <div className="w-full md:w-1/2 bg-background p-8 flex flex-col gap-6 overflow-y-auto">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg group">
                <img 
                  src={selectedImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {product.videoUrl && (
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <Play size={24} className="text-primary ml-1" fill="currentColor" />
                    </div>
                  </button>
                )}
                {product.options && product.options.length > 0 && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-text text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg border border-border">
                    Multiple Options
                  </div>
                )}
              </div>

              {/* Customer Photos in QuickView */}
              {(product.customerPhotos && product.customerPhotos.length > 0) && (
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text/40">Customer Love</p>
                  <div className="grid grid-cols-4 gap-2">
                    {product.customerPhotos.slice(0, 4).map((photo, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden relative group">
                        <img src={photo} alt="Customer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Camera size={12} className="text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} fill={s <= 4 ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-text/40 uppercase tracking-widest">(4.8 / 5.0)</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">{product.title}</h2>
                  <p className="text-2xl font-bold text-primary">₹{currentPrice.toLocaleString('en-IN')}</p>
                </div>

                <p className="text-text/60 leading-relaxed">
                  This premium {product.title.toLowerCase()} is handcrafted with the finest materials to ensure a truly special gifting experience. Perfect for any occasion, it combines elegance with a personal touch.
                </p>

                <div className="space-y-6">
                  {/* Product Options */}
                  {product.options && product.options.map((optGroup) => (
                    <div key={optGroup.name} className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-text/40">Select {optGroup.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {optGroup.values.map((option) => (
                          <button 
                            key={option.id}
                            onClick={() => handleOptionChange(optGroup.name, option)}
                            className={cn(
                              "px-4 py-2 rounded-xl text-[10px] font-bold border transition-all",
                              selectedOptions[optGroup.name]?.id === option.id
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white border-border hover:border-primary text-text"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-border rounded-full px-4 py-2">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:text-primary transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-bold">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:text-primary transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button className="flex-grow bg-text text-white py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-primary transition-all shadow-lg hover:shadow-primary/20">
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-sm font-bold text-text/60 hover:text-primary transition-colors">
                        <Heart size={18} />
                        <span>Add to Wishlist</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm font-bold text-text/60 hover:text-primary transition-colors">
                        <Share2 size={18} />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Modal */}
          <AnimatePresence>
            {isVideoOpen && product.videoUrl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              >
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>
                <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <iframe
                    src={product.videoUrl.replace('watch?v=', 'embed/')}
                    title={product.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
