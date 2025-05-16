// FILE: src/components/Navbar.jsx
// Description: Navigation bar component.

import React from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Navbar = ({ navLinks, activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen, colors }) => {
  return (
    <nav className={`sticky top-0 z-50 ${colors.backgroundWhite} shadow-md`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
          className={`text-2xl font-bold ${colors.primaryText}`}
        >
          Hazein Finance
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className={`px-3 py-2 rounded-md text-sm font-medium ${colors.dark} hover:${colors.primaryText} ${activeSection === link.id ? colors.primaryText : ''}`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`${colors.dark} focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${colors.backgroundWhite} shadow-lg absolute w-full`}> {/* Added absolute and w-full for proper mobile layout */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${colors.dark} hover:${colors.primaryText} ${activeSection === link.id ? `${colors.primaryText} ${colors.backgroundLight}` : ''}`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
