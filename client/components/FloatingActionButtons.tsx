import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  X, 
  ArrowUp, 
  MessageSquareText, 
  Youtube, 
  Linkedin, 
  Facebook 
} from "lucide-react";

/**
 * @file FloatingActionButtons.tsx
 * @context A highly polished, reusable FAB component for the MSC app.
 * @description Implements a primary button that reveals a menu of secondary actions with a spring-based arc animation.
 * @style Minimalist, professional, using the project's design system.
 */

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  // Social media actions
  const openChat = () => {
    alert("Mở chat với MSC Assistant");
    setIsOpen(false);
  };

  const openYouTube = () => {
    window.open("https://youtube.com/@mscenter", "_blank");
    setIsOpen(false);
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/company/msc-center", "_blank");
    setIsOpen(false);
  };

  const openFacebook = () => {
    window.open("https://facebook.com/msc.center", "_blank");
    setIsOpen(false);
  };

  // Action buttons configuration
  const actionButtons = [
    ...(showScrollTop ? [{
      id: 'scroll-top',
      icon: ArrowUp,
      action: scrollToTop,
      hoverColor: 'hover:text-msc-primary hover:bg-msc-blue-50',
      label: 'Lên đầu trang'
    }] : []),
    {
      id: 'chat',
      icon: MessageSquareText,
      action: openChat,
      hoverColor: 'hover:text-teal-600 hover:bg-teal-50',
      label: 'Chat với Assistant'
    },
    {
      id: 'youtube',
      icon: Youtube,
      action: openYouTube,
      hoverColor: 'hover:text-red-600 hover:bg-red-50',
      label: 'YouTube'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      action: openLinkedIn,
      hoverColor: 'hover:text-blue-600 hover:bg-blue-50',
      label: 'LinkedIn'
    },
    {
      id: 'facebook',
      icon: Facebook,
      action: openFacebook,
      hoverColor: 'hover:text-blue-500 hover:bg-blue-50',
      label: 'Facebook'
    }
  ];

  // Animation variants for secondary buttons
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      x: 0,
      y: 0
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      x: -Math.cos((custom * Math.PI) / 6) * 80, // Arc animation
      y: -Math.sin((custom * Math.PI) / 6) * 80,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        delay: custom * 0.1
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.3,
      x: 0,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Primary button icon animation
  const primaryIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Secondary Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <>
              {actionButtons.map((button, index) => (
                <motion.div
                  key={button.id}
                  custom={index + 1}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute bottom-0 right-0"
                >
                  <Button
                    onClick={button.action}
                    className={`
                      w-12 h-12 rounded-2xl shadow-lg border-0 bg-white text-gray-500 
                      transition-all duration-200 hover:shadow-xl hover:scale-110
                      ${button.hoverColor}
                    `}
                    title={button.label}
                  >
                    <button.icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
              
              {/* Overlay backdrop for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </AnimatePresence>

        {/* Primary FAB Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="
              w-16 h-16 rounded-2xl shadow-xl border-0 
              bg-msc-gradient text-white hover:shadow-2xl
              transition-all duration-300
            "
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          >
            <motion.div
              variants={primaryIconVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Plus className="w-6 h-6" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
