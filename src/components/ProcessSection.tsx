import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Palette, PenTool, Gift, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    number: "01",
    title: "The Creative Spark",
    subtitle: "Consultation & Concept",
    description: "Every masterpiece begins with your vision. We start by understanding the story you want to tell, the emotions you want to evoke, and the person you want to surprise.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200",
    icon: Sparkles,
    color: "bg-[#FDFCFB]"
  },
  {
    number: "02",
    title: "Artisanal Selection",
    subtitle: "Premium Materials",
    description: "We source only the finest materials—from sustainable hardwoods to museum-grade canvases—ensuring your gift isn't just beautiful, but a legacy that lasts for generations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    icon: Palette,
    color: "bg-[#F8F9FA]"
  },
  {
    number: "03",
    title: "Masterful Crafting",
    subtitle: "Hand-Finished Detail",
    description: "Our master artisans combine traditional techniques with modern precision. Each stroke, each cut, and each stitch is performed with obsessive attention to detail.",
    image: "https://images.unsplash.com/photo-1530608108141-984893c98502?q=80&w=1200",
    icon: PenTool,
    color: "bg-[#FDFCFB]"
  },
  {
    number: "04",
    title: "The Final Reveal",
    subtitle: "Luxury Presentation",
    description: "The experience doesn't end with the product. We wrap each masterpiece in bespoke packaging, designed to make the moment of opening as magical as the gift itself.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200",
    icon: Gift,
    color: "bg-[#F8F9FA]"
  }
];

export default function ProcessSection() {
  return (
    <section className="relative">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-border py-6">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="w-12 h-px bg-primary" />
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary">The Art of Creation</h2>
          </div>
          <div className="hidden md:flex space-x-8">
            {steps.map((step) => (
              <a key={step.number} href={`#step-${step.number}`} className="text-[10px] font-bold uppercase tracking-widest text-text/40 hover:text-primary transition-colors">
                {step.number}. {step.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lengthy Vertical Storytelling */}
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            id={`step-${step.number}`}
            className={cn(
              "min-h-screen flex flex-col justify-center relative overflow-hidden py-24 md:py-0",
              step.color
            )}
          >
            {/* Large Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif font-bold text-text/[0.02] pointer-events-none select-none">
              {step.number}
            </div>

            <div className="container relative z-10">
              <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn(
                    "space-y-8",
                    index % 2 !== 0 && "lg:order-2"
                  )}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <step.icon size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">{step.subtitle}</span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-serif font-bold text-text leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xl text-text/60 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  <div className="pt-4">
                    <button className="group flex items-center space-x-4 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                      <span>Learn More</span>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={cn(
                    "relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl",
                    index % 2 !== 0 && "lg:order-1"
                  )}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Video Teaser Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-text">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1920" 
            alt="Studio" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-text/80 via-transparent to-text/80" />
        
        <div className="container relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter">
              Experience the <br />
              <span className="text-primary italic font-normal">Making Of</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Take a behind-the-scenes look at our studio and see how we bring your stories to life.
            </p>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-primary relative shadow-2xl">
              <Play size={32} fill="currentColor" className="ml-2" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
