import React from 'react';
import { Gift, Edit3, Eye, Package, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Gift size={32} />,
      title: "Choose Your Gift",
      desc: "Select from our curated range of premium 3D crystals, frames, and custom lamps.",
      accent: "bg-primary/5 text-primary"
    },
    {
      icon: <Edit3 size={32} />,
      title: "Personalize It",
      desc: "Upload your favorite photos and add heartfelt messages with custom fonts.",
      accent: "bg-black/5 text-black"
    },
    {
      icon: <Eye size={32} />,
      title: "Live Preview",
      desc: "See exactly how your gift will look with our real-time 3D visualization tool.",
      accent: "bg-primary/5 text-primary"
    },
    {
      icon: <Package size={32} />,
      title: "Handcrafted Delivery",
      desc: "We craft your gift with precision and deliver it with premium packaging.",
      accent: "bg-black/5 text-black"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 translate-x-1/4 -z-0" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center space-x-4 text-primary">
              <Sparkles size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.5em]">The Process</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter">
              Crafting Your <br />
              <span className="italic font-normal text-primary">Perfect Moment</span>
            </h2>
          </div>
          <div className="lg:pb-6">
            <p className="text-text/60 max-w-sm text-xl font-medium leading-relaxed">
              We've refined every step to ensure your personalized gift is as special as the person receiving it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[48px] bg-white border border-border/50 hover:border-primary/20 transition-all duration-700 hover:shadow-[0_32px_64px_-12px_rgba(183,28,28,0.1)]"
            >
              <div className="space-y-16">
                <div className="flex items-start justify-between">
                  <div className={`w-20 h-20 ${step.accent} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                    {step.icon}
                  </div>
                  <span className="text-7xl font-serif font-bold text-text/5 opacity-10 group-hover:opacity-100 group-hover:text-primary/10 transition-all duration-700">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-serif font-bold text-3xl group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                  <p className="text-text/60 text-lg leading-relaxed font-medium">{step.desc}</p>
                </div>

                <div className="pt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <div className="flex items-center space-x-3 text-primary font-bold text-xs uppercase tracking-widest">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
