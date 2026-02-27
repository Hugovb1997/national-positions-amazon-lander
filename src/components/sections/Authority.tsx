import { motion } from 'motion/react';
import { Trophy, TrendingUp, Calendar } from 'lucide-react';

export function Authority() {
  return (
    <section className="py-20 bg-brand-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
            Work with an agency that's grown <span className="text-brand-gold">1600+ brands</span> in the last <span className="text-brand-gold">21 years</span> — well over <span className="text-brand-gold">$800M</span> in revenue in total
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">1,600+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-mono">Brands Grown</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">21 Years</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-mono">Track Record</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">$800M+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-mono">Revenue Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
