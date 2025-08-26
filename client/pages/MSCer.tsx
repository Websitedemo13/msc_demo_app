import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Building, Calendar, ExternalLink, Linkedin, Github, Star, TrendingUp } from "lucide-react";

const MSCer = () => {
  const mscers = [
    {
      id: 1,
      name: "Phạm Hoàng Minh Khánh",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      graduationYear: "2021",
      course: "Full-stack Development",
      avatar: "/api/placeholder/150/150",
      achievement: "Promoted to Senior Engineer in 18 months",
      currentSalary: "$180,000",
      skills: ["React", "Go", "Kubernetes", "GCP"],
      story: "Từ một sinh viên IT thông thường, Khánh đã trở thành Senior Software Engineer tại Google nhờ những kiến thức và kỹ năng học được tại MSC Center.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Nguyễn Thị Thu Hà",
      title: "Data Scientist",
      company: "Meta",
      location: "Menlo Park, CA",
      graduationYear: "2020",
      course: "Data Analytics",
      avatar: "/api/placeholder/150/150",
      achievement: "Led AI project impacting 2B+ users",
      currentSalary: "$165,000",
      skills: ["Python", "TensorFlow", "SQL", "Statistics"],
      story: "Hà đã chuyển đổi thành công từ ngành tài chính sang Data Science và hiện đang dẫn dắt các dự án AI quan trọng tại Meta.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Trần Minh Tuấn",
      title: "Tech Lead",
      company: "Shopee",
      location: "Singapore",
      graduationYear: "2019",
      course: "Full-stack Development",
      avatar: "/api/placeholder/150/150",
      achievement: "Built platform serving 150M users",
      currentSalary: "$120,000",
      skills: ["Java", "Microservices", "AWS", "Docker"],
      story: "Tuấn đã xây dựng và dẫn dắt team phát triển platform phục vụ hàng trăm triệu người dùng tại Shopee.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Lê Thị Minh Châu",
      title: "UX Design Manager",
      company: "Grab",
      location: "Ho Chi Minh City",
      graduationYear: "2021",
      course: "UX/UI Design",
      avatar: "/api/placeholder/150/150",
      achievement: "Redesigned app used by 50M+ users",
      currentSalary: "$85,000",
      skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
      story: "Châu đã dẫn dắt việc thiết kế lại ứng dụng Grab, cải thiện trải nghiệm cho hàng chục triệu người dùng.",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Võ Hoàng Nam",
      title: "DevOps Engineer",
      company: "Zalo",
      location: "Ho Chi Minh City",
      graduationYear: "2020",
      course: "Cloud & DevOps",
      avatar: "/api/placeholder/150/150",
      achievement: "Reduced deployment time by 85%",
      currentSalary: "$70,000",
      skills: ["AWS", "Terraform", "Jenkins", "Monitoring"],
      story: "Nam đã cách mạng hóa quy trình deployment tại Zalo, giúp team phát triển nhanh hơn và ổn định hơn.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Phan Thị Lan Anh",
      title: "Digital Marketing Lead",
      company: "Tiki",
      location: "Ho Chi Minh City",
      graduationYear: "2022",
      course: "Digital Marketing",
      avatar: "/api/placeholder/150/150",
      achievement: "Increased ROI by 300% in Q1",
      currentSalary: "$60,000",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      story: "Lan Anh đã tăng ROI của các chiến dịch marketing tại Tiki lên 300% chỉ trong quý đầu tiên làm việc.",
      social: {
        linkedin: "#"
      }
    }
  ];

  const stats = [
    {
      label: "Tỷ lệ có việc làm",
      value: "98%",
      icon: TrendingUp,
      description: "Trong vòng 6 tháng sau tốt nghiệp"
    },
    {
      label: "Mức lương trung bình",
      value: "$75K",
      icon: Star,
      description: "Mức lương khởi điểm"
    },
    {
      label: "Tăng lương",
      value: "150%",
      icon: TrendingUp,
      description: "Trong 2 năm đầu"
    },
    {
      label: "MSCer thành công",
      value: "500+",
      icon: Users,
      description: "Đang làm việc tại các công ty lớn"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-msc-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-700/30 to-blue-500/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20l10-10v20l-10-10zm0 0l-10 10h20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Cộng đồng MSCer
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Nơi hội tụ những câu chuyện thành công, những gương mặt ưu tú đã trưởng thành từ các chương trình 
              đào tạo của MSC Center.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="msc-section-title mb-4">
              Thành tích của cộng đồng MSCer
            </h2>
            <p className="msc-subtitle max-w-2xl mx-auto">
              Con số biết nói về sự thành công của các cựu học viên MSC
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-msc-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-msc-primary mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSCer Profiles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="msc-section-title mb-4">
              Những câu chuyện thành công
            </h2>
            <p className="msc-subtitle max-w-2xl mx-auto">
              Gặp gỡ những MSCer đang tỏa sáng tại các công ty công nghệ hàng đầu thế giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mscers.map((mscer) => (
              <Card key={mscer.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6">
                  {/* Header with graduation year */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Class of {mscer.graduationYear}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {mscer.course}
                    </Badge>
                  </div>

                  {/* Avatar and Basic Info */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-msc-gradient rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{mscer.name}</h3>
                    <p className="text-msc-primary font-medium mb-1">{mscer.title}</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                      <Building className="w-4 h-4" />
                      <span>{mscer.company}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{mscer.location}</span>
                    </div>
                  </div>

                  {/* Achievement Highlight */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-yellow-800">Thành tích nổi bật</span>
                    </div>
                    <p className="text-sm text-yellow-700">{mscer.achievement}</p>
                  </div>

                  {/* Salary Info */}
                  <div className="bg-green-50 rounded-lg p-3 mb-6 text-center">
                    <div className="text-lg font-bold text-green-800 mb-1">{mscer.currentSalary}</div>
                    <div className="text-xs text-green-600">Mức lương hiện tại (USD/năm)</div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Kỹ năng chính:</div>
                    <div className="flex flex-wrap gap-2">
                      {mscer.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {mscer.story}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mb-6">
                    {mscer.social.linkedin && (
                      <a href={mscer.social.linkedin} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {mscer.social.github && (
                      <a href={mscer.social.github} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full msc-button-primary">
                    Đọc câu chuyện đầy đủ
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="msc-section-title mb-6">
            Bạn muốn trở thành MSCer tiếp theo?
          </h2>
          <p className="msc-subtitle mb-8 max-w-2xl mx-auto">
            Tham gia cộng đồng MSC và bắt đầu hành trình chinh phục ước mơ của bạn. 
            Thành công đang chờ đón phía trước!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="msc-button-primary">
              Đăng ký khóa học
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="msc-button-secondary">
              Kết nối với MSCer
            </Button>
          </div>
        </div>
      </section>

      {/* Alumni Network CTA */}
      <section className="py-20 bg-msc-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Mạng lưới Alumni MSC
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kết nối với hơn 500+ cựu học viên MSC đang làm việc tại các công ty hàng đầu. 
              Chia sẻ cơ hội nghề nghiệp, kinh nghiệm và hỗ trợ lẫn nhau phát triển.
            </p>
            <Button variant="secondary" className="bg-white text-msc-primary hover:bg-blue-50 px-8 py-4 h-auto text-lg">
              Tham gia mạng lưới Alumni
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MSCer;
