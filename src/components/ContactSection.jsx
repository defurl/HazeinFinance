// FILE: src/components/ContactSection.jsx
// Description: Contact Us section with form and details.

import React, { useState } from 'react';
import { Mail, Instagram, Globe } from 'lucide-react';
import FadeInSection from './FadeInSection';

const ContactSection = ({ sectionRef, colors }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(''); // Clear previous errors
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Vui lòng điền đầy đủ các trường thông tin.");
      return;
    }
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setFormError("Vui lòng nhập một địa chỉ email hợp lệ.");
        return;
    }

    // Handle form submission (e.g., send to an API)
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: ''}); // Clear form
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        setIsSubmitted(false);
    }, 3000); 
  };

  return (
    <FadeInSection id="contact">
      <section ref={sectionRef} className={`py-16 md:py-24 ${colors.backgroundLight}`}>
        <div className="container mx-auto px-6">
          {/* Title from PDF Page 9 */}
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.dark} text-center mb-6`}>LIÊN HỆ CHÚNG TÔI</h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-12`}></div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`${colors.backgroundWhite} p-8 rounded-lg shadow-lg`}>
              <h3 className={`text-2xl font-semibold ${colors.dark} mb-6`}>Kết Nối Với Chúng Tôi</h3>
              {isSubmitted && <p className="text-green-600 mb-4 p-3 bg-green-50 rounded-md">Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm.</p>}
              {formError && <p className="text-red-600 mb-4 p-3 bg-red-50 rounded-md">{formError}</p>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${colors.light}`}>Họ và Tên</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm`} />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${colors.light}`}>Địa chỉ Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm`} />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${colors.light}`}>Lời nhắn</label>
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm`}></textarea>
                </div>
                <div>
                  <button type="submit" className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${colors.primary} hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300`}>
                    Gửi Tin Nhắn
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-6">
              <div className={`${colors.backgroundWhite} p-6 rounded-lg shadow-lg`}>
                <h4 className={`text-xl font-semibold ${colors.dark} mb-3`}>Linh Khuất</h4>
                <p className={`${colors.light} mb-1`}>Personal Financial Supporter</p>
                <p className={`${colors.light} text-sm`}>Associate Wealth Planner of AFA Capital & VWA</p>
              </div>
              <div className={`${colors.backgroundWhite} p-6 rounded-lg shadow-lg flex items-center space-x-4`}>
                <Mail size={24} className={`${colors.primaryText}`} />
                <div>
                  <h4 className={`text-lg font-semibold ${colors.dark}`}>Email</h4>
                  <a href="mailto:KHUATTUANLINH168@GMAIL.COM" className={`${colors.light} hover:${colors.primaryText} break-all`}>KHUATTUANLINH168@GMAIL.COM</a>
                </div>
              </div>
               <div className={`${colors.backgroundWhite} p-6 rounded-lg shadow-lg flex items-center space-x-4`}>
                <Instagram size={24} className={`${colors.primaryText}`} />
                <div>
                  <h4 className={`text-lg font-semibold ${colors.dark}`}>Instagram</h4>
                  <a href="https://www.instagram.com/hazeinfinance" target="_blank" rel="noopener noreferrer" className={`${colors.light} hover:${colors.primaryText} mr-4`}>@hazeinfinance</a>
                  <a href="https://www.instagram.com/haze_ktl" target="_blank" rel="noopener noreferrer" className={`${colors.light} hover:${colors.primaryText}`}>@haze_ktl</a>
                </div>
              </div>
              <div className={`${colors.backgroundWhite} p-6 rounded-lg shadow-lg flex items-center space-x-4`}>
                <Globe size={24} className={`${colors.primaryText}`} />
                <div>
                  <h4 className={`text-lg font-semibold ${colors.dark}`}>Hồ sơ</h4>
                  <a href="https://vwa.org.vn/thong-tin-co-van/?id=100014" target="_blank" rel="noopener noreferrer" className={`${colors.light} hover:${colors.primaryText} break-all`}>vwa.org.vn/thong-tin-co-van/?id=100014</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ContactSection;