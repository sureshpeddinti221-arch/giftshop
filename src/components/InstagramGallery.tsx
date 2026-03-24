import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function InstagramGallery() {
  const images = [
    "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103862676-fa8c91bbe181?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Follow Us</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Instagram Moments</h2>
          </div>
          <a 
            href="https://www.instagram.com/creativegifts.attapur?igsh=MjV0aXJlbDNjcTY1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary font-bold hover:underline"
          >
            <Instagram size={20} />
            <span>@creativegifts.attapur</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Instagram ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
