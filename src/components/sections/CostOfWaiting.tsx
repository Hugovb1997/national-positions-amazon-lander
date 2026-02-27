import { motion } from 'motion/react';
import { AlertOctagon, TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CostOfWaiting() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-brand-red font-mono text-xs tracking-widest uppercase mb-4">The Cost of Waiting</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Happens If Nothing Changes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: TrendingDown,
              title: "PPC Waste Compounds",
              desc: "CPCs have risen 15–30% year-over-year in most competitive categories. Every month without strategic management means less efficient spend than the month before."
            },
            {
              icon: AlertOctagon,
              title: "Content Gap Widens",
              desc: "Competitors investing in listing optimization capture conversions you're leaving on the table. Every dollar driving traffic to underperforming listings is worth less than what competitors spend."
            },
            {
              icon: Clock,
              title: "Structural Problems Get Harder",
              desc: "Broken variations, suppressed listings, and backend gaps don't resolve themselves. They compound — splitting reviews, eroding rank that took months to build."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-white/10 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6 text-brand-red">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Waste Callout */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Reality Check</span>
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            The average brand we audit is losing <span className="text-white font-bold">15–25% of their ad spend</span> to structural inefficiency — before we even look at listing conversion rates or catalog health.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 max-w-lg mx-auto border-t border-white/10 pt-8">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">On $10k/mo Budget</p>
              <p className="text-2xl font-bold text-brand-red">$18k–$30k <span className="text-sm text-slate-400 font-normal">/yr waste</span></p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">On $30k/mo Budget</p>
              <p className="text-2xl font-bold text-brand-red">$54k–$90k <span className="text-sm text-slate-400 font-normal">/yr waste</span></p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-400 mb-8 italic">
            Imagine logging into Seller Central and knowing exactly why every number looks the way it does. Your ads driving traffic to listings built to convert. Your catalog clean, connected, and working for you. One senior operator who knows your business, making decisions across all three areas every single day.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See What You're Missing?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Apply below and a senior operator will review your Amazon account and record a personalized video showing exactly where your biggest opportunities are.
          </p>
          
          <Button 
            size="xl" 
            className="mb-12"
            onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
          >
            Yes, I Want to Grow More Profitably →
          </Button>

          <div className="space-y-6 text-slate-500 text-sm border-t border-white/5 pt-12 max-w-2xl mx-auto">
            <p>
              <span className="font-bold text-slate-300">P.S.</span> Every brand we've reviewed has found at least one structural issue silently costing them thousands per month, usually in the space between their PPC, their listings, and their catalog. Your growth plan is free. The waste is not. Get yours here.
            </p>
            <p>
              <span className="font-bold text-slate-300">P.P.S.</span> We take on no more than 8 new accounts per quarter because operator-led orchestration means deep engagement, not high volume. If capacity matters to you, don't wait on this.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
