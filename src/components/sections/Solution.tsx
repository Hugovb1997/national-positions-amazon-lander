import { motion } from 'motion/react';

const steps = [
  {
    step: "01",
    title: "Strategy Call",
    desc: "30 minutes with a senior operator — not a sales rep. We pull up your account together and identify the biggest gaps across PPC, listings, and catalog."
  },
  {
    step: "02",
    title: "Full-Account Audit",
    desc: "We map your campaign architecture, flag branded spend waste, check listing-to-ad alignment on your top ASINs, and surface every catalog issue — broken variations, suppressions, backend gaps. You get a prioritized action plan across all three areas."
  },
  {
    step: "03",
    title: "Campaign Restructure",
    desc: "We rebuild your PPC architecture from the ground up — separate campaigns by objective, eliminate self-competition, reallocate branded waste to high-intent non-brand terms. Every campaign is built around your actual catalog and margins."
  },
  {
    step: "04",
    title: "Listing & Content Alignment",
    desc: "We optimize your highest-traffic listings based on what the PPC data reveals — which search terms convert, which bounce, where the content doesn't match buyer intent. A+ Content, images, and backend keywords all updated in coordination with the new campaign structure."
  },
  {
    step: "05",
    title: "Catalog Cleanup & Structure",
    desc: "We fix broken variations, resolve suppressions, rebuild parent-child structures, and fill backend keyword gaps. Every fix is coordinated with your ad strategy so campaigns are adjusted the same day."
  },
  {
    step: "06",
    title: "Ongoing Integrated Operation",
    desc: "Your senior operator manages PPC, listings, and catalog as one business — every day. When something changes (a new product, a competitor move, a suppression), they respond across all three areas before the damage compounds."
  }
];

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        {/* How It Works */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              From First Call to Full Operation
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              No long onboarding. No learning on your dime. Here's exactly what happens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-brand-gold/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-4xl font-bold text-brand-gold/20">{item.step}</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-brand-gold font-mono text-xs tracking-widest uppercase">Step {item.step}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
