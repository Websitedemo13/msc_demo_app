import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  ArrowUp,
  MessageSquareText,
  Youtube,
  Linkedin,
  Facebook,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Users,
  Search,
  Heart,
  Share2,
  Download,
  Home,
} from "lucide-react";

/**
 * Enhanced FloatingActionButtons component with mobile-first design
 * Features: Context-aware actions, quick shortcuts, better mobile UX
 */

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Monitor scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close FAB when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Quick action functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const quickCall = () => {
    window.location.href = "tel:+84329381489";
    setIsOpen(false);
  };

  const quickEmail = () => {
    window.location.href = "mailto:msc.edu.vn@gmail.com";
    setIsOpen(false);
  };

  const openChat = () => {
    // In a real app, this would open a chat widget
    alert("Mở chat với MSC Assistant");
    setIsOpen(false);
  };

  const quickSchedule = () => {
    navigate("/schedule");
    setIsOpen(false);
  };

  const quickSearch = () => {
    // Focus on search input or open search modal
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
    setIsOpen(false);
  };

  const shareCurrentPage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "MSC Center",
          text: "Khám phá MSC Center - Trung tâm phát triển kỹ năng",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Đã sao chép link vào clipboard!");
    }
    setIsOpen(false);
  };

  // Context-aware action buttons based on current route
  const getContextualActions = () => {
    const currentPath = location.pathname;
    
    const baseActions = [
      ...(showScrollTop ? [{
        id: "scroll-top",
        icon: ArrowUp,
        action: scrollToTop,
        bgColor: "bg-msc-primary",
        label: "Lên đầu trang",
        priority: 1,
      }] : []),
      {
        id: "chat",
        icon: MessageSquareText,
        action: openChat,
        bgColor: "bg-green-500",
        label: "Chat hỗ trợ",
        priority: 2,
      },
      {
        id: "call",
        icon: Phone,
        action: quickCall,
        bgColor: "bg-blue-500",
        label: "Gọi điện",
        priority: 3,
      },
      {
        id: "search",
        icon: Search,
        action: quickSearch,
        bgColor: "bg-purple-500",
        label: "Tìm kiếm",
        priority: 4,
      },
    ];

    // Add context-specific actions
    if (currentPath.includes('/mentors')) {
      baseActions.splice(2, 0, {
        id: "schedule",
        icon: Calendar,
        action: quickSchedule,
        bgColor: "bg-orange-500",
        label: "Đặt lịch",
        priority: 2.5,
      });
    }

    if (currentPath.includes('/mentors/')) {
      baseActions.splice(1, 0, {
        id: "share",
        icon: Share2,
        action: shareCurrentPage,
        bgColor: "bg-pink-500",
        label: "Chia sẻ",
        priority: 1.5,
      });
    }

    if (currentPath !== '/') {
      baseActions.push({
        id: "home",
        icon: Home,
        action: () => { navigate('/'); setIsOpen(false); },
        bgColor: "bg-gray-600",
        label: "Trang chủ",
        priority: 10,
      });
    }

    // Social media actions (lower priority)
    baseActions.push(
      {
        id: "email",
        icon: Mail,
        action: quickEmail,
        bgColor: "bg-red-500",
        label: "Email",
        priority: 6,
      },
      {
        id: "facebook",
        icon: Facebook,
        action: () => { window.open("https://facebook.com/msc.center", "_blank"); setIsOpen(false); },
        bgColor: "bg-blue-600",
        label: "Facebook",
        priority: 7,
      },
      {
        id: "youtube",
        icon: Youtube,
        action: () => { window.open("https://youtube.com/@mscenter", "_blank"); setIsOpen(false); },
        bgColor: "bg-red-600",
        label: "YouTube",
        priority: 8,
      }
    );

    return baseActions.sort((a, b) => a.priority - b.priority).slice(0, 6); // Limit to 6 actions
  };

  const actionButtons = getContextualActions();

  // Enhanced animation variants with more dynamic positioning
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
    },
    visible: (custom: number) => {
      const angle = (custom * 360) / actionButtons.length;
      const radius = 80;
      const x = -Math.cos((angle * Math.PI) / 180) * radius;
      const y = -Math.sin((angle * Math.PI) / 180) * radius;
      
      return {
        opacity: 1,
        scale: 1,
        x,
        y,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: custom * 0.08,
        },
      };
    },
    exit: (custom: number) => ({
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 0.15,
        delay: (actionButtons.length - custom - 1) * 0.03,
      },
    }),
  };

  // Primary button animations
  const primaryButtonVariants = {
    closed: { 
      rotate: 0,
      scale: 1,
    },
    open: { 
      rotate: 45,
      scale: 1.1,
    },
  };

  // Pulse animation for high-priority actions
  const pulseVariants = {
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.4)",
        "0 0 0 10px rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      {/* Mobile: Fixed position container */}
      <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
        <div className="relative">
          {/* Action Labels (Mobile only) */}
          <AnimatePresence>
            {isOpen && (
              <div className="absolute bottom-20 right-0 w-32 md:hidden">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-black/80 text-white text-xs p-2 rounded-lg text-center"
                >
                  Chọn thao tác nhanh
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Secondary Action Buttons */}
          <AnimatePresence>
            {isOpen && (
              <>
                {actionButtons.map((button, index) => (
                  <motion.div
                    key={button.id}
                    custom={index}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute bottom-0 right-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <Button
                        onClick={button.action}
                        className={`
                          w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-lg border-0 text-white
                          ${button.bgColor} hover:shadow-xl
                          transition-all duration-200
                        `}
                        title={button.label}
                      >
                        <button.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </Button>
                      
                      {/* Desktop tooltip */}
                      <div className="hidden lg:block absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {button.label}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Mobile overlay backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 lg:hidden"
                  onClick={() => setIsOpen(false)}
                />
              </>
            )}
          </AnimatePresence>

          {/* Primary FAB Button */}
          <motion.div
            variants={pulseVariants}
            animate={!isOpen && showScrollTop ? "pulse" : ""}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="
                w-16 h-16 lg:w-18 lg:h-18 rounded-full shadow-2xl border-0 
                bg-msc-gradient text-white hover:shadow-2xl
                transition-all duration-300 relative overflow-hidden
              "
              aria-label={isOpen ? "Đóng menu" : "Mở menu thao tác nhanh"}
            >
              {/* Background ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Icon with rotation animation */}
              <motion.div
                variants={primaryButtonVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 lg:w-7 lg:h-7" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-6 h-6 lg:w-7 lg:h-7" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Button>

            {/* Action count indicator */}
            <AnimatePresence>
              {!isOpen && actionButtons.length > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {actionButtons.length}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Quick Access Bottom Bar (Mobile only - when not on main page) */}
      {location.pathname !== '/' && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 z-40 lg:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center space-x-6">
            <motion.button
              onClick={() => navigate('/')}
              className="flex flex-col items-center py-2 text-gray-600 hover:text-msc-primary transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">Trang chủ</span>
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/mentors')}
              className="flex flex-col items-center py-2 text-gray-600 hover:text-msc-primary transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Users className="w-5 h-5 mb-1" />
              <span className="text-xs">Mentors</span>
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/training')}
              className="flex flex-col items-center py-2 text-gray-600 hover:text-msc-primary transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <BookOpen className="w-5 h-5 mb-1" />
              <span className="text-xs">Đào tạo</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingActionButtons;
