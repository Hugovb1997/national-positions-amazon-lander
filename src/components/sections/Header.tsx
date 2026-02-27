import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-red to-orange-600 flex items-center justify-center font-bold text-white text-xl">
            N
          </div>
          <span className="text-xl font-bold text-white tracking-tight">National Positions</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#results" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Results</a>
          <a href="#solution" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How It Works</a>
          <a href="#offer" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Growth Plan</a>
        </nav>

        <Button 
          size="sm" 
          onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
        >
          Get Your Growth Plan
        </Button>
      </div>
    </header>
  );
}
