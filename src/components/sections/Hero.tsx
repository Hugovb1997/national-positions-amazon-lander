import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-brand-gold font-mono text-xs tracking-widest uppercase">For Amazon brands doing $30K+/month</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            How to Grow Amazon Revenue While <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Becoming Disgustingly Profitable</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            The problem wasn't the agencies. It wasn't the tools. It was that nobody was running your ads, listings, and catalog together. We put one senior operator in control of all three. <span className="text-white font-semibold">We call it operator-led orchestration.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
            >
              Yes, I Want to Grow More Profitably →
            </Button>
            <Button 
              variant="secondary"
              size="xl"
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Client Results
            </Button>
          </div>
        </motion.div>

        {/* Video Container with Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-orange-600 rounded-2xl blur opacity-20" />
          
          <div className="relative aspect-video bg-brand-card rounded-2xl border border-white/10 overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Placeholder for video thumbnail - using a dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <p className="text-white font-bold text-xl mb-2">The Operator Gap Explained</p>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <span className="bg-white/10 px-2 py-1 rounded">3:45</span>
                <span>National Positions Strategy Team</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trusted By Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-center text-xs font-mono text-brand-gold/50 uppercase tracking-[0.3em] mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos to keep it clean */}
             {['Guardian Angel Devices', 'Lifecell', 'Augason Farms', 'Safariland', 'Blackstrap', 'Damage Control'].map((brand) => (
               <span key={brand} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default">{brand}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
