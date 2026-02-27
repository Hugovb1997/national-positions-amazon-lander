import { motion } from 'motion/react';
import { AlertOctagon, TrendingDown, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CostOfWaiting() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <p className="text-brand-red font-mono text-xs tracking-widest uppercase mb-4">The Cost of Waiting</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Happens If Nothing Changes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
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
              className="bg-brand-card border border-white/10 p-8 rounded-3xl hover:border-brand-red/30 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform duration-300 border border-brand-red/20">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Waste Callout */}
        <div className="bg-gradient-to-br from-brand-card to-brand-dark border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20 mb-8 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Reality Check</span>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
            The average brand we audit is losing <span className="text-white font-bold border-b-2 border-brand-red/50">15–25% of their ad spend</span> to structural inefficiency — before we even look at listing conversion rates or catalog health.
          </p>
          
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto border-t border-white/10 pt-10">
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">On $10k/mo Budget</p>
              <p className="text-3xl font-bold text-brand-red">$18k–$30k</p>
              <p className="text-sm text-slate-500 mt-1">/yr waste</p>
            </div>
            <div className="text-center border-l border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-mono">On $30k/mo Budget</p>
              <p className="text-3xl font-bold text-brand-red">$54k–$90k</p>
              <p className="text-sm text-slate-500 mt-1">/yr waste</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <p className="text-lg text-slate-400 mb-10 italic leading-relaxed">
            "Imagine logging into Seller Central and knowing exactly why every number looks the way it does. Your ads driving traffic to listings built to convert. Your catalog clean, connected, and working for you. One senior operator who knows your business, making decisions across all three areas every single day."
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See What You're Missing?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Apply below and a senior operator will review your Amazon account and record a personalized video showing exactly where your biggest opportunities are.
          </p>
          
          <Button 
            size="xl" 
            className="mb-16 shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)] transition-shadow duration-300"
            onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
          >
            Yes, I Want to Grow More Profitably <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="space-y-6 text-slate-500 text-sm border-t border-white/5 pt-12 max-w-2xl mx-auto text-left bg-white/[0.02] p-8 rounded-2xl border border-white/5">
            <p className="flex gap-3">
              <span className="font-bold text-brand-gold shrink-0">P.S.</span> 
              <span>Every brand we've reviewed has found at least one structural issue silently costing them thousands per month, usually in the space between their PPC, their listings, and their catalog. Your growth plan is free. The waste is not. Get yours here.</span>
            </p>
            <p className="flex gap-3">
              <span className="font-bold text-brand-gold shrink-0">P.P.S.</span> 
              <span>We take on no more than 8 new accounts per quarter because operator-led orchestration means deep engagement, not high volume. If capacity matters to you, don't wait on this.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
