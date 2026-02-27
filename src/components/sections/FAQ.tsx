import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How is this different from a regular Amazon agency?",
    answer: "Most agencies assign separate teams to PPC, listings, and catalog, and those teams don't coordinate. We assign one senior operator to your entire account. They make every decision across ads, content, and catalog in context of the whole business. That integration is the difference."
  },
  {
    question: "What if we already have an agency managing our PPC?",
    answer: "That's the most common situation we see. Your growth plan will show you exactly where the gaps are between your PPC management and your listing/catalog performance. If your current setup is working, we'll tell you. If it's not, you'll see specifically why."
  },
  {
    question: "What does the first 30 days look like?",
    answer: "We focus entirely on efficiency. We review PPC, listings, and catalog structure, restructure what's broken, validate what's working, and establish a performance baseline. No forced budget increases. No sweeping changes without data. You see everything we're doing and why."
  },
  {
    question: "What kind of brands do you work with?",
    answer: "We work with brands on Seller Central and Vendor Central across CPG, hard goods, health and wellness, consumer electronics, and pet products. If you're doing $30K+/month on Amazon and want better returns, apply for your growth plan and we'll tell you whether we're a fit."
  },
  {
    question: "How many accounts do you take on?",
    answer: "No more than 8 new accounts per quarter. Operator-led orchestration means deep engagement, not high volume. Each operator manages a small portfolio so they can actually know your business, not just your dashboards."
  },
  {
    question: "What's included in the growth plan?",
    answer: "A senior operator reviews your account and records a personalized video walkthrough covering your PPC structure, listing-ad alignment, catalog health, and a prioritized action plan. You keep it whether or not you work with us."
  },
  {
    question: "What does this cost?",
    answer: "Management fees are based on account complexity and ad spend level. But consider: the average brand we audit is losing 15-25% of their ad spend to structural inefficiency alone. On a $30K/month ad budget, that's $54,000-$90,000 per year in waste. Our fee is a fraction of the waste we eliminate. Apply for your growth plan and we'll give you a clear picture of the numbers before you commit to anything."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-mono text-xs tracking-widest uppercase mb-4">Questions</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "bg-brand-card border rounded-xl overflow-hidden transition-all duration-300",
                openIndex === i ? "border-brand-gold/30 bg-white/[0.03]" : "border-white/10 hover:border-white/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={cn(
                  "font-bold text-lg pr-8 transition-colors duration-300",
                  openIndex === i ? "text-brand-gold" : "text-white"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                  openIndex === i ? "bg-brand-gold border-brand-gold text-brand-dark rotate-180" : "border-white/20 text-white"
                )}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
