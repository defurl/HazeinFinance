// FILE: src/components/AboutUsSection.jsx
// Description: About Us section of the website.

import React from 'react';
import FadeInSection from './FadeInSection';

const AboutUsSection = ({ sectionRef, colors }) => {
  return (
    <FadeInSection id="about"> {/* id for FadeInSection helps if it's also a scroll target */}
      <section ref={sectionRef} className={`py-16 md:py-24 ${colors.backgroundWhite}`}>
        <div className="container mx-auto px-6 text-center">
          {/* Title from PDF Page 2 */}
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.dark} mb-6`}>VỀ CHÚNG TÔI</h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-12`}></div>
          {/* Content from PDF Page 2 */}
          <p className={`text-lg ${colors.light} max-w-3xl mx-auto mb-8`}>
            HazeinFinance cung cấp các dịch vụ trong lĩnh vực tư vấn, quản lí danh mục đầu tư và quản lý gia sản đối với khách hàng cá nhân (Wealth Management). HAZEINFINANCE luôn cố gắng phát triển các giải pháp và dịch vụ mới mang giá trị tới khách hàng.
          </p>
          {/* Sub-title from PDF Page 2 */}
          <h3 className={`text-2xl font-semibold ${colors.dark} mb-4`}>SỨ MỆNH CỦA CHÚNG TÔI</h3>
          {/* Content from PDF Page 2 */}
          <p className={`text-lg ${colors.light} max-w-3xl mx-auto`}>
            Tầm nhìn và mục tiêu của HazeinFinance là cung cấp các giải pháp đầu tư tối ưu cho nhà đầu tư cũng như kiến thức về đầu tư, tài chính với dịch vụ chăm sóc khách hàng tốt nhất.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default AboutUsSection;