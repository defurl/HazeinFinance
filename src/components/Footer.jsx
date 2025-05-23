// FILE: src/components/Footer.jsx
// Description: Footer component of the website.

import Logo from '../assets/Logo.png'; // Assuming you have a small logo for the footer
import React from 'react';
import { Instagram } from 'lucide-react'; // Assuming Instagram is the primary social link

const Footer = ({ colors }) => {
  return (
    <footer className={`py-8 text-center ${colors.dark} ${colors.backgroundWhite} border-t border-gray-200`}>
      <div className="container mx-auto px-6">
        {/* Replace with actual small logo if available */}
        <img 
            src={Logo} 
            alt="HazeinFinance Small Logo" 
            className="mx-auto mb-4 h-24 w-28" 
        />
        <p className={`text-sm ${colors.light}`}>&copy; {new Date().getFullYear()} HazeinFinance. All Rights Reserved.</p>
        <p className={`text-sm ${colors.light}`}>Financial Supporter</p>
        <div className="mt-4">
            <a 
                href="https://www.instagram.com/hazeinfinance" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="HazeinFinance on Instagram"
                className={`inline-block ${colors.light} hover:${colors.primaryText} mx-2`}
            >
                <Instagram size={20}/>
            </a>
            {/* Add other social media links here if available, e.g., LinkedIn, Facebook */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;