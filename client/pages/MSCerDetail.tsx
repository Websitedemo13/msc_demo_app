import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import MobileOptimizedCard, {
  MobileButton,
} from "@/components/MobileOptimizedCard";
import MobileSectionCard, {
  InfoItem,
  ListItem,
  TimelineItem,
  SkillsGrid,
} from "@/components/MobileSectionCard";
import {
  ArrowLeft,
  Star,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Quote,
  Users,
  Target,
  TrendingUp,
  Heart,
  Share2,
  MessageCircle,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Building,
  Trophy,
} from "lucide-react";

const MSCerDetail = () => {
  const { id } = useParams();

  // Mock data for MSCer details
  const mscerData = {
    "pham-hoang-minh-khanh": {
      id: "pham-hoang-minh-khanh",
      name: "Phạm Hoàng Minh Khánh",
      title: "GIÁM ĐỐC MSC",
      company: "MSC",
      avatar: "/api/placeholder/300/300",
      yearGraduated: "2022",
      currentPosition: "Trưởng phòng Marketing, Phó Giám đốc tại Smentor",
      achievement:
        "Nhà sáng lập đa ngành, Giảng viên & Chuyên gia tư vấn chiến lược",

      // Success Story
      successStory:
        "Kiến thức và kỹ năng được hệ thống hóa tại các trung tâm đào tạo đã trở thành nền tảng vững chắc, giúp tôi tự tin sáng lập và điều hành hiệu quả nhiều doanh nghiệp. Đây là nơi cung cấp tư duy chiến lược để biến ý tưởng thành hiện thực.",

      // Personal Info
      personalInfo: {
        fullName: "Phạm Hoàng Minh Khánh",
        education:
          "Thạc sĩ Quản trị hệ điều hành, Đại học Kinh tế TP.HCM (2022); Cử nhân Marketing, Đại học Tài chính - Marketing (2017)",
        currentRole: "Trưởng phòng Marketing, Phó Giám đốc tại Smentor",
        location: "TP. Hồ Chí Minh",
        email: "minh.khanh@msccenter.edu.vn",
        phone: "+84 901 234 567",
        linkedin: "https://linkedin.com/in/pham-hoang-minh-khanh",
      },

      // Career Journey
      careerJourney: [
        {
          period: "2022 - Hiện tại",
          position: "Giám đốc MSC & Phó Giám đốc Smentor",
          company: "MSC Center & Smentor",
          description:
            "Lãnh đạo và phát triển các chương trình đào tạo, tư vấn chiến lược cho doanh nghiệp",
        },
        {
          period: "2020 - 2022",
          position: "Trưởng phòng Marketing",
          company: "Smentor Education",
          description:
            "Xây dựng và thực hiện chiến lược marketing, tăng trưởng 300% học viên",
        },
        {
          period: "2018 - 2020",
          position: "Marketing Specialist",
          company: "VinGroup",
          description:
            "Phụ trách marketing cho các dự án bất động sản và thương mại",
        },
        {
          period: "2017 - 2018",
          position: "Marketing Executive",
          company: "FPT Corporation",
          description:
            "Khởi đầu sự nghiệp với vai trò marketing cho các sản phẩm công nghệ",
        },
      ],

      // Skills & Expertise
      skills: [
        "Strategic Leadership",
        "Marketing Strategy",
        "Business Development",
        "Team Management",
        "Digital Transformation",
        "Educational Technology",
        "Public Speaking",
        "Project Management",
        "Data Analytics",
        "Innovation Management",
      ],

      // Achievements
      achievements: [
        "Thành lập và phát triển MSC Center thành trung tâm đào tạo hàng đầu",
        "Đào tạo và hướng dẫn hơn 1000+ học viên thành công",
        "Diễn giả tại 50+ sự kiện về kinh doanh và giáo dục",
        "Nhận giải thưởng 'Young Leader of the Year 2023'",
        "Tác giả của 3 cuốn sách về marketing và leadership",
        "Cố vấn cho 20+ startup trong lĩnh vực giáo dục và công nghệ",
      ],

      // Projects
      majorProjects: [
        {
          name: "MSC Digital Platform",
          description: "Nền tảng học tập trực tuyến phục vụ 10,000+ học viên",
          year: "2023",
          role: "Project Lead",
        },
        {
          name: "Youth Leadership Program",
          description: "Chương trình đào tạo lãnh đạo trẻ toàn quốc",
          year: "2022",
          role: "Program Director",
        },
        {
          name: "Corporate Training Initiative",
          description: "Đào tạo doanh nghiệp cho 100+ công ty",
          year: "2021-2023",
          role: "Strategic Advisor",
        },
      ],

      // Statistics
      stats: {
        yearsExperience: 6,
        studentsImpacted: 1000,
        projectsCompleted: 25,
        awardsReceived: 8,
        companiesAdvised: 20,
        eventsSpoken: 50,
      },

      socialLinks: {
        linkedin: "https://linkedin.com/in/pham-hoang-minh-khanh",
        facebook: "https://facebook.com/pham.hoang.minh.khanh",
        email: "minh.khanh@msccenter.edu.vn",
      },
    },
  };

  const mscer = mscerData[id as keyof typeof mscerData];

  if (!mscer) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              MSCer không tìm thấy
            </h1>
            <Link to="/mscer">
              <MobileButton>Về danh sách MSCer</MobileButton>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showMobileNav={false} showDesktopNav={false} showFooter={false}>
      {/* Mobile Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            to="/mscer"
            className="flex items-center text-msc-primary hover:text-msc-primary-dark transition-colors"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="font-medium">Quay lại cộng đồng MSCer</span>
          </Link>
          <div className="flex items-center space-x-3">
            <motion.button
              className="p-2 rounded-full bg-red-50 text-red-500"
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="p-2 rounded-full bg-gray-100 text-gray-600"
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="min-h-screen bg-gray-50 pt-20 pb-32">
        {/* Hero Profile Section */}
        <motion.section
          className="bg-msc-gradient px-4 py-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Avatar & Badge */}
            <motion.div
              className="relative mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-3 border-white/30 shadow-xl mx-auto">
                <span className="text-white font-bold text-2xl">
                  {mscer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                <Trophy className="w-4 h-4 text-yellow-800" />
              </div>
            </motion.div>

            {/* Basic Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-2xl font-serif font-bold mb-1">
                {mscer.name}
              </h1>
              <p className="text-white/90 text-sm font-medium mb-1">
                {mscer.title}
              </p>
              <p className="text-white/80 text-xs mb-4">{mscer.company}</p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-lg font-bold mb-1">
                  {mscer.yearGraduated}
                </div>
                <span className="text-xs text-white/80">Tốt nghiệp MSC</span>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-1">
                  {mscer.stats.studentsImpacted}+
                </div>
                <span className="text-xs text-white/80">Học viên</span>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-1">
                  {mscer.stats.projectsCompleted}
                </div>
                <span className="text-xs text-white/80">Dự án</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href={mscer.socialLinks.linkedin}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={mscer.socialLinks.facebook}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${mscer.socialLinks.email}`}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Cards */}
        <div className="px-4 py-6 space-y-4">
          {/* Success Story */}
          <MobileSectionCard
            title="Câu chuyện thành công"
            icon={Quote}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
            defaultExpanded={true}
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-gray-700 italic leading-relaxed">
                "{mscer.successStory}"
              </p>
            </div>
          </MobileSectionCard>

          {/* Personal Information */}
          <MobileSectionCard
            title="Thông tin cá nhân"
            icon={Users}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
            defaultExpanded={true}
          >
            <div className="space-y-3">
              <InfoItem label="Họ và tên" value={mscer.personalInfo.fullName} />
              <InfoItem label="Học vấn" value={mscer.personalInfo.education} />
              <InfoItem
                label="Vị trí hiện tại"
                value={mscer.personalInfo.currentRole}
              />
              <InfoItem
                label="Địa điểm"
                value={mscer.personalInfo.location}
                icon={MapPin}
              />
              <InfoItem
                label="Email"
                value={mscer.personalInfo.email}
                icon={Mail}
              />
              <InfoItem
                label="Điện thoại"
                value={mscer.personalInfo.phone}
                icon={Phone}
              />
            </div>
          </MobileSectionCard>

          {/* Skills & Expertise */}
          <MobileSectionCard
            title="Kỹ năng & Chuyên môn"
            icon={Target}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
            badge={mscer.skills.length}
            defaultExpanded={true}
          >
            <SkillsGrid skills={mscer.skills} color="purple" />
          </MobileSectionCard>

          {/* Career Journey */}
          <MobileSectionCard
            title="Hành trình sự nghiệp"
            icon={TrendingUp}
            iconColor="text-orange-600"
            iconBgColor="bg-orange-100"
            defaultExpanded={false}
          >
            <div className="space-y-4">
              {mscer.careerJourney.map((career, index) => (
                <TimelineItem
                  key={index}
                  title={career.position}
                  subtitle={career.company}
                  period={career.period}
                  description={career.description}
                  isLast={index === mscer.careerJourney.length - 1}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </MobileSectionCard>

          {/* Major Projects */}
          <MobileSectionCard
            title="Dự án nổi bật"
            icon={Briefcase}
            iconColor="text-indigo-600"
            iconBgColor="bg-indigo-100"
            badge={mscer.majorProjects.length}
            defaultExpanded={false}
          >
            <div className="space-y-3">
              {mscer.majorProjects.map((project, index) => (
                <ListItem key={index} color="purple" delay={index * 0.1}>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">
                      {project.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{project.year}</span>
                      <span>{project.role}</span>
                    </div>
                  </div>
                </ListItem>
              ))}
            </div>
          </MobileSectionCard>

          {/* Achievements */}
          <MobileSectionCard
            title="Thành tích & Giải thưởng"
            icon={Award}
            iconColor="text-yellow-600"
            iconBgColor="bg-yellow-100"
            badge={mscer.achievements.length}
            defaultExpanded={false}
          >
            <div className="space-y-3">
              {mscer.achievements.map((achievement, index) => (
                <ListItem key={index} color="orange" delay={index * 0.1}>
                  {achievement}
                </ListItem>
              ))}
            </div>
          </MobileSectionCard>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex space-x-3">
          <MobileButton variant="primary" fullWidth size="lg">
            <MessageCircle className="w-5 h-5" />
            Kết nối với {mscer.name.split(" ").pop()}
          </MobileButton>
          <MobileButton variant="secondary" size="lg">
            <Share2 className="w-5 h-5" />
            Chia sẻ
          </MobileButton>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Học hỏi kinh nghiệm từ MSCer thành công
          </p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default MSCerDetail;
