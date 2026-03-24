import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#FFF9F6]">
        <div className="container relative z-10 text-center space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase"
          >
            Our Journey
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-bold"
          >
            About GiftCraft
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text/60 max-w-2xl mx-auto"
          >
            We believe in the power of thoughtful gifting. Every item we create is a vessel for your most precious emotions.
          </motion.p>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold">Where Every Gift Tells a Story</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
              <div className="space-y-6 text-lg text-text/70 leading-relaxed">
                <p>
                  GiftCraft started in 2015 as a small passion project in a home garage. Our founder, Sarah, wanted to find a way to make personalized gifts more accessible without compromising on quality or aesthetic appeal.
                </p>
                <p>
                  What began with hand-painted photo frames has grown into a full-scale boutique gift shop, serving thousands of customers worldwide. Despite our growth, our core values remain the same: quality, creativity, and connection.
                </p>
                <p>
                  We work with local artisans and use premium materials to ensure that every gift that leaves our workshop is something we'd be proud to give to our own loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-serif font-bold">Our Core Values</h2>
            <p className="text-text/60 max-w-xl mx-auto">The principles that guide everything we do, from product design to customer service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-primary" size={32} />,
                title: "Made with Love",
                desc: "We put our heart into every detail, ensuring each gift carries a piece of our passion."
              },
              {
                icon: <Sparkles className="text-primary" size={32} />,
                title: "Creative Excellence",
                desc: "We constantly push the boundaries of design to offer unique and innovative gift ideas."
              },
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: "Uncompromising Quality",
                desc: "We use only the finest materials and work with skilled artisans to ensure longevity."
              },
              {
                icon: <Truck className="text-primary" size={32} />,
                title: "Reliable Service",
                desc: "We understand the importance of timing in gifting and strive for prompt, safe delivery."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-text/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-text text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Customers", value: "50K+" },
              { label: "Gifts Delivered", value: "120K+" },
              { label: "Artisans", value: "15+" },
              { label: "Countries Served", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl md:text-6xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-serif font-bold">Meet the Creative Minds</h2>
            <p className="text-text/60 max-w-xl mx-auto">The passionate team behind the magic of GiftCraft.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" },
              { name: "Michael Chen", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
              { name: "Emily Davis", role: "Lead Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop" },
              { name: "David Wilson", role: "Master Artisan", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm text-text/40 font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
