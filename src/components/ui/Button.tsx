import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide relative overflow-hidden group";
    
    const variants = {
      primary: "bg-brand-red text-white shadow-[0_0_20px_-5px_rgba(254,1,0,0.5)] hover:shadow-[0_0_30px_-5px_rgba(254,1,0,0.7)] border border-white/10",
      secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
      outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white hover:border-white/40",
      ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase tracking-wider",
      md: "h-11 px-6 text-sm uppercase tracking-wider",
      lg: "h-14 px-8 text-base uppercase tracking-wider",
      xl: "h-16 px-10 text-lg uppercase tracking-widest"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
