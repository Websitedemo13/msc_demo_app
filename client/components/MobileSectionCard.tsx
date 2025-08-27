import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
import MobileOptimizedCard from "./MobileOptimizedCard";

interface MobileSectionCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  defaultExpanded?: boolean;
  expandable?: boolean;
  iconColor?: string;
  iconBgColor?: string;
  badge?: string | number;
  className?: string;
}

const MobileSectionCard = ({
  title,
  icon: Icon,
  children,
  defaultExpanded = true,
  expandable = true,
  iconColor = "text-msc-primary",
  iconBgColor = "bg-msc-blue-100",
  badge,
  className = "",
}: MobileSectionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <MobileOptimizedCard className={className}>
      <div className="p-4">
        <motion.button
          className={`w-full flex items-center justify-between ${expandable ? "cursor-pointer" : "cursor-default"}`}
          onClick={toggleExpanded}
          whileTap={expandable ? { scale: 0.98 } : {}}
        >
          <div className="flex items-center">
            <motion.div
              className={`w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center mr-3`}
              whileHover={expandable ? { rotate: 10 } : {}}
              transition={{ duration: 0.2 }}
            >
              <Icon className={`w-5 h-5 ${iconColor}`} />
            </motion.div>
            
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              {badge && (
                <motion.span
                  className="px-2 py-1 text-xs font-medium bg-msc-primary text-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {badge}
                </motion.span>
              )}
            </div>
          </div>
          
          {expandable && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          )}
        </motion.button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MobileOptimizedCard>
  );
};

// Info Item Component for displaying key-value pairs
interface InfoItemProps {
  label: string;
  value: string;
  icon?: LucideIcon;
}

export const InfoItem = ({ label, value, icon: Icon }: InfoItemProps) => {
  return (
    <motion.div 
      className="flex justify-between items-center py-2"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        {Icon && <Icon className="w-4 h-4 mr-2 text-gray-400" />}
        <span className="text-gray-600 text-sm">{label}</span>
      </div>
      <span className="font-medium text-sm text-right max-w-[60%]">{value}</span>
    </motion.div>
  );
};

// List Item Component for displaying bullet points
interface ListItemProps {
  children: ReactNode;
  icon?: LucideIcon;
  color?: "blue" | "green" | "purple" | "orange" | "red" | "gray";
  delay?: number;
}

export const ListItem = ({ 
  children, 
  icon: Icon, 
  color = "blue",
  delay = 0 
}: ListItemProps) => {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500", 
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    gray: "bg-gray-500",
  };

  const bgColors = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50", 
    orange: "bg-orange-50",
    red: "bg-red-50",
    gray: "bg-gray-50",
  };

  const textColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600", 
    red: "text-red-600",
    gray: "text-gray-600",
  };

  return (
    <motion.div 
      className={`flex items-start p-3 ${bgColors[color]} rounded-lg`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {Icon ? (
        <Icon className={`w-4 h-4 mr-3 ${textColors[color]} flex-shrink-0 mt-0.5`} />
      ) : (
        <div className={`w-2 h-2 ${colors[color]} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
      )}
      <div className="text-gray-700 text-sm">{children}</div>
    </motion.div>
  );
};

// Timeline Item for work history or chronological data
interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
  isLast?: boolean;
  delay?: number;
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  isLast = false,
  delay = 0
}: TimelineItemProps) => {
  return (
    <motion.div
      className={`relative pl-6 pb-4 ${!isLast ? "border-l-2 border-blue-200" : ""}`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.div 
        className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
      />
      
      <motion.div 
        className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col mb-2">
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          {subtitle && (
            <p className="text-blue-600 font-medium text-sm">{subtitle}</p>
          )}
          <span className="text-xs text-gray-500 mt-1">{period}</span>
        </div>
        {description && (
          <p className="text-xs text-gray-600 mt-2">{description}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

// Skills Grid Component
interface SkillsGridProps {
  skills: string[];
  color?: "blue" | "green" | "purple" | "orange";
}

export const SkillsGrid = ({ skills, color = "blue" }: SkillsGridProps) => {
  const colors = {
    blue: "bg-msc-blue-50 text-msc-primary border-msc-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className={`
              inline-block px-3 py-1 text-xs font-medium rounded-full border
              ${colors[color]}
            `}
          >
            {skill}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// Stats Card Component
interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color?: "blue" | "green" | "purple" | "orange" | "red";
  onClick?: () => void;
}

export const StatsCard = ({ 
  label, 
  value, 
  icon: Icon, 
  color = "blue",
  onClick 
}: StatsCardProps) => {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600", 
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
  };

  return (
    <motion.div
      className={`
        bg-gradient-to-br ${colors[color]} p-4 rounded-2xl text-white
        ${onClick ? "cursor-pointer" : ""}
      `}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05, y: -2 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-6 h-6 text-white/80" />
        <motion.span 
          className="text-2xl font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {value}
        </motion.span>
      </div>
      <p className="text-white/90 text-sm font-medium">{label}</p>
    </motion.div>
  );
};

export default MobileSectionCard;
