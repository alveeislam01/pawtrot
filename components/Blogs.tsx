import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blogs: React.FC = () => {
  const posts = [
    {
      title: "Why Dry Food vs. Wet Food Matters",
      excerpt: "Understanding the hydration needs of your cat is crucial. Learn when to mix wet food into their diet.",
      image: "https://images.unsplash.com/photo-1511044568932-338cba0fb803?q=80&w=600&auto=format&fit=crop",
      date: "Oct 12, 2024",
      author: "Dr. Sarah Meow"
    },
    {
      title: "Top 5 Signs Your Cat is Picky",
      excerpt: "Is your cat turning their nose up at dinner? Here are the behavioral signs of a fussy eater.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
      date: "Oct 08, 2024",
      author: "Pawtrot Team"
    },
    {
      title: "The Importance of Taurine",
      excerpt: "Why this essential amino acid is the building block of your cat's heart and eye health.",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600&auto=format&fit=crop",
      date: "Sep 28, 2024",
      author: "Dr. Sarah Meow"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-pawtrot-red font-bold tracking-widest text-xs uppercase mb-2 block">The Pawtrot Blog</span>
          <h1 className="font-display text-5xl text-pawtrot-brown">Paws & Reflect</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pawtrot-brown flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-pawtrot-brown mb-4 leading-tight group-hover:text-pawtrot-red transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                   <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <User className="w-4 h-4" /> {post.author}
                   </div>
                   <button className="text-pawtrot-nav font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Read More <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;