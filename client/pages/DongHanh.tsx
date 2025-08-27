import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import MobileOptimizedCard, { MobileButton } from "@/components/MobileOptimizedCard";
import { 
  Handshake,
  Building,
  Users,
  Target,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const DongHanh = () => {
  // Partner categories
  const partnerCategories = [
    {
      title: "Đối tác Giáo dục",
      icon: GraduationCap,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Các trường đại học và tổ chức giáo dục uy tín"
    },
    {
      title: "Đối tác Doanh nghiệp", 
      icon: Building,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Các công ty và tập đoàn hàng đầu"
    },
    {
      title: "Đối tác Công nghệ",
      icon: Target,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Các nhà cung cấp công nghệ và giải pháp số"
    },
    {
      title: "Đối tác Quốc tế",
      icon: Globe,
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Các tổ chức và đối tác từ nhiều quốc gia"
    }
  ];

  // Featured partners
  const featuredPartners = [
    {
      name: "Đại học Kinh tế TP.HCM (UEH)",
      type: "Giáo dục",
      logo: "/api/placeholder/100/60",
      description: "Đối tác chiến lược trong phát triển chương trình đào tạo chất lượng cao",
      partnership: "Đối tác chiến lược",
      since: "2020",
      website: "https://ueh.edu.vn",
      benefits: ["Chương trình đào tạo chuyên sâu", "Chứng chỉ uy tín", "Cơ hội việc làm"]
    },
    {
      name: "VinGroup",
      type: "Doanh nghiệp",
      logo: "/api/placeholder/100/60",
      description: "Hợp tác trong đào tạo nhân lực và phát triển dự án công nghệ",
      partnership: "Đối tác tuyển dụng",
      since: "2021",
      website: "https://vingroup.net",
      benefits: ["Cơ hội thực tập", "Tuyển dụng ưu tiên", "Dự án thực tế"]
    },
    {
      name: "FPT Corporation",
      type: "Công nghệ",
      logo: "/api/placeholder/100/60",
      description: "Đồng hành trong chương trình đào tạo công nghệ và chuyển đổi số",
      partnership: "Đối tác công nghệ",
      since: "2019",
      website: "https://fpt.com.vn",
      benefits: ["Công nghệ tiên tiến", "Đào tạo kỹ thuật", "Mentorship"]
    },
    {
      name: "Microsoft Vietnam",
      type: "Công nghệ",
      logo: "/api/placeholder/100/60",
      description: "Cung cấp nền tảng và công cụ học tập hiện đại cho sinh viên",
      partnership: "Đối tác công nghệ",
      since: "2022",
      website: "https://microsoft.com/vi-vn",
      benefits: ["Gi��y phép phần mềm", "Đào tạo chứng chỉ", "Cloud platform"]
    },
    {
      name: "Samsung Vietnam",
      type: "Doanh nghiệp",
      logo: "/api/placeholder/100/60",
      description: "Hợp tác nghiên cứu và phát triển các giải pháp công nghệ sáng tạo",
      partnership: "Đối tác R&D",
      since: "2021",
      website: "https://samsung.com/vn",
      benefits: ["Nghiên cứu ứng dụng", "Học bổng", "Trang thiết bị"]
    },
    {
      name: "Shopee Vietnam",
      type: "Công nghệ",
      logo: "/api/placeholder/100/60",
      description: "Đào tạo kỹ năng thương mại điện tử và marketing số",
      partnership: "Đối tác đào tạo",
      since: "2023",
      website: "https://shopee.vn",
      benefits: ["Thực tập có lương", "Dự án e-commerce", "Kỹ năng marketing"]
    }
  ];

  // Partnership benefits
  const partnershipBenefits = [
    {
      title: "Mở rộng cơ hội việc làm",
      description: "Kết nối trực tiếp với các nhà tuyển dụng uy tín",
      icon: Briefcase,
      color: "blue"
    },
    {
      title: "Chương trình đào tạo chất lượng",
      description: "Nội dung cập nhật theo xu hướng thị trường",
      icon: GraduationCap,
      color: "green"
    },
    {
      title: "Công nghệ tiên tiến",
      description: "Tiếp cận các công cụ và nền tảng hàng đầu",
      icon: Target,
      color: "purple"
    },
    {
      title: "Mạng lưới đối tác toàn cầu",
      description: "Cơ hội hợp tác và phát triển quốc tế",
      icon: Globe,
      color: "orange"
    }
  ];

  // Statistics
  const stats = [
    { label: "Đối tác", value: "50+", icon: Handshake, color: "blue" },
    { label: "Quốc gia", value: "15+", icon: Globe, color: "green" },
    { label: "Học viên được tuyển dụng", value: "2000+", icon: Users, color: "orange" },
    { label: "Dự án hợp tác", value: "100+", icon: Award, color: "purple" },
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
            <Handshake className="w-10 h-10" />
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Đối tác & Đồng hành
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sức mạnh của MSC Center được tạo nên từ mạng lưới đối tác uy tín, cùng chung một tầm nhìn về phát triển giáo dục và nguồn nhân lực chất lượng cao.
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

      {/* Partner Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Các loại hình đối tác
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MSC Center hợp tác với đa dạng các tổ chức để mang lại giá trị tốt nhất cho học viên
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {partnerCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <MobileOptimizedCard>
                    <div className={`p-6 ${category.bgColor} border-l-4 ${category.borderColor}`}>
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm`}>
                          <Icon className={`w-6 h-6 text-${category.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </MobileOptimizedCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Đối tác nổi bật
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những đối tác chiến lược đồng hành cùng MSC Center
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <MobileOptimizedCard className="h-full">
                  <div className="p-6">
                    {/* Partner Header */}
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <Building className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                          {partner.name}
                        </h3>
                        <span className="px-2 py-1 bg-msc-blue-50 text-msc-primary text-xs rounded-full">
                          {partner.type}
                        </span>
                      </div>
                    </div>

                    {/* Partnership Info */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Loại hợp tác:</span>
                        <span className="text-sm font-medium text-gray-900">{partner.partnership}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Từ năm:</span>
                        <span className="text-sm font-medium text-gray-900">{partner.since}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Lợi ích hợp tác:</h4>
                      <div className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <MobileButton variant="secondary" fullWidth size="sm">
                        Tìm hiểu thêm
                        <ExternalLink className="w-4 h-4" />
                      </MobileButton>
                    </a>
                  </div>
                </MobileOptimizedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Lợi ích từ đối tác
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Học viên MSC Center được hưởng những lợi ích thiết thực từ mạng lưới đối tác
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <MobileOptimizedCard>
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mr-4`}>
                          <Icon className={`w-6 h-6 text-${benefit.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </MobileOptimizedCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
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
              Trở thành đối tác của MSC Center
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Hãy cùng chúng tôi xây dựng hệ sinh thái giáo dục và phát triển nguồn nhân lực chất lượng cao
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MobileButton variant="primary" size="lg">
                <Mail className="w-5 h-5" />
                Liên hệ hợp tác
              </MobileButton>
              <MobileButton variant="secondary" size="lg">
                <Calendar className="w-5 h-5" />
                Đặt lịch trao đổi
              </MobileButton>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default DongHanh;
