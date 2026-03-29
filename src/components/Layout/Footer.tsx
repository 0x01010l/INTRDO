import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Interdot</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              The strategic growth partner for ambitious B2B companies. We build high-performance outbound systems that drive real revenue.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-accent transition-colors">B2B Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Strategic Partnerships</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Growth Systems</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Sales Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Get B2B growth insights delivered to your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-1 top-1 bg-accent p-2 rounded-full hover:bg-accent-hover transition-colors">
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© 2026 Interdot Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
