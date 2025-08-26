import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface MobileOptimizedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const MobileOptimizedCard = ({ 
  children, 
  className = "", 
  hover = true,
  onClick 
}: MobileOptimizedCardProps) => {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      className={`
        border-0 shadow-md bg-white/95 backdrop-blur-sm
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { 
        y: -4,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent className="p-0">
        {children}
      </CardContent>
    </MotionCard>
  );
};

// Mobile-first button component
interface MobileButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const MobileButton = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  onClick,
  className = "",
  disabled = false
}: MobileButtonProps) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-msc-gradient text-white shadow-lg hover:shadow-xl border-0",
    secondary: "bg-white text-msc-primary border-2 border-msc-primary hover:bg-msc-primary hover:text-white shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-msc-primary hover:bg-msc-blue-50 border-0"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]", 
    lg: "px-8 py-4 text-lg min-h-[56px]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${widthClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default MobileOptimizedCard;
