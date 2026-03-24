import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Heart, Settings, LogOut, ChevronRight, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const stats = [
    { label: 'Total Orders', value: '12', icon: <Package size={20} /> },
    { label: 'Wishlist', value: '24', icon: <Heart size={20} /> },
    { label: 'Saved Designs', value: '8', icon: <Star size={20} /> },
  ];

  const recentOrders = [
    { id: '#GC-92834', date: 'Mar 24, 2026', status: 'In Crafting', total: '$29.99', img: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=100' },
    { id: '#GC-91203', date: 'Feb 12, 2026', status: 'Delivered', total: '$89.00', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100' },
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm text-center space-y-4">
              <div className="w-24 h-24 rounded-full border-4 border-accent overflow-hidden mx-auto">
                <img src="https://i.pravatar.cc/150?img=12" alt="User" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Suresh Peddinti</h3>
                <p className="text-xs text-text/40 font-bold uppercase tracking-widest">Premium Member</p>
              </div>
            </div>

            <nav className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
              {[
                { name: 'My Orders', icon: <Package size={18} />, active: true },
                { name: 'Wishlist', icon: <Heart size={18} /> },
                { name: 'Saved Designs', icon: <Star size={18} /> },
                { name: 'Settings', icon: <Settings size={18} /> },
                { name: 'Logout', icon: <LogOut size={18} />, danger: true },
              ].map((item, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-sm font-bold transition-all border-b border-border last:border-0",
                    item.active ? "bg-accent/30 text-primary" : "text-text/60 hover:bg-background",
                    item.danger && "text-red-500"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-border shadow-sm flex items-center space-x-6"
                >
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold">{stat.value}</p>
                    <p className="text-[10px] text-text/40 font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-serif font-bold">Recent Orders</h2>
                <Link to="/orders" className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">View All</Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-3xl border border-border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary transition-all">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 rounded-xl border border-border overflow-hidden shrink-0">
                        <img src={order.img} alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{order.id}</p>
                        <p className="text-xs text-text/40 font-medium flex items-center space-x-2">
                          <Clock size={12} />
                          <span>Placed on {order.date}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-12">
                      <div className="text-right">
                        <p className="text-xs text-text/40 font-bold uppercase tracking-widest mb-1">Status</p>
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                          order.status === 'Delivered' ? "bg-green-100 text-green-700" : "bg-accent text-primary"
                        )}>
                          {order.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-text/40 font-bold uppercase tracking-widest mb-1">Total</p>
                        <p className="font-bold text-lg">{order.total}</p>
                      </div>
                      <button className="p-3 bg-background rounded-xl hover:bg-accent hover:text-primary transition-all">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
