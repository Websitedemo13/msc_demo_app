import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import MobileOptimizedCard, { MobileButton } from "@/components/MobileOptimizedCard";
import { 
  Users, 
  Star, 
  Trophy, 
  Target,
  Calendar,
  MapPin,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";

const MSCer = () => {
  // Mock data for MSCers
  const mscers = [
    {
      id: "pham-hoang-minh-khanh",
      name: "Phạm Hoàng Minh Khánh",
      title: "GIÁM ĐỐC MSC",
      company: "MSC",
      avatar: "/api/placeholder/200/200",
      yearGraduated: "2022",
      currentPosition: "Trưởng phòng Marketing, Phó Giám đốc tại Smentor",
      achievement: "Nhà sáng lập đa ngành, Giảng viên & Chuyên gia tư vấn chiến lược",
      successStory: "Kiến thức và kỹ năng được hệ thống hóa tại các trung tâm đào tạo đã trở thành nền tảng vững chắc, giúp tôi tự tin sáng lập và điều hành hiệu quả nhiều doanh nghiệp.",
      skills: ["Leadership", "Marketing", "Strategy", "Business Development"],
      projects: 15,
      experience: "5+ năm",
      rating: 4.9,
    },
    {
      id: "nguyen-thi-lan-anh",
      name: "Nguyễn Thị Lan Anh",
      title: "SENIOR DEVELOPER",
      company: "FPT Software",
      avatar: "/api/placeholder/200/200",
      yearGraduated: "2021",
      currentPosition: "Senior Full-stack Developer tại FPT Software",
      achievement: "Chuyên gia công nghệ, Team Lead dự án quốc tế",
      successStory: "MSC đã trang bị cho tôi nền tảng kỹ thuật vững chắc và soft skills cần thiết để phát triển sự nghiệp trong lĩnh vực công nghệ.",
      skills: ["React", "Node.js", "Python", "Cloud Computing"],
      projects: 25,
      experience: "4+ năm",
      rating: 4.8,
    },
    {
      id: "tran-minh-duc",
      name: "Trần Minh Đức",
      title: "PRODUCT MANAGER",
      company: "Shopee Vietnam",
      avatar: "/api/placeholder/200/200",
      yearGraduated: "2020",
      currentPosition: "Senior Product Manager tại Shopee Vietnam",
      achievement: "Quản lý sản phẩm hàng đầu, Chuyên gia UX/UI",
      successStory: "Kiến thức về quản trị và phân tích dữ liệu từ MSC giúp tôi hiểu sâu về user behavior và xây dựng sản phẩm thành công.",
      skills: ["Product Management", "Data Analysis", "UX/UI", "Agile"],
      projects: 12,
      experience: "6+ năm",
      rating: 4.9,
    },
    {
      id: "le-thi-minh-chau",
      name: "Lê Thị Minh Châu",
      title: "MARKETING DIRECTOR",
      company: "VinGroup",
      avatar: "/api/placeholder/200/200",
      yearGraduated: "2019",
      currentPosition: "Marketing Director tại VinGroup",
      achievement: "Chuyên gia marketing số, Diễn giả hàng đầu",
      successStory: "MSC không chỉ dạy kiến thức mà còn rèn luyện tư duy chiến lược, giúp tôi dẫn dắt các chiến dịch marketing quy mô lớn.",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Leadership"],
      projects: 30,
      experience: "7+ năm",
      rating: 4.9,
    },
  ];

  const stats = [
    { label: "Tổng MSCer", value: "500+", icon: Users, color: "blue" },
    { label: "Tỷ lệ thành công", value: "95%", icon: TrendingUp, color: "green" },
    { label: "Vị trí cao cấp", value: "150+", icon: Trophy, color: "orange" },
    { label: "Mức lương trung bình", value: "25M+", icon: Target, color: "purple" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="bg-msc-gradient py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Users className="w-10 h-10" />
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cộng đồng MSCer
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Nơi hội tụ những câu chuyện thành công, những gương mặt ưu tú đã trưởng thành từ các chương trình đào tạo của MSC Center.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* MSCers Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Gương mặt tiêu biểu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những câu chuyện thành công được viết nên bởi chính tay các MSCer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mscers.map((mscer, index) => (
              <motion.div
                key={mscer.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <MobileOptimizedCard className="h-full">
                  <div className="p-6">
                    {/* Header with Avatar */}
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-msc-gradient rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">
                            {mscer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-yellow-800 fill-current" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{mscer.name}</h3>
                        <p className="text-msc-primary font-semibold text-sm">{mscer.title}</p>
                        <p className="text-gray-600 text-xs">{mscer.company}</p>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-yellow-800 text-sm font-medium">{mscer.achievement}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-lg font-bold text-gray-900">{mscer.yearGraduated}</span>
                        </div>
                        <span className="text-xs text-gray-500">Tốt nghiệp</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Briefcase className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-lg font-bold text-gray-900">{mscer.projects}</span>
                        </div>
                        <span className="text-xs text-gray-500">Dự án</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                          <span className="text-lg font-bold text-gray-900">{mscer.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">Đánh giá</span>
                      </div>
                    </div>

                    {/* Success Story Preview */}
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        "{mscer.successStory}"
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {mscer.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-msc-blue-50 text-msc-primary text-xs rounded-full border border-msc-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {mscer.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{mscer.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link to={`/mscer/${mscer.id}`}>
                      <MobileButton variant="primary" fullWidth>
                        Xem câu chuyện
                        <ArrowRight className="w-4 h-4" />
                      </MobileButton>
                    </Link>
                  </div>
                </MobileOptimizedCard>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MobileButton variant="secondary" size="lg">
              Xem thêm MSCer
              <ArrowRight className="w-5 h-5" />
            </MobileButton>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="bg-gray-900 py-12 md:py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Bạn muốn trở thành MSCer tiếp theo?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Tham gia các chương trình đào tạo của MSC Center để viết nên câu chuyện thành công của riêng bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/training">
                <MobileButton variant="primary" size="lg">
                  <GraduationCap className="w-5 h-5" />
                  Khám phá khóa học
                </MobileButton>
              </Link>
              <Link to="/mentors">
                <MobileButton variant="secondary" size="lg">
                  <Users className="w-5 h-5" />
                  Tìm mentor
                </MobileButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default MSCer;
