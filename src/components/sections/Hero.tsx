import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-md shadow-[0_0_20px_-10px_rgba(212,175,55,0.3)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold font-mono text-xs tracking-widest uppercase font-semibold">For Amazon brands doing $30K+/month</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-6xl mx-auto">
            How to Grow Amazon Revenue While <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold bg-[length:200%_auto] animate-gradient">Becoming Disgustingly Profitable</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            The problem wasn't the agencies. It wasn't the tools. It was that nobody was running your ads, listings, and catalog together. We put one senior operator in control of all three. <span className="text-white font-medium border-b border-brand-gold/30 pb-0.5">We call it operator-led orchestration.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              size="xl" 
              className="shadow-[0_0_30px_-10px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)] transition-shadow duration-300"
              onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
            >
              Yes, I Want to Grow More Profitably →
            </Button>
            <Button 
              variant="secondary"
              size="xl"
              className="border-white/10 hover:bg-white/5"
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Client Results
            </Button>
          </div>
        </motion.div>

        {/* Video Container with Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/20 via-brand-red/10 to-transparent rounded-3xl blur-2xl opacity-50" />
          
          <div className="relative aspect-video bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group cursor-pointer shadow-2xl ring-1 ring-white/5">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300 border border-white/20 shadow-lg group-hover:shadow-brand-gold/20">
                <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:text-brand-gold group-hover:fill-brand-gold transition-colors" />
              </div>
            </div>
            
            {/* Placeholder for video thumbnail - using a dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            
            {/* Video UI Elements */}
            <div className="absolute top-6 left-6 z-20">
              <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-xs font-medium text-white/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                Operator-Led Orchestration
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-bold text-xl mb-2">The Operator Gap Explained</p>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <span className="bg-white/10 px-2 py-1 rounded border border-white/5 font-mono text-xs">3:45</span>
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
          className="mt-24 pt-12 border-t border-white/5 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark px-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
            Trusted By
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
             {/* Text placeholders for logos to keep it clean */}
             {['Guardian Angel Devices', 'Lifecell', 'Augason Farms', 'Safariland', 'Blackstrap', 'Damage Control'].map((brand) => (
               <span key={brand} className="text-lg md:text-xl font-bold text-white/30 hover:text-white transition-colors cursor-default">{brand}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
