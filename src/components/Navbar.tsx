import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, Instagram, Facebook, Twitter, User, Gift, ChevronDown, MapPin, Truck, Headphones, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'CATEGORY', path: '/categories', hasDropdown: true },
    { name: 'OUR STORY', path: '/story' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" 
          : "bg-white py-8 border-b border-border/50"
      )}>
        <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group shrink-0">
            <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-text leading-none transition-all duration-300 group-hover:tracking-tight">
              Creative <span className="text-primary italic">Gifts</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-text/30 -mt-1 group-hover:text-primary transition-colors">
              Store
            </span>
          </Link>

          <div className="flex items-center space-x-4 lg:space-x-12">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group/nav"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.path}
                    className={cn(
                      'text-[12px] font-black tracking-[0.2em] transition-all duration-300 px-6 py-3 flex items-center space-x-2 hover:text-primary rounded-full hover:bg-primary/5',
                      location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-text'
                    )}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={12} 
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )} 
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 rounded-[40px] p-12 grid grid-cols-3 gap-12 mt-4 backdrop-blur-xl"
                      >
                        <div className="space-y-10">
                          <div className="flex items-center space-x-4">
                            <span className="w-8 h-px bg-primary/30" />
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Most Popular</h4>
                          </div>
                          <div className="space-y-5">
                            {CATEGORIES.slice(0, 4).map(cat => (
                              <Link 
                                key={cat.id} 
                                to={`/shop?category=${cat.name.toLowerCase()}`}
                                className="flex items-center space-x-5 group/item p-2 rounded-2xl hover:bg-muted/50 transition-all"
                              >
                                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm group-hover/item:shadow-xl transition-all">
                                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-bold group-hover/item:text-primary transition-colors">{cat.name}</p>
                                  <p className="text-[9px] text-text/40 uppercase tracking-widest font-bold">Trending Now</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-10">
                          <div className="flex items-center space-x-4">
                            <span className="w-8 h-px bg-text/10" />
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-text/40">All Collections</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {CATEGORIES.slice(4).map(cat => (
                              <Link 
                                key={cat.id} 
                                to={`/shop?category=${cat.name.toLowerCase()}`}
                                className="text-sm font-bold text-text/60 hover:text-primary hover:translate-x-2 transition-all flex items-center space-x-3 group/link"
                              >
                                <span className="w-2 h-2 rounded-full bg-primary/10 group-hover/link:bg-primary transition-colors" />
                                <span>{cat.name}</span>
                              </Link>
                            ))}
                            <Link to="/categories" className="text-xs font-black text-primary pt-6 flex items-center space-x-3 group/all uppercase tracking-widest">
                              <span>View All Categories</span>
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/all:bg-primary group-hover/all:text-white transition-all">
                                <ArrowRight size={14} />
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="bg-muted/30 rounded-[40px] p-10 flex flex-col justify-between overflow-hidden relative border border-border/50 group/promo">
                          <div className="relative z-10 space-y-6">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover/promo:scale-110 transition-transform">
                              <Gift size={28} />
                            </div>
                            <h4 className="text-3xl font-serif font-bold leading-tight">Create Your <br /><span className="italic text-primary">Own Magic</span></h4>
                            <p className="text-xs text-text/60 leading-relaxed font-medium">Personalize any item with your photos and messages. Make it truly unique.</p>
                            <Link to="/shop" className="inline-flex items-center space-x-3 px-8 py-4 bg-text text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-text/10">
                              <span>Start Creating</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                          <img 
                            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400&auto=format&fit=crop" 
                            alt="Promo" 
                            className="absolute bottom-0 right-0 w-3/4 h-auto object-contain translate-x-12 translate-y-12 opacity-10 grayscale group-hover/promo:scale-110 group-hover/promo:opacity-20 transition-all duration-1000"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-3 md:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-12 h-12 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Search size={22} />
              </button>
              
              <Link to="/wishlist" className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center text-text/60 hover:text-primary hover:bg-primary/5 transition-all">
                <Heart size={22} />
              </Link>

              <Link to="/cart" className="relative w-12 h-12 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-primary/5 transition-all group">
                <ShoppingCart size={22} />
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-lg shadow-primary/30">
                  0
                </span>
              </Link>

              <Link to="/login" className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center text-text/60 hover:text-primary hover:bg-primary/5 transition-all">
                <User size={22} />
              </Link>

              <button
                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-primary/5 transition-all"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden pt-40 p-8"
          >
            <div className="space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-4xl font-serif font-bold border-b border-border/50 pb-6 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-12 right-12 w-16 h-16 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group"
            >
              <X size={32} />
            </button>

            <div className="w-full max-w-5xl space-y-16">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-4 text-primary">
                  <span className="w-12 h-px bg-primary" />
                  <p className="text-xs font-black tracking-[0.4em] uppercase">Search our collection</p>
                  <span className="w-12 h-px bg-primary" />
                </div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">What are you <br /><span className="italic font-normal text-primary">looking for?</span></h2>
              </div>

              <form onSubmit={handleSearchSubmit} className="relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-text/10 group-focus-within:text-primary transition-all duration-500" size={50} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Type to search gifts..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-20 pr-8 py-12 text-4xl md:text-7xl font-serif border-b-2 border-text/5 focus:outline-none focus:border-primary transition-all bg-transparent placeholder:text-text/5"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-text text-white flex items-center justify-center hover:bg-primary transition-all shadow-2xl shadow-text/20"
                >
                  <ArrowRight size={32} />
                </button>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text/30">Popular Searches</h4>
                  <ul className="space-y-4 text-xl font-bold">
                    <li 
                      onClick={() => { 
                        setSearchQuery('Magic Mugs');
                        navigate('/shop?search=Magic Mugs');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>Magic Mugs</span>
                    </li>
                    <li 
                      onClick={() => { 
                        setSearchQuery('Photo Frames');
                        navigate('/shop?search=Photo Frames');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>Photo Frames</span>
                    </li>
                    <li 
                      onClick={() => { 
                        setSearchQuery('3D Crystal');
                        navigate('/shop?search=3D Crystal');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>3D Crystal</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text/30">Quick Categories</h4>
                  <ul className="space-y-4 text-xl font-bold">
                    <li 
                      onClick={() => {
                        navigate('/shop?category=photo gifts');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>Photo Gifts</span>
                    </li>
                    <li 
                      onClick={() => {
                        navigate('/shop?category=mugs & drinkware');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>Mugs & Drinkware</span>
                    </li>
                    <li 
                      onClick={() => {
                        navigate('/shop?category=jewelry');
                        setIsSearchOpen(false);
                      }} 
                      className="hover:text-primary cursor-pointer transition-colors flex items-center space-x-3 group/li"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/li:bg-primary transition-all" />
                      <span>Jewelry</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-[40px] p-10 space-y-6 border border-primary/10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Truck size={24} />
                  </div>
                  <h5 className="text-xl font-serif font-bold">Free Shipping</h5>
                  <p className="text-sm text-text/60 leading-relaxed">Enjoy free standard shipping on all orders over ₹1000 across India.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

