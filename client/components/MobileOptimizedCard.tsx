import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
  onClick,
}: MobileOptimizedCardProps) => {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      className={`
        border-0 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden
        ${hover ? "hover:shadow-xl transition-all duration-300" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
      whileTap={onClick ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <CardContent className="p-0">{children}</CardContent>
    </MotionCard>
  );
};

// Enhanced Mobile Button component with multiple variants and animations
interface MobileButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "success"
    | "warning"
    | "danger"
    | "outline-primary"
    | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  pulse?: boolean;
  glow?: boolean;
}

export const MobileButton = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  onClick,
  className = "",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  pulse = false,
  glow = false,
}: MobileButtonProps) => {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

  const variants = {
    primary: "bg-msc-gradient text-white shadow-lg hover:shadow-xl border-0",
    secondary:
      "bg-white text-msc-primary border-2 border-msc-primary hover:bg-msc-primary hover:text-white shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-msc-primary hover:bg-msc-blue-50 border-0",
    success:
      "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl border-0",
    warning:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl border-0",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl border-0",
    "outline-primary":
      "bg-transparent text-msc-primary border-2 border-msc-primary hover:bg-msc-blue-50",
    gradient:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl border-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px]",
    xl: "px-10 py-5 text-xl min-h-[64px]",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";
  const glowClass =
    glow && variant === "primary" ? "shadow-msc-primary/30" : "";

  return (
    <motion.button
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${widthClass}
        ${pulseClass}
        ${glowClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Loading spinner */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl"
          >
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button content */}
      <motion.div
        className={`flex items-center gap-2 ${loading ? "opacity-0" : "opacity-100"}`}
        transition={{ duration: 0.2 }}
      >
        {Icon && iconPosition === "left" && (
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}

        <span>{children}</span>

        {Icon && iconPosition === "right" && (
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0.1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

// Floating Action Button
interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  className?: string;
  tooltip?: string;
  pulse?: boolean;
}

export const FloatingActionButton = ({
  icon: Icon,
  onClick,
  variant = "primary",
  position = "bottom-right",
  className = "",
  tooltip,
  pulse = false,
}: FloatingActionButtonProps) => {
  const variants = {
    primary: "bg-msc-gradient text-white shadow-2xl",
    secondary:
      "bg-white text-msc-primary shadow-2xl border-2 border-msc-primary",
    success:
      "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-2xl",
  };

  const positions = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <motion.button
      className={`
        fixed w-14 h-14 rounded-full flex items-center justify-center z-50
        ${variants[variant]}
        ${positions[position]}
        ${pulse ? "animate-pulse" : ""}
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      title={tooltip}
    >
      <Icon className="w-6 h-6" />

      {/* Pulse rings */}
      {pulse && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-current"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-current"
            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </>
      )}
    </motion.button>
  );
};

// Card Button for action cards
interface CardButtonProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  onClick?: () => void;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
  badge?: string;
}

export const CardButton = ({
  title,
  description,
  icon: Icon,
  onClick,
  variant = "default",
  className = "",
  badge,
}: CardButtonProps) => {
  const variants = {
    default:
      "bg-white border-gray-200 hover:border-msc-primary text-gray-900 hover:text-msc-primary",
    primary:
      "bg-msc-blue-50 border-msc-primary text-msc-primary hover:bg-msc-primary hover:text-white",
    success:
      "bg-green-50 border-green-200 text-green-700 hover:bg-green-500 hover:text-white",
    warning:
      "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-500 hover:text-white",
  };

  return (
    <motion.button
      className={`
        w-full p-4 border-2 rounded-2xl transition-all duration-300 text-left relative overflow-hidden
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3">
        <motion.div
          className="flex-shrink-0"
          whileHover={{ rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-base">{title}</h3>
            {badge && (
              <motion.span
                className="px-2 py-1 text-xs font-medium bg-current text-white rounded-full opacity-80"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {badge}
              </motion.span>
            )}
          </div>
          {description && (
            <p className="text-sm opacity-80 line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-current opacity-0"
        whileHover={{ opacity: 0.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// Toggle Button
interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export const ToggleButton = ({
  isActive,
  onToggle,
  children,
  icon: Icon,
  className = "",
}: ToggleButtonProps) => {
  return (
    <motion.button
      className={`
        px-4 py-2 rounded-full border-2 transition-all duration-300 flex items-center gap-2
        ${
          isActive
            ? "bg-msc-primary text-white border-msc-primary"
            : "bg-white text-msc-primary border-msc-primary hover:bg-msc-blue-50"
        }
        ${className}
      `}
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {Icon && (
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
      )}
      <span className="text-sm font-medium">{children}</span>
    </motion.button>
  );
};

export default MobileOptimizedCard;
