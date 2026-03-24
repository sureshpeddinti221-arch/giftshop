import React from 'react';
import { Upload, Type, Palette, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function CustomizationPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Upload UI */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Experience the Magic</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Personalize Your <br /> Gift in Real-Time
              </h2>
              <p className="text-text/60 max-w-md">
                Our advanced editor lets you upload photos, add heartfelt messages, 
                and see exactly how your gift will look before you order.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary">
                  <Upload size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Upload Your Photo</h4>
                  <p className="text-xs text-text/40">High resolution JPEG or PNG</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary">
                  <Type size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Add Custom Text</h4>
                  <p className="text-xs text-text/40">Choose from 50+ premium fonts</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Pick Your Colors</h4>
                  <p className="text-xs text-text/40">Match the theme of your occasion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[32px] relative z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif font-bold text-2xl">Live Preview</h3>
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span>Real-time</span>
                </div>
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden relative shadow-inner bg-accent/20">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=600"
                  alt="Preview"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-full h-full border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center">
                    <div className="space-y-4">
                      <p className="font-serif italic text-3xl text-white drop-shadow-lg">
                        "Happy Birthday <br /> Mom!"
                      </p>
                      <p className="text-white/80 text-sm font-medium drop-shadow-md">
                        With love, Sarah
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-accent overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest">
                  124 people customizing right now
                </p>
              </div>
            </motion.div>

            {/* Decorative Blobs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/50 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
