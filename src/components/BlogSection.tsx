import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "10 Thoughtful Anniversary Gift Ideas for Your Partner",
      excerpt: "Finding the perfect anniversary gift can be a challenge. We've curated a list of 10 thoughtful ideas that will make your partner feel truly special.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop",
      date: "Oct 12, 2023",
      author: "Sarah J.",
      category: "Gifting Guide"
    },
    {
      id: 2,
      title: "The Art of Personalized Gifting: Why It Matters",
      excerpt: "Personalized gifts carry a unique emotional weight. Learn why adding a personal touch can transform a simple object into a lifelong treasure.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop",
      date: "Oct 15, 2023",
      author: "Michael R.",
      category: "Insights"
    },
    {
      id: 3,
      title: "Last-Minute Birthday Gifts That Don't Feel Last-Minute",
      excerpt: "Running out of time? Don't panic. These high-quality, thoughtful gifts can be delivered quickly and still show how much you care.",
      image: "https://images.unsplash.com/photo-1530103862676-fa8c91bbe181?q=80&w=500&auto=format&fit=crop",
      date: "Oct 18, 2023",
      author: "Emily W.",
      category: "Tips & Tricks"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">From Our Blog</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Gifting Inspiration</h2>
          </div>
          <Link 
            to="/blog" 
            className="group flex items-center space-x-2 text-text font-bold hover:text-primary transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
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
              
              <div className="p-8 space-y-4">
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
                
                <h3 className="text-xl font-serif font-bold leading-snug group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-text/60 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="pt-4">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-sm font-bold text-primary flex items-center space-x-1 group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
