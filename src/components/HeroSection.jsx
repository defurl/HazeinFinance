// FILE: src/components/HeroSection.jsx
// Description: Hero section of the website.

import Logo from '../assets/Logo.png';
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import FadeInSection from './FadeInSection';

const HeroSection = ({ sectionRef, colors, scrollToSection }) => {
  return (
    // The FadeInSection wrapper can be applied here if the whole section should fade in as one.
    // Or, apply it to individual elements within for staggered animations.
    // For this example, the global CSS handles initial animation for specific classes.
    <section ref={sectionRef} id="home" className={`min-h-screen flex flex-col justify-center items-center text-center ${colors.backgroundLight} p-8`}>
      <div className="max-w-5xl">
        <img 

          src={Logo}
          alt="Hazen Finance Logo" 
          className="mx-auto mb-8 w-auto h-32 md:w-auto md:h-40"
        />
        <h1 className={`mb-8 text-5xl md:text-7xl font-bold ${colors.primaryText} mb-4 animate-fade-in-down`}>
          HI, WE ARE HAZEIN FINANCE
        </h1>
        <p className={`text-2xl md:text-3xl ${colors.dark} mb-8 animate-fade-in-up animation-delay-300`}>
          Financial Supporter
        </p>
        <p className={`text-lg ${colors.light} mb-10 max-w-xl mx-auto animate-fade-in-up animation-delay-600`}>
          Tầm nhìn và mục tiêu của Hazein Finance là cung cấp các giải pháp đầu tư tối ưu cho nhà đầu tư cũng như kiến thức về đầu tư, tài chính với dịch vụ chăm sóc khách hàng tốt nhất.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          className={`px-8 py-4 ${colors.primary} text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300 transform hover:scale-105 flex items-center mx-auto animate-fade-in-up animation-delay-900`}
        >
          Liên lạc với chúng tôi <ArrowRightCircle size={20} className="ml-2" />
        </button>
      </div>
      {/* Global styles for animations are now in src/index.css */}
    </section>
  );
};

export default HeroSection;