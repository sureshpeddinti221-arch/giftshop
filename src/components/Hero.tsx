import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop",
    title: "Creative Gifts Store",
    subtitle: "Premium Gift Studio",
    description: "Transforming your emotions into timeless treasures. We specialize in high-end personalized gifts crafted with precision and love.",
    accent: "Gifts"
  },
  {
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1920&auto=format&fit=crop",
    title: "Personalized Magic",
    subtitle: "Custom Creations",
    description: "Capture your favorite moments in 3D crystals and personalized frames. Perfect for every special occasion.",
    accent: "Magic"
  },
  {
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920&auto=format&fit=crop",
    title: "Celebrate Love",
    subtitle: "Occasion Special",
    description: "Find the perfect gift for weddings, anniversaries, and birthdays. Handcrafted with care for your loved ones.",
    accent: "Love"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-[#0a0a0a] flex items-center pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4 text-primary">
                  <span className="w-12 h-px bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-[0.5em]">{SLIDES[currentSlide].subtitle}</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                  {SLIDES[currentSlide].title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word === SLIDES[currentSlide].accent ? (
                        <span className="text-primary italic font-normal block md:inline">{word}</span>
                      ) : (
                        word
                      )}
                      {' '}
                    </React.Fragment>
                  ))}
                </h1>

                <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                  {SLIDES[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link to="/shop" className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 smooth-scale">
                    Shop Collection
                  </Link>
                  <Link to="/story" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all backdrop-blur-sm smooth-scale">
                    Our Story
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="flex items-center space-x-3 pt-8">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    currentSlide === i ? "w-12 bg-primary" : "w-6 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image Gallery */}
          <div className="relative">
            <div className="relative aspect-[4/5] md:aspect-square max-w-[600px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
                >
                  <img 
                    src={SLIDES[currentSlide].image} 
                    alt={SLIDES[currentSlide].title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Gift size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">Premium Quality</p>
                    <p className="text-sm font-bold text-text">Handcrafted Gifts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

