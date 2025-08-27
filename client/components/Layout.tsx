import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import FloatingActionButtons from "./FloatingActionButtons";
import MSCLogo from "./MSCLogo";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showMobileNav?: boolean;
  showDesktopNav?: boolean;
  showFloatingButtons?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 
  className = "",
  showMobileNav = true,
  showDesktopNav = true,
  showFloatingButtons = true,
  showFooter = true,
}: LayoutProps) => {
  const location = useLocation();
  
  // Determine if we should show background on mobile nav based on route
  const showMobileNavBackground = !location.pathname.includes('/mentors/');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navigation - Hidden on mobile */}
      {showDesktopNav && (
        <div className="hidden lg:block">
          <Header />
        </div>
      )}
      
      {/* Mobile Navigation - Visible on mobile/tablet */}
      {showMobileNav && (
        <div className="lg:hidden">
          <MobileNavigation showBackground={showMobileNavBackground} />
        </div>
      )}

      {/* Main Content */}
      <motion.main 
        className={`
          ${showMobileNav || showDesktopNav ? "pt-16 lg:pt-20" : ""} 
          ${className}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>

      {/* Floating Action Buttons */}
      {showFloatingButtons && <FloatingActionButtons />}

      {/* Footer */}
      {showFooter && (
        <motion.footer 
          className="bg-gray-900 text-white py-8 lg:py-12 mt-12 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            {/* Mobile Footer */}
            <div className="lg:hidden">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <MSCLogo size="md" />
                </div>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                  Mekong Skill Center - Trung tâm phát triển kỹ năng và đào tạo chuyên nghiệp.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Liên kết</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                        Giới thiệu
                      </a>
                    </li>
                    <li>
                      <a href="/training" className="text-gray-400 hover:text-white transition-colors">
                        Đào tạo
                      </a>
                    </li>
                    <li>
                      <a href="/mentors" className="text-gray-400 hover:text-white transition-colors">
                        Mentors
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>📧 msc.edu.vn@gmail.com</p>
                    <p>📞 (+84) 329 381 489</p>
                    <p>📍 UEH University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Footer */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              <div>
                <div className="mb-4">
                  <MSCLogo size="md" />
                </div>
                <p className="text-gray-400 text-sm">
                  Mekong Skill Center - Trung tâm phát triển kỹ năng và đào tạo chuyên nghiệp.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="/training" className="text-gray-400 hover:text-white transition-colors">
                      Đào tạo
                    </a>
                  </li>
                  <li>
                    <a href="/mentors" className="text-gray-400 hover:text-white transition-colors">
                      Mentors
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>📧 msc.edu.vn@gmail.com</p>
                  <p>📞 (+84) 329 381 489</p>
                  <p>📍 UEH University</p>
                </div>
              </div>
            </div>

            <motion.div 
              className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>&copy; 2024 MSC Center. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.footer>
      )}
    </div>
  );
};

export default Layout;
