import { motion } from 'motion/react';
import { AlertTriangle, EyeOff, Layers, FileWarning, X, Check } from 'lucide-react';

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Why Your Amazon Channel Feels Broken */}
        <div className="text-center mb-16">
          <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Your Amazon Channel Feels Broken
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We've audited 50+ brand accounts. Almost every one has the same setup: separate people and tools touching PPC, listings, and catalog. <span className="text-white">None of them talking to each other.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
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
              className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
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

        {/* Operator Gap Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-card border border-brand-gold/30 p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
          <h3 className="text-2xl font-bold text-white mb-4">
            We call this the <span className="text-brand-gold">Operator Gap</span>.
          </h3>
          <p className="text-slate-300 text-lg">
            The space between managing individual Amazon tasks and actually operating an Amazon business. Point solutions can't fix a problem that exists between the points.
          </p>
        </motion.div>

        {/* The Difference */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Point Solutions vs. Operator-Led Orchestration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What You Have Now */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">What You Have Now</h3>
              <ul className="space-y-4">
                {[
                  "Separate people/tools for PPC, listings, and catalog - none talking to each other",
                  "PPC optimized on bid data alone, blind to listing quality and catalog health",
                  "Content updates disconnected from what ad data says buyers want",
                  "Junior analysts following playbooks or black-box automation running rules",
                  "Catalog issues persist for months because nobody owns the full picture"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operator-Led Orchestration */}
            <div className="bg-brand-card border border-brand-gold/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold text-brand-gold mb-6 border-b border-white/10 pb-4">Operator-Led Orchestration</h3>
              <ul className="space-y-4">
                {[
                  "One senior operator running PPC, listings, and catalog as a single integrated business",
                  "Every ad dollar spent with full context of what's happening across the whole account",
                  "Content changes driven by real PPC data - measurable impact in weeks",
                  "Senior operators applying strategic judgment, not following scripts",
                  "Catalog health monitored continuously - problems caught before they compound"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <AlertTriangle className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium">Bottom line: Same channel. <span className="text-white font-bold">Completely different results.</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}
