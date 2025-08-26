import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { label: "Học viên đã đào tạo", value: "1000+", icon: Users },
    { label: "Dự án thành công", value: "50+", icon: Target },
    { label: "Khóa học chuyên nghiệp", value: "25+", icon: BookOpen },
    { label: "Mentor kinh nghiệm", value: "20+", icon: Award },
  ];

  const features = [
    {
      title: "Đào tạo Chuyên nghiệp",
      description:
        "Chương trình đào tạo được thiết kế bởi các chuyên gia hàng đầu trong ngành",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      title: "Mentor 1-1",
      description:
        "Được hướng dẫn trực tiếp bởi những mentor có kinh nghiệm thực tế",
      icon: Users,
      color: "bg-green-500",
    },
    {
      title: "Dự án Thực tế",
      description:
        "Tham gia vào các dự án thực tế để tích lũy kinh nghiệm làm việc",
      icon: Target,
      color: "bg-purple-500",
    },
    {
      title: "Cộng đồng MSCer",
      description:
        "Kết nối với cộng đồng alumni thành công trong nhiều lĩnh vực",
      icon: Globe,
      color: "bg-orange-500",
    },
  ];

  const courses = [
    {
      title: "Full-stack Development",
      description: "Khóa học phát triển web từ cơ bản đến nâng cao",
      duration: "6 tháng",
      level: "Trung cấp",
      students: 120,
    },
    {
      title: "Data Analytics",
      description: "Phân tích dữ liệu và Business Intelligence",
      duration: "4 tháng",
      level: "Cơ bản",
      students: 85,
    },
    {
      title: "Digital Marketing",
      description: "Marketing số và chiến lược bán hàng online",
      duration: "3 tháng",
      level: "Cơ bản",
      students: 95,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-msc-hero">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-700/30 to-blue-500/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border-white/20 mb-4"
              >
                🏆 Trung tâm đào tạo hàng đầu
              </Badge>
            </div>

            <h1 className="msc-hero-title mb-6 leading-tight">
              Mentoring For Success
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Gặp gỡ đội ngũ chuyên gia, những người thầy tâm huyết sẽ đồng hành
              và dẫn dắt bạn trên hành trình chinh phục những đỉnh cao mới.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/training">
                <Button
                  size="lg"
                  className="msc-button-primary text-lg px-8 py-4 h-auto"
                >
                  Khám phá khóa học
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/mentors">
                <Button
                  variant="outline"
                  size="lg"
                  className="msc-button-secondary text-lg px-8 py-4 h-auto"
                >
                  Gặp gỡ Mentors
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-msc-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="msc-section-title mb-4">Tại sao chọn MSC Center?</h2>
            <p className="msc-subtitle max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất với phương
              pháp giảng dạy hiện đại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="msc-section-title mb-4">Khóa học nổi bật</h2>
            <p className="msc-subtitle max-w-2xl mx-auto">
              Các chương trình đào tạo được thiết kế phù hợp với nhu cầu thị
              trường
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-msc-blue-100 text-msc-primary"
                    >
                      {course.level}
                    </Badge>
                    <div className="text-sm text-gray-500">
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} học viên
                    </div>
                    <Link to="/training">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-msc-primary border-msc-primary hover:bg-msc-primary hover:text-white"
                      >
                        Tìm hiểu thêm
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/training">
              <Button className="msc-button-primary">
                Xem tất cả khóa học
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-msc-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Bắt đầu hành trình của bạn ngay hôm nay
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Gia nhập cộng đồng MSC và khám phá tiềm năng không giới hạn của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-msc-primary hover:bg-blue-50 px-8 py-4 h-auto text-lg"
              >
                Đăng ký ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-msc-primary px-8 py-4 h-auto text-lg"
              >
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
