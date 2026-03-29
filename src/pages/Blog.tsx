import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';

const posts = [
  {
    title: "The 2026 Guide to B2B Outbound Strategy",
    excerpt: "Why traditional cold calling is dying and what's replacing it in the modern sales stack.",
    author: "Alex Rivers",
    date: "March 15, 2026",
    category: "Strategy",
    img: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    title: "How to Personalize at Scale Without Losing the Human Touch",
    excerpt: "The perfect balance between AI-driven data and human-led strategic communication.",
    author: "Sarah Chen",
    date: "March 10, 2026",
    category: "Growth",
    img: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    title: "5 Partnership Models That Drive 7-Figure Revenue",
    excerpt: "Exploring the most effective ways to structure B2B strategic partnerships for long-term ROI.",
    author: "Marcus Thorne",
    date: "March 5, 2026",
    category: "Partnerships",
    img: "https://picsum.photos/seed/blog3/800/500"
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-primary mb-6">Insights for Growth</h1>
            <p className="text-xl text-gray-600">Expert advice on B2B lead generation, strategic partnerships, and scaling your revenue engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 text-accent" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Growth Insights Weekly</h2>
          <p className="text-gray-400 mb-10">Join 5,000+ B2B founders and sales leaders who receive our weekly breakdown.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-full py-4 px-8 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
