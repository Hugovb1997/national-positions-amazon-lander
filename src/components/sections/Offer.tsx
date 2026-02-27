import { motion } from 'motion/react';
import { Check, AlertOctagon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Offer() {
  return (
    <section id="offer" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        
        {/* The Offer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold font-mono text-xs tracking-widest uppercase font-semibold">The Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Personalized Amazon Growth Plan
          </h2>
          <p className="text-xl text-slate-400">
            A <span className="text-white font-bold">senior operator</span> reviews your account and records a custom video walkthrough showing exactly where your revenue and profit opportunities are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="prose prose-lg text-slate-400">
              <p>
                Apply below and, if you qualify, here's what you'll receive — whether or not you ever work with us:
              </p>
            </div>
            <ul className="space-y-6">
              {[
                { title: "PPC structure assessment", desc: "The exact campaign architecture flaws costing you money, and the first three things to fix" },
                { title: "Branded vs. non-brand analysis", desc: "The specific percentage of your budget going to clicks you'd get for free (it's usually 40-60%)" },
                { title: "Listing-to-ad alignment check", desc: "Which of your top listings are actually losing the sale, and the search terms that reveal why" },
                { title: "Catalog health flags", desc: "The hidden issues silently bleeding you thousands per month that nobody has flagged" },
                { title: "Prioritized action plan", desc: "The 3-5 highest-leverage changes that could shift performance within 30 days" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/20">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-lg mb-1">{item.title}</span>
                    <span className="text-slate-400 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-white/5 border-l-4 border-brand-gold p-6 rounded-r-xl">
              <p className="text-slate-300 italic">
                "This isn't a generic PDF or an automated report. It's a personalized video recorded by the senior operator who actually reviewed your account."
              </p>
            </div>
          </div>
          
          <div className="bg-brand-card p-1 rounded-3xl relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-gold/20 to-transparent opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500" />
            <div className="bg-brand-dark p-8 md:p-10 rounded-[22px] relative h-full border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">Get Your Growth Plan</h3>
                <p className="text-slate-400 mb-8">A senior operator reviews your account and records a custom video walkthrough of your biggest opportunities.</p>
                
                <div className="space-y-3 mb-8 text-left bg-white/5 p-6 rounded-2xl border border-white/5">
                  {[
                    "PPC structure review",
                    "Listing-ad alignment check",
                    "Catalog health flags",
                    "Prioritized action plan",
                    "Custom video walkthrough"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-gold" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="xl" 
                  className="w-full mb-6 shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)] transition-shadow duration-300"
                  onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
                >
                  Yes, I Want to Grow More Profitably →
                </Button>
                
                <p className="text-xs text-slate-500">
                  Limited to 8 new accounts per quarter. If your account is already running tight, we'll tell you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our 30-Day Commitment</h3>
          <div className="space-y-6 text-slate-400 leading-relaxed text-center max-w-3xl mx-auto text-lg">
            <p>
              The first 30 days are focused entirely on efficiency. No forced budget increases. No sweeping changes without data. We restructure what's broken, validate what's working, and establish a performance baseline before we scale anything.
            </p>
            <p>
              You get a senior operator on your account from day one. Not a junior analyst. Not an onboarding team that disappears after week one. The person who reviewed your account is the person who manages it — every day.
            </p>
            <p className="font-medium text-white border-t border-white/10 pt-6 mt-6">
              If we don't identify at least 15% in wasted or misallocated spend in the first 30 days, you owe us nothing. No cancellation fee. No awkward conversation. If your account is already running tight, we have zero interest in pretending otherwise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
