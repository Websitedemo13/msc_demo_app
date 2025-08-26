import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target } from "lucide-react";

const Training = () => {
  return (
    <Layout>
      <section className="relative min-h-[70vh] bg-msc-gradient overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Đào Tạo
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Các chương trình đào tạo chuyên nghiệp được thiết kế phù hợp với nhu cầu thị trường.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-msc-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Khóa học đang được cập nhật
              </h2>
              <p className="text-gray-600 mb-6">
                Danh sách các khóa học và chương trình đào tạo đang được hoàn thiện. 
                Hãy theo dõi để không bỏ lỡ thông tin mới nhất!
              </p>
              <Button className="msc-button-primary">
                Đăng ký nhận thông báo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
