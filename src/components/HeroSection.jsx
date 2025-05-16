// FILE: src/components/HeroSection.jsx
// Description: Hero section of the website.

import HeroImage from '../assets/HeroImage.jpeg';
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import FadeInSection from './FadeInSection';

const HeroSection = ({ sectionRef, colors, scrollToSection }) => {
  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className={`min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center relative`}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="max-w-5xl relative z-10">
        {/* The img tag is removed from here */}
        <h1 className={`mb-8 text-5xl md:text-7xl font-bold text-white animate-fade-in-down`}> {/* Changed text color to white for better contrast */}
          HI, WE ARE HAZEINFINANCE
        </h1>
        <p className={`text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-up animation-delay-300`}> {/* Adjusted text color */}
          Financial Supporter
        </p>
        <p className={`text-lg text-gray-300 mb-10 max-w-xl mx-auto animate-fade-in-up animation-delay-600`}> {/* Adjusted text color */}
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