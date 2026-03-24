import React from 'react';
import Hero from '../components/Hero';
import CategoryScroll from '../components/CategoryScroll';
import ProcessSection from '../components/ProcessSection';
import ProductCard from '../components/ProductCard';
import CustomizationPreview from '../components/CustomizationPreview';
import HowItWorks from '../components/HowItWorks';
import StorySection from '../components/StorySection';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { BEST_SELLERS } from '../constants';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <CategoryScroll />
      <ProcessSection />
      
      {/* New Arrivals Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Just In</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">New Arrivals</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest border-b border-text/20 pb-1 hover:border-text transition-all">
              View All Arrivals
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BEST_SELLERS.map((product) => (
              <ProductCard key={`new-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customization Banner */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="bg-text rounded-[40px] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="space-y-8 z-10 md:w-1/2">
              <span className="inline-block px-4 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Personalize Everything</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Every Product is <br /> <span className="italic font-normal text-primary">Customizable</span></h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Add your photos, names, or special messages to any of our products. Our real-time preview lets you see exactly how your gift will look.
              </p>
              <Link to="/shop" className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all">
                Start Customizing
              </Link>
            </div>
            <div className="md:w-1/2 relative z-10">
              <div className="relative aspect-square max-w-[400px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop" 
                  alt="Custom Mug" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-6"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl space-y-2 animate-bounce">
                  <p className="text-[10px] font-bold uppercase text-text/40">Preview</p>
                  <p className="font-serif italic text-primary">"Happy Birthday Mom!"</p>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Trending Now</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Popular Gift Choices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BEST_SELLERS.slice(0, 6).map((product) => (
              <ProductCard key={`trending-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <StorySection />
      
      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Wall of Love</p>
            <h2 className="text-4xl font-serif font-bold">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Watson",
                role: "Verified Buyer",
                text: "The customization process was so easy! I ordered a photo frame for my anniversary and it turned out even better than I expected.",
                img: "https://i.pravatar.cc/100?img=1"
              },
              {
                name: "James Miller",
                role: "Verified Buyer",
                text: "Fast shipping and premium packaging. The engraved watch I bought for my father was a huge hit. Highly recommend GiftCraft!",
                img: "https://i.pravatar.cc/100?img=2"
              },
              {
                name: "Sophia Chen",
                role: "Verified Buyer",
                text: "Beautiful jewelry and the personalization adds such a special touch. I've already ordered three more gifts for my friends.",
                img: "https://i.pravatar.cc/100?img=3"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-border shadow-sm space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-[10px] text-text/40 uppercase tracking-widest font-bold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text/60 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InstagramGallery />
      <Newsletter />
    </div>
  );
}
