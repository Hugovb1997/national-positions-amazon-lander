import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'How It Works', href: '#solution' },
    { name: 'Growth Plan', href: '#offer' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-brand-dark/80 backdrop-blur-md border-white/5 py-3 shadow-lg" : "bg-transparent py-6"
        )}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red to-orange-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-brand-red/20 group-hover:shadow-brand-red/40 transition-shadow duration-300">
              N
            </div>
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-red transition-colors duration-300">National Positions</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 transition-shadow duration-300"
              onClick={() => window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank')}
            >
              Get Your Growth Plan
            </Button>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                size="xl" 
                className="mt-4 w-full"
                onClick={() => {
                  window.open('https://calendly.com/dave-cassarino-np/30m-meeting', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Get Your Growth Plan
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
