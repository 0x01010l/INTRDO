import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Handshake, BarChart3 } from 'lucide-react';

const services = [
  {
    id: 'lead-gen',
    icon: <Target className="w-12 h-12 text-accent" />,
    title: "B2B Lead Generation",
    description: "High-performance outbound systems designed to fill your calendar with qualified prospects.",
    benefits: [
      "Predictable pipeline growth",
      "Access to high-level decision makers",
      "Reduced cost per acquisition",
      "Scalable outreach infrastructure"
    ],
    process: [
      "ICP & Persona Development",
      "Multi-channel Outreach Strategy",
      "Copywriting & Sequence Design",
      "Lead Sourcing & Enrichment"
    ],
    results: "Average 15-30 qualified meetings per month."
  },
  {
    id: 'partnerships',
    icon: <Handshake className="w-12 h-12 text-accent" />,
    title: "Strategic Partnerships",
    description: "Unlock new revenue streams by building high-value relationships with strategic partners.",
    benefits: [
      "Accelerated market entry",
      "Leveraged trust and authority",
      "Passive lead generation channels",
      "Long-term strategic value"
    ],
    process: [
      "Partner Ecosystem Mapping",
      "Outreach & Relationship Building",
      "Deal Structuring & Negotiation",
      "Onboarding & Management"
    ],
    results: "3-5 high-impact partnerships secured within 6 months."
  },
  {
    id: 'growth-systems',
    icon: <BarChart3 className="w-12 h-12 text-accent" />,
    title: "Growth Systems",
    description: "The technical backbone of your sales engine. We optimize your tools for maximum output.",
    benefits: [
      "Eliminated manual data entry",
      "Full visibility into sales funnel",
      "Higher conversion rates",
      "Automated follow-up workflows"
    ],
    process: [
      "CRM Audit & Optimization",
      "Sales Stack Integration",
      "Automation Workflow Design",
      "Performance Dashboard Setup"
    ],
    results: "40% increase in sales team productivity."
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide the strategic framework and operational execution needed to scale your B2B revenue predictably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, i) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="p-4 bg-accent/10 rounded-2xl inline-block">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Our Process</h4>
                    <ul className="space-y-3">
                      {service.process.map((step, j) => (
                        <li key={j} className="flex items-start text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-1.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-primary rounded-2xl text-white">
                  <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Expected Results</div>
                  <div className="text-xl font-bold">{service.results}</div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-accent text-primary px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-all group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden relative group">
                  <img
                    src={`https://picsum.photos/seed/${service.id}/800/800`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Not sure which service is right for you?</h2>
          <p className="text-xl text-gray-400 mb-12">Book a free 15-minute growth audit and we'll map out a custom strategy for your business.</p>
          <Link
            to="/contact"
            className="bg-white text-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-accent transition-all inline-flex items-center"
          >
            Book Your Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
