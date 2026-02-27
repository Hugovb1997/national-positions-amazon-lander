import { motion } from 'motion/react';
import { ArrowUpRight, BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const cases = [
  {
    category: "Health & Wellness",
    title: "Supplements Brand",
    desc: "$22K/mo ad spend, 38% ACOS, declining organic rank after two agencies. 62% of ad spend was on branded terms they ranked #1 for organically. Top listings had outdated A+ Content. Ads were driving traffic — listings were losing the sale.",
    results: [
      { label: "ACOS", value: "19% (from 38%)" },
      { label: "Non-brand revenue", value: "+140%" },
      { label: "Conversion rate", value: "+34%" },
      { label: "Total revenue", value: "+85%" }
    ]
  },
  {
    category: "Hard Goods",
    title: "Safety Equipment",
    desc: "$35K/mo across 200+ campaigns. Performance \"plateaued\" after 3 tools, 2 agencies. Campaign patchwork from 3 management approaches. Bidding against itself on 40+ keywords. 23 broken variations splitting reviews. The catalog was the bottleneck — not PPC.",
    results: [
      { label: "ROAS", value: "5.1x (from 2.8x)" },
      { label: "Monthly revenue", value: "+47%" },
      { label: "Ad spend", value: "-12%" },
      { label: "Saved", value: "15+ hrs/week" }
    ]
  },
  {
    category: "Consumer Electronics",
    title: "Accessories Brand",
    desc: "$180K/mo revenue, stuck at a ceiling for over a year. Spend up = efficiency collapse. All products shared budget pools. Listings optimized for wrong search terms. 3 top SKUs had incorrect variation themes preventing shoppers from finding the right product.",
    results: [
      { label: "Monthly revenue", value: "$290K" },
      { label: "Revenue increase", value: "+61%" },
      { label: "ROAS", value: "4.2x maintained" },
      { label: "TACoS", value: "11% (from 14%)" }
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="results" className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">Results</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            What Operator-Led Orchestration Produces
          </motion.h2>
          <p className="text-lg text-slate-400">
            When PPC, listings, and catalog are finally working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {cases.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-card border border-white/10 rounded-3xl p-8 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors duration-500" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <div className="text-xs font-mono tracking-wider text-brand-gold uppercase mb-2 border-b border-brand-gold/20 inline-block pb-1">{study.category}</div>
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 shrink-0 border border-white/10 group-hover:border-brand-gold group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-brand-dark" />
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                {study.desc}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5 relative z-10">
                {study.results.map((res, j) => (
                  <div key={j} className="flex justify-between items-center group/item">
                    <span className="text-xs text-slate-500 font-mono uppercase tracking-wide group-hover/item:text-slate-400 transition-colors">{res.label}</span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{res.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* By The Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-white/5 pt-16 relative">
          {[
            { label: "Brand accounts audited", value: "50+", icon: Users },
            { label: "In Amazon ad spend managed", value: "$10M+", icon: BarChart3 },
            { label: "Industries served", value: "5", icon: PieChart },
            { label: "Avg. waste found in audits", value: "15-25%", icon: TrendingUp }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-4 text-slate-400 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-all duration-300 border border-white/10 group-hover:border-brand-gold/30">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{stat.value}</div>
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-white font-medium mb-8">
            If you've read this far, you already know whether this describes your situation.
          </p>
          <Button 
            size="xl" 
            className="shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)] transition-shadow duration-300"
            onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
          >
            Yes, I Want to Grow More Profitably →
          </Button>
        </div>

      </div>
    </section>
  );
}
