import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
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
    <section id="results" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {cases.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-card border border-white/10 rounded-2xl p-8 hover:border-brand-green/30 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-mono tracking-wider text-brand-gold uppercase mb-2">{study.category}</div>
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-dark transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-brand-dark" />
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {study.desc}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5">
                {study.results.map((res, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono uppercase tracking-wide">{res.label}</span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-green transition-colors">{res.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* By The Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/5 pt-16">
          {[
            { label: "Brand accounts audited", value: "50+" },
            { label: "In Amazon ad spend managed", value: "$10M+" },
            { label: "Industries served", value: "5" },
            { label: "Avg. waste found in audits", value: "15-25%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
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
            onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
          >
            Yes, I Want to Grow More Profitably →
          </Button>
        </div>

      </div>
    </section>
  );
}
