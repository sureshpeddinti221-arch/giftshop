import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Share2, Upload, Type, Palette, CheckCircle2, ShieldCheck, Truck, RotateCcw, Play, ChevronDown, MessageSquare, Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PRODUCTS } from '../constants';
import { cn } from '../lib/utils';
import { ProductOption } from '../types';

export default function ProductDetails() {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];
  
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [customText, setCustomText] = useState('');
  const [selectedFont, setSelectedFont] = useState('Serif');
  const [selectedColor, setSelectedColor] = useState('#B71C1C');
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Initialize selected options with the first option of each category
  const [selectedOptions, setSelectedOptions] = useState<Record<string, ProductOption>>(() => {
    const initialOptions: Record<string, ProductOption> = {};
    product.options?.forEach(optGroup => {
      if (optGroup.values.length > 0) {
        initialOptions[optGroup.name] = optGroup.values[0];
      }
    });
    return initialOptions;
  });

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
    let price = product.price;
    (Object.values(selectedOptions) as ProductOption[]).forEach(option => {
      price += option.priceAdjustment || 0;
    });
    return price;
  }, [product.price, selectedOptions]);

  const handleOptionChange = (groupName: string, option: ProductOption) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupName]: option
    }));
  };

  const fonts = ['Serif', 'Sans', 'Cursive', 'Bold'];
  const colors = ['#B71C1C', '#000000', '#1976D2', '#388E3C', '#FBC02D'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4 border-b border-border">
        <div className="container">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-text">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Customer Love Section (Before Product) */}
      <section className="py-12 bg-[#FDFCFB] border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <span className="w-10 h-px bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Customer Love</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Real Moments, Real Stories</h2>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-2xl font-bold text-text">{product.rating}</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className={cn("fill-current", s > Math.floor(product.rating) && "text-muted")} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-text/40 font-medium max-w-[150px]">Based on 124+ verified customer reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(product.customerPhotos || [
              "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1530103862676-fa8c91bbe181?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop"
            ]).map((photo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer"
              >
                <img src={photo} alt="Customer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Image Gallery (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-[4/5] rounded-[40px] overflow-hidden bg-muted relative group shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={product.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Video Play Button Overlay if video exists */}
              {product.videoUrl && (
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group/play"
                >
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-2xl group-hover/play:scale-110 transition-transform">
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </div>
                </button>
              )}

              <div className="absolute top-8 right-8 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-xl">
                  <Heart size={20} />
                </button>
                <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all shadow-xl">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-6">
              {[product.image, ...ALL_PRODUCTS.map(p => p.image).slice(0, 3)].map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "aspect-square rounded-3xl overflow-hidden border-2 transition-all duration-500 relative group",
                    selectedImage === img ? "border-primary shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  {selectedImage === img && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Product Info (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className={cn("fill-current", s > Math.floor(product.rating) && "text-muted")} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-text/60">{product.rating} (124)</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-text leading-tight">{product.title}</h1>
                
                <div className="flex items-baseline space-x-4">
                  <p className="text-4xl font-bold text-primary">₹{currentPrice.toLocaleString('en-IN')}</p>
                  <p className="text-lg text-text/30 line-through font-medium">₹{(currentPrice * 1.2).toLocaleString('en-IN')}</p>
                  <span className="text-green-600 text-sm font-bold">20% OFF</span>
                </div>

                <p className="text-text/60 text-lg leading-relaxed">
                  {product.description || "A timeless piece designed to capture your most precious moments. Handcrafted with premium materials in our Attapur studio."}
                </p>
              </div>

                {/* Product Options */}
                {product.options && product.options.length > 0 && (
                  <div className="space-y-8">
                    {product.options.map((optGroup) => (
                      <div key={optGroup.name} className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text/40">
                          Select {optGroup.name}
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {optGroup.values.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleOptionChange(optGroup.name, option)}
                              className={cn(
                                "px-6 py-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-start gap-1",
                                selectedOptions[optGroup.name]?.id === option.id
                                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                  : "bg-white border-border hover:border-primary text-text"
                              )}
                            >
                              <span>{option.label}</span>
                              {option.priceAdjustment !== undefined && option.priceAdjustment !== 0 && (
                                <span className={cn(
                                  "text-[8px] opacity-70",
                                  selectedOptions[optGroup.name]?.id === option.id ? "text-white" : "text-primary"
                                )}>
                                  {option.priceAdjustment > 0 ? `+ ₹${option.priceAdjustment}` : `- ₹${Math.abs(option.priceAdjustment)}`}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Customization Card */}
              <div className="bg-muted/30 p-8 rounded-[40px] border border-border/50 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Palette size={18} className="text-primary" />
                    Personalize Your Gift
                  </h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Free Customization</span>
                </div>

                {/* Upload */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text/40">1. Upload High-Res Photo</label>
                  <div className="border-2 border-dashed border-primary/20 rounded-3xl p-10 text-center space-y-3 hover:border-primary/40 transition-all cursor-pointer group bg-white/50">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                      <Upload size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text">Select Image</p>
                      <p className="text-[10px] text-text/40 font-medium mt-1">JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Text Input */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text/40">2. Add Custom Message</label>
                  <div className="relative">
                    <Type size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-text/30" />
                    <input
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="e.g. Happy Anniversary Love"
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Font & Color */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text/40">3. Select Font</label>
                    <div className="flex flex-wrap gap-2">
                      {fonts.map(font => (
                        <button
                          key={font}
                          onClick={() => setSelectedFont(font)}
                          className={cn(
                            "px-4 py-2 rounded-xl text-[10px] font-bold border transition-all",
                            selectedFont === font ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white border-border hover:border-primary"
                          )}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text/40">4. Accent Color</label>
                    <div className="flex space-x-3">
                      {colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 transition-all smooth-scale",
                            selectedColor === color ? "border-primary scale-125 shadow-lg" : "border-transparent"
                          )}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center bg-muted rounded-2xl p-1 border border-border">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center font-bold text-xl hover:bg-white rounded-xl transition-all"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center font-bold text-xl hover:bg-white rounded-xl transition-all"
                    >
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-2xl shadow-primary/30 smooth-scale">
                    <ShoppingBag size={20} />
                    <span className="uppercase tracking-widest text-xs">Add to Cart</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text/60">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-text/40">Secure Payment & Quality Guarantee</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-8 pt-10">
                <div className="flex space-x-10 border-b border-border">
                  {['description', 'reviews'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "pb-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative",
                        activeTab === tab ? "text-primary" : "text-text/40 hover:text-text"
                      )}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-text/60 leading-relaxed min-h-[120px] text-sm md:text-base">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === 'description' && (
                        <div className="space-y-4">
                          <p>
                            This premium {product.title} is meticulously crafted to preserve your memories in the highest quality. 
                            Our team at Creative Gifts Store uses specialized techniques to ensure every detail of your personalization is sharp and durable.
                          </p>
                          <ul className="grid grid-cols-2 gap-4 pt-4">
                            <li className="flex items-center space-x-2 text-xs font-bold">
                              <CheckCircle2 size={14} className="text-primary" />
                              <span>Premium Materials</span>
                            </li>
                            <li className="flex items-center space-x-2 text-xs font-bold">
                              <CheckCircle2 size={14} className="text-primary" />
                              <span>HD Print Quality</span>
                            </li>
                            <li className="flex items-center space-x-2 text-xs font-bold">
                              <CheckCircle2 size={14} className="text-primary" />
                              <span>Custom Engraving</span>
                            </li>
                            <li className="flex items-center space-x-2 text-xs font-bold">
                              <CheckCircle2 size={14} className="text-primary" />
                              <span>Gift Wrapped</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'reviews' && (
                        <div className="space-y-8">
                          {product.reviews && product.reviews.length > 0 ? (
                            <div className="space-y-8">
                              {product.reviews.map((review) => (
                                <div key={review.id} className="space-y-4 pb-8 border-b border-border last:border-0">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                        {review.userName.charAt(0)}
                                      </div>
                                      <div>
                                        <p className="font-bold text-sm">{review.userName}</p>
                                        <p className="text-[10px] text-text/40 uppercase tracking-widest">{review.date}</p>
                                      </div>
                                    </div>
                                    <div className="flex text-yellow-400">
                                      {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={10} className={cn("fill-current", s > review.rating && "text-muted")} />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-sm italic leading-relaxed">"{review.comment}"</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 space-y-4">
                              <MessageSquare size={40} className="mx-auto text-text/10" />
                              <p className="text-text/40 font-medium italic">"No reviews yet. Be the first to share your experience!"</p>
                            </div>
                          )}
                          <button className="w-full py-4 border border-border rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-muted transition-all">Write a Review</button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/10 bg-black">
              {product.videoUrl?.includes('youtube.com') || product.videoUrl?.includes('youtu.be') ? (
                <iframe
                  src={product.videoUrl.replace('watch?v=', 'embed/')}
                  title={product.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video 
                  src={product.videoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
