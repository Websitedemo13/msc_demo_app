import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MSCLogo from "./MSCLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "GIỚI THIỆU", href: "/about" },
    { name: "ĐÀO TẠO", href: "/training" },
    { name: "DỰ ÁN", href: "/projects" },
    { name: "MENTORS", href: "/mentors" },
    { name: "MSCER", href: "/mscer" },
    { name: "ĐỒNG HÀNH", href: "/dong-hanh" },
    { name: "CHIA SẺ", href: "/articles" },
    { name: "LIÊN HỆ", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-msc-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>msc.edu.vn@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(+84) 329 381 489</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⭐ Mekong Skill Center</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>VN</span>
              </div>
              <Link
                to="/login"
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Đăng nh��p</span>
              </Link>
              <Link
                to="/register"
                className="bg-white text-msc-primary px-3 py-1 rounded text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                Đăng ký
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-msc-primary"
              >
                Hỗ sơ năng lực
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <MSCLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-msc-primary ${
                  isActive(item.href)
                    ? "text-msc-primary border-b-2 border-msc-primary pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-msc-primary hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-msc-primary ${
                    isActive(item.href) ? "text-msc-primary" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
