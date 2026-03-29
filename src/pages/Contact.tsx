import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Let's Build Your <span className="text-gradient">Growth Engine</span>.</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to scale your B2B revenue? Fill out the form or book a call directly. Our strategists are ready to help you win.
                </p>
              </motion.div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email Us</h4>
                    <p className="text-gray-600">growth@interdot.agency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Visit Us</h4>
                    <p className="text-gray-600">123 Growth Ave, San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-[2rem] text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <Calendar className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold">Prefer a direct call?</h3>
                </div>
                <p className="text-gray-400 mb-8">Pick a time that works for you on our founder's calendar.</p>
                <button className="w-full py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent-hover transition-all">
                  Book on Calendly
                </button>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 p-10 md:p-16 rounded-[3rem] shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Work Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">How can we help?</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tell us about your growth goals..."
                  />
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center group shadow-lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 pt-4">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
