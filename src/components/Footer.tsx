import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Gift } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="text-4xl font-serif font-black tracking-tighter text-text">
              Creative Gifts Store
            </Link>
            <p className="text-text/60 leading-relaxed max-w-xs text-sm">
              Crafting emotions into tangible treasures. We believe every gift should be as unique as the person receiving it.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/creativegifts.attapur?igsh=MjV0aXJlbDNjcTY1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text/40">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Contact Us', 'Wishlist'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-text/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text/40">Categories</h4>
            <ul className="space-y-4">
              {['Personalized Gifts', 'Handmade Decor', 'Jewelry', 'Gift Boxes', 'Occasions', 'Corporate'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm font-bold text-text/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text/40">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="text-sm font-medium text-text/70 leading-relaxed">
                  Attapur, Hyderabad,<br />Telangana, India
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <p className="text-sm font-bold text-text/70">9951710569</p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <p className="text-sm font-bold text-text/70">creativegiftsstore@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-text/40 uppercase tracking-widest">
            © 2026 Creative Gifts Store. Handcrafted with love.
          </p>
          <div className="flex items-center space-x-8 text-xs font-bold text-text/40 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center space-x-4 grayscale opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
