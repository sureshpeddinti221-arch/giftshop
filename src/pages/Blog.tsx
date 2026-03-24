import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Gifting Guide', 'Insights', 'Tips & Tricks', 'Product Spotlight', 'Events'];

  const allPosts = [
    {
      id: 1,
      title: "10 Thoughtful Anniversary Gift Ideas for Your Partner",
      excerpt: "Finding the perfect anniversary gift can be a challenge. We've curated a list of 10 thoughtful ideas that will make your partner feel truly special.",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      date: "Oct 12, 2023",
      author: "Sarah J.",
      category: "Gifting Guide"
    },
    {
      id: 2,
      title: "The Art of Personalized Gifting: Why It Matters",
      excerpt: "Personalized gifts carry a unique emotional weight. Learn why adding a personal touch can transform a simple object into a lifelong treasure.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      date: "Oct 15, 2023",
      author: "Michael R.",
      category: "Insights"
    },
    {
      id: 3,
      title: "Last-Minute Birthday Gifts That Don't Feel Last-Minute",
      excerpt: "Running out of time? Don't panic. These high-quality, thoughtful gifts can be delivered quickly and still show how much you care.",
      image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop",
      date: "Oct 18, 2023",
      author: "Emily W.",
      category: "Tips & Tricks"
    },
    {
      id: 4,
      title: "How to Choose the Perfect Corporate Gift for Your Clients",
      excerpt: "Corporate gifting is an art form. It's about showing appreciation while maintaining professionalism. Here's our guide to getting it right.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      date: "Oct 22, 2023",
      author: "David L.",
      category: "Gifting Guide"
    },
    {
      id: 5,
      title: "The Psychology of Giving: Why We Love to Gift",
      excerpt: "Have you ever wondered why giving a gift feels just as good as receiving one? We explore the fascinating psychology behind our gifting habits.",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      date: "Oct 25, 2023",
      author: "Dr. Anna K.",
      category: "Insights"
    },
    {
      id: 6,
      title: "Eco-Friendly Gifting: Sustainable Ideas for 2023",
      excerpt: "Gifting doesn't have to be wasteful. Discover our favorite eco-friendly and sustainable gift ideas that are kind to both people and the planet.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      date: "Oct 28, 2023",
      author: "Green G.",
      category: "Tips & Tricks"
    }
  ];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#FFF9F6]">
        <div className="container relative z-10 text-center space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase"
          >
            GiftCraft Blog
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-serif font-bold"
          >
            Gifting Inspiration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text/60 max-w-2xl mx-auto"
          >
            Discover thoughtful guides, creative ideas, and the stories behind our handcrafted treasures.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[112px] z-30 bg-white/80 backdrop-blur-md border-b border-border py-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-background text-text/60 hover:bg-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-[40px] overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <Link to={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                      {post.category}
                    </div>
                  </Link>
                  
                  <div className="p-10 space-y-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-4 text-[11px] text-text/40 font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-text/60 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-6 mt-auto">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="group/link inline-flex items-center space-x-2 text-sm font-bold text-primary"
                      >
                        <span className="relative">
                          Read Full Article
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                        </span>
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto">
                <Search size={40} className="text-text/20" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold">No articles found</h3>
                <p className="text-text/60">We couldn't find any articles matching your search criteria.</p>
              </div>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-20 flex items-center justify-center space-x-4">
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text/40 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50" disabled>
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-12 h-12 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20">1</button>
                <button className="w-12 h-12 rounded-full border border-border font-bold hover:bg-background transition-all">2</button>
                <button className="w-12 h-12 rounded-full border border-border font-bold hover:bg-background transition-all">3</button>
              </div>
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container py-12">
        <div className="bg-text rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center space-y-8">
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Never Miss a Story</h2>
            <p className="text-white/60 max-w-xl mx-auto">Subscribe to our newsletter and get the latest gifting guides and exclusive offers delivered to your inbox.</p>
          </div>
          
          <form className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Subscribe
            </button>
          </form>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
