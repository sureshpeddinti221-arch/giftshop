import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown, ShoppingBag, Heart, Search, SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';
import { ALL_PRODUCTS, CATEGORIES, OCCASIONS } from '../constants';
import ProductCard from '../components/ProductCard';

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "Over ₹10,000", min: 10000, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || "All");
  const [selectedOccasion, setSelectedOccasion] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get('category');
    const occ = searchParams.get('occasion');
    const search = searchParams.get('search');

    if (cat) {
      const matched = CATEGORIES.find(c => c.name.toLowerCase() === cat.toLowerCase());
      if (matched) setSelectedCategory(matched.name);
      else if (cat.toLowerCase() === 'all') setSelectedCategory('All');
    } else {
      setSelectedCategory('All');
    }

    if (occ) {
      const matched = OCCASIONS.find(o => o.name.toLowerCase() === occ.toLowerCase());
      if (matched) setSelectedOccasion(matched.name);
      else if (occ.toLowerCase() === 'all') setSelectedOccasion('All');
    } else {
      setSelectedOccasion('All');
    }

    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const allProducts = ALL_PRODUCTS;

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const occasionMatch = selectedOccasion === "All" || product.occasion === selectedOccasion;
    const priceMatch = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && occasionMatch && priceMatch && searchMatch;
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handleOccasionSelect = (occasion: string) => {
    setSelectedOccasion(occasion);
    if (occasion === "All") {
      searchParams.delete('occasion');
    } else {
      searchParams.set('occasion', occasion.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <span className="w-8 h-px bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Our Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text">Shop All <br /><span className="italic font-normal text-primary">Personalized Gifts</span></h1>
            <p className="text-text/60 max-w-md">Browse through our curated selection of premium personalized gifts for every occasion.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40" size={20} />
              <input 
                type="text" 
                placeholder="Search gifts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 md:w-80"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-3 px-8 py-4 bg-text text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-text/10"
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center space-y-6">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto text-text/20">
              <ShoppingBag size={48} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold">No products found</h3>
              <p className="text-text/60">Try adjusting your filters or search query.</p>
            </div>
            <button 
              onClick={() => {
                setSelectedCategory("All");
                setSelectedOccasion("All");
                setSelectedPriceRange(PRICE_RANGES[0]);
                setSearchQuery("");
                setSearchParams({});
              }}
              className="text-primary font-bold text-xs uppercase tracking-widest hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl p-12 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif font-bold">Filters</h2>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-12">
                {/* Categories */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text/40">Category</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["All", ...CATEGORIES.map(c => c.name)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-left text-sm font-bold transition-all border",
                          selectedCategory === cat 
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                            : "bg-white border-border text-text hover:border-primary"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text/40">Occasion</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["All", ...OCCASIONS.map(o => o.name)].map((occ) => (
                        <button
                          key={occ}
                          onClick={() => handleOccasionSelect(occ)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-left text-sm font-bold transition-all border",
                            selectedOccasion === occ 
                              ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                              : "bg-white border-border text-text hover:border-primary"
                          )}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                </div>

                {/* Price Range */}
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text/40">Price Range</h4>
                  <div className="space-y-3">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range)}
                        className={cn(
                          "w-full px-6 py-4 rounded-2xl text-left text-sm font-bold transition-all border flex items-center justify-between",
                          selectedPriceRange.label === range.label 
                            ? "bg-primary/5 border-primary text-primary" 
                            : "bg-white border-border text-text hover:border-primary"
                        )}
                      >
                        <span>{range.label}</span>
                        {selectedPriceRange.label === range.label && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-text text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
