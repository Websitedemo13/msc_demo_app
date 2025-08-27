import { motion } from "framer-motion";

interface MSCLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  variant?: "full" | "icon-only" | "text-only";
}

const MSCLogo = ({
  size = "md",
  showText = true,
  className = "",
  variant = "full",
}: MSCLogoProps) => {
  const sizes = {
    sm: {
      container: "flex items-center space-x-2",
      logo: "w-8 h-8",
      mainText: "text-lg font-bold",
      subText: "text-xs",
    },
    md: {
      container: "flex items-center space-x-2",
      logo: "w-10 h-10",
      mainText: "text-xl font-bold",
      subText: "text-sm",
    },
    lg: {
      container: "flex items-center space-x-3",
      logo: "w-12 h-12",
      mainText: "text-2xl font-bold",
      subText: "text-base",
    },
    xl: {
      container: "flex items-center space-x-4",
      logo: "w-16 h-16",
      mainText: "text-3xl font-bold",
      subText: "text-lg",
    },
  };

  const currentSize = sizes[size];

  // UEH + MSC Combined Logo SVG
  const LogoSVG = () => (
    <svg
      className={`${currentSize.logo} flex-shrink-0`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="#1f3a93"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Inner MSC Design */}
      <g transform="translate(60, 60)">
        {/* M */}
        <path
          d="M-35 -20 L-35 20 L-30 20 L-30 -5 L-20 15 L-15 15 L-5 -5 L-5 20 L0 20 L0 -20 L-8 -20 L-17.5 5 L-27 -20 Z"
          fill="white"
          strokeWidth="1"
        />

        {/* S */}
        <path
          d="M5 -20 L5 -15 L20 -15 L20 -5 L5 -5 L5 5 L35 5 L35 0 L10 0 L10 -10 L35 -10 L35 -20 Z"
          fill="white"
          strokeWidth="1"
        />

        {/* C */}
        <path
          d="M5 10 L5 30 L35 30 L35 25 L10 25 L10 15 L35 15 L35 10 Z"
          fill="white"
          strokeWidth="1"
        />
      </g>

      {/* UEH Pattern Elements */}
      <circle cx="60" cy="30" r="3" fill="#ffffff" opacity="0.8" />
      <circle cx="30" cy="60" r="2" fill="#ffffff" opacity="0.6" />
      <circle cx="90" cy="60" r="2" fill="#ffffff" opacity="0.6" />
      <circle cx="60" cy="90" r="3" fill="#ffffff" opacity="0.8" />
    </svg>
  );

  const LogoIcon = () => (
    <motion.div
      className={`${currentSize.logo} bg-msc-gradient rounded-lg flex items-center justify-center`}
      whileHover={{ rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      <LogoSVG />
    </motion.div>
  );

  const LogoText = () => (
    <div className="flex flex-col">
      <motion.div
        className={`${currentSize.mainText} text-gray-900 leading-tight`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        MSC CENTER
      </motion.div>
      <motion.div
        className={`${currentSize.subText} text-gray-500 leading-tight`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        UEH UNIVERSITY
      </motion.div>
    </div>
  );

  if (variant === "icon-only") {
    return <LogoIcon />;
  }

  if (variant === "text-only") {
    return <LogoText />;
  }

  return (
    <motion.div
      className={`${currentSize.container} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <LogoIcon />
      {showText && <LogoText />}
    </motion.div>
  );
};

// Simplified logo for favicons and small spaces
export const MSCLogoSimple = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-10 h-10 bg-msc-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm ${className}`}
  >
    MSC
  </div>
);

// Animated logo for loading screens
export const MSCLogoAnimated = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`flex items-center space-x-3 ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="w-12 h-12 bg-msc-gradient rounded-lg flex items-center justify-center text-white font-bold"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      MSC
    </motion.div>
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="text-2xl font-bold text-gray-900">MSC CENTER</div>
      <div className="text-sm text-gray-500">UEH UNIVERSITY</div>
    </motion.div>
  </motion.div>
);

export default MSCLogo;
