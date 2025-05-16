// FILE: src/components/ServicesSection.jsx
// Description: Services section of the website.

import React from 'react';
import { Briefcase, BarChartBig, Users } from 'lucide-react';
import FadeInSection from './FadeInSection';
import HeroImage2 from '../assets/HeroImage2.jpeg';

const ServicesSection = ({ sectionRef, colors }) => {
  const servicesData = [
      { 
      icon: <Briefcase size={48} className={`${colors.primaryText} mb-4`} />, // Changed to text-white for visibility
      title: "Tư vấn", 
      description: "Dịch vụ tư vấn tài chính chuyên nghiệp giúp định hướng các quyết định đầu tư và kế hoạch tài chính của bạn." 
    },
    { 
      icon: <BarChartBig size={48} className={`${colors.primaryText} mb-4`} />, // Changed to text-white for visibility
      title: "Quản lí danh mục đầu tư", 
      description: "Quản lý chiến lược danh mục đầu tư của bạn để tối đa hóa lợi nhuận và kiểm soát rủi ro hiệu quả." 
    },
    { 
      icon: <Users size={48} className={`${colors.primaryText} mb-4`} />, // Changed to text-white for visibility
      title: "Quản lý gia sản", 
      description: "Dịch vụ quản lý tài sản toàn diện được thiết kế riêng cho khách hàng cá nhân muốn phát triển và bảo vệ tài sản." 
    },
  ];

  return (
    <FadeInSection id="services">
      <section 
        ref={sectionRef} 
        className={`py-16 md:py-24 bg-cover bg-center relative`} // Removed colors.backgroundLight, added relative
        style={{ backgroundImage: `url(${HeroImage2})` }} // Set background image
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay for text visibility */}
        <div className="container mx-auto px-6 text-center relative z-10"> {/* Added relative z-10 */}
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6`}>DỊCH VỤ CỦA CHÚNG TÔI</h2> {/* Changed to text-white */}
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-12`}></div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map(service => (
              <div key={service.title} className={`${colors.backgroundWhite} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}>
                <div className="flex justify-center">{service.icon}</div>
                <h3 className={`text-xl font-semibold ${colors.dark} mb-3`}>{service.title}</h3> {/* Assuming colors.dark is suitable for card title on white background */}
                <p className={`${colors.light}`}>{service.description}</p> {/* Assuming colors.light is suitable for card text on white background */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ServicesSection;