// FILE: src/App.jsx
// Description: Main application component.
// It defines the overall structure, manages navigation state, and assembles different sections.

import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import OurProcessSection from './components/OurProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// FadeInSection is used by individual section components directly if they manage their own fade-in.
// Or, if App controls all fade-ins, it would wrap sections here.
// For this structure, sections will import and use FadeInSection themselves.

// Main colors (can be moved to a theme/config file if preferred)
export const colors = {
  primary: 'bg-red-700', // Deep Red
  primaryText: 'text-red-700',
  accent: 'bg-yellow-500', // Gold/Yellow
  accentText: 'text-yellow-500',
  dark: 'text-gray-800',
  light: 'text-gray-600',
  backgroundLight: 'bg-gray-50',
  backgroundWhite: 'bg-white',
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for each section to enable smooth scrolling
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    process: useRef(null),
    contact: useRef(null),
  };

  // Navigation links data
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Us' },
    { id: 'services', title: 'Services' },
    { id: 'process', title: 'Our Process' },
    { id: 'contact', title: 'Contact Us' },
  ];

  // Smooth scroll functionality
  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id); // Update active section for navbar highlighting
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Effect for Intersection Observer to highlight active section in navbar
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of section visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observers = [];
    for (const key in sectionRefs) {
      if (sectionRefs[key].current) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(sectionRefs[key].current);
        observers.push(observer);
      }
    }

    // Cleanup observers on component unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="font-sans antialiased">
      <Navbar 
        navLinks={navLinks} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        colors={colors}
      />
      <main>
        {/* Each section component will receive its ref and colors as props */}
        <HeroSection sectionRef={sectionRefs.home} colors={colors} scrollToSection={scrollToSection} />
        <AboutUsSection sectionRef={sectionRefs.about} colors={colors} />
        <ServicesSection sectionRef={sectionRefs.services} colors={colors} />
        <OurProcessSection sectionRef={sectionRefs.process} colors={colors} />
        <ContactSection sectionRef={sectionRefs.contact} colors={colors} />
      </main>
      <Footer colors={colors} />
    </div>
  );
};

export default App;
