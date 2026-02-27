import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Concept() {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        {/* What Is Operator-Led Orchestration? */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <p className="text-brand-gold font-mono text-xs tracking-widest uppercase border-b border-brand-gold/30 pb-1">The Philosophy</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              What Is Operator-Led Orchestration?
            </h2>
            <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <p>
                Most Amazon brands use separate people and tools for ads, listings, and catalog — none of them talking to each other. The result: your ads spend money your listings can't convert, and your catalog quietly undermines both.
              </p>
              <div className="bg-white/5 border-l-4 border-brand-gold p-6 md:p-8 rounded-r-xl text-left">
                <p className="text-white font-medium italic">
                  "Operator-led orchestration is different. One senior Amazon operator runs your PPC, your listing content, and your catalog structure as a single integrated business. Every decision is made in context of the whole — not in a silo."
                </p>
              </div>
              <p>
                You're not adding another tool or another vendor for one piece. You're getting someone who actually operates your Amazon channel.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Is This For You? */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* For You */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-brand-green/20 p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-brand-green/40 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-green/15 transition-colors duration-500" />
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30">
                <Check className="w-5 h-5 text-brand-green" />
              </div>
              This is for you if...
            </h3>
            <ul className="space-y-5">
              {[
                "You're doing $30K+/month on Amazon and want better returns",
                "You've already tried agencies or tools and results haven't held",
                "You want someone to operate your Amazon business — not just manage individual tasks",
                "You care about profitability and efficiency, not just top-line revenue",
                "You sell on Seller Central or Vendor Central across any product category"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden hover:bg-white/[0.07] transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center border border-brand-red/30">
                <X className="w-5 h-5 text-brand-red" />
              </div>
              Not for you if...
            </h3>
            <ul className="space-y-5">
              {[
                "You're looking for the cheapest monthly management fee",
                "You want a tool that runs on autopilot with no human involvement",
                "You want \"AI-powered optimization\" dashboards — not actual operators",
                "You're just starting on Amazon and don't have existing ad spend"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
