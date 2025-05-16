// FILE: src/components/OurProcessSection.jsx
// Description: Our Process section of the website.

import React from 'react';
import { Globe, Factory, LineChart, ShieldCheck, PieChart } from 'lucide-react';
import FadeInSection from './FadeInSection';

const OurProcessSection = ({ sectionRef, colors }) => {
  const processSteps = [
    // Titles from PDF Page 3
    { icon: <Globe size={32} className="text-white" />, title: "Đánh giá vĩ mô", description: "Phân tích các yếu tố vĩ mô trong và ngoài nước.", color: "bg-red-600" },
    { icon: <Factory size={32} className="text-white" />, title: "Phân tích Ngành", description: "Đánh giá chu kỳ ngành và các yếu tố nội tại, mức độ cạnh tranh.", color: "bg-red-700" },
    { icon: <LineChart size={32} className="text-white" />, title: "Lựa chọn Cổ phiếu", description: "Phân tích nội tại doanh nghiệp, lợi thế cạnh tranh và định giá.", color: "bg-red-800" },
    { icon: <ShieldCheck size={32} className="text-white" />, title: "Xác định Hồ sơ rủi ro", description: "Hiểu rõ TSSL kỳ vọng của khách hàng và chính sách đầu tư.", color: "bg-red-900" },
    { icon: <PieChart size={32} className="text-white" />, title: "Xây dựng Danh mục", description: "Thiết lập danh mục đầu tư dựa trên các tiêu chí về rủi ro và lợi nhuận.", color: "bg-black" },
  ];

  return (
    <FadeInSection id="process">
      <section ref={sectionRef} className={`py-16 md:py-24 ${colors.backgroundWhite}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.dark} text-center mb-6`}>QUY TRÌNH THIẾT LẬP DANH MỤC</h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-12`}></div>
          <div className="relative">
            {/* Connecting line - visible on larger screens */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2" style={{zIndex: 0, marginTop: '-40px'}}></div> {/* Adjusted line thickness and position */}
            
            <div className="grid md:grid-cols-5 gap-x-8 gap-y-12 md:gap-y-8 relative" style={{zIndex: 1}}> {/* Added gap-y for mobile */}
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${colors.dark} mb-2`}>{index + 1}. {step.title}</h3>
                  <p className={`${colors.light} text-sm`}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
           <p className={`text-center mt-12 text-sm ${colors.light}`}>
            Quy trình chi tiết của chúng tôi bao gồm phân tích kinh tế toàn cầu và Việt Nam, chu kỳ ngành cụ thể,
            tài chính doanh nghiệp, mức độ chấp nhận rủi ro và phân bổ danh mục chiến lược để đạt được kết quả tối ưu.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default OurProcessSection;