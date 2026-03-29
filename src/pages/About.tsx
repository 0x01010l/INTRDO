import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
                We're on a mission to humanize <span className="text-gradient">B2B Growth</span>.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Interdot was founded on a simple premise: B2B outreach shouldn't feel like spam. We believe in building genuine partnerships through strategic, human-first communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/team-office/800/1000"
                  alt="Our Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent rounded-[2rem] p-8 text-primary flex flex-col justify-center hidden md:flex shadow-xl">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="font-bold text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting as a small team of sales strategists, we noticed a massive gap in the market. Companies were either doing manual, unscalable outreach or using "spray and pray" automation that damaged their brand.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We built Interdot to bridge that gap. By combining sophisticated data systems with high-level strategic thinking, we've helped over 100 companies scale their revenue and build lasting partnerships.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">To empower B2B companies with predictable, high-quality growth systems.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">To become the global standard for strategic outbound partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">The Interdot Way</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our core values guide every decision we make and every campaign we launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-8 h-8 text-accent" />, title: "Human-First", desc: "We prioritize genuine connection over automated volume." },
              { icon: <Award className="w-8 h-8 text-accent" />, title: "Excellence", desc: "We don't settle for 'good enough'. We aim for market-leading results." },
              { icon: <Globe className="w-8 h-8 text-accent" />, title: "Transparency", desc: "Clear communication and honest reporting at every step." },
              { icon: <Users className="w-8 h-8 text-accent" />, title: "Partnership", desc: "We treat your business as if it were our own." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-3xl hover:border-accent transition-colors">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Meet the Strategists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A diverse team of experts dedicated to your growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Alex Rivers", role: "Founder & CEO", img: "https://picsum.photos/seed/alex/400/400" },
              { name: "Sarah Chen", role: "Head of Strategy", img: "https://picsum.photos/seed/sarah/400/400" },
              { name: "Marcus Thorne", role: "Director of Partnerships", img: "https://picsum.photos/seed/marcus/400/400" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Want to join our journey?</h2>
          <p className="text-xl text-gray-600 mb-12">We're always looking for talented strategists and growth experts.</p>
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/90 transition-all inline-flex items-center">
            Work With Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
