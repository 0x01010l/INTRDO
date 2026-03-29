import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                B2B GROWTH PARTNER
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-8">
                We Build Your <span className="text-gradient">Growth Engine</span> While You Close Deals.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Stop chasing leads and start building partnerships. We deploy high-performance outbound systems that book qualified meetings with your dream clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center group"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why High-Growth Teams Choose Interdot</h2>
            <p className="text-lg text-gray-600">We don't just send emails. We build strategic outbound ecosystems designed for long-term scalability and ROI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: "Results-Driven",
                description: "Our success is measured by your revenue growth, not just open rates or vanity metrics."
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Human-First Outreach",
                description: "We combine automation with deep personalization to ensure every touchpoint feels authentic."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Strategic Thinking",
                description: "We act as an extension of your team, constantly optimizing your funnel for maximum efficiency."
              }
            ].map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{prop.icon}</div>
                <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Done-For-You Growth Services</h2>
              <p className="text-lg text-gray-600">From sourcing the right partners to closing complex B2B deals, we handle the heavy lifting of your outbound strategy.</p>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center hover:underline">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "B2B Lead Generation",
                list: ["Cold Email Systems", "LinkedIn Outreach", "Meeting Booking", "Lead Research"],
                cta: "Scale Your Pipeline"
              },
              {
                title: "Strategic Partnerships",
                list: ["Partner Sourcing", "Outreach Strategy", "Deal Structuring", "Relationship Management"],
                cta: "Find Your Partners"
              },
              {
                title: "Growth Systems",
                list: ["CRM Optimization", "Sales Automation", "Funnel Design", "Data Analytics"],
                cta: "Optimize Your Sales"
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-primary rounded-3xl p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/40 transition-colors" />
                <h3 className="text-2xl font-bold mb-8">{service.title}</h3>
                <ul className="space-y-4 mb-10">
                  {service.list.map((item, j) => (
                    <li key={j} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-block w-full text-center py-4 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Our 4-Step Growth Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach to building a predictable revenue engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            {[
              { step: "01", title: "Strategy", desc: "Deep dive into your ICP and value prop." },
              { step: "02", title: "Infrastructure", desc: "Setting up high-deliverability systems." },
              { step: "03", title: "Execution", desc: "Launching multi-channel outreach campaigns." },
              { step: "04", title: "Optimization", desc: "Scaling what works and refining the rest." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-accent font-bold mb-4 block">FEATURED CASE STUDY</span>
              <h2 className="text-4xl font-bold mb-6">How we helped a Series A SaaS book 42 enterprise meetings in 90 days.</h2>
              <p className="text-lg text-gray-600 mb-8">
                By restructuring their outbound messaging and targeting high-intent decision makers, we achieved a 12% positive response rate.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-primary">42</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Meetings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Response Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$1.2M</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Pipeline</div>
                </div>
              </div>
              <Link to="/case-studies" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all inline-flex items-center">
                Read Full Story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-white rounded-3xl shadow-xl overflow-hidden relative group">
                <img
                  src="https://picsum.photos/seed/agency/800/600"
                  alt="Case Study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent rounded-[3rem] p-12 md:p-20 text-primary"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Growth Engine?</h2>
            <p className="text-xl mb-10 text-primary/80 max-w-2xl mx-auto font-medium">
              We only work with a handful of clients at a time to ensure maximum results. Book your strategy call today to see if we're a fit.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-primary/90 transition-all shadow-xl inline-flex items-center"
            >
              Book Your Call Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
