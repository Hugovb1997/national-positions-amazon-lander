import { motion } from 'motion/react';
import { AlertTriangle, EyeOff, Layers, FileWarning, X, Check } from 'lucide-react';

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        {/* Why Your Amazon Channel Feels Broken */}
        <div className="text-center mb-20">
          <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Your Amazon Channel Feels Broken
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We've audited 50+ brand accounts. Almost every one has the same setup: separate people and tools touching PPC, listings, and catalog. <span className="text-white font-medium border-b border-brand-red/50">None of them talking to each other.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: EyeOff,
              title: "PPC Runs Blind",
              desc: "The person managing bids doesn't know your best listing just had its main image rejected, or that a key ASIN was suppressed. They keep spending. Performance degrades. Nobody connects the cause."
            },
            {
              icon: Layers,
              title: "Listings Polished in a Vacuum",
              desc: "Content gets updated without knowing which products get the most ad traffic, which search terms convert, or where the gaps are. The content looks better. Sales don't move."
            },
            {
              icon: FileWarning,
              title: "Catalog Problems Compound",
              desc: "Broken variations split reviews. Suppressed listings kill momentum on products you're advertising. Backend keyword gaps mean you're not indexed for terms you're paying to rank on."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform duration-300 border border-brand-red/20">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Operator Gap Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-card border border-brand-gold/30 p-10 md:p-14 rounded-3xl text-center max-w-4xl mx-auto mb-24 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
          
          <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
            We call this the <span className="text-brand-gold">Operator Gap</span>.
          </h3>
          <p className="text-slate-300 text-xl relative z-10 leading-relaxed">
            The space between managing individual Amazon tasks and actually operating an Amazon business. <span className="text-white font-medium">Point solutions can't fix a problem that exists between the points.</span>
          </p>
        </motion.div>

        {/* The Difference */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">The Difference</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Point Solutions vs. Operator-Led Orchestration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* What You Have Now */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative">
              <h3 className="text-xl font-bold text-slate-300 mb-8 border-b border-white/10 pb-4 flex items-center justify-between">
                What You Have Now
                <X className="w-6 h-6 text-brand-red opacity-50" />
              </h3>
              <ul className="space-y-6">
                {[
                  "Separate people/tools for PPC, listings, and catalog - none talking to each other",
                  "PPC optimized on bid data alone, blind to listing quality and catalog health",
                  "Content updates disconnected from what ad data says buyers want",
                  "Junior analysts following playbooks or black-box automation running rules",
                  "Catalog issues persist for months because nobody owns the full picture"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/20">
                      <X className="w-3 h-3 text-brand-red" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operator-Led Orchestration */}
            <div className="bg-brand-card border border-brand-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_-20px_rgba(212,175,55,0.15)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold text-brand-gold mb-8 border-b border-brand-gold/20 pb-4 flex items-center justify-between">
                Operator-Led Orchestration
                <Check className="w-6 h-6 text-brand-gold" />
              </h3>
              <ul className="space-y-6">
                {[
                  "One senior operator running PPC, listings, and catalog as a single integrated business",
                  "Every ad dollar spent with full context of what's happening across the whole account",
                  "Content changes driven by real PPC data - measurable impact in weeks",
                  "Senior operators applying strategic judgment, not following scripts",
                  "Catalog health monitored continuously - problems caught before they compound"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-gold/30">
                      <Check className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-slate-400 bg-white/5 px-8 py-4 rounded-full border border-white/10 backdrop-blur-sm">
            <AlertTriangle className="w-5 h-5 text-brand-gold" />
            <span className="text-base font-medium">Bottom line: Same channel. <span className="text-white font-bold">Completely different results.</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}
