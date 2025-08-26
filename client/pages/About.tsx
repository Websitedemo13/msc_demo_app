import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-msc-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-700/30 to-blue-500/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Về MSC Center
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Trung tâm đào tạo và phát triển kỹ năng hàng đầu, nơi ươm mầm
              những tài năng công nghệ tương lai.
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-msc-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Trang đang được phát triển
              </h2>
              <p className="text-gray-600 mb-6">
                Nội dung chi tiết về MSC Center đang được hoàn thiện. Vui lòng
                quay lại sau hoặc liên hệ với chúng tôi để biết thêm thông tin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="msc-button-primary">Liên hệ tư vấn</Button>
                <Button variant="outline" className="msc-button-secondary">
                  Về trang chủ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
