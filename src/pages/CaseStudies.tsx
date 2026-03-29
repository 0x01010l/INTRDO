import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const cases = [
  {
    client: "CloudScale AI",
    type: "Series A SaaS",
    problem: "Struggling to break into enterprise accounts despite a superior product.",
    strategy: "Account-Based Marketing (ABM) combined with hyper-personalized LinkedIn outreach.",
    results: [
      { label: "Meetings Booked", value: "42" },
      { label: "Pipeline Generated", value: "$1.2M" },
      { label: "Response Rate", value: "12%" }
    ],
    img: "https://picsum.photos/seed/case1/800/600"
  },
  {
    client: "Nexus Logistics",
    type: "Global Logistics Provider",
    problem: "Reliance on inbound leads was causing inconsistent revenue cycles.",
    strategy: "Built a custom cold email engine targeting supply chain directors.",
    results: [
      { label: "New Partnerships", value: "8" },
      { label: "Revenue Growth", value: "35%" },
      { label: "ROI", value: "14x" }
    ],
    img: "https://picsum.photos/seed/case2/800/600"
  },
  {
    client: "FinTech Flow",
    type: "B2B Payment Processor",
    problem: "High churn in the mid-market segment and low brand awareness.",
    strategy: "Strategic partnership campaign targeting complementary SaaS platforms.",
    results: [
      { label: "Partner Referrals", value: "150+" },
      { label: "Market Reach", value: "2M+" },
      { label: "CAC Reduction", value: "28%" }
    ],
    img: "https://picsum.photos/seed/case3/800/600"
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Proven Results.</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We let our numbers do the talking. Explore how we've helped B2B companies across industries scale their revenue and build lasting partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="flex-1 p-10 md:p-16 space-y-8">
                <div>
                  <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">{item.type}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{item.client}</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider">The Challenge</h4>
                    <p className="text-gray-600">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Our Strategy</h4>
                    <p className="text-gray-600">{item.strategy}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {item.results.map((res, j) => (
                    <div key={j} className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="text-2xl font-bold text-primary">{res.value}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{res.label}</div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-primary font-bold group-hover:text-accent transition-colors">
                  View Detailed Breakdown <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to be our next success story?</h2>
          <p className="text-xl mb-12 font-medium opacity-80">Let's discuss how we can apply these strategies to your business.</p>
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/90 transition-all inline-flex items-center">
            Start Your Growth Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
