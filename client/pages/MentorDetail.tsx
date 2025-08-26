import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Clock
} from "lucide-react";

const MentorDetail = () => {
  const { id } = useParams();

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
      personalInfo: {
        fullName: "Phan Huỳnh Anh", 
        degree: "Tiến sĩ (2019)",
        birthYear: "1985",
        phone: "+84 901 234 567",
        email: "phan.huynh.anh@msc.edu.vn",
        website: "www.phanhuynanh.com"
      },
      positions: [
        "Giảng viên Đại học UEH",
        "Giảng viên khối nghiệp quốc gia (VCCI)",
        "Founder Viện Việt Nam Bách Nghệ Thực Hành (Smentor)",
        "Founder VSM – Vietnam Student Marathon",
        "Founder/CEO Quỹ FFVM"
      ],
      degrees: [
        "Tiến sĩ Kinh tế",
        "Thạc sĩ Kinh tế", 
        "Cử nhân Kinh tế",
        "Cử nhân Công nghệ Thông tin",
        "Chuyên viên Microsoft (MCSE)",
        "Chuyên viên Cisco (CCNA)"
      ],
      workHistory: [
        {
          period: "2007-2008",
          role: "Nhân viên IT",
          company: "Ngân hàng Sacombank"
        },
        {
          period: "2008-2012", 
          role: "Trưởng phòng IT & Kinh doanh online",
          company: "Vietmark"
        },
        {
          period: "2013-2017",
          role: "Giám đốc Marketing", 
          company: "Exotic Việt Nam"
        },
        {
          period: "2017-2019",
          role: "Giám đốc Điều hành",
          company: "Smentor"
        },
        {
          period: "2017-2020",
          role: "Giám đốc Đào tạo & Marketing",
          company: "Happyland Vietnam"
        },
        {
          period: "2020-nay",
          role: "CEO & Founder",
          company: "Quỹ FFVM"
        }
      ],
      skills: [
        "Leadership & Management",
        "Strategic Planning", 
        "Business Development",
        "Digital Marketing",
        "Financial Analysis",
        "Public Speaking",
        "Team Building",
        "Project Management"
      ],
      achievements: [
        "Thành lập thành công 3 startup",
        "Đào tạo hơn 10,000 sinh viên",
        "Nhận giải thưởng 'Educator of the Year 2023'",
        "Tác giả 5 cuốn sách về kinh doanh",
        "Speaker tại hơn 100 sự kiện"
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/phanhuynanh",
        facebook: "https://facebook.com/phanhuynanh.official", 
        youtube: "https://youtube.com/@phanhuynanh"
      }
    }
  };

  const mentor = mentorData[id as keyof typeof mentorData];

  if (!mentor) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Mentor không tìm thấy</h1>
            <Link to="/mentors">
              <Button className="msc-button-primary">Về danh sách Mentors</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Mobile-optimized Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/mentors" className="flex items-center text-msc-primary hover:text-msc-primary-dark transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Mentors</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold">{mentor.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Profile Section */}
      <section className="bg-gradient-to-br from-msc-blue-50 to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-msc-gradient rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                  <span className="text-white font-bold text-3xl md:text-4xl">PA</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">
                  {mentor.name}
                </h1>
                <p className="text-lg md:text-xl text-msc-primary font-semibold mb-2">
                  {mentor.title}
                </p>
                <p className="text-gray-600 text-sm md:text-base mb-4 max-w-2xl">
                  {mentor.subtitle}
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{mentor.students} học viên</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3 mt-4">
                  <a href={mentor.socialLinks.linkedin} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={mentor.socialLinks.facebook} className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={mentor.socialLinks.youtube} className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Personal Info */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Thông tin cá nhân */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <GraduationCap className="w-5 h-5 mr-2 text-msc-primary" />
                      Thông tin cá nhân
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Họ và tên</p>
                      <p className="font-medium">{mentor.personalInfo.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Học vị</p>
                      <p className="font-medium">{mentor.personalInfo.degree}</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{mentor.personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{mentor.personalInfo.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Globe className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{mentor.personalInfo.website}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Kỹ năng */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <Award className="w-5 h-5 mr-2 text-msc-primary" />
                      Kỹ năng chuyên môn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mentor.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-msc-blue-50 text-msc-primary border-msc-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Thành tích */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <Star className="w-5 h-5 mr-2 text-msc-primary" />
                      Thành tích nổi bật
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-msc-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Professional Info */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Tổ chức làm việc */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <Briefcase className="w-5 h-5 mr-2 text-msc-primary" />
                      Tổ chức làm việc
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {mentor.positions.map((position, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{position}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Bằng cấp và chuyên môn */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <GraduationCap className="w-5 h-5 mr-2 text-msc-primary" />
                      Bằng cấp và chuyên môn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mentor.degrees.map((degree, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <GraduationCap className="w-4 h-4 mr-2 text-msc-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{degree}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quá trình và đơn vị công tác */}
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg font-semibold">
                      <Calendar className="w-5 h-5 mr-2 text-msc-primary" />
                      Quá trình và đơn vị công tác
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mentor.workHistory.map((work, index) => (
                        <div key={index} className="relative pl-6 pb-4 border-l-2 border-msc-blue-200 last:border-l-0">
                          <div className="absolute w-3 h-3 bg-msc-primary rounded-full -left-2 top-1"></div>
                          <div className="bg-white p-4 rounded-lg border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{work.role}</h4>
                              <Badge variant="outline" className="text-xs mt-1 md:mt-0 w-fit">
                                {work.period}
                              </Badge>
                            </div>
                            <p className="text-msc-primary font-medium">{work.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Học tập cùng {mentor.name}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Đăng ký để nhận được sự hướng dẫn trực tiếp từ mentor với hơn {mentor.experience.replace(/\D/g, '')} năm kinh nghiệm trong lĩnh vực.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="msc-button-primary px-8 py-3">
                Đăng ký mentoring 1-1
              </Button>
              <Button variant="outline" className="msc-button-secondary px-8 py-3">
                Tham gia khóa học
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentorDetail;
