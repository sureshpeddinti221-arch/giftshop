import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
            
            {/* Left Column: Heading, Desc, Form */}
            <div className="space-y-20">
              <div className="space-y-10">
                <div className="flex items-center space-x-3 text-primary">
                  <span className="w-12 h-px bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.5em]">Contact Us</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-serif font-bold text-text leading-[0.85] tracking-tighter">
                  Let's Start <br />
                  <span className="text-primary italic font-normal">Something</span> <br />
                  Beautiful
                </h1>
                <p className="text-text/60 text-xl leading-relaxed max-w-md">
                  Whether it's a custom commission or a simple question, we're here to help you create the perfect gift.
                </p>
              </div>

              <div className="space-y-12">
                <h3 className="text-2xl font-serif font-bold">Send us a message</h3>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name"
                        className="w-full py-4 bg-transparent border-b border-border focus:border-primary outline-none transition-all peer placeholder-transparent"
                        placeholder="Name"
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-text/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] pointer-events-none"
                      >
                        Your Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email"
                        className="w-full py-4 bg-transparent border-b border-border focus:border-primary outline-none transition-all peer placeholder-transparent"
                        placeholder="Email"
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-text/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] pointer-events-none"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full py-4 bg-transparent border-b border-border focus:border-primary outline-none transition-all peer placeholder-transparent"
                      placeholder="Subject"
                    />
                    <label 
                      htmlFor="subject"
                      className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-text/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] pointer-events-none"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="relative group">
                    <textarea 
                      id="message"
                      rows={4} 
                      className="w-full py-4 bg-transparent border-b border-border focus:border-primary outline-none transition-all peer placeholder-transparent resize-none"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-text/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] pointer-events-none"
                    >
                      Your Message
                    </label>
                  </div>
                  <button className="group flex items-center space-x-6 text-sm font-bold uppercase tracking-widest hover:text-primary transition-all">
                    <span className="pb-1 border-b border-text/20 group-hover:border-primary">Send Message</span>
                    <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:pt-32 space-y-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Email Us</h4>
                  <p className="text-3xl font-serif font-bold hover:text-primary transition-colors cursor-pointer">creativegiftsstore@gmail.com</p>
                  <p className="text-sm text-text/40">Our team typically responds within 24 hours.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Call Us</h4>
                  <p className="text-3xl font-serif font-bold hover:text-primary transition-colors cursor-pointer">+91 99517 10569</p>
                  <p className="text-sm text-text/40">Available Mon - Sat, 10am - 8pm IST</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Visit Our Studio</h4>
                  <p className="text-3xl font-serif font-bold leading-tight">
                    Creative Gifts Store, <br />
                    Attapur, Hyderabad, <br />
                    Telangana, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-16 border-t border-border space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Follow Our Journey</h4>
                <div className="flex flex-wrap gap-12">
                  {[
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: MessageCircle, label: 'WhatsApp' }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#"
                      className="group flex flex-col items-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-text group-hover:text-white group-hover:border-text transition-all duration-500">
                        <social.icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text/40 group-hover:text-text transition-colors">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="mt-40 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[60px] -rotate-1 scale-105 -z-10 group-hover:rotate-0 transition-transform duration-1000" />
            <div className="rounded-[60px] overflow-hidden h-[600px] border border-border shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795905!3d17.4122998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b7836249b024!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711269159000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs space-y-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <h4 className="font-serif font-bold text-xl">Visit Our Studio</h4>
                <p className="text-sm text-text/60 leading-relaxed">We're located in the heart of Hyderabad. Drop by for a coffee and let's discuss your next masterpiece.</p>
                <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
