import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Star, ExternalLink, Linkedin, Github, Twitter } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Phan Huỳnh Anh",
      title: "Senior Full-stack Developer",
      company: "Google",
      location: "Ho Chi Minh City",
      avatar: "/api/placeholder/150/150",
      rating: 4.9,
      students: 120,
      experience: "8+ năm kinh nghiệm",
      skills: ["React", "Node.js", "Python", "AWS", "Docker"],
      bio: "Chuyên gia phát triển full-stack với hơn 8 năm kinh nghiệm tại các công ty công nghệ hàng đầu. Đam mê chia sẻ kiến thức và giúp đỡ thế hệ developer trẻ.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Nguyễn Thị Mai",
      title: "Data Science Lead",
      company: "Microsoft",
      location: "Ha Noi",
      avatar: "/api/placeholder/150/150",
      rating: 4.8,
      students: 95,
      experience: "6+ năm kinh nghiệm",
      skills: ["Python", "Machine Learning", "SQL", "Tableau", "R"],
      bio: "Chuyên gia về Data Science và Machine Learning, có kinh nghiệm làm việc tại các tập đoàn đa quốc gia. Chuyên về xây dựng các mô hình AI và phân tích dữ liệu lớn.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Trần Văn Nam",
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Singapore",
      avatar: "/api/placeholder/150/150",
      rating: 4.9,
      students: 80,
      experience: "7+ năm kinh nghiệm",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
      bio: "Chuyên gia DevOps với kinh nghiệm triển khai và vận hành hệ thống quy mô lớn. Đam mê về automation và cloud infrastructure.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Lê Thị Hương",
      title: "UX/UI Design Lead",
      company: "Meta",
      location: "Ho Chi Minh City",
      avatar: "/api/placeholder/150/150",
      rating: 4.8,
      students: 110,
      experience: "5+ năm kinh nghiệm",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      bio: "Designer giàu kinh nghiệm trong việc thiết kế trải nghiệm người dùng cho các ứng dụng di động và web. Chuyên về design thinking và user-centered design.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Hoàng Minh Tuấn",
      title: "Mobile App Developer",
      company: "Shopee",
      location: "Ho Chi Minh City",
      avatar: "/api/placeholder/150/150",
      rating: 4.7,
      students: 75,
      experience: "4+ năm kinh nghiệm",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      bio: "Chuyên gia phát tri���n ứng dụng di động với kinh nghiệm xây dựng các app có hàng triệu người dùng. Đam mê về mobile technology và user experience.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Phạm Thị Linh",
      title: "Digital Marketing Manager",
      company: "TikTok",
      location: "Ha Noi",
      avatar: "/api/placeholder/150/150",
      rating: 4.9,
      students: 130,
      experience: "6+ năm kinh nghiệm",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Content Marketing", "Analytics"],
      bio: "Chuyên gia marketing số với kinh nghiệm quản lý các chiến dịch marketing cho thương hiệu lớn. Thành thạo về growth hacking và performance marketing.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
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
              Ban Giảng Huấn
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Gặp gỡ đội ngũ chuyên gia, những người thầy tâm huyết sẽ đồng hành và dẫn dắt bạn trên hành trình 
              chinh phục những đỉnh cao mới.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="msc-section-title mb-4">
              Đội ngũ Mentor xuất sắc
            </h2>
            <p className="msc-subtitle max-w-2xl mx-auto">
              Các chuyên gia hàng đầu từ những công ty công nghệ lớn nhất thế giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6">
                  {/* Avatar and Basic Info */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-msc-gradient rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                    <p className="text-msc-primary font-medium mb-1">{mentor.title}</p>
                    <p className="text-gray-600 text-sm">{mentor.company}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{mentor.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 mb-1">{mentor.students}</div>
                      <div className="text-xs text-gray-500">Học viên</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{mentor.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex justify-center mb-4">
                    <Badge variant="secondary" className="bg-msc-blue-100 text-msc-primary">
                      {mentor.experience}
                    </Badge>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {mentor.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 text-center mb-6 line-clamp-3">
                    {mentor.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mb-6">
                    {mentor.social.linkedin && (
                      <a href={mentor.social.linkedin} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {mentor.social.github && (
                      <a href={mentor.social.github} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {mentor.social.twitter && (
                      <a href={mentor.social.twitter} className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full msc-button-primary">
                    Xem hồ sơ chi tiết
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="msc-section-title mb-6">
            Bạn muốn trở thành Mentor?
          </h2>
          <p className="msc-subtitle mb-8 max-w-2xl mx-auto">
            Chia sẻ kinh nghiệm và kiến thức của bạn với thế hệ tài năng trẻ. 
            Gia nhập đội ngũ mentor MSC ngay hôm nay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="msc-button-primary">
              Đăng ký làm Mentor
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="msc-button-secondary">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentors;
