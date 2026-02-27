import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-500 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-red to-orange-600 flex items-center justify-center font-bold text-white text-lg">
                N
              </div>
              <span className="text-lg font-bold text-white tracking-tight">National Positions</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Operator-led orchestration for Amazon brands. We integrate ads, listings, and catalog management to drive profitable growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#results" className="hover:text-brand-red transition-colors">Results</a></li>
              <li><a href="#solution" className="hover:text-brand-red transition-colors">How It Works</a></li>
              <li><a href="#offer" className="hover:text-brand-red transition-colors">Growth Plan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} National Positions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
