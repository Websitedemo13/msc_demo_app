import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MobileOptimizedCard, {
  MobileButton,
} from "@/components/MobileOptimizedCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Facebook,
  Youtube,
  Star,
  Clock,
  MessageCircle,
  Heart,
  Share2,
  BookOpen,
  Users,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const MentorDetail = () => {
  const { id } = useParams();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    personal: true,
    positions: true,
    degrees: false,
    workHistory: false,
    skills: true,
    achievements: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Mock mentor data - trong thực tế sẽ fetch từ API
  const mentorData = {
    "phan-huynh-anh": {
      id: "phan-huynh-anh",
      name: "Phan Huỳnh Anh",
      title: "Tiến sĩ Kinh tế",
      subtitle: "Chủ tịch HĐQT Smentor | CEO Quỹ FFVM | Giảng viên Đại học",
      avatar: "/api/placeholder/300/300",
      location: "Ho Chi Minh City",
      experience: "15+ năm kinh nghiệm",
      rating: 4.9,
      students: 1200,
      courses: 8,
      sessions: 150,
      personalInfo: {
        fullName: "Phan Huỳnh Anh",
        degree: "Tiến sĩ (2019)",
        birthYear: "1985",
        phone: "+84 901 234 567",
        email: "phan.huynh.anh@msc.edu.vn",
        website: "www.phanhuynanh.com",
      },
      positions: [
        "Giảng viên Đại học UEH",
        "Giảng viên khối nghiệp quốc gia (VCCI)",
        "Founder Viện Việt Nam Bách Nghệ Thực Hành (Smentor)",
        "Founder VSM – Vietnam Student Marathon",
        "Founder/CEO Quỹ FFVM",
      ],
      degrees: [
        "Tiến sĩ Kinh tế",
        "Thạc sĩ Kinh tế",
        "Cử nhân Kinh tế",
        "Cử nhân Công nghệ Thông tin",
        "Chuyên viên Microsoft (MCSE)",
        "Chuyên viên Cisco (CCNA)",
      ],
      workHistory: [
        {
          period: "2007-2008",
          role: "Nhân viên IT",
          company: "Ngân hàng Sacombank",
        },
        {
          period: "2008-2012",
          role: "Trưởng phòng IT & Kinh doanh online",
          company: "Vietmark",
        },
        {
          period: "2013-2017",
          role: "Giám đốc Marketing",
          company: "Exotic Việt Nam",
        },
        {
          period: "2017-2019",
          role: "Giám đốc Điều hành",
          company: "Smentor",
        },
        {
          period: "2017-2020",
          role: "Giám đốc Đào tạo & Marketing",
          company: "Happyland Vietnam",
        },
        {
          period: "2020-nay",
          role: "CEO & Founder",
          company: "Quỹ FFVM",
        },
      ],
      skills: [
        "Leadership & Management",
        "Strategic Planning",
        "Business Development",
        "Digital Marketing",
        "Financial Analysis",
        "Public Speaking",
        "Team Building",
        "Project Management",
      ],
      achievements: [
        "Thành lập thành công 3 startup",
        "Đào tạo h��n 10,000 sinh viên",
        "Nhận giải thưởng 'Educator of the Year 2023'",
        "Tác giả 5 cuốn sách về kinh doanh",
        "Speaker tại hơn 100 sự kiện",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/phanhuynanh",
        facebook: "https://facebook.com/phanhuynanh.official",
        youtube: "https://youtube.com/@phanhuynanh",
      },
    },
  };

  const mentor = mentorData[id as keyof typeof mentorData];

  if (!mentor) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Mentor không tìm thấy
            </h1>
            <Link to="/mentors">
              <MobileButton>Về danh sách Mentors</MobileButton>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showMobileNav={false} showDesktopNav={false} showFooter={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Header - Fixed */}
        <motion.header
          className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between px-4 py-4">
            <Link
              to="/mentors"
              className="flex items-center text-msc-primary hover:text-msc-primary-dark transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              <span className="font-medium">Mentors</span>
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

        {/* Main Content - Mobile Optimized */}
        <main className="pt-20 pb-32">
          {/* Hero Profile Section */}
          <motion.section
            className="bg-msc-gradient px-4 py-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              {/* Avatar */}
              <motion.div
                className="relative mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-3 border-white/30 shadow-xl mx-auto">
                  <span className="text-white font-bold text-2xl">PA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-2xl font-serif font-bold mb-1">
                  {mentor.name}
                </h1>
                <p className="text-white/90 text-sm font-medium mb-2">
                  {mentor.title}
                </p>
                <p className="text-white/80 text-xs mb-4 max-w-xs mx-auto">
                  {mentor.subtitle}
                </p>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="flex justify-center space-x-6 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current mr-1" />
                    <span className="text-lg font-bold">{mentor.rating}</span>
                  </div>
                  <span className="text-xs text-white/80">Đánh giá</span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">
                    {mentor.students}
                  </div>
                  <span className="text-xs text-white/80">Học viên</span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-1">
                    {mentor.sessions}
                  </div>
                  <span className="text-xs text-white/80">Buổi học</span>
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
                  href={mentor.socialLinks.linkedin}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={mentor.socialLinks.facebook}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={mentor.socialLinks.youtube}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.section>

          {/* Content Cards */}
          <div className="px-4 py-6 space-y-4">
            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MobileButton variant="primary" size="lg">
                <MessageCircle className="w-5 h-5" />
                Nhắn tin
              </MobileButton>
              <MobileButton variant="secondary" size="lg">
                <BookOpen className="w-5 h-5" />
                Đăng ký học
              </MobileButton>
            </motion.div>

            {/* Expandable Sections */}

            {/* Personal Info */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("personal")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-msc-blue-100 rounded-full flex items-center justify-center mr-3">
                      <GraduationCap className="w-5 h-5 text-msc-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Thông tin cá nhân
                    </h3>
                  </div>
                  {expandedSections.personal ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.personal && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600 text-sm">
                            Họ và tên
                          </span>
                          <span className="font-medium text-sm">
                            {mentor.personalInfo.fullName}
                          </span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600 text-sm">Học vị</span>
                          <span className="font-medium text-sm">
                            {mentor.personalInfo.degree}
                          </span>
                        </div>
                        <Separator />
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center text-sm">
                            <Phone className="w-4 h-4 mr-3 text-gray-400" />
                            <span>{mentor.personalInfo.phone}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Mail className="w-4 h-4 mr-3 text-gray-400" />
                            <span>{mentor.personalInfo.email}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Globe className="w-4 h-4 mr-3 text-gray-400" />
                            <span>{mentor.personalInfo.website}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>

            {/* Skills */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("skills")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Kỹ năng chuyên môn
                    </h3>
                  </div>
                  {expandedSections.skills ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.skills && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-2">
                          {mentor.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-msc-blue-50 text-msc-primary border-msc-blue-200 px-3 py-1"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>

            {/* Current Positions */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("positions")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Briefcase className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Tổ chức làm việc
                    </h3>
                  </div>
                  {expandedSections.positions ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.positions && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        {mentor.positions.map((position, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start p-3 bg-gray-50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {position}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>

            {/* Degrees */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("degrees")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Bằng cấp chuyên môn
                    </h3>
                  </div>
                  {expandedSections.degrees ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.degrees && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-2">
                        {mentor.degrees.map((degree, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center p-3 bg-purple-50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <GraduationCap className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">
                              {degree}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>

            {/* Work History */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("workHistory")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Quá trình công tác
                    </h3>
                  </div>
                  {expandedSections.workHistory ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.workHistory && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        {mentor.workHistory.map((work, index) => (
                          <motion.div
                            key={index}
                            className="relative pl-6 pb-4 border-l-2 border-blue-200 last:border-l-0"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-1"></div>
                            <div className="bg-white p-3 rounded-lg border border-gray-100">
                              <div className="flex flex-col mb-2">
                                <h4 className="font-semibold text-gray-900 text-sm">
                                  {work.role}
                                </h4>
                                <p className="text-blue-600 font-medium text-sm">
                                  {work.company}
                                </p>
                                <span className="text-xs text-gray-500 mt-1">
                                  {work.period}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>

            {/* Achievements */}
            <MobileOptimizedCard>
              <div className="p-4">
                <motion.button
                  className="w-full flex items-center justify-between"
                  onClick={() => toggleSection("achievements")}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Thành tích nổi bật
                    </h3>
                  </div>
                  {expandedSections.achievements ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedSections.achievements && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        {mentor.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start p-3 bg-yellow-50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MobileOptimizedCard>
          </div>
        </main>

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
              Đăng ký Mentoring 1-1
            </MobileButton>
            <MobileButton variant="secondary" size="lg">
              <BookOpen className="w-5 h-5" />
              Khóa học
            </MobileButton>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500">
              Học tập cùng mentor với hơn {mentor.experience.replace(/\D/g, "")}{" "}
              năm kinh nghiệm
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MentorDetail;
