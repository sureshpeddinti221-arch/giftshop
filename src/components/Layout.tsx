import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919951710569" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-text text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
