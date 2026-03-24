import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop" 
                alt="Handcrafted Gifts" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-12 -right-12 w-2/3 rounded-[40px] overflow-hidden shadow-2xl aspect-square border-8 border-white z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" 
                alt="Gift Wrapping" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <motion.div 
            style={{ opacity }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">× Our Story ×</p>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Crafting Emotions, <br />
                <span className="italic font-normal text-primary/80">One Gift at a Time</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-base text-text/70 leading-relaxed">
              <p>
                Founded in a small workshop with a big heart, Creative Gifts Store began with a simple mission: to make every gift as unique as the person receiving it.
              </p>
              <p>
                We believe that a gift is more than just an object; it's a bridge between hearts, a memory captured in time, and a silent "I love you" or "I'm thinking of you."
              </p>
            </div>

            <div className="pt-4">
              <Link to="/shop" className="inline-block px-10 py-5 bg-text text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-text/10">
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif font-bold text-text/[0.02] whitespace-nowrap pointer-events-none select-none">
        Handcrafted with Love
      </div>
    </section>
  );
}
