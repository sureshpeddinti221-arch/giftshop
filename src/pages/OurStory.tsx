import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-32 relative overflow-hidden bg-white">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <p className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Our Journey</p>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-text leading-tight">
                Crafting <span className="italic font-normal text-primary">Connections</span> <br />
                Since 2018
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop" 
                alt="Our Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9E6E6]/30 -skew-x-12 translate-x-1/4" />
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  More Than Just a Gift Shop. <br />
                  <span className="text-primary italic font-normal">We're Storytellers.</span>
                </h2>
                <p className="text-text/60 text-lg leading-relaxed">
                  At Creative Gifts Store, we believe that every gift should tell a story. What started as a small workshop in Hyderabad has grown into a destination for those who seek to express their deepest emotions through personalized craftsmanship.
                </p>
                <p className="text-text/60 text-lg leading-relaxed">
                  Our mission is simple: to help you celebrate life's most precious moments with gifts that are as unique as the people receiving them. Whether it's a 3D crystal capturing a wedding memory or a simple mug with a heartfelt message, we pour our heart into every detail.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-4xl font-serif font-bold text-primary">50k+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-text/40">Happy Customers</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-serif font-bold text-primary">100k+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-text/40">Gifts Delivered</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden rotate-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white p-10 rounded-[40px] shadow-xl space-y-4 -rotate-6 hidden md:block">
                <Sparkles className="text-primary" size={32} />
                <p className="font-serif italic text-lg">"Quality is our signature."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-6 mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Core Values</h2>
            <p className="text-text/60">The principles that guide us in every gift we create.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="text-primary" size={40} />,
                title: "Crafted with Love",
                desc: "Every item is hand-finished by our skilled artisans who care about your memories as much as you do."
              },
              {
                icon: <ShieldCheck className="text-primary" size={40} />,
                title: "Premium Quality",
                desc: "We source only the finest materials, from optical-grade crystals to high-quality ceramics and metals."
              },
              {
                icon: <Users className="text-primary" size={40} />,
                title: "Customer First",
                desc: "Your satisfaction is our priority. We offer real-time previews and dedicated support for every order."
              }
            ].map((value, i) => (
              <div key={i} className="p-12 rounded-[40px] bg-background border border-border/50 hover:shadow-xl transition-all duration-500 space-y-8">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold">{value.title}</h3>
                  <p className="text-text/60 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Location Section */}
      <section className="py-32 bg-[#F5F5F0]">
        <div className="container">
          <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-sm flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Based in the Heart of <br /><span className="text-primary italic font-normal">Hyderabad</span></h2>
              <p className="text-text/60 text-lg leading-relaxed">
                Our flagship studio is located in Hyderabad, India. This is where the magic happens—where designs are born, crystals are engraved, and every package is carefully wrapped for its journey to you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="font-bold text-sm uppercase tracking-widest">Local Craftsmanship</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="font-bold text-sm uppercase tracking-widest">Global Shipping</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="font-bold text-sm uppercase tracking-widest">Sustainable Practices</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop" 
                  alt="Hyderabad Studio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
