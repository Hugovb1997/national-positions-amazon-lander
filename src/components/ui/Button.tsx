import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";
    
    const variants = {
      primary: "bg-gradient-to-b from-[#FE0100] to-[#FE0100]/50 text-white hover:shadow-[0_0_20px_rgba(254,1,0,0.4)] border-t border-white/20 shadow-lg",
      secondary: "bg-gradient-to-b from-[#262626] to-[#000000] text-white border border-white/10 hover:border-white/20",
      outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white",
      ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase",
      md: "h-11 px-6 text-sm uppercase",
      lg: "h-14 px-8 text-base uppercase",
      xl: "h-16 px-10 text-lg uppercase"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
