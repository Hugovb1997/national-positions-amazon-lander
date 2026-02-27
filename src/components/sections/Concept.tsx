import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Concept() {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* What Is Operator-Led Orchestration? */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">The Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Is Operator-Led Orchestration?
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Most Amazon brands use separate people and tools for ads, listings, and catalog — none of them talking to each other. The result: your ads spend money your listings can't convert, and your catalog quietly undermines both.
              </p>
              <p>
                <span className="text-white font-semibold">Operator-led orchestration is different.</span> One senior Amazon operator runs your PPC, your listing content, and your catalog structure as a single integrated business. Every decision is made in context of the whole — not in a silo.
              </p>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-brand-green/20 p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-green rounded-full" />
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You're doing $30K+/month on Amazon and want better returns",
                "You've already tried agencies or tools and results haven't held",
                "You want someone to operate your Amazon business — not just manage individual tasks",
                "You care about profitability and efficiency, not just top-line revenue",
                "You sell on Seller Central or Vendor Central across any product category"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-red rounded-full" />
              Not for you if...
            </h3>
            <ul className="space-y-4">
              {[
                "You're looking for the cheapest monthly management fee",
                "You want a tool that runs on autopilot with no human involvement",
                "You want \"AI-powered optimization\" dashboards — not actual operators",
                "You're just starting on Amazon and don't have existing ad spend"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
