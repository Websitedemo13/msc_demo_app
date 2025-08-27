import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MSCLogo from "./MSCLogo";
import {
  Menu,
  X,
  Home,
  Users,
  BookOpen,
  MessageSquare,
  User,
  Settings,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  Heart,
  Award,
  Calendar,
  MapPin,
  Share,
  FolderOpen,
} from "lucide-react";
import { MobileButton } from "./MobileOptimizedCard";

interface MobileNavigationProps {
  showBackground?: boolean;
}

const MobileNavigation = ({ showBackground = true }: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to scroll for backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { path: "/", label: "Trang chủ", icon: Home },
    { path: "/about", label: "Giới thiệu", icon: User },
    { path: "/training", label: "Đào tạo", icon: BookOpen },
    { path: "/projects", label: "Dự án", icon: FolderOpen },
    { path: "/mentors", label: "Mentors", icon: Users },
    { path: "/mscer", label: "MSCer", icon: Award },
    { path: "/dong-hanh", label: "Đồng hành", icon: Heart },
    { path: "/articles", label: "Chia sẻ", icon: Share },
    { path: "/contact", label: "Liên hệ", icon: MessageSquare },
  ];

  const quickActions = [
    { label: "Thông báo", icon: Bell, badge: 3, onClick: () => {} },
    { label: "Yêu thích", icon: Heart, onClick: () => navigate("/favorites") },
    { label: "Lịch học", icon: Calendar, onClick: () => navigate("/schedule") },
    { label: "Thành tích", icon: Award, onClick: () => navigate("/achievements") },
  ];

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Header */}
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${showBackground ? (isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
            : "bg-transparent") 
          : "bg-white/95 backdrop-blur-md border-b border-gray-200"}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MSCLogo size="sm" showText={true} className="hidden sm:flex" />
            <MSCLogo size="sm" variant="icon-only" className="sm:hidden" />
          </Link>

          {/* Center Search (Hidden on small screens) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-msc-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <motion.button
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </motion.button>

            {/* Menu Toggle */}
            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm mentors, khóa học..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-msc-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.header>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Menu Header */}
              <div className="bg-msc-gradient p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* User Profile Section */}
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Nguyễn Văn A</p>
                    <p className="text-white/80 text-sm">Học viên MSC</p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Items */}
              <div className="py-6">
                <div className="px-6 mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Điều hướng
                  </h3>
                </div>
                
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isCurrent = isCurrentPath(item.path);
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`
                          flex items-center px-6 py-3 transition-colors relative overflow-hidden
                          ${isCurrent 
                            ? "bg-msc-blue-50 text-msc-primary border-r-4 border-msc-primary" 
                            : "text-gray-700 hover:bg-gray-50"
                          }
                        `}
                      >
                        <Icon className={`w-5 h-5 mr-3 ${isCurrent ? "text-msc-primary" : "text-gray-400"}`} />
                        <span className="font-medium">{item.label}</span>
                        
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 bg-msc-primary/5"
                            layoutId="activeMenuItem"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="py-4 border-t border-gray-200">
                <div className="px-6 mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Thao tác nhanh
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 px-6">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    
                    return (
                      <motion.button
                        key={index}
                        onClick={action.onClick}
                        className="relative flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 text-gray-600 mb-2" />
                        <span className="text-xs font-medium text-gray-700">{action.label}</span>
                        
                        {action.badge && (
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            {action.badge}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Settings & Logout */}
              <div className="py-4 border-t border-gray-200">
                <motion.button
                  className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Settings className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="font-medium">Cài đặt</span>
                </motion.button>
                
                <motion.button
                  className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span className="font-medium">Đăng xuất</span>
                </motion.button>
              </div>

              {/* Footer */}
              <div className="py-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">UEH University</span>
                </div>
                <p className="text-xs text-gray-400">
                  © 2024 MSC Center. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
