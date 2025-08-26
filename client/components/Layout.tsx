import { ReactNode } from "react";
import Header from "./Header";
import FloatingActionButtons from "./FloatingActionButtons";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className={`${className}`}>{children}</main>
      <FloatingActionButtons />
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-msc-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold">MSC</span>
                </div>
                <div>
                  <div className="text-lg font-bold">MSC CENTER</div>
                  <div className="text-sm text-gray-400">UEH UNIVERSITY</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Mekong Skill Center - Trung tâm phát triển kỹ năng và đào tạo
                chuyên nghiệp.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a
                    href="/training"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Đào tạo
                  </a>
                </li>
                <li>
                  <a
                    href="/mentors"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mentors
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MSC Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
